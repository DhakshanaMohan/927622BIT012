import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Stock Aggregator
        </Typography>
        <Button color="inherit" component={Link} to="/stock">Stock</Button>
        <Button color="inherit" component={Link} to="/heatmap">Heatmap</Button>
      </Toolbar>
    </AppBar>
  );
}
