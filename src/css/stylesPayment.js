import styled from "styled-components";

export const PaymentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;

    span {
      font-size: 100px;
      color: green;
    }

    div {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      row-gap: 8px;
      background-color: #e6e6e6;
      border-radius: 15px;
      padding: 20px;
      font-size: 40px;
    }
  }
`;

export const CantBuyContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin-top: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      color: red;
      font-size: 100px;
    }

    div {
      margin: 0;
    }
  }
`;
