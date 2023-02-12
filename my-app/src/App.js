import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="TextUtile" />
    <div className="container">
    <Textform heading="Enter your text below..!" />
    </div>

    </>
  );
}

export default App;
