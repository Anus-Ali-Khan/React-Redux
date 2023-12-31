import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/users';

function Login() {
    const dispatch = useDispatch();

    return <div>
        <button
            onClick={() => {
                dispatch(login({ name: "Pedro", age: 20, email: "Pedro@gmail.com" }))
            }}>
            Login
        </button>
        <button onClick={() => {
            dispatch(logout())
        }}>
            LOGOUT
        </button>
    </div>
}

export default Login;