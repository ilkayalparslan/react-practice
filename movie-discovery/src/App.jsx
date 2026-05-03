import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
