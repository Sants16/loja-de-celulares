import { useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/LocalStorageFuncs";
import { Formater } from "../../services/Formater";

export function usePayment() {
  const [loading, setLoading] = useState(true);
  const { price } = useParams();

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  const user = getItem("user");
  const { name, email, saldo } = user;

  const time = Math.ceil(Math.random() * 20) + 1;

  return {
    price: Formater.valorMonetario(Number(price)),
    name,
    saldo: Formater.valorMonetario(Number(saldo)),
    time,
    loading,
  };
}
