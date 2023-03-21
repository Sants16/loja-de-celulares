import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItem, setItem } from "../../services/LocalStorageFuncs";
import { Formater } from "../../services/Formater";

export function useCart() {
  const [data, setData] = useState(getItem("carrinho") ?? []);
  const navigate = useNavigate();
  const user = getItem("user");
  const { saldo } = user;

  const removeItem = (obj) => {
    const arrFilter = data.filter((itemCarrinho) => itemCarrinho.id !== obj.id);

    setData(arrFilter);
    setItem("carrinho", arrFilter);
  };

  const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);

  const buyItem = () => {
    if (subTotal > saldo) {
      navigate(`/app/payment/reject`);
      setItem("carrinho", []);
    } else {
      navigate(`/app/payment/approved/${subTotal}`);
    }
  };

  return {
    data,
    removeItem,
    subTotal: Formater.valorMonetario(subTotal),
    saldo: Number(saldo),
    buyItem,
  };
}
