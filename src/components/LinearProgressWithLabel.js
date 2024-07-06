import React, { useState } from 'react';
import { LinearProgress, Typography, Box } from '@mui/material';

export default function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
        <Box width="50%" mr={1}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            height: 20,
            borderRadius: 10,
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#f44', // Change this to golden color
            },
          }}
        />
        </Box>
        <Box minWidth={35}>
        </Box>
        </Box>
    );
}

