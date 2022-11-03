import { useContext } from "react";
import { createContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const login = (user, userId) => {
        setUser(user);
        setUserId(userId);
    }
    const logout = () => {
        setUser(null);
        setUserId(null);
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('userEmail');
        window.localStorage.removeItem('userId');
    }

    return (
        <AuthContext.Provider value={{user, userId, login, logout}}>{children}</AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
}