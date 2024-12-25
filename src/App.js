import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './page/Carousel';
import Overview from './page/Overview';
import Booking from './page/Booking';
import Contact from './page/Contact';
import Location from './page/Location'; // ต้องตรวจสอบให้แน่ใจว่า path ถูกต้อง

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <Carousel />
              <Overview />
            </div>
          } />
          
          {/* ตั้งเส้นทางให้กับหน้าสถานที่ */}
          <Route path="/location" element={<Location />} /> {/* เปลี่ยนจาก /Location เป็น /location */}
          <Route path="/booking" element={<Booking />} />  {/* เปลี่ยนเป็น /booking */}
          <Route path="/contact" element={<Contact />} /> {/* เพิ่มเส้นทางสำหรับหน้า Contact */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
