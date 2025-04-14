import React from 'react';

function Table() {
  // Dữ liệu tĩnh lấy từ API bạn cung cấp (chọn 6 bản ghi đầu tiên)
  const reports = [
    {
      customerName: "Elizabeth Lee",
      company: "AvatarSystems",
      orderValue: "516318794",
      oderDate: "June",
      status: "New",
      id: "1",
    },
    {
      customerName: "Carlos Garcia ",
      company: "SmoozeShift",
      orderValue: "812030637",
      oderDate: "December",
      status: "New",
      id: "2",
    },
    {
      customerName: "Elizabeth Bailey",
      company: "Prime Time Telecom",
      orderValue: "080393685",
      oderDate: "January",
      status: "In-progress",
      id: "3",
    },
    {
      customerName: "Ryan Brown2",
      company: "OmniTech Corporation",
      orderValue: "753636834",
      oderDate: "January",
      status: "In-progress",
      id: "4",
    },
    {
      customerName: "Ryan Young",
      company: "DataStream Inc",
      orderValue: "096300073",
      oderDate: "January",
      status: "Completed",
      id: "5",
    },
    {
      customerName: "Hailey Adams",
      company: "FlowRush",
      orderValue: "363446194",
      oderDate: "January",
      status: "Completed",
      id: "6",
    },
  ];

  return (
    <div className="table-section">
      <h2 style={{ color: 'black' }}>Detailed Report</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f9f9f9', textAlign: 'left' }}>
            <th style={{ padding: '10px', fontSize: '14px', color: '#666' }}></th>
            <th style={{ padding: '10px', fontSize: '14px', color: '#666' }}>Customer Name</th>
            <th style={{ padding: '10px', fontSize: '14px', color: '#666' }}>Company</th>
            <th style={{ padding: '10px', fontSize: '14px', color: '#666' }}>Order Value</th>
            <th style={{ padding: '10px', fontSize: '14px', color: '#666' }}>Order Date</th>
            <th style={{ padding: '10px', fontSize: '14px', color: '#666' }}>Status</th>
            <th style={{ padding: '10px', fontSize: '14px', color: '#666' }}></th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}>
                <input type="checkbox" />
              </td>
              <td style={{ padding: '10px', fontSize: '14px', color: '#333' }}>{report.customerName}</td>
              <td style={{ padding: '10px', fontSize: '14px', color: '#333' }}>{report.company}</td>
              <td style={{ padding: '10px', fontSize: '14px', color: '#333' }}>
                ${Number(report.orderValue).toLocaleString()}
              </td>
              <td style={{ padding: '10px', fontSize: '14px', color: '#333' }}>{report.oderDate}</td>
              <td style={{ padding: '10px' }}>
                <span
                  style={{
                    padding: '5px 10px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    backgroundColor:
                      report.status.trim() === 'New'
                        ? '#e6f0ff'
                        : report.status.trim() === 'In-progress'
                        ? '#fff3e0'
                        : '#e6ffe6',
                    color:
                      report.status.trim() === 'New'
                        ? '#4a90e2'
                        : report.status.trim() === 'In-progress'
                        ? '#f5a623'
                        : '#2ecc71',
                  }}
                >
                  {report.status.trim()}
                </span>
              </td>
              <td style={{ padding: '10px' }}>
                <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                  <img src="src/assets/create.png" alt="" sizes="" srcset="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table