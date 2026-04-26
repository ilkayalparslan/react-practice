import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdwordsLayout from './components/AdwordsLayout';
import AdwordsHome from './pages/AdwordsHome';
import Packages from './pages/Packages';
import Results from './pages/Results';
import GetStarted from './pages/GetStarted';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdwordsLayout />}>
          <Route index element={<AdwordsHome />} />
          <Route path='packages' element={<Packages />} />
          <Route path='results' element={<Results />} />
          <Route path='get-started' element={<GetStarted />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
