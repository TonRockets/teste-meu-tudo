import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { SGrid, GridItems, GridContent, SButton } from '../styles/components';
import { useState } from 'react';
import ClassHelper from '../app/helpers/classHelper';

const NewLoan = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const helper = new ClassHelper(dispatch, navigate);
  const offers = useSelector((state) => state.user.state[1]);
  const [inputPrice, setInputPrice] = useState('');

  return (
    <div>
      <SGrid>
        <p>De quanto você precisa?</p>
        <GridItems simpleGrid>
          {offers
            ? offers.suggestionValues.map((item, index) => (
                <div key={index} onClick={() => helper.selectPage('period', item)}>
                  <GridContent simpleContent={true} disabled={false}>
                    <p className="prices">{helper.formatCurrency(item)}</p>
                  </GridContent>
                </div>
              ))
            : ''}
        </GridItems>
        <div className="simulacao">
          <p>Outro Valor</p>

          <input
            type="number"
            placeholder="R$00,00"
            name="price"
            onChange={(e) => setInputPrice(e.target.value)}
            defaultValue={inputPrice}
          />
        </div>
        <div className="continuar">
          <SButton disabled={inputPrice} onClick={() => helper.selectPage('period', inputPrice)}>
            Continuar
          </SButton>
          <a href="/">Simule pela parcela</a>
        </div>
      </SGrid>
    </div>
  );
};

export default NewLoan;
