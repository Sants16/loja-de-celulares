import React from "react";
import { useCart } from "../hooks/pages/useCart";
import { Formater } from "../services/Formater";
import { BsFillCartDashFill } from "react-icons/bs";
import { ProductsArea, Button, Message } from "../css/styles";

const Cart = () => {
  const { data, subTotal, saldo, buyItem, removeItem } = useCart();

  return data.length >= 1 ? (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>{Formater.valorMonetario(saldo)}</p>
      <Message>
        <h2>Subtotal:</h2>
        <span>{Formater.valorMonetario(subTotal)}</span>
      </Message>
      <ProductsArea>
        {data.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <img src={item.thumbnail} alt={item.title} />
            <h5>{Formater.valorMonetario(item.price)}</h5>
            <Button remover onClick={() => removeItem(item)}>
              <BsFillCartDashFill />
            </Button>
          </div>
        ))}
      </ProductsArea>
      <button onClick={() => buyItem()}>Comprar</button>
      <br />
      <br />
    </div>
  ) : (
    <Message>Sem itens no carrinho, adicione algum na aba Loja</Message>
  );
};

export default Cart;
