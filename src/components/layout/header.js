import styled from 'styled-components';
import AppBar from '../appBar';
const Header = ({ page }) => {
  return (
    <header>
      <SHeader>
        <div>
          <p>12:00</p>
        </div>
        <div>
          <i className="fa-solid fa-signal"></i>
          <i className="fa-solid fa-wifi"></i>
          <i className="fa-solid fa-battery-full"></i>
        </div>
      </SHeader>
      <AppBar page={page} />
    </header>
  );
};
export default Header;

const SHeader = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 19px 0 21px;
  background-color: #000;
  font-family: 'Roboto', sans-serif;
  color: #fff;

  div i {
    margin: 0 5px;
  }
`;
