import React from 'react';
import Header from './header';

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Header />
      <div style={{ padding: '30px 16px 0 16px' }}>{children}</div>
    </>
  );
};

export default Layout;
