import React from "react"
import { Grid, Skeleton as MUISkeleton } from "@mui/material";


export function Skeleton() {
    return (
        <Grid item xs={12} md={3} container sx={[{ justifyContent: 'flex-end'}]}>
            <Grid item xs={4} md={4}>
                <MUISkeleton animation="wave"/>
            </Grid>
            <Grid item xs={13} md={12}>
                <MUISkeleton animation="wave" height={30} />
            </Grid>
            <Grid item xs={12} md={12}>
                <MUISkeleton animation="wave" height={30} />
            </Grid>
        </Grid>
    )
}
