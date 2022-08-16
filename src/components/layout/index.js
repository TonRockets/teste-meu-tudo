import Header from './header';
import Footer from './footer';
const Layout = ({ children }) => {
  return (
    <div style={{ width: '375px', height: '812px' }}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
