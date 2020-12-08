import './App.css';
import React from 'react';
import Covid from './components/Covid';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
import DataGlobal from './components/DataGlobal';
import DataIndonesia from './components/DataIndonesia';
import DataProvinsi from './components/DataProvinsi';

//High order component
function App() {
  return (
    <Router>
      <div className="App">
      <Covid title="Informasi Covid"/>
      <Route path="/" exact component={DataGlobal}/>
      <Route path="/DataIndonesia" exact component={DataIndonesia}/>
      <Route path="/DataProvinsi" exact component={DataProvinsi}/>
    </div>
    </Router>
  );
}

export default App;
