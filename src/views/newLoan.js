import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Banner from '../components/banner';

import {
  SNav,
  SGrid,
  GridItems,
  GridContent,
  SButton,
} from '../styles/components';
const NewLoan = () => {
  const navigate = useNavigate();
  return (
    <SNewLoan>
      <SGrid>
        <p>De quanto você precisa?</p>
        <GridItems simpleGrid>
          <div>
            <GridContent simpleContent={true} disabled={false}>
              <p class='prices'>R$ 300,00</p>
            </GridContent>
          </div>

          <div>
            <GridContent simpleContent={true} disabled={false}>
              <p class='prices'>R$ 2.660,00</p>
            </GridContent>
          </div>

          <div>
            <GridContent simpleContent={true} disabled={false}>
              <p class='prices'>R$ 5.030,00</p>
            </GridContent>
          </div>

          <div>
            <GridContent simpleContent={true} disabled={false}>
              <p class='prices'>R$ 7.407,93</p>
            </GridContent>
          </div>
        </GridItems>
        <div className='simulacao'>
          <p>Outro Valor</p>

          <input value='R$00,00' />
        </div>
        <div className='continuar'>
          <SButton onClick={() => navigate('/period')}>Continuar</SButton>
          <a href='/'>Simule pela parcela</a>
        </div>
      </SGrid>
    </SNewLoan>
  );
};

const SNewLoan = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  display: grid;
  justify-content: center;
`;

export default NewLoan;
