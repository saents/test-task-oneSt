import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface LoginPayload {
    username: string;
    token: string;
    isAuthenticated: boolean
}

export const loginUser = createAsyncThunk<LoginPayload, { username: string; password: string }
>("user/login", async ({ username, password }, { rejectWithValue }) => {
    if (username === "admin" && password === "12345") {
        return { token: "fake_jwt_token_123", isAuthenticated: true, username };
    } else {
        return rejectWithValue("The username or password you entered is incorrect");
    }
});

interface UserState {
    username: string | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    username : null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout(state) {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
            localStorage.removeItem("isAuthenticated");
        },
        checkAuthState(state) {
            const token = localStorage.getItem("token");
            const isAuth = localStorage.getItem("isAuthenticated") === "true";
            if (token && isAuth) {
                state.token = token;
                state.isAuthenticated = isAuth;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.isAuthenticated = action.payload.isAuthenticated;
            state.username = action.payload.username;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("isAuthenticated", "true");
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export const { logout, checkAuthState } = userSlice.actions;
export default userSlice.reducer;
