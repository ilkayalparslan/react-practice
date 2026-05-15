import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import ManageBooking from './pages/ManageBooking';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ minHeight: '60vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/rooms/:slug' element={<RoomDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/manage' element={<ManageBooking />} />
          <Route
            path='*'
            element={
              <div
                className='container'
                style={{ padding: 'var(--space-24) 0', textAlign: 'center' }}
              >
                <h1>Page Not Found</h1>
                <p
                  style={{
                    marginTop: 'var(--space-4)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  the page you're looking for doesn't exist
                </p>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
