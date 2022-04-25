import React, { useMemo } from 'react';

import { Skeleton } from "../Skeleton";
import { IPostsSkeleton } from "./types";
import { Grid } from "@mui/material";


export function PostsSkeleton ({ size }: IPostsSkeleton) {
    const skeletonArray = useMemo(() => {
        return new Array(size).fill(size);
    }, [size]);

    return (
        <Grid container spacing={3} >
            {skeletonArray.map((_sk, index) => (<Skeleton key={index + size}/>))}
        </Grid>
    );
};
