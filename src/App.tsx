import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
