import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';
import ConfirmedBooking from './components/ConfirmedBooking';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/booking-confirmation" element={<ConfirmedBooking/>}/>
      </Routes>
    </Router>
  );
}

export default App;
