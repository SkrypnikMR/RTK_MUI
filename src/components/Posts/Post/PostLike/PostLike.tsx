import React, { useCallback } from 'react';
import { IconButton } from "@mui/material";
import {Favorite as LikeFilled, FavoriteBorder as LikeNotFilled} from "@mui/icons-material";

import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {additionalPostsInfoActions, getIsPostWithLikeById} from "../../../../services";

import { IPostLikeProps } from "./types";

const ICON_SX = [{ cursor: 'pointer' }];

export function PostLike({id}: IPostLikeProps) {
    const dispatch = useAppDispatch();
    const isLiked = useAppSelector(getIsPostWithLikeById(id));

    const onSetLikeClick = useCallback(() => {
        dispatch(additionalPostsInfoActions.addLikeById(id));
    }, [id]);

    const onRemoveLikeClick = useCallback(() => {
        dispatch(additionalPostsInfoActions.removeLikeById(id));
    }, [id]);


    return (
            <IconButton size="small" onClick={isLiked ? onRemoveLikeClick : onSetLikeClick}>
                {!isLiked && <LikeNotFilled color="error" sx={ICON_SX} />}
                {isLiked && <LikeFilled color="error" sx={ICON_SX} />}
            </IconButton>
    );
}
