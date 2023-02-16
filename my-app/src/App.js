import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'

function App() {
  const [mode, setMode ] = useState('light');
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }

  // setMode("dark");
  return (
    <>
    <Navbar title="TextUtile" mode={mode} toggleMode={toggleMode} />
    <div className="container">
    <Textform heading="Enter your text below..!" />
    </div>
    </>
  );
}

export default App;
