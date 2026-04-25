import useStore from './store';
import ProgressBar from './components/ProgressBar';
import PersonalInfo from './components/PersonalInfo';
import HotelDetails from './components/HotelDetails';
import Review from './components/Review';

function App() {
  const currentStep = useStore((state) => state.currentStep);

  return (
    <div className='app'>
      <h1 className='app-title'>📋 Hotel Registration</h1>
      <ProgressBar />
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <HotelDetails />}
      {currentStep === 3 && <Review />}
    </div>
  );
}
export default App;
