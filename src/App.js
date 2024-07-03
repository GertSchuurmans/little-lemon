import './App.css';

import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { BrowserRouter ,Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
