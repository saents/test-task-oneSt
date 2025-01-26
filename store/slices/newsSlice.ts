import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {INewsItem} from "@/types/news";
import {NewsState} from "@/store/types/types";
import api from "@/api/api";

// Fake JSON server URL (setup via json-server or similar).
// E.g. "http://localhost:3004/news"

const BASE_URL = `http://localhost:3004/news`;

const initialState: NewsState = {
    items: [],
    loading: false,
    error: null,
    searchQuery: "",
};

export const fetchNews = createAsyncThunk<INewsItem[]>(
    "news/fetchNews",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get<INewsItem[]>(BASE_URL);
            if (response.status !== 200) {
                rejectWithValue('Failed to fetch news');
            }
            return response.data;
        } catch (error) {
            return rejectWithValue("Failed to fetch news");
        }
    }
);

export const addNews = createAsyncThunk<INewsItem, Omit<INewsItem, "id">>(
    "news/addNews",
    async (newItem, { rejectWithValue }) => {
        try {
            const response = await api.post<INewsItem>(BASE_URL, newItem);
            if(response.status !== 201) {
                return rejectWithValue("Failed to add news");
            }
            return response.data;
        } catch (error) {
            return rejectWithValue("Failed to add news");
        }
    }
);

export const deleteNews = createAsyncThunk<string, string>(
    "news/deleteNews",
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.delete(`${BASE_URL}/${id}`);
            if(response.status !== 200) {
                return rejectWithValue("Failed to delete news");
            }
            return id;
        } catch (error) {
            return rejectWithValue("Failed to delete news");
        }
    }
);

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
        },
    },
    extraReducers: (builder) => {
        // fetchNews
        builder.addCase(fetchNews.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        });
        builder.addCase(fetchNews.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });

        // addNews
        builder.addCase(addNews.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(addNews.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
        });
        builder.addCase(addNews.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });

        // deleteNews
        builder.addCase(deleteNews.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteNews.fulfilled, (state, action) => {
            state.loading = false;
            const id = action.payload;
            state.items = state.items.filter((item) => String(item.id) !== String(id));
        });
        builder.addCase(deleteNews.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export const { setSearchQuery } = newsSlice.actions;
export default newsSlice.reducer;
