import { Link } from 'react-router-dom';
import './App.css';
import Countries from './countries';

function Dashboard() {
  return (
    <>
    <h1 style={{textAlign: "center"}}>Country Data</h1>
    <div style={{textAlign: "center"}}>
      <Link to='/countries'>Go to Country Data</Link>
    </div>
  </>
  );
}

export default Dashboard;


// const [sorting, setSorting] = useState({column: "name", order: 'asc'});
// const columns = ['name', 'continent', 'Population', 'Flag'];