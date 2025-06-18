import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export default function AuthProvider( {children} ){

    const [is_logueado, setIsLogueado] = useState(false);
    const [token, setToken] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        getToken();
    }, []);

    const getToken = async() => {


        if( localStorage.getItem("token") ){
            try{

                const response = await axios.get("http://localhost:8888/refresh-token", {
                    headers: {
                        //Enviamos por cabecera el refresh token.
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
    
                if(response.data.success){
                    setIsLogueado(true);
                    //Seteamos el access token que acabamos de recuperar.
                    setToken(response.data.accessToken);
                }
    
            }catch(error){
                console.log(error);
            }finally{
                setCargando(false);
            }
        }else{
            setCargando(false);
        }

    }

    const login = ( {accessToken, refreshToken} ) => {
        //Setear que el usuario inició sesión.
        setIsLogueado(true);
        //Guardar el access token.
        setToken(accessToken);
        //Guardar el refresh token.
        localStorage.setItem("token", refreshToken);
    }

    const logout = () => {
        setIsLogueado(false);
        //Vaciar el access token.
        setToken(null);
        //Vaciar el refresh token.
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={ {is_logueado, token, login, logout} }>
            {
                (cargando) 
                ?
                    <div> Cargando... </div>
                :
                    children
            }
        </AuthContext.Provider>
    )

}

export function useAuth(){
    return useContext(AuthContext);
}