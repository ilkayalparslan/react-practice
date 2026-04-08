import useStore from './store';
import PasswordDisplay from './components/PasswordDisplay';
import StrengthBar from './components/StrengthBar';
import LengthSlider from './components/LengthSlider';
import Options from './components/Options';
import History from './components/History';

function App() {
  const generatePassword = useStore((state) => state.generatePassword);

  return (
    <div className='app'>
      <div className='generator-container'>
        <h1 className='generator-title'>🔐 Password Generator</h1>
        <PasswordDisplay />
        <StrengthBar />
        <LengthSlider />
        <Options />
        <button className='generate-btn' onClick={generatePassword}>
          Generate Password
        </button>
        <History />
      </div>
    </div>
  );
}
export default App;
