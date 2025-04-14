import React from 'react'

function Menu() {
  return (
    <div className="menu">
       <div className="logo">
        <img src="src/assets/Image 1858.png" alt="" />
      </div>
      <ul style={{listStyle:'none', padding:0 }}> 
        <li className="active" style={{color:'black'}}>Dashboard</li>
        <li  style={{color:'black'}}>Projects </li>
        <li style={{color:'black'}}>Teams</li>
        <li style={{color:'black'}}>Analytics</li>
        <li style={{color:'black'}}>Messages</li>
        <li style={{color:'black'}}>Integrations</li>
      </ul>
      <div style={{textAlign: 'center'}} className="version-box">
        <img
          style={{ width: '80%', height: 'auto' }}  src="src/assets/Group.png"
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

