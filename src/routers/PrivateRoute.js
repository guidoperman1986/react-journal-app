import React from 'react'
import { Redirect, Route } from "react-router";

import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated, 
    component: Component, 
    ...rest
}) => {
    console.log('Private ', isAuthenticated);
    return (
        <Route
            {...rest}
            component={(props)=>(
                (isAuthenticated)
                    ? ( <Component {...props} /> )
                    : ( <Redirect to='/auth/login' /> )
            )} 
        >
            
        </Route>
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
