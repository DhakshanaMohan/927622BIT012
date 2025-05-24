import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Select, MenuItem, TextField, Button, Grid, Paper
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const STOCKS = ['TCS', 'INFY', 'RELIANCE', 'HDFC', 'ICICI'];

const StockPage = () => {
  const [selectedStock, setSelectedStock] = useState(STOCKS[0]);
  const [minutes, setMinutes] = useState(50);
  const [data, setData] = useState([]);

  const fetchStockData = async () => {
    try {
      const url = `http://20.244.56.144/evaluation-service/stocks/${selectedStock}?minutes=${minutes}`;
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch stock data:', error.message);
    }
  };

  useEffect(() => {
    fetchStockData();
  }, [selectedStock, minutes]);

  return (
    <Container sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h5" gutterBottom>
          📈 Stock Price Tracker
        </Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <Select fullWidth value={selectedStock} onChange={e => setSelectedStock(e.target.value)}>
              {STOCKS.map(stock => (
                <MenuItem key={stock} value={stock}>{stock}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type="number"
              label="Minutes"
              value={minutes}
              onChange={e => setMinutes(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button variant="contained" onClick={fetchStockData}>Refresh</Button>
          </Grid>
        </Grid>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <XAxis dataKey="timestamp" />
            <YAxis dataKey="price" />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#1976d2" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Container>
  );
};

export default StockPage;
