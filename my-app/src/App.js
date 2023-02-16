import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react'

function App() {
  const [mode, setMode ] = useState('light');
  const [alert, setAlert ] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');

      showAlert("Dark mode","success");
    }
    else{
      setMode('light');
      showAlert("light mode","success");
    }
  }

  // setMode("dark");
  return (
    <>
    <Navbar title="TextUtile" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
    <Textform showAlert={showAlert} heading="Enter your text below..!" />
    </div>
    </>
  );
}

export default App;
