import './BarChart.css';

function BarChart({ content }) {
  const maxValue = Math.max(...content.data);

  return (
    <div className="bar-chart">
      <div className="chart-title">{content.title}</div>
      <div className="bars-container">
        {content.data.map((value, index) => (
          <div key={index} className="bar-wrapper">
            <div className="bar" style={{ height: `${(value / maxValue) * 100}%` }}>
              <span className="bar-value">{value}</span>
            </div>
            <span className="bar-label">{content.labels[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BarChart;
