import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {IAdditionalPostsInfo, IPost } from "./types";
import {createSlice, PayloadAction } from "@reduxjs/toolkit";

export const postsApi = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        getAllPostsByLimit: builder.query<IPost[], number>({
            query: (limit) => `posts?_limit=${limit}`
        })
    })
});

export const initialAdditionalPostsInfoState: IAdditionalPostsInfo = {
    idsWithLike: [],
    isLikeMenuOpen: false,
    limit: 30,
}

export const additionalPostsInfoSlice = createSlice({
    name: 'additionalPostsInfo',
    initialState: initialAdditionalPostsInfoState,
    reducers: {
        addLikeById(state: IAdditionalPostsInfo, action: PayloadAction<number>){
            state.idsWithLike = Array.from(new Set([...state.idsWithLike, action.payload]));
        },
        removeLikeById(state: IAdditionalPostsInfo, action: PayloadAction<number>){
            state.idsWithLike = state.idsWithLike.filter((id) => id !== action.payload);
        },
        setIsLikedMenuOpen(state: IAdditionalPostsInfo, action: PayloadAction<boolean>){
            state.isLikeMenuOpen = action.payload;
        },
        setLimit(state: IAdditionalPostsInfo, action: PayloadAction<number>){
            state.limit = action.payload;
        }
    },
});

export const { useGetAllPostsByLimitQuery, reducerPath: postsApiReducerPath } = postsApi;
export const {
    actions: additionalPostsInfoActions,
    reducer: additionalPostsInfoReducer,
    name: additionalPostsInfoReducerName
} = additionalPostsInfoSlice;
