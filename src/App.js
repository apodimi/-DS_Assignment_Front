import './App.css';
import Home from './Home'
import Login from './Login'
import DashboardAdmin from './DashboardAdmin'
import Application from './Application'
import DashboardUser from './DashboardUser';
import Register from './Register'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index="index" element={<Home/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard-admin" element={<DashboardAdmin />}></Route>
          <Route path="/dashboard-user" element={<DashboardUser />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/application" element={<Application />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
