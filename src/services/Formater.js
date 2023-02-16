export const Formater = {
  valorMonetario(valor) {
    return valor.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
    });
  },
};
