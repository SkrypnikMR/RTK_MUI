export interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface IAdditionalPostsInfo {
    idsWithLike: number[];
    isLikeMenuOpen: boolean;
    limit: number;
}
