import { useNavigate } from 'react-router-dom';
import logo from '../assets/imgs/tudo-logo-1.png';
import alarm from '../assets/icons/alarm.png';
import { useSelector } from 'react-redux';
import { SNav, SBanner } from '../styles/components';
import { useEffect, useState } from 'react';

const AppBar = () => {
  const home = useSelector((state) => state.user.home);
  const path = useSelector((state) => state.user.page);
  const [isHome, setIsHome] = useState();
  const [isPath, setIsPath] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setIsHome(home);
    setIsPath(path);
  }, [home, path]);

  return (
    <>
      {isPath === '/' || isHome ? (
        <SBanner>
          <img id="logo" src={logo} alt="logo meu tudo" />
          <div>
            <span>
              <p>Olá, José Carlos</p>
            </span>
            <p>Seu crédito disponível é de</p>
            <h1>R$5.048,10</h1>

            {/* TODO:
            Ajustar o ícone/botão " cricle down" */}
            <i className="fa-solid fa-circle-chevron-down"></i>
          </div>
          <img id="alarm" src={alarm} alt="alarme icon" />
        </SBanner>
      ) : (
        <SNav>
          <i className="fa-solid fa-angle-left" onClick={() => navigate(-1)}></i>
          <p>{path}</p>
        </SNav>
      )}
    </>
  );
};

export default AppBar;
