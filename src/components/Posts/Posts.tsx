import React from 'react';
import { Grid } from "@mui/material";

import { getLimit, useGetAllPostsByLimitQuery } from "../../services";
import { useAppSelector} from "../../app/hooks";

import { PostsSkeleton } from "../Skeleton";
import LikesMenu from "../LikesMenu";
import Post from './Post';
import MorePosts from './MorePosts';


export function Posts(){
    const limit = useAppSelector(getLimit);
    const { data: posts, error, isFetching } = useGetAllPostsByLimitQuery(limit);

    if(error){
        return <div>Error View</div>
    }

    return (
        <Grid container spacing={2} sx={[{padding: 2}]}>
            {isFetching && <PostsSkeleton size={limit}/>}
            {!isFetching && posts?.map((post) => {
                return (<Post key={post.id} {...post}/>);
            })}
            <LikesMenu />
            <MorePosts />
        </Grid>
    );
}
