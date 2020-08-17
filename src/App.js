import React from 'react';
import './components/css/App.css';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Messages from './components/Messages/Messages';
import {
  BrowserRouter as Router
} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <div className="grid">
      <Router>
        <Header />
        <Nav />
          <Messages />
          <Profile />
        <Footer />
      </Router>
      </div>
    </div>
  );
}

export default App;
