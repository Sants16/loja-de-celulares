import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderArea = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 50px;
    width: 100%;
    background-color: crimson;
    padding: 20px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 15px;
    }

    a {
        color: white;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Header = () => {
    return ( 
        <HeaderArea>
            <div>
                <Link to='/'>Store</Link>
                <Link to='/cart'>Cart</Link>
            </div>
            <Link to='/login'>Login</Link>
        </HeaderArea>
     );
}
 
export default Header;