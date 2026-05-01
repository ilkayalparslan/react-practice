import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='testimonials' element={<Testimonials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
