import React from 'react';
import './components/css/App.css';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {
  BrowserRouter as Router, 
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <div className="grid">
      <Router>
        <Header />
        <Nav />
          <div className='content'>
            <Route path='/profile' component={Profile} />
            <Route path='/messages' component={Messages} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
          </div>
        <Footer />
      </Router>
      </div>
    </div>
  );
}

export default App;
