import { IPostsState, RootState } from "../app/store";
import { createSelector } from "@reduxjs/toolkit";
import { additionalPostsInfoReducerName, postsApiReducerPath } from './index';
import {IAdditionalPostsInfo, IPost} from "./types";

export const getPosts = (state: RootState): IPostsState => state[postsApiReducerPath];
export const getAdditionPostsInfo = (state: RootState): IAdditionalPostsInfo => state[additionalPostsInfoReducerName];

const getIdsWithLike = createSelector(
    getAdditionPostsInfo,
    ({idsWithLike}) => idsWithLike,
);

export const getIsPostWithLikeById = (incomingId: number) => createSelector(
    getIdsWithLike,
    (ids) => ids.some((id) => id === incomingId),
);

export const getLikesCounts = createSelector(
    getIdsWithLike,
    (ids) => ids.length,
);

export const getIsLikeMenuOpen = createSelector(
    getAdditionPostsInfo,
    ({isLikeMenuOpen}) => isLikeMenuOpen,
);

export const getLimit = createSelector(
    getAdditionPostsInfo,
    ({limit}) => limit,
);

export const getPostsWithLike = createSelector(
    getPosts,
    getIdsWithLike,
    ({ queries }, idsWithLike) => {
       try {
           const queriesArray = Object.values(queries);

           if(!queriesArray.length){
               return [];
           }

           const currentQuery = queriesArray[queriesArray.length - 1];

           if(currentQuery?.data) {
               const currentPosts = currentQuery.data as IPost[];
                return  currentPosts.filter(({id}) => idsWithLike.includes(id)).map(({ id , title }) => ({ id,  title }));
           }

           return [];
       } catch(e){
           console.error(e);

           return [];
       }
    }
)
