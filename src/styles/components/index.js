import styled, { css } from 'styled-components';

export const SBanner = styled.div`
  height: 164px;
  background-color: #000;
  color: #fff;
  border-radius: 0 0 40px 0;
  display: flex;
  justify-content: space-between;
  padding: 13px 15px 0 20px;

  img[id='logo'] {
    width: 30.94px;
    height: 31.31px;
  }

  img[id='alarm'] {
    width: 20px;
    height: 19.78px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
  }

  div p,
  h3 {
    margin: 0;
  }

  span > p {
    font-size: 19px;
    font-weight: 600;
    margin: 38px auto 18px auto;
  }

  div > p {
    font-size: 14px;
    font-weight: 100;
  }

  div h1 {
    color: #d22688;
    margin: 0;
  }

  div i {
    color: #d22688;
    font-size: 35px;
    margin-top: 9px;
  }
`;

export const SNav = styled.div`
  height: 56px;
  width: 375px;
  border-radius: 0 0 40px 0;
  background-color: #000;
  color: #fff;
  display: flex;

  i {
    font-size: 20px;
    margin: 11px 15px;
    cursor: pointer;
  }

  p {
    margin: 11px 8%;
    width: 215px;
    height: 20px;
    text-align: center;
    font-size: 17px;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const SGrid = styled.div`
  display: grid;
  justify-content: center;

  p {
    font-size: 16px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
  }
  .simulacao {
    height: 30px;
    margin-top: 28px;
    display: flex;
    justify-content: center;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 2px solid #bcbcbc;
    background-color: #ececec;
    width: 100px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }

  .simulacao > p {
    margin: 0 5px;
    font-size: 14px;
    line-height: 25px;
  }

  .continuar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 125px;
  }

  .continuar > a {
    color: #d22688;
    margin-top: 15px;
  }
`;

export const GridItems = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 17px;

  ${({ simpleGrid }) =>
    simpleGrid
      ? css`
          div {
            width: 163px;
            height: 58px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 5px 10px #5b5b5b33;
            display: grid;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          P {
            font-size: 16px;
            font-weight: 500;
            font-family: 'Montserrat', sans-serif;
          }
        `
      : css`
          > div {
            width: 163px;
            height: 162px;
            background-color: #ffffff;
            border-radius: 20px;
            box-shadow: 0px 5px 10px #5b5b5b33;
            display: grid;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
          }

          div > div > p {
            margin: 0;
          }

          img {
            width: 43.49px;
            height: 43.49px;
          }

          P {
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            font-weight: 700;
          }

          .prices {
            font-size: 12px;
            color: #d22688;
            font-weight: 400;
          }
        `}
`;

export const GridContent = styled.div`
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  ${({ simpleContent }) =>
    !simpleContent
      ? css`
          display: grid;
          grid-template-columns: auto;
          grid-template-rows: repeat(2, 1fr);
          align-items: self-end;
          width: 78%;
          height: 70%;
          margin: auto;
        `
      : ''}
`;

export const SButton = styled.button`
  color: #fff;
  width: 166px;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  background-color: #d22688;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`;
