import React from "react";
import { useCart } from "../hooks/pages/useCart";
import { Formater } from "../services/Formater";
import { BsFillCartDashFill } from "react-icons/bs";
import { ProductButton, Message } from "../css/stylesStore";
import { CartContainer } from "../css/stylesCart";

const Cart = () => {
  const { data, subTotal, saldo, buyItem, removeItem } = useCart();

  return data.length >= 1 ? (
    <CartContainer>
      <div>
        <div className="saldo">
          <h3>Seu saldo: </h3>
          <span>
            {saldo
              ? Formater.valorMonetario(Number(saldo))
              : "Saldo indisponível"}
          </span>
        </div>

        <div className="valor">
          <h2>Subtotal:</h2>
          <span>{subTotal}</span>
        </div>

        <div className="product_area">
          {data.map((item) => (
            <div key={item.id}>
              <h4>{item.title}</h4>
              <img src={item.thumbnail} alt={item.title} />
              <h5>{Formater.valorMonetario(item.price)}</h5>
              <ProductButton remover onClick={() => removeItem(item)}>
                <BsFillCartDashFill />
              </ProductButton>
            </div>
          ))}
        </div>

        <button class="cta" onClick={() => buyItem()}>
          <span class="hover-underline-animation"> Comprar </span>
          <svg
            viewBox="0 0 46 16"
            height="10"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-horizontal"
          >
            <path
              transform="translate(30)"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              data-name="Path 10"
              id="Path_10"
            ></path>
          </svg>
        </button>
      </div>
    </CartContainer>
  ) : (
    <Message>Sem itens no carrinho, adicione algum na aba Loja</Message>
  );
};

export default Cart;
