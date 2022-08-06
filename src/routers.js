import './App.css';
import { Router } from '@reach/router';
import Home from './views/home';
function Routers() {
  return (
    <Router>
      <Home path='/' />
    </Router>
  );
}

export default Routers;
