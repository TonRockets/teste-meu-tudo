import nowLoan from '../assets/imgs/newLoan.png';
import portability from '../assets/imgs/portability.png';
import refinancing from '../assets/imgs/refinancing.png';
import creditCard from '../assets/imgs/creditCard.png';
import { SGrid, GridItems, GridContent } from '../styles/components';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setState } from '../app/features/userSlice';
import {
  getHomeValues,
  getLoanValues,
  getPeriodsValues,
  getSimulationValue
} from '../app/services';
import { useEffect, useState } from 'react';
import ClassHelper from '../app/helpers/classHelper';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stateOfferValue, setStateOfferValue] = useState(false);
  const helper = new ClassHelper(dispatch, navigate);

  useEffect(() => {
    const showLoanValues = async () => {
      const dataObject = Promise.all([
        getHomeValues(),
        getLoanValues(),
        getPeriodsValues(),
        getSimulationValue()
      ]).then((response) => {
        return response.map((item) => item.data);
      });

      const data = await dataObject;
      if (data) {
        dispatch(setState([...data]));
        setStateOfferValue({
          newLoanValue: data[0].newLoanMaxValue,
          portability: data[0].portabilityMaxValue
        });
      }
    };

    showLoanValues();
  }, [dispatch]);

  return (
    <div>
      {stateOfferValue ? (
        <SGrid>
          <h3>Oportunidades</h3>
          <GridItems>
            <div onClick={() => helper.selectPage('values', stateOfferValue.newLoanValue)}>
              <GridContent disabled={false}>
                <img src={nowLoan} alt="Novo empréstimo" />
                <p>Novo Empréstimo</p>
                <p className="prices">
                  Até R$
                  {stateOfferValue.newLoanValue}
                </p>
              </GridContent>
            </div>

            <div>
              <GridContent disabled={false}>
                <img src={portability} alt="Portabilidade" />
                <p>Portabilidade</p>
                <p className="prices">
                  Até R$
                  {stateOfferValue.portability}
                </p>
              </GridContent>
            </div>

            <div>
              <GridContent disabled={true}>
                <img src={refinancing} alt="Refinanciamento" />
                <p>Refinanciamento</p>
                <p className="prices"></p>
              </GridContent>
            </div>

            <div>
              <GridContent disabled={true}>
                <img src={creditCard} alt="Cartão de crédito" />
                <p>Cartão de Crédito Consignado</p>
                <p className="prices"></p>
              </GridContent>
            </div>
          </GridItems>
        </SGrid>
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;
