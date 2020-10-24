import React from 'react';
import './components/css/App.css';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Shuffle from './components/Shuffle/Shuffle';
import UsersContainer from './components/Users/UsersContainer';
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
            <Route exact path='/'>
              <Profile />
            </Route>
            <Route path='/messages'>
              <MessagesContainer />
            </Route>
            <Route path='/users'>
              <UsersContainer />
            </Route>
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/shuffle' component={Shuffle} />
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
