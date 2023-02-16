import { useEffect, useState } from "react";
import { setItem, getItem } from "../../services/LocalStorageFuncs";

export function useStore() {
  const [data, setData] = useState(getItem("estoque") ?? []);
  const [cart, setCart] = useState(getItem("carrinho") ?? []); //? se o carrinho for null ou undefined o state vai ser []

  //* Pega os celulares que serão exibidos da api
  const fetchApi = async () => {
    const apiURL = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
    const response = await fetch(apiURL);
    const responseJson = await response.json();
    const results = responseJson.results;
    setData(results);
    setItem("estoque", results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleClick = (obj) => {
    //* Verifica se o elemento existe dentro do carrinho de compras
    const elemento = cart.find((item) => item.id === obj.id);

    //* Caso o elemento exista significa que o usuário está apertando o botão para excluir esse elemento do carrinho
    if (elemento) {
      //? Pega todos os itens que são difirentes do elemento que o usuário deseja excluir, assim fazendo uma remoção
      const arrFilter = cart.filter((item) => item.id !== obj.id);
      setCart(arrFilter);
      setItem("carrinho", arrFilter); //* Salva a alteração no localStorage
    } else {
      //? Caso o elemento não exista no carrinho significa que o usuário deseja deseja incluido no carrinho, sendo assim setamos os itens do carrinho como todos os itens que já existem nele (...cart) + o novo item que será adicionado (obj)
      setCart([...cart, obj]);
      setItem("carrinho", [...cart, obj]); //* Salva a alteração no localStorage
    }
  };

  return {
    data,
    setData,
    cart,
    setCart,
    handleClick,
  };
}
