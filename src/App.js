import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Profil from './Profil';
import Setting from './Setting';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/Home" component={Home} />
        <Route path="/Profil" component={Profil} />
        <Route path="/Setting" component={Setting} />
      </div>
    </Router>
  );
}
export default App;