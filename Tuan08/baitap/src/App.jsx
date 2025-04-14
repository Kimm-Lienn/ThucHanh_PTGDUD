// src/App.jsx
import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import Overview from './components/Overview';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <div className="app">
      <Menu />
      <div className="main-section">
        <Header />
        <Overview />
        <Table />
      </div>
    </div>
  );
}

export default App