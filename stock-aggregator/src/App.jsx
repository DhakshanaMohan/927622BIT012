import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StockPage from './pages/StockPage';
import HeatmapPage from './pages/HeatmapPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/stock" element={<StockPage />} />
        <Route path="/heatmap" element={<HeatmapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
