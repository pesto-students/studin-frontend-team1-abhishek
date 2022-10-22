import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Auth';
// import Cookies from 'js-cookie';
// import jwt_decode from 'jwt-decode';

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
        console.log('Adding user to auth.login --> ', jsonResult.email);
        auth.login(jsonResult.email);
        // localStorage.setItem("context", jsonResult.email);
        console.log("Verified active user");
        return jsonResult.email;
    }
    return;
  }
// const VerifyUserLogin = () => {
//     const auth = useAuth();
//     let token = Cookies.get('accessToken') || '';
//     if (token){
//         let decoded = jwt_decode(token);
//         // console.log('decoding token');
//         // console.log(decoded.payload.email);
//         auth.login(decoded.payload.email);
//         return decoded.payload.email;
//     }
//     return;
// }

export const RequireAuth =  ({children}) => {

    const auth = useAuth();    
    const location = useLocation();
    // const loggedIn = ''
    // useEffect(()=> {
    const loggedIn = VerifyUserLogin();
    //   },[auth])
    
    console.log("loggedin cred taking time -->", loggedIn);
    console.log("Updated user");
    console.log('auth.user -->', auth);
    // console.log(Cookies.get('accessToken'));

    
    if (!auth.user) {
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
