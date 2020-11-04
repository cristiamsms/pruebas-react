import React, { useContext } from 'react'

import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { Login } from '../login/Login';
import { Dashboardrouter } from './Dashboardrouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';
export const AppRouter = () => {
  const {user} = useContext(AuthContext);
    return (
        <Router>
        <div>
         
  
        
          <Switch>
           <PublicRoute exact path="/login" component={Login} isAuthenticated={user.logged}/>
           <PrivateRouter path="/" component={Dashboardrouter}
                          isAuthenticated={user.logged}/>
          </Switch>
        </div>
      </Router>
    )
}
