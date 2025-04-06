import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Header from './components/Header'
import Overview from './components/Overview'
import Projects from './components/Projects'
import Table from './components/Table'
import Teams from './components/Teams'
import Ananlytics from './components/Analytics'
import Messages from './components/Messages'
import Integrations from './components/Integrations'
import './App.css'

function App() {
  return (
    <div className="app">
      <Menu />
      <div className="main-content">
        <Header />
        <Routes>
          <Route path='/' element={<><Overview /><Table /></>} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/teams' element={<Teams/>} />
          <Route path='/analytics' element ={<Ananlytics/>} />
          <Route path='/messages' element ={<Messages/>} />
          <Route path='/integrations' element ={<Integrations/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;