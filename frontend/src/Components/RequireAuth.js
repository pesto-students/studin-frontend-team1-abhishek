import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Auth';
// import Cookies from 'js-cookie';
// import jwt_decode from 'jwt-decode';

const VerifyUserLogin = async() => {
    const url =  process.env.REACT_APP_API_URL + "/api/v1/auth/verifyUserLogin/";
    let accessToken = localStorage.getItem('accessToken');
    const auth = useAuth();
    const result = await fetch(url, {
      method: 'GET',
    //   withCredentials: true,
    //   credentials: 'include',
      headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${accessToken}`
      },
    })

    const jsonResult = await result.json();
    if (jsonResult.status === 200){
        console.log('Adding user to auth.login --> ', jsonResult);
        auth.login(jsonResult.email, jsonResult.userId);

        // localStorage.setItem("context", jsonResult.email);
        console.log("Verified active user");
        return jsonResult.email;
    }
    return;
  }

// const VerifyUserLoginLocal = async() => {
//   const auth = useAuth();
//   let accessToken = localStorage.getItem('accessToken');
//   let userEmail = localStorage.getItem('userEmail');
//   let userId = localStorage.getItem('userId');
//   await auth.login(userEmail, userId);
//   return;
// }

export const RequireAuth =  ({children}) => {

    const auth = useAuth();    
    const location = useLocation();
    // const loggedIn = ''
    // useEffect(()=> {
    //loading state
    // const loggedIn = VerifyUserLogin();
    let accessToken = localStorage.getItem('accessToken');
    let userEmail = localStorage.getItem('userEmail');
    let userId = localStorage.getItem('userId');
    auth.login(userEmail, userId);
    
    // },[auth])
    
    // console.log("loggedin cred taking time -->", loggedIn);
    console.log("Updated user");
    console.log('auth.user -->', auth);
    // console.log(Cookies.get('accessToken'));

    
    // if (!auth.userId) {
    if (!localStorage.getItem('userId')) {
        console.log("auth state lost")
        return <Navigate to='/' replace state={{ path: location.pathname }}/>
    }
    
    return children;


    // if (!auth.user){
        
    //     return loggedIn ? (
    //         children
    //     ) : (
    //         <Navigate to="/" replace state={{ from: location }} />
    //     );
    // }

}
