import styled from "styled-components";
import { buttonStyle } from "./mixins";

export const StoreContainer = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 35px;

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

export const ProductButton = styled.button`
  font-size: 25px;
  background: transparent;
  border: none;
  cursor: pointer;

  ${(props) => props.adicionar && buttonStyle("green")}
  ${(props) => props.remover && buttonStyle("crimson")}
`;

export const Message = styled.p`
  font-size: 30px;
  font-weight: lighter;
`;
