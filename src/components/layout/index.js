import React from 'react';
import Header from './header';
import Footer from './footer';
const Layout = ({ children, page }) => {
  return (
    <div style={{ width: '375px', height: '812px' }}>
      <Header page={page} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
