import React from 'react';
import './css/App.css';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="container">
      <div className="grid">
        <Header />
        <Nav />
        <Profile />
        <Footer />
      </div>
    </div>
  );
}

export default App;
