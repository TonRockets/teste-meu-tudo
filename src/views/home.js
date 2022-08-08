import React from 'react';
import Layout from '../components/layout';
import nowLoan from '../assets/imgs/newLoan.png';
import portability from '../assets/imgs/portability.png';
import refinancing from '../assets/imgs/refinancing.png';
import creditCard from '../assets/imgs/creditCard.png';
import styled, { css } from 'styled-components';

const Home = () => {
  return (
    <Layout>
      <h3>Oportunidades</h3>
      <GridItems>
        <div>
          <GridContent disabled={false}>
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
    </Layout>
  );
};

const GridItems = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 17px;

  > div {
    width: 163px;
    height: 162px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 5px 10px #5b5b5b33;
    display: grid;
    align-items: center;
    justify-content: flex-start;
  }

  div > div > p {
    margin: 0;
  }

  img {
    width: 43.49px;
    height: 43.49px;
  }

  .gridTexts {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 700;
    word-break: break-word;
  }

  .prices {
    font-size: 12px;
    color: #d22688;
    font-weight: 400;
  }
`;

const GridContent = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(2, 1fr);
  align-items: self-end;
  width: 78%;
  height: 70%;
  margin: auto;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export default Home;
