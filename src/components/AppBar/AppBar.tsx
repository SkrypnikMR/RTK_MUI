import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LikesCount from './LikesCount';

export function PureAppBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={[{flexGrow: 1}]}>
                    RTK QUERY TEST
                </Typography>
                <LikesCount />
            </Toolbar>
        </AppBar>
    );
};
