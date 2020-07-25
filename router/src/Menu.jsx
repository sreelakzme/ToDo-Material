import React from 'react';
import {NavLink} from  'react-router-dom';

const Menu =  () =>{
    return(
        <>
        <NavLink exact activeClassName='active_class' to= '/'>About Us</NavLink>
        <NavLink exact activeClassName='active_class' to= '/contact'>Contact Us</NavLink><br></br>
        <a href ="/">About Us</a>
        <a href ="/contact">Contact Us</a>

        </>
    );
};

export default Menu;