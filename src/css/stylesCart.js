import styled from "styled-components";

export const CartContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    row-gap: 10px;

    .saldo {
      width: 250px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: baseline;
      align-self: flex-end;

      column-gap: 10px;
      background-color: #333;
      padding: 10px;
      border-radius: 5px;
      color: #fff;
    }

    .valor {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: baseline;
      align-self: flex-end;
      column-gap: 10px;

      h2 {
        font-size: 40px;
      }

      span {
        font-size: 30px;
      }
    }

    .product_area {
      display: flex;
      flex-direction: row;
      column-gap: 50px;
      margin-bottom: 15px;

      div {
        height: 320px;
        width: 230px;
        border: 1px solid rgb(194, 193, 193);
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }

    .cta {
      border: none;
      background: none;
      cursor: pointer;
    }

    .cta span {
      padding-bottom: 7px;
      letter-spacing: 4px;
      font-size: 14px;
      padding-right: 15px;
      text-transform: uppercase;
    }

    .cta svg {
      transform: translateX(-8px);
      transition: all 0.3s ease;
    }

    .cta:hover svg {
      transform: translateX(0);
    }

    .cta:active svg {
      transform: scale(0.9);
    }

    .hover-underline-animation {
      position: relative;
      color: black;
      padding-bottom: 20px;
    }

    .hover-underline-animation:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #000000;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    .cta:hover .hover-underline-animation:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
