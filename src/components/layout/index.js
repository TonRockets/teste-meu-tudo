import React from 'react';
import Header from './header';

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
