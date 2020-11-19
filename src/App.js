import React, { useEffect } from 'react';
import './components/css/App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
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
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { getInitializeApp } from './redux/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from './components/common/preloader/Preloader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {

  const initialized = useSelector(state => state.app.initialized)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInitializeApp())
  }, [dispatch])

  if (!initialized) {
    return <Preloader />
  }
  return (
    <div>
      <div className="grid">
        <Router>
          <HeaderContainer />
          <Nav />
          <div className='content'>
            <Route path='/profile/:userId?'>
              <ProfileContainer />
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
            <Route path='/login' component={Login} />
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
