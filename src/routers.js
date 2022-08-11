import './App.css';
import { Routes, Route, Navigate } from 'react-router';
import Layout from './components/layout';
import Home from './views/home';
import NewLoan from './views/newLoan';
import Period from './views/period';
import Options from './views/options';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
function Routers() {
  const [currentPage, setCurrentPage] = useState();
  const isHome = useSelector((state) => state.user.home);
  const HomeRouter = ({ children, page }) => {
    if (page === '/values') {
      setCurrentPage('Valores');
    }
    if (page === '/period') {
      setCurrentPage('Período');
    }
    if (page === '/options') {
      setCurrentPage('Opções');
    }

    if (isHome) {
      return <Navigate to={'/'} replace />;
    } else {
      return children;
    }
  };

  return (
    <Layout page={currentPage}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/values'
          element={
            <HomeRouter page={'/values'}>
              <NewLoan />
            </HomeRouter>
          }
        />
        <Route
          path='/period'
          element={
            <HomeRouter page={'/period'}>
              <Period />
            </HomeRouter>
          }
        />
        <Route
          path='/options'
          element={
            <HomeRouter page={'/options'}>
              <Options />
            </HomeRouter>
          }
        />
      </Routes>
    </Layout>
  );
}

export default Routers;
