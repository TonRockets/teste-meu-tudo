import React, { useEffect } from 'react';
import logo from '../assets/imgs/tudo-logo-1.png';
import alarm from '../assets/icons/alarm.png';
import nowLoan from '../assets/imgs/newLoan.png';
import portability from '../assets/imgs/portability.png';
import refinancing from '../assets/imgs/refinancing.png';
import creditCard from '../assets/imgs/creditCard.png';
import styled from 'styled-components';
import { SGrid, GridItems, GridContent } from '../styles/components';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { changeRoute } from '../app/user/userSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToNewLoan = () => {
    dispatch(changeRoute('/values'));
    return navigate('/values');
  };

  return (
    <div>
      <SGrid>
        <h3>Oportunidades</h3>
        <GridItems>
          <div>
            <GridContent disabled={false} onClick={goToNewLoan}>
              <img src={nowLoan} alt='Novo empréstimo' />
              <p>Novo Empréstimo</p>
              <p class='prices'>Até R$3.058,10</p>
            </GridContent>
          </div>

          <div>
            <GridContent disabled={false}>
              <img src={portability} alt='Portabilidade' />
              <p>Portabilidade</p>
              <p class='prices'>Até R$2.000,00</p>
            </GridContent>
          </div>

          <div>
            <GridContent disabled={true}>
              <img src={refinancing} alt='Refinanciamento' />
              <p>Refinanciamento</p>
              <p class='prices'></p>
            </GridContent>
          </div>

          <div>
            <GridContent disabled={true}>
              <img src={creditCard} alt='Cartão de crédito' />
              <p>Cartão de Crédito Consignado</p>
              <p class='prices'></p>
            </GridContent>
          </div>
        </GridItems>
      </SGrid>
    </div>
  );
};

export default Home;
