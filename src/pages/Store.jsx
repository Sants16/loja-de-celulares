import React from "react";
import { useStore } from "../hooks/pages/useStore"; //? Hook personalizado feito para não "poluir" o código com várias linhas
import { Formater } from "../services/Formater";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { ProductsArea, Button, Message } from "../css/styles";

const Store = () => {
  const { cart, data, handleClick, isLoading } = useStore();

  return isLoading ? (
    <Message>Carregando...</Message>
  ) : (
    <ProductsArea>
      {data.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <img src={item.thumbnail} alt={item.title} />
          <h5>{Formater.valorMonetario(item.price)}</h5>
          <Button adicionar onClick={() => handleClick(item)}>
            {cart.some((itemCarrinho) => itemCarrinho.id === item.id) ? (
              <BsFillCartCheckFill />
            ) : (
              <BsFillCartPlusFill />
            )}
          </Button>
        </div>
      ))}
    </ProductsArea>
  );
};

export default Store;
