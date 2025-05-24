import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const CorrelationHeatmap = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h5" gutterBottom>
          🔥 Correlation Heatmap
        </Typography>
        <Typography variant="body1" color="textSecondary">
          This section will display a heatmap of stock correlations.
          Feature under development.
        </Typography>
      </Paper>
    </Container>
  );
};

export default CorrelationHeatmap;
