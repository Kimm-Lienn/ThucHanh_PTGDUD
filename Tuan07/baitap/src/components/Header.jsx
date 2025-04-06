import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1 style={{color: '#ff4081', fontSize:'24px'}}>Dashboard</h1>

      <div style={{ display:'flex', alignItems:'center'}}className="header-right">
        <input  style={{padding: '10px', backgroundColor: 'white', border: '1px solid #f5e8e8', borderRadius: '5px', marginRight: '10px', width: '200px'}}  type="text" placeholder="Search..." />
       
      </div>
    </div>
  );
};

export default Header;

  