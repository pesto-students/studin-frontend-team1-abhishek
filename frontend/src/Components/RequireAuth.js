import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Auth';

const VerifyUserLogin = async() => {
    const url = "http://localhost:3000/api/v1/auth/verifyUserLogin/";
    const auth = useAuth();
    const result = await fetch(url, {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      },
    })

    const jsonResult = await result.json();
    if (jsonResult.status === 200){
        auth.login(jsonResult.email);
        console.log("Verified active user");
        return jsonResult.email;
    }
    return;
  }

export const RequireAuth =  ({children}) => {
    const auth = useAuth();    
    const location = useLocation();
    const loggedIn = VerifyUserLogin();
    console.log("loggedin cred taking time -->", loggedIn);
    console.log("Updated user");
    console.log('auth.user -->', auth);

    if (!auth.user) {
        return <Navigate to='/' state={{ path: location.pathname }}/>
    }
    
    return children;
}
