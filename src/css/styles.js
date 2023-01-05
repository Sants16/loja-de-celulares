import styled from 'styled-components'
import { buttonStyle } from './mixins';

export const ProductsArea = styled.div`
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 30px 0;

    /* Define os estilos para a tag div filha desse component estilizado */
    div {
        height: 320px;
        width: 230px;
        border: 1px solid rgb(194, 193, 193);
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 20px;

        /* Estiliza o botão dentro da div */
        /* button {
            font-size: 25px;
            background: transparent;
            border: none;
            cursor: pointer;
        } */
    }
`;

export const Button = styled.button`
    font-size: 25px;
    background: transparent;
    border: none;
    cursor: pointer;

    ${props => props.adicionar && buttonStyle('green')}
    ${props => props.remover && buttonStyle('crimson')}
`