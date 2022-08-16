import './App.css';
import { Routes, Route } from 'react-router';
import { AuthRouter } from './app/configs/auth';
import Layout from './components/layout';
import Home from './views/home';
import NewLoan from './views/newLoan';
import Period from './views/period';
import Options from './views/options';
import { useSelector } from 'react-redux';
function Routers() {
  const realState = useSelector((state) => state.user);
  console.log(realState);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/values"
          element={
            <AuthRouter>
              <NewLoan />
            </AuthRouter>
          }
        />
        <Route
          path="/period"
          element={
            <AuthRouter>
              <Period />
            </AuthRouter>
          }
        />
        <Route
          path="/options"
          element={
            <AuthRouter>
              <Options />
            </AuthRouter>
          }
        />
      </Routes>
    </Layout>
  );
}

export default Routers;
