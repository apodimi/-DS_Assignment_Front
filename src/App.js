import './App.css';
import Home from './Home'
import Login from './Login'
import Dashboard from './Dashboard'
import Application from './Application'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index="index" element={<Home/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/application" element={<Application />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
