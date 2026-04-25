import FilterBar from './components/FilterBar';
import GalleryGrid from './components/GalleryGrid';
import Lightbox from './components/Lightbox';

function App() {
  return (
    <div className='app'>
      <div className='app-title'>🖼️ Hotel Gallery</div>
      <FilterBar />
      <GalleryGrid />
      <Lightbox />
    </div>
  );
}
export default App;
