import React from 'react';

const Table = () => {
  const data = [
    { name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$359', date: '10/07/2023', status: 'New' },
    { name: 'Carlos Garcia', company: 'SnoozeShift', value: '$747', date: '24/07/2023', status: 'New' },
    { name: 'Elizabeth Bailey', company: 'PrimeTime Telecom', value: '$564', date: '08/08/2023', status: 'In-progress' },
    { name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In-progress' },
    { name: 'Ryan Young', company: 'DataStream Inc.', value: '$769', date: '01/05/2023', status: 'Completed' },
    { name: 'Hailey Adams', company: 'FlowRush', value: '$922', date: '10/06/2023', status: 'Completed' },
  ];

  return (
    <div className="table-section">
      <div className="table-header">
        <h2>DETAILED REPORT</h2>
        <div className="table-actions">
          <button>Import</button>
          <button>Export</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Customer name</th>
            <th>Company</th>
            <th>Order value</th>
            <th>Order date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{row.name}</td>
              <td>{row.company}</td>
              <td>{row.value}</td>
              <td>{row.date}</td>
              <td>
                <span className={`status ${row.status.toLowerCase().replace(' ', '-')}`}>
                  {row.status}
                </span>
              </td>
              <td><button className="edit-btn">✏️</button></td> 
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <p>63 results</p>
        <div className="controls">
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <span>...</span>
          <button>10</button>
          <button>11</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Table