import {
  SNav,
  SGrid,
  GridItems,
  GridContent,
  SButton,
} from '../styles/components';
import { useNavigate } from 'react-router-dom';

const Period = () => {
  const navigate = useNavigate();
  return (
    <di>
      <SGrid>
        <p>Em quanto tempo você quer pagar?</p>
        <GridItems simpleGrid>
          <div>
            <GridContent>
              <p>48 meses</p>
            </GridContent>
          </div>
          <div>
            <GridContent>
              <p>60 meses</p>
            </GridContent>
          </div>
          <div>
            <GridContent>
              <p>72 meses</p>
            </GridContent>
          </div>
          <div>
            <GridContent>
              <p>84 meses</p>
            </GridContent>
          </div>
        </GridItems>
        <div className='simulacao'>
          <input value='00' />
          <p>meses</p>
        </div>
        <div className='continuar'>
          <SButton onClick={() => navigate('/options')}>Continuar</SButton>
        </div>
      </SGrid>
    </di>
  );
};

export default Period;
