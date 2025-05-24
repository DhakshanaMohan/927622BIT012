import { useEffect, useState } from 'react';
import { getStocks, getStockPrice } from '../utils/api';
import {
  FormControl, InputLabel, Select, MenuItem, TextField, Container, Typography
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function StockPage() {
  const [tickers, setTickers] = useState([]);
  const [selected, setSelected] = useState('');
  const [minutes, setMinutes] = useState(50);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    getStocks().then(setTickers);
  }, []);

  useEffect(() => {
    if (selected) {
      getStockPrice(selected, minutes).then(setPrices);
    }
  }, [selected, minutes]);

  return (
    <Container>
      <Typography variant="h5" mt={2}>Stock Chart</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Stock</InputLabel>
        <Select value={selected} onChange={e => setSelected(e.target.value)}>
          {Object.entries(tickers).map(([name, code]) => (
            <MenuItem key={code} value={code}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Minutes"
        type="number"
        value={minutes}
        onChange={e => setMinutes(e.target.value)}
        margin="normal"
      />
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={prices}>
          <XAxis dataKey="lastUpdatedAt" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#1976d2" />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
