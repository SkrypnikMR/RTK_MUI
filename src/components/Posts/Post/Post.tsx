import React, { memo } from 'react';

import { IPost } from "../../../services/types";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActions
} from "@mui/material";

import PostLike from './PostLike';

const CARD_SX = [{height: '100%', background: '#1976d2', color: 'white'}];
const CARD_CONTENT_SX = [{display: 'flex', flexDirection: 'column', height: '60%'}];
const CARD_CONTENT_TITLE_SX = [{
    fontSize: '12px',
    maxWidth: '60%',
    alignSelf: 'flex-end',
    height: '20%',
    maxHeight: '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    textAlign: 'left',
}];
const CARD_CONTENT_BODY_SX = [ {
    height: '80%',
    fontSize: '14px',
    textAlign: 'left',
}
];

const CARD_ACTIONS_SX = [{justifyContent: 'flex-end', rowGap: '10px', height: '20%'}];

function PurePost( { title, body, id } : IPost ){
    return(
        <Grid item xs={12} md={3}>
        <Card sx={CARD_SX} raised>
            <CardContent sx={CARD_CONTENT_SX}>
                <Typography
                    title={title}
                    variant="h6"
                    align="right"
                    sx={CARD_CONTENT_TITLE_SX}
                >
                    {title}
                </Typography>
                <Typography variant="body2" sx={CARD_CONTENT_BODY_SX}>{body}</Typography>
            </CardContent>
           <CardActions sx={CARD_ACTIONS_SX}>
               <PostLike id={id}/>
            </CardActions>
        </Card>
        </Grid>
    )


}

export const Post = memo(PurePost);
