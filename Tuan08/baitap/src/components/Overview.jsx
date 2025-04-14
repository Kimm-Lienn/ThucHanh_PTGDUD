import React from 'react'

function Overview() {
  return (
    <div className="overview">
      <h2>Overview</h2>
      <div className="stats" style={{ display:'flex', gap:'20px'}}>
        <div className="stat-card" style={{backgroundColor:'#FF33CC'}}>
          <h3>Turnover</h3>   
        </div>
        <div className="stat-card" style={{backgroundColor:'#9fc9f3'}}>
          <h3>Profit</h3>
        </div>
        <div className="stat-card" style={{backgroundColor: '#9fc9f3'}}>
          <h3>New customer</h3>
        </div>
      </div>
    </div>
  );
}

export default Overview