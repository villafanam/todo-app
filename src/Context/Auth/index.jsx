import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import cookie from 'react-cookies';
import axios from 'axios';



// const testUsers = {
//   admin: {
//     username: 'admin',
//     password: 'ADMIN',
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlZDFiMzNjZTQ5MDAxODlmMzhiNyIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJ1cGRhdGUiLCJyZWFkIiwiZGVsZXRlIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA3OTMxLCJleHAiOjE2NTg5MTE1MzF9.bqe-52if5K50rGn30P4fheuAa2qWuxse9tWiuH4cnUM',
//   },
//   editor: {
//     username: 'editor',
//     password: 'EDITOR',
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlZjk5MzNjZTQ5MDAxODlmMzhiYSIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJ1cGRhdGUiLCJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA4NTY5LCJleHAiOjE2NTg5MTIxNjl9.073ppQCHbplYN9befn8JElcP4zgFX6TEe_ARUQZc0KU',
//   },
//   user: {
//     username: 'user',
//     password: 'USER',
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBmMGZjMzNjZTQ5MDAxODlmMzhjMCIsImNhcGFiaWxpdGllcyI6WyJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA4OTI0LCJleHAiOjE2NTg5MTI1MjR9.t7c7k2LbaTxsdfYjx_WC3QiP4MycU8sZryVyXQqJQH',
//   },

// }

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {


  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ capabilities: [] });
  const [error, setError] = useState(null);
  const [token, setToken] = useState('');

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }

 const login = async (username, password) => {
    // let auth = testUsers[username];
    let config = {
      method: 'post',
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/signin',
      auth: {username, password},
    }

    let auth = await axios(config);
    let token = auth.data.token;

    if (token) {
      try {
        validateToken(token);
      } catch (e) {
        setLoginState(loggedIn, token, user, e);
        console.error(e);
      }
    }
  }

  const logout = () => {
    setLoginState(false, null, {});
  };

 const validateToken = token => {
    try {
      let validUser = jwt_decode(token);
      setLoginState(true, token, validUser);
    }
    catch (e) {
      setLoginState(false, null, {}, e);
      console.log('Token Validation Error', e);
    }

  };

  const setLoginState = (loggedIn, token, user, error) => {
    cookie.save('auth', token);
    
    setToken(token);
    setLoggedIn(loggedIn);
    setUser(user);
    setError(error || null);
  };


  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    validateToken(token);
  }, []);

  const values = {
    loggedIn, 
    can,
    login,
    logout,
    user,
    error,
    token,
  };


  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );

}

export default AuthProvider;
