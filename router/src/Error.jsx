import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return(
        <>
        <h1>404 not found!!.</h1>
        <p>Sorry!!!</p>
        <NavLink to="/">Go Back</NavLink>
        </>
    );
};

export default Error;