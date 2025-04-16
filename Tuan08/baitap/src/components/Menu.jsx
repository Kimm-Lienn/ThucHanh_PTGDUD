import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div className="menu">
       <div className="logo">
       <img src="src/assets/Image 1858.png" alt="Logo" />
      </div>
      <ul style={{listStyle:'none', padding:0 }}> 
      <li>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'black',
              backgroundColor: isActive ? '#f55e91' : 'transparent', display: 'block',  padding: '5px',
              borderRadius: '5px',
              textDecoration: 'none',
            })}
          >
            Dashboard
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/projects"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'black',
              backgroundColor: isActive ? '#f55e91' : 'transparent', display: 'block',   padding: '5px',
              borderRadius: '5px',
              textDecoration: 'none',
            })}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teams"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'black',
              backgroundColor: isActive ? '#f55e91' : 'transparent',
              display: 'block',
              padding: '5px',
              borderRadius: '5px',
              textDecoration: 'none',
            })}
          >
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analytics"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'black',
              backgroundColor: isActive ? '#f55e91' : 'transparent',
              display: 'block',
              padding: '5px',
              borderRadius: '5px',
              textDecoration: 'none',
            })}
          >
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'black',
              backgroundColor: isActive ? '#f55e91' : 'transparent',
              display: 'block',
              padding: '5px',
              borderRadius: '5px',
              textDecoration: 'none',
            })}
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/integrations"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'black',
              backgroundColor: isActive ? '#f55e91' : 'transparent',
              display: 'block',
              padding: '5px',
              borderRadius: '5px',
              textDecoration: 'none',
            })}
          >
            Integrations
          </NavLink>
        </li>
      </ul>
      <div style={{textAlign: 'center'}} className="version-box">
        <img
          style={{ width: '80%',height:'50%' }}  src="src/assets/Group.png"
          />
        <p style={{ fontSize: '14px', fontWeight: 'bold', color: 'black' }}>
          V2.0 is available 
        </p>
        <button>Try now</button>
      </div>
    </div>
  );
}


export default Menu

