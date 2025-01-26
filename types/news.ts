export interface INewsItemSource {
    id: string;
    name: string;
}

export interface INewsItem {
    source: INewsItemSource;
    id: string;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
