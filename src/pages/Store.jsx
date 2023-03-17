import React from "react";
import { useStore } from "../hooks/pages/useStore"; //? Hook personalizado feito para não "poluir" o código com várias linhas
import { Formater } from "../services/Formater";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { ProductButton, Message, StoreContainer } from "../css/stylesStore";

const Store = () => {
  const { cart, data, handleClick, isLoading } = useStore();

  return isLoading ? (
    <Message>Carregando...</Message>
  ) : (
    <StoreContainer>
      {data.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <img src={item.thumbnail} alt={item.title} />
          <h5>{Formater.valorMonetario(item.price)}</h5>
          <ProductButton adicionar onClick={() => handleClick(item)}>
            {cart.some((itemCarrinho) => itemCarrinho.id === item.id) ? (
              <BsFillCartCheckFill />
            ) : (
              <BsFillCartPlusFill />
            )}
          </ProductButton>
        </div>
      ))}
    </StoreContainer>
  );
};

export default Store;
