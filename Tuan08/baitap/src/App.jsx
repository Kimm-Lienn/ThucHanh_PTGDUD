import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Header from './components/Header'
import Overview from './components/Overview'
import Table from './components/Table'
import './App.css'

function Dashboard() {
  return (
    <div className="main-section">
      <Header />
      <Overview />
      <Table />
    </div>
  );
}

function Projects() {
  return <div className="main-section"><h1>Projects Page</h1>
  <p style={{textAlign:'center', fontSize:'50px',color:'#FF0099', padding:'50px', fontStyle:'italic'}}>This is the Projects page.</p>
  </div>;
}

function Teams() {
  return <div className="main-section"><h1>Teams Page</h1>
  <p style={{textAlign:'center', fontSize:'50px',color:'#FF0099', padding:'50px', fontStyle:'italic'}}>This is the Teams page .</p>
  </div>;
}

function Analytics() {
  return <div className="main-section"><h1>Analytics Page</h1>
  <p style={{textAlign:'center', fontSize:'50px',color:'#FF0099', padding:'50px', fontStyle:'italic'}}>This is the Analytics page .</p>
  </div>;
}

function Messages() {
  return <div className="main-section"><h1>Messages Page</h1>
  <p style={{textAlign:'center', fontSize:'50px',color:'#FF0099', padding:'50px', fontStyle:'italic'}}>This is the Messages page .</p>
  </div>;
}

function Integrations() {
  return <div className="main-section"><h1>Integrations Page</h1>
  <p style={{textAlign:'center', fontSize:'50px',color:'#FF0099', padding:'50px', fontStyle:'italic'}}>This is the Integrations page .</p>
  </div>;
}

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App