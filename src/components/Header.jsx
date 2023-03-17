import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderArea = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
  background-color: crimson;
  padding: 20px;

  a {
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    display: flex;
    column-gap: 25px;
  }
`;

const Header = () => {
  return (
    <HeaderArea>
      <div>
        <Link to="store">Loja</Link>
        <Link to="cart">Carrinho</Link>
      </div>
      <Link to="profile">Meu Perfil</Link>
    </HeaderArea>
  );
};

export default Header;
