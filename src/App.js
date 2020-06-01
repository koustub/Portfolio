import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import './App.css';

function App() {
  return (
    <Router>
    <Navbar />
    <div className="App">
     
     <Route  exact path={["/","/Home"]} component={Header} />
    </div>
    </Router>
  );
}

export default App;
