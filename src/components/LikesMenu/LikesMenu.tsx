import React, { useCallback } from 'react';
import { Drawer, List, ListItem, ListItemIcon, Divider, ListItemText, Typography } from "@mui/material";
import { Favorite, Close } from "@mui/icons-material";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { additionalPostsInfoActions, getIsLikeMenuOpen } from "../../services";
import LikesPostList from "./LikedPostList";

const DRAWER_PAPER_PROPS = {sx:{background: '#1976d2'}};
const MENU_LIST_ITEM_SX = [{color: 'white', rowGap: 20}];

const MENU_ICON_SX = {color: 'white'};
const MENU_LIKE_ICON_SX = [MENU_ICON_SX];
const MENU_CLOSE_ICON_SX = [{...MENU_ICON_SX, justifyContent: 'flex-end',  cursor: 'pointer'}];

export function LikesMenu() {
    const dispatch = useAppDispatch();
    const isLikeMenuOpen = useAppSelector(getIsLikeMenuOpen);

    const onClose = useCallback(() => {
        dispatch(additionalPostsInfoActions.setIsLikedMenuOpen(false))
    }, []);

    return (
        <Drawer
            anchor="right"
            open={isLikeMenuOpen}
            onClose={onClose}
            PaperProps={DRAWER_PAPER_PROPS}
        >
            <List>
                <ListItem sx={MENU_LIST_ITEM_SX}>
                    <ListItemIcon sx={MENU_LIKE_ICON_SX}>
                        <Favorite/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="h6">Liked Posts</Typography>
                    </ListItemText>
                    <ListItemIcon sx={MENU_CLOSE_ICON_SX} onClick={onClose}>
                        <Close/>
                    </ListItemIcon>
                </ListItem>
                <Divider/>
                <LikesPostList/>
            </List>

        </Drawer>
    );
}
