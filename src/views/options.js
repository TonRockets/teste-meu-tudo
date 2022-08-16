import { SGrid } from '../styles/components';
import logoIcon from '../assets/imgs/tudo-logo-1.png';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ClassHelper from '../app/helpers/classHelper';

const Options = () => {
  const helper = new ClassHelper();
  const installment = useSelector((state) => state.user.installmentsSelected);
  const loan = useSelector((state) => state.user.loanValueSelected);
  const [installmentWithTax, setInstallmentWithTax] = useState();
  const [finalOffer, setFinalOffer] = useState();

  useEffect(() => {
    const calculateOffer = () => {
      let calcInstallmentWithTax = loan * 0.013 + loan / installment;
      let result = calcInstallmentWithTax * installment;
      setInstallmentWithTax(calcInstallmentWithTax);
      setFinalOffer(result);
    };
    calculateOffer();
  });

  return (
    <div>
      <SGrid>
        <p>Escolha um banco</p>
        <SCard>
          <div className="part-1">
            <div className="logo">
              <img src={logoIcon} alt="logo meu tudo" />
            </div>
            <div className="values">
              <p className="semiBold-text">{installment} parcelas de</p>
              <p className="value">
                {installmentWithTax ? helper.formatCurrency(installmentWithTax) : ''}
              </p>
              <p className="thin-text">
                Total de {finalOffer ? helper.formatCurrency(finalOffer) : ''}
              </p>
            </div>
            <div className="tax">
              <p className="thin-text">
                com taxa de <span className="semiBold-text">1,30% a.m.</span>
              </p>
            </div>
          </div>
          <div className="part-2">
            <p className="thin-text">
              Previsão de pagamento <i className="fa-regular fa-circle-question"></i>
            </p>
            <p className="semiBold-text">19 de maio a 01 de junho de 2020</p>
          </div>
          <div className="part-3">
            <a href="/">Contratar</a>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </SCard>
      </SGrid>
    </div>
  );
};

const SCard = styled.div`
  width: 345px;
  height: 203px;
  border-radius: 10px;
  border-left: 6px solid #d22688;
  background-color: #fff;

  .part-1 {
    display: flex;
    width: 100%;
    height: 105px;
    margin-bottom: 10px;
  }

  .logo {
    display: flex;
    height: 63px;
    width: 63px;
    border: 2px solid #bcbcbc;
    border-radius: 10px;
    margin: auto;
  }

  img {
    width: 45px;
    height: 45px;
    margin: auto;
  }

  .values {
    display: grid;
    align-items: center;
    width: 120px;
    height: 65px;
    margin: auto;
    border-right: 2px solid #bcbcbc;
    padding-right: 20px;
  }

  .values > p {
    margin: 0;
  }

  .value {
    font-size: 18px;
    font-weight: bold;
    color: #d22688;
  }

  .tax {
    width: 81px;
    margin: auto;
  }

  .semiBold-text {
    margin: 0;
    font-size: 12px;
    font-weight: 600;
  }

  .thin-text {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
  }

  .part-2 {
    width: 90%;
    border-top: 2px solid #bcbcbc;
    margin: auto;
    padding-top: 15px;
  }

  .part-3 {
    text-align: right;
    width: 90%;
    margin: 5px auto;
    font-size: 13px;
    display: flex;
    align-items: flex-end;
    justify-content: end;
  }

  .part-3 > a,
  i {
    color: #d22688;
    text-decoration: none;
    margin: 0 3px;
  }
`;

export default Options;
