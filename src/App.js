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
import Shuffle from './components/Shuffle/Shuffle';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App(props) {

  return (
    <div className="container">
      <div className="grid">
        <Router>
          <Header />
          <Nav />
          <div className='content'>
            <Route path='/profile'>
              <Profile 
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            </Route>
            <Route path='/messages'>
              <Messages
                messagePage={props.state.messagePage}
                dispatch={props.dispatch}
              />
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
