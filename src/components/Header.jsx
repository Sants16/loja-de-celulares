import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderArea = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    background-color: crimson;
    padding: 20px;

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
            <Link to='/'>Store</Link>
            <Link to='/cart'>Cart</Link>
        </HeaderArea>
     );
}
 
export default Header;