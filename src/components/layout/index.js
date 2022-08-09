import React from 'react';
import Header from './header';
import Footer from './footer';
const Layout = ({ children, pageTitle }) => {
  return (
    <div style={{ width: '375px', height: '812px' }}>
      <Header />
      <div style={{ padding: '30px 16px 0 16px', height: '65%' }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
