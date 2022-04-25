import React, {useCallback} from 'react';
import { IconButton, Snackbar } from "@mui/material";
import { More } from "@mui/icons-material";

import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {additionalPostsInfoActions, getIsLikeMenuOpen, getLimit} from "../../../services";

const SNACKBAR_POSITION = { vertical: 'bottom' as 'bottom', horizontal: 'right' as 'right' };

export function MorePosts() {
    const dispatch = useAppDispatch();
    const limit = useAppSelector(getLimit);
    const isLikeMenuOpen = useAppSelector(getIsLikeMenuOpen);

    const onMoreBtnClick = useCallback(() => {
        dispatch(additionalPostsInfoActions.setLimit(limit + 30));
    }, [limit]);


    if(isLikeMenuOpen) {
        return null;
    }

    return (
        <Snackbar
            anchorOrigin={SNACKBAR_POSITION}
            open={true}
            key={SNACKBAR_POSITION.vertical + SNACKBAR_POSITION.horizontal}
        >
            <IconButton
                onClick={onMoreBtnClick}
                color="primary"
                size="large"
                title="More Posts"
            >
                <More fontSize="inherit" />
            </IconButton>
        </Snackbar>
    );
}
