import {INewsItem} from "@/types/news";

export interface NewsState {
    items: INewsItem[];
    loading: boolean;
    error: string | null;
    searchQuery: string;
}
