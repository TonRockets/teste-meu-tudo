import { SGrid, GridItems, GridContent, SButton } from '../styles/components';
import { useState } from 'react';
import GoToPage from '../app/helpers/classHelper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Period = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const installments = useSelector((state) => state.user.state[2]);
  const [selectedinstallments, setSelectedinstallments] = useState('');
  const helper = new GoToPage(dispatch, navigate);

  return (
    <div>
      <SGrid>
        <p>Em quanto tempo você quer pagar?</p>
        <GridItems simpleGrid>
          {installments
            ? installments.suggestionInstallments.map((item, index) => (
                <div
                  key={index}
                  onClick={() => helper.selectPage('options', item)}
                >
                  <GridContent>
                    <p>{item} meses</p>
                  </GridContent>
                </div>
              ))
            : ''}
        </GridItems>
        <div className='simulacao'>
          <input
            type='number'
            placeholder='00'
            name='periods'
            value={selectedinstallments}
            onChange={(e) => setSelectedinstallments(e.target.value)}
          />
          <p>meses</p>
        </div>
        <div className='continuar'>
          <SButton
            disabled={selectedinstallments}
            onClick={() => helper.selectPage('options', selectedinstallments)}
          >
            Continuar
          </SButton>
        </div>
      </SGrid>
    </div>
  );
};

export default Period;
