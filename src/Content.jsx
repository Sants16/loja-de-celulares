import React from 'react';
import { Switch as Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Store from './pages/Store';

const Content = () => {
    return ( 
        <Routes>
            <Route exact path='/' component={Store}/>
            <Route exact path='/cart' component={Cart}/>
        </Routes>
     );
}
 
export default Content;