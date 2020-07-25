import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';

const User = () => {
    const {name} = useParams();
    const location = useLocation();
    const history = useHistory();
    
    return(
        <>
        <h1>Hello I am User {name} page.</h1>
        <p>My location is {location.pathname}</p>
        {location.pathname === `/user/sree/lakshmi` ? (
        <button onClick={()=>history.goBack()}>Back</button>
        ):null}
        </>
    );
};

export default User;