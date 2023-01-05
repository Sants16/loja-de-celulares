import React from 'react';
import { useStore } from '../hooks/pages/useStore'; //? Hook personalizado feito para não "poluir" o código com várias linhas
import { Formater } from '../services/Formater';
import { BsFillCartCheckFill,  BsFillCartPlusFill } from 'react-icons/bs'
import { ProductsArea, Button } from '../css/styles';

const Store = () => {
    const H = useStore() //* Assim eu consigo acessar todos os itens do hook useStore apartir do sufixo H, achei melhor deixar dessa forma pois ficaria mais facil identificar que o objeto parte de um hook personalizado
    
    return ( 
        <div>
            <ProductsArea>
                {
                    H.data.map(item => (
                        <div key={item.id}>
                            <h4>{item.title}</h4>
                            <img src={item.thumbnail} alt={item.title} />
                            <h5>{Formater.valorMonetario(item.price)}</h5>
                            <Button
                                adicionar
                                onClick={() => H.handleClick(item)}
                            >
                                {
                                    H.cart.some(itemCarrinho => itemCarrinho.id === item.id) 
                                    ? <BsFillCartCheckFill/> 
                                    : <BsFillCartPlusFill/>
                                }
                            </Button>
                        </div>
                    ))
                }
            </ProductsArea>
        </div>
     );
}
 
export default Store;