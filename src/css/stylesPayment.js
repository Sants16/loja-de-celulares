import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 0;

  div {
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
