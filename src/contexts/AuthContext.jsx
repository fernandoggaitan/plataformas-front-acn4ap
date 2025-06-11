import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider( {children} ){

    const [is_logueado, setIsLogueado] = useState(false);
    const [token, setToken] = useState(null);

    const login = (token) => {
        setIsLogueado(true);
        setToken(token);
    }

    const logout = () => {
        setIsLogueado(false);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={ {is_logueado, token, login, logout} }>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth(){
    return useContext(AuthContext);
}