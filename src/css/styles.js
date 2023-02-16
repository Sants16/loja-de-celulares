import styled from "styled-components";
import { buttonStyle } from "./mixins";

export const ProductsArea = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 30px 10px;

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
`;

export const Button = styled.button`
  font-size: 25px;
  background: transparent;
  border: none;
  cursor: pointer;

  ${(props) => props.adicionar && buttonStyle("green")}
  ${(props) => props.remover && buttonStyle("crimson")}
`;

export const Message = styled.p`
  margin: 10px;
  font-size: 30px;
  font-weight: lighter;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  row-gap: 10px;
  background: #dc143c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  div {
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 5rem;

    label {
      align-self: flex-start;
      font-size: 20px;
      color: #ffffff;
    }

    input {
      width: 100%;
      height: 45px;
      background: #f6f6f6;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      border: none;
      text-align: center;
      font-size: 15px;
      font-weight: lighter;
      outline-width: 0;
    }

    &.btn {
      display: flex;
      flex-direction: row;
      button {
        margin-left: 10px;
        background: transparent;
        color: white;
        border: none;
        cursor: pointer;
        transition: all ease-in-out 0.2s;

        &:hover {
          color: black;
          filter: drop-shadow(4px 4px 5px #000);
        }
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  flex-direction: row !important;

  button {
    border: none;
    border-radius: 8px;
    width: 85px;
    height: 45px;
    text-align: center;
    cursor: pointer;
    box-shadow: 3px 3px 2px black;
  }
`;
