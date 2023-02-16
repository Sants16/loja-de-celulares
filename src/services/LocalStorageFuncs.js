//* localStorage é um objeto JavaScript que usamos para armazenar dados no navegador, assim permitimos que sites e aplicativos salvem pares chave-valor em um navegador sem data de expiração.

//* Assim os dados armazenador no navegador estarão salvos mesmo depois da janela do navegador ser fechada

//? sessionStorage, mantém o armazenamento enquando o navegador está aberto (incluindo quando a página é recarregada ou restaurada)

export const setItem = (chave, valor) => {
  //* localStorage só aceita strings como formato de dado, então foi por isso que usei a function JSON.stringify() no parâmetro valor, pois esse será passado como um json e desejamos o transformar em string

  localStorage.setItem(chave, JSON.stringify(valor)); //? Cria um novo par de chave-valor
};

export const getItem = (chave) => {
  //* Aqui se fez uso de JSON.parse() para retornar o obj json que foi convertido em string com o setItem para json novamente

  return JSON.parse(localStorage.getItem(chave)); //? Recupera o valor do par de chave-valor
};

//! localStorage.removeItem(chave)
//? Apaga um par de chave-valor específico

//! localStorage.clear()
//? Apaga todos os pares de chave-valor gravados no navegador
