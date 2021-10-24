import Card from '../../components/Layout/Card/Card';
import DataTable from '../../components/DataDisplay/DataTable/DataTable';
import BarChart from '../../components/Charts/BarChart/BarChart';
import './Dashboard.css';

function Dashboard() {
  const tableData = {
    headers: ['ID', 'Name', 'Status', 'Date'],
    rows: [
      ['001', 'Project Alpha', 'Active', '2023-08-01'],
      ['002', 'Project Beta', 'Pending', '2023-08-02'],
      ['003', 'Project Gamma', 'Completed', '2023-08-03'],
    ],
  };

  const chartData = {
    title: 'Monthly Statistics',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    data: [65, 59, 80, 81, 56],
  };

  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        <Card content={{ header: 'Recent Projects' }}>
          <DataTable content={tableData} />
        </Card>
        <Card content={{ header: 'Statistics' }}>
          <BarChart content={chartData} />
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
