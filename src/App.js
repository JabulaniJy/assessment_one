import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from './components/pages/HomeComponent';
import Dashboard from './components/pages/AdministrationComponent';
import Admin from './components/pages/DashboardComponent';
import Profile from './components/pages/ProfileComponent';
import Footer from './components/layout/FooterComponent'


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
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
