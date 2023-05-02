import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,  
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#124146';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils" />
   <div className="container my-3">
    <Routes>
      <Route path="/about" element={<About mode={mode} />}>
      </Route>
      <Route path="/" element= {<TextForm heading="Enter the text to Analyze below" className="my-3" mode={mode} />} >
      </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
