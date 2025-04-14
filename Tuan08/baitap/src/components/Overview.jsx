import React from 'react'

const overView = [
  {
    id: 1,
    title: "Turnover",
    usd: "$92,402",
    inc: "5.39%",
    img: "src/assets/Button 1509.png",
  },
  {
    id: 2,
    title: "Profit",
    usd: "$32,218",
    inc: "5.39%",
    img: "src/assets/Button 1529.png",
  },
  {
    id: 3,
    title: "New Customers",
    usd: "$298",
    inc: "6.84%",
    img: "src/assets/Button 1530.png",
  },
];

function Overview() {
  return (
    <div className="overview">
      <h2 style={{color:'black'}}>Overview</h2>
      <div className="stats" style={{ display: 'flex', gap: '20px' }}>
        {overView.map((item) => (
          <div key={item.id} className="stat-card"
            style={{ backgroundColor: item.id === 1 ? '#FF33CC' : '#9fc9f3', // Turnover: hồng nhạt, Profit/New Customers: xanh nhạt
              padding: '20px',
              borderRadius: '10px',
            }}
          >
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '18px', margin: 0 }}>{item.title}</h3>
              <img src={item.img} alt={item.title} style={{ width: '20px', height: '20px' }} />
            </div>
            <p style={{ fontSize: '28px', fontWeight: 'bold', margin: '10px 0' }}>
              {item.title === "New Customers" ? item.usd.replace('$', '') : item.usd}
            </p>
            <p style={{ color: 'green', fontSize: '14px' }} className="change positive">
              + {item.inc} period of change
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview