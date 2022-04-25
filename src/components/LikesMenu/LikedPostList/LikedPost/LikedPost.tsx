import React, {useCallback} from 'react';
import { ILikedPost } from "./types";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useAppDispatch } from "../../../../app/hooks";
import { additionalPostsInfoActions } from "../../../../services";
import { Close } from "@mui/icons-material";

const CLOSE_ICON_SX = [{color: 'white', justifyContent: 'flex-end', cursor: 'pointer'}];
const LIST_ITEM_SX = [{width: '20vw'}];
const LIST_TITLE_SX = [{
    overflow: 'hidden',
    maxHeight: '20px',
    span : {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: '12px',
    }
}];

export function LikedPost({ id, title }: ILikedPost) {
    const dispatch = useAppDispatch();

    const onCloseClick = useCallback(() => {
        dispatch(additionalPostsInfoActions.removeLikeById(id));
    }, []);

    return (
        <ListItem sx={LIST_ITEM_SX}>
            <ListItemText title={title} sx={LIST_TITLE_SX}>{title}</ListItemText>
            <ListItemIcon onClick={onCloseClick} sx={CLOSE_ICON_SX}>
                <Close/>
            </ListItemIcon>
        </ListItem>
    );
}
