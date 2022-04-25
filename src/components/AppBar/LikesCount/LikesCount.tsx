import React, { useCallback } from 'react';

import { Badge, IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { additionalPostsInfoActions, getLikesCounts } from "../../../services";

export function LikesCount ()  {
    const dispatch = useAppDispatch();
    const likesCount = useAppSelector(getLikesCounts);

    const onLikeCountClick = useCallback(() => {
        dispatch(additionalPostsInfoActions.setIsLikedMenuOpen(true));
    }, []);

    return (
        <IconButton color="inherit" onClick={onLikeCountClick}>
            <Badge badgeContent={likesCount}>
                <Favorite />
            </Badge>
        </IconButton>
    );
}
