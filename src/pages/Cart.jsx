import React from 'react';
import { useCart } from '../hooks/pages/useCart';
import { Formater } from '../services/Formater';
import { BsFillCartDashFill } from 'react-icons/bs'
import { ProductsArea, Button } from '../css/styles'

const Cart = () => {
    const H = useCart()

    return ( 
        <div>
            {H.data.length >= 1 && (
                <div style={{marginTop: "30px"}}>
                    <h2>Subtotal:</h2> <span>{Formater.valorMonetario(H.subTotal)}</span>
                </div>
            )}
            <ProductsArea>
                {
                    H.data.length >= 1 ? H.data.map(item => (
                        <div key={item.id}>
                            <h4>{item.title}</h4>
                            <img src={item.thumbnail} alt={item.title} />
                            <h5>{Formater.valorMonetario(item.price)}</h5>
                            <Button
                                remover
                                onClick={() => H.removeItem(item)}
                            >
                                <BsFillCartDashFill/>
                            </Button>
                        </div>
                    ))
                    : <h3>Sem itens no carrinho, adicione algum na aba Store</h3>
                }
            </ProductsArea>
        </div>
     );
}
 
export default Cart;