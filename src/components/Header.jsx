import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
  width: 100%;
  background-color: crimson;
  padding: 20px;

  a {
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <HeaderArea>
      <Link to="store">Loja</Link>
      <Link to="cart">Carrinho</Link>
      <Link to="profile">Meu Perfil</Link>
    </HeaderArea>
  );
};

export default Header;
