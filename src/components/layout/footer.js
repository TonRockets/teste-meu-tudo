import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import homeIcon from '../../assets/icons/botao-home.png';
import fileIcon from '../../assets/icons/botao-file.png';
import questionIcon from '../../assets/icons/botao-question.png';
import userIcon from '../../assets/icons/botao-user.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeRoute } from '../../app/user/userSlice';
const Footer = () => {
  const homeState = useSelector((state) => state.user.home);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToHome = () => {
    dispatch(changeRoute({ home: true, page: '/' }));
    navigate('/');
  };

  return (
    <SFooter>
      <Menu home={homeState}>
        <div onClick={goToHome}>
          <img src={homeIcon} alt='botão home do menu ne navegação' />
          <p>Início</p>
        </div>
        <div>
          <img src={fileIcon} alt='botão contratos do menu ne navegação' />
          <p>Contratos</p>
        </div>
        <div>
          <img src={questionIcon} alt='botão home do menu ne navegação' />
          <p>Dúvidas</p>
        </div>
        <div>
          <img src={userIcon} alt='botão home do menu ne navegação' />
          <p>Conta</p>
        </div>
      </Menu>
    </SFooter>
  );
};

const SFooter = styled.div`
  height: 83px;
  width: 375px;
  position: fixed;
  bottom: 0;
`;

const Menu = styled.div`
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    text-align: center;
    cursor: pointer;
  }

  div > p {
    font-weight: 500;
    margin: 0;
  }
`;

export default Footer;
