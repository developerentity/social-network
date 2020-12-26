import React, { lazy, useEffect, Suspense } from 'react';
import './components/css/App.css';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Shuffle from './components/Shuffle/Shuffle';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginForm from './components/Login/LoginForm';
import { getInitializeApp } from './redux/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from './components/common/preloader/Preloader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header/Header';

const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const Messages = lazy(() => import('./components/Messages/Messages'))

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
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <Nav />
          <div className='content'>
            <Route path='/profile/:userId?' component={ProfileContainer} />
            <Route
              path='/messages'
              render={() => {
                return <Suspense fallback={<div> Loading... </div>}>
                  <Messages />
                </Suspense>
              }} />
            <Route
              path='/users'
              render={() => {
                return <Suspense fallback={<div> Loading... </div>}>
                  <UsersContainer />
                </Suspense>
              }} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/shuffle' component={Shuffle} />
            <Route path='/login' component={LoginForm} />
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
