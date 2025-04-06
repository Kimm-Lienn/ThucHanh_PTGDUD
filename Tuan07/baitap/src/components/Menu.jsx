import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
        <img src="./img/Image 1858.png" alt="" />
      </div>
      <ul>
        <li>
          <NavLink style={{backgroundColor: '#ff4081', color:'white', borderRadius:'4px', padding:'7px 50px', display: 'inline-block'}} 
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            DASHBOARD
          </NavLink>
        </li>
        <li>
          <NavLink style={{color:'black', display:'flex', alignItems:'center' }}
            to="/projects"
            className={({ isActive }) => (isActive ? 'active' : '')} 
          >
            <img src="./img/Folder.png" alt="Hinh anh" style={{marginRight:'10px'}} />
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink style={{color:'black', display:'flex', alignItems:'center'}}
            to="/teams"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img src="./img/Groups.png" alt="Hinh anh" style={{marginRight:'10px'}} />
           Teams
          </NavLink>
        </li>
        <li>
          <NavLink style={{color:'black', display:'flex', alignItems:'center'}}
            to="/analytics"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img src="./img/Pie chart.png" alt="Hinh anh" style={{marginRight:'10px'}} />
           Analytics
          </NavLink>
        </li>
        <li>
          <NavLink style={{color:'black', display:'flex', alignItems:'center'}}
            to="/messages"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img src="./img/Chat.png" alt="Hinh anh" style={{marginRight:'10px'}} />
           Messages
          </NavLink>
        </li>
        <li>
          <NavLink style={{color:'black', display:'flex', alignItems:'center'}}
            to="/integrations"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img src="./img/Code.png" alt="Hinh anh" style={{marginRight:'10px'}} />
           Integrations
          </NavLink>
        </li>
      </ul>
      <div className="version-box">
        <img
          style={{ width: '80%', height: 'auto' }}
          src="./img/Group.png"
          alt="Version illustration"
        />
        <p style={{ fontSize: '14px', fontWeight: 'bold', color: 'black' }}>
          V2.0 IS AVAILABLE
        </p>
        <button>TRY NOW</button>
      </div>
    </div>
   
  );
};

export default Menu;