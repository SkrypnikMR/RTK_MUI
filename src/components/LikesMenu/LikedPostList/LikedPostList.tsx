import React from 'react';
import { List, ListItem, ListItemText } from "@mui/material";

import { useAppSelector } from "../../../app/hooks";
import { getPostsWithLike } from "../../../services";

import LikedPost from './LikedPost';


const LIKED_POSTS_LIST_SX = [{color: 'white'}];
const NO_LIKED_POSTS_SX = [{textAlign: 'center'}];

export function LikedPostList() {
    const postsWithLike = useAppSelector(getPostsWithLike);

    return (
            <List sx={LIKED_POSTS_LIST_SX}>
                {!postsWithLike.length && (<ListItem>
                    <ListItemText sx={NO_LIKED_POSTS_SX}>No liked posts now.</ListItemText>
                </ListItem>)
                }
                {postsWithLike.map((postWithLike) => (<LikedPost {...postWithLike}/>))}
            </List>
    );
}
