import { useState } from "react";
import { getItem, setItem } from '../../services/LocalStorageFuncs'

export function useCart() {

    const [data, setData] = useState(getItem('carrinho') ?? [])

    const removeItem = obj => {
        const arrFilter = data.filter(itemCarrinho => itemCarrinho.id !== obj.id)

        setData(arrFilter)
        setItem('carrinho', arrFilter)
    }

    const subTotal = data.reduce((acc, cur) => acc + cur.price ,0)

    return {
        data,
        setData,
        removeItem,
        subTotal
    }
}