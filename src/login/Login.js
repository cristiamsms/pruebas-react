import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../type/types';

export const Login = ({history}) => {
    const {dispatch} = useContext( AuthContext);
    const handleLogin=()=>{
        const lastPath=localStorage.getItem('lastPath') || '/';
        dispatch({
            type:types.login,
            payload:{
                name:'cristian'
            }
        })
        history.replace(lastPath);
    }
    return (
        <div className="container mt-5">
            <h1>login</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >Login

            </button>
        </div>
    )
}
