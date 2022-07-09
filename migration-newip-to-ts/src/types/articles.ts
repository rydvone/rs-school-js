export interface ResponseArticle {
    status: 'ok' | 'error';
    totalResults: number;
    articles: IArticle[];
}

export interface IArticle {
    source: ISourcess;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

interface ISourcess {
    id: string | null;
    name: string;
}
