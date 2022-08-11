import { useNavigate } from 'react-router-dom';
import logo from '../../assets/imgs/tudo-logo-1.png';
import alarm from '../../assets/icons/alarm.png';
import { useSelector } from 'react-redux';
import { SNav, SBanner } from '../../styles/components';
import { useState } from 'react';

const Banner = ({ page }) => {
  const home = useSelector((state) => state.user.home);
  const navigate = useNavigate();
  return (
    <>
      {home === '/' || home === true ? (
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
      ) : (
        <SNav>
          <i class='fa-solid fa-angle-left' onClick={() => navigate('/')}></i>
          <p>{page}</p>
        </SNav>
      )}
    </>
  );
};

export default Banner;
