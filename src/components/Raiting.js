import * as React from 'react';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import Typography from '@mui/material/Typography';


export default function Raiting({value}) {
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend"></Typography>
            <Rating name="half-rating-read" defaultValue={value} precision={0.1} readOnly max={10}/>
        </Box>
    );
}