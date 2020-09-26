import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from './components/pages/HomeComponent';
import Dashboard from './components/pages/DashboardComponent';
import Admin from './components/pages/AdministrationComponent';
import Profile from './components/pages/ProfileComponent';


function App() {
  return (
  
    <div className="App">
      <Router>
        <MainComponent/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Dashboard' exact component={Dashboard}/>
          <Route path='/Admin' exact component={Admin}/>
          <Route path='/Profile' exact component={Profile}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
