import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PrivateRouter = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {
    localStorage.setItem('lastPath',rest.location.pathname);
    return (
        <Route {...rest}
        component={(props) =>(
            (  isAuthenticated) 
                ? (<Component {...props}/>)
                : (<Redirect to="/login"/>)
        )

        }>
            
        </Route>
    )
}

PrivateRouter.propTyps = {
    isAuthenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}