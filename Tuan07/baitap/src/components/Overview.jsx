import React from 'react';

const Overview = () => {
  return (
    <div className="overview">
      <h1>Overview</h1>
      <div className="stat-cards">
        <div style={{ backgroundColor:'#ffebee'}} className="stat-card turnover">
         
          <h3>Turnover</h3>
          <p className="value">$92,405</p>
          <p style={{color:'green'}} className="change positive">+ 5.39% period of change</p>
        </div>
        <div style={{ backgroundColor:'#e3f2fd'}} className="stat-card profit">
         
          <h3>Profit</h3>
          <p className="value">$32,218</p>
          <p style={{color:'green'}} className="change positive">+ 5.39% period of change</p>
        </div>
        <div style={{ backgroundColor:'#e8f5e9'}} className="stat-card new-customer">
         
          <h3>New customer</h3>
          <p className="value">298</p>
          <p style={{color:'green'}} className="change positive">+ 6.84% period of change</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;