import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <Router>
    <Navbar />
    <div className="App">
     <Route  exact path={["/","/Home"]} component={Home} />
     <Route  exact path={["/Projects"]} component={Projects} />
    </div>
    </Router>
  );
}

export default App;
