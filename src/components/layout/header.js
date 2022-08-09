import logo from '../../assets/imgs/tudo-logo-1.png';
import alarm from '../../assets/icons/alarm.png';
import styled, { css } from 'styled-components';
const Header = () => {
  return (
    <header>
      <SHeader>
        <div>
          <p>12:00</p>
        </div>
        <div>
          <i class='fa-solid fa-signal'></i>
          <i class='fa-solid fa-wifi'></i>
          <i class='fa-solid fa-battery-full'></i>
        </div>
      </SHeader>
      <SBanner>
        <img id='logo' src={logo} alt='logo meu tudo' />
        <div>
          <span>
            <p>Olá, José Carlos</p>
          </span>
          <p>Seu crédito disponível é de</p>
          <h1>R$5.048,10</h1>

          {/* TODO:
            Ajustar o ícone/botão " cricle down" */}
          <i class='fa-solid fa-circle-chevron-down'></i>
        </div>
        <img id='alarm' src={alarm} alt='alarme icon' />
      </SBanner>
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

const SBanner = styled.div`
  height: 164px;
  background-color: #000;
  color: #fff;
  border-radius: 0 0 40px 0;
  display: flex;
  justify-content: space-between;
  padding: 13px 15px 0 20px;

  img[id='logo'] {
    width: 30.94px;
    height: 31.31px;
  }

  img[id='alarm'] {
    width: 20px;
    height: 19.78px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
  }

  div p,
  h3 {
    margin: 0;
  }

  span > p {
    font-size: 19px;
    font-weight: 600;
    margin: 38px auto 18px auto;
  }

  div > p {
    font-size: 14px;
    font-weight: 100;
  }

  div h1 {
    color: #d22688;
    margin: 0;
  }

  div i {
    color: #d22688;
    font-size: 35px;
    margin-top: 9px;
  }
`;
