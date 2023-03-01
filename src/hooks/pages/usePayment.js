import { useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/LocalStorageFuncs";

export function usePayment() {
  const [loading, setLoading] = useState(true);
  const { price } = useParams();

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  const user = getItem("user");
  const { name, saldo } = user;

  const time = Math.ceil(Math.random() * 20) + 1;

  return {
    price: Number(price),
    name,
    saldo: Number(saldo),
    time,
    loading,
  };
}
