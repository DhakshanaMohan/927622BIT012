import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/evaluation-service';

export const getStocks = async () => {
  const res = await axios.get(`${BASE_URL}/stocks`);
  return res.data.stocks;
};

export const getStockPrice = async (ticker, minutes) => {
  const res = await axios.get(`${BASE_URL}/stocks/${ticker}?minutes=${minutes}`);
  return res.data;
};
