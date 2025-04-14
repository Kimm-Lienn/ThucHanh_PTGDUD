import React from 'react'

function Header() {
  return (
    <div className="header">
      <h1 style={{fontSize: '24px', color:' #f55e91'}}>Dashboard</h1>
      <div className="header-right">
        <input style={{backgroundColor:'white'}} type="text" placeholder="Search..." />
        
      </div>
    </div>
  );
}

export default Header
