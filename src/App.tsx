import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import GameCatalog from './pages/GameCatalog';
import FoodMenu from './pages/FoodMenu';
import TableBooking from './pages/TableBooking';
import EventsPromos from './pages/EventsPromos';
import AboutContact from './pages/AboutContact';
import AdminStub from './pages/AdminStub';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GameCatalog />} />
          <Route path="/menu" element={<FoodMenu />} />
          <Route path="/book" element={<TableBooking />} />
          <Route path="/events" element={<EventsPromos />} />
          <Route path="/about" element={<AboutContact />} />
          <Route path="/admin" element={<AdminStub />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
