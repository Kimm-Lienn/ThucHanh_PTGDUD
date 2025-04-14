import React, { useState, useEffect } from 'react';
import editIcon from '../assets/create.png'; // Nhập ảnh chỉnh sửa

function Table() {
  const [reports, setReports] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6; // Hiển thị 6 bản ghi mỗi trang

  useEffect(() => {
    fetch('https://67ec9394aa794fb3222e224b.mockapi.io/report')
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          id: item.id,
          avatar: item.avatar,
          customerName: item.customerName,
          company: item.company,
          orderValue: item.orderValue,
          orderDate: item.oderDate, 
          status: item.status,
        }));
        setReports(formattedData);
      })
      .catch((error) => console.error('Lỗi khi lấy dữ liệu:', error));
  }, []);

  // Tính toán số trang
  const totalPages = Math.ceil(reports.length / recordsPerPage);
  // Lấy dữ liệu cho trang hiện tại
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = reports.slice(indexOfFirstRecord, indexOfLastRecord);
  // Hàm chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="table-section">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <h2 style={{ color: 'black', margin: 0 }}>Detailed Report</h2>
        <div>
          <button
            style={{
              padding: '5px 10px',
              marginRight: '10px',
              backgroundColor: '#fff',
              border: '1px solid #f46292',
              color: '#f46292',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Import
          </button>
          <button
            style={{
              padding: '5px 10px',
              backgroundColor: '#fff',
              border: '1px solid #f46292',
              color: '#f46292',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
           Export
          </button>
        </div>
      </div>
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
          {currentRecords.map((report) => (
            <tr key={report.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}>
                <input type="checkbox" />
              </td>
              <td style={{ padding: '10px', fontSize: '14px', color: '#333', display: 'flex', alignItems: 'center' }}>
  {report.avatar ? (
    <img
      src={report.avatar}
      alt={`Ảnh đại diện của ${report.customerName}`}
      style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
    />
  ) : (
    <span style={{ marginRight: '10px' }}>Không có ảnh</span>
  )}
  {report.customerName}
</td>
              <td style={{ padding: '10px', fontSize: '14px', color: '#333' }}>{report.company}</td>
              <td style={{ padding: '10px', fontSize: '14px', color: '#333' }}>
                ${Number(report.orderValue).toLocaleString()}
              </td>
              <td style={{ padding: '10px', fontSize: '14px', color: '#333' }}>
                {report.orderDate}
              </td>
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
                  <img src={editIcon} alt="Chỉnh sửa" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Phân trang */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginBottom: '50px', marginLeft:'700px'}}>
        <p style={{ color: '#666', fontSize: '14px', marginRight: '20px', marginBottom: '10px' }}>
          {reports.length} results
        </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              style={{
                padding: '5px 10px',
                margin: '0 5px',
                backgroundColor: currentPage === page ? '#f46292' : '#fff',
                color: currentPage === page ? '#fff' : '#333',
                border: '1px solid #ddd',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table