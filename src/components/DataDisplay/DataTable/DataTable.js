import './DataTable.css';

function DataTable({ content }) {
  return (
    <div className="data-table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            {content.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
