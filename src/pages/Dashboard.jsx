import { useState, useEffect } from "react"
import axios from "axios";

//Importar la información de useAuth
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard(){

    const [mensaje, setMensaje] = useState("");

    const {token} = useAuth();

    useEffect(() => {
        getWelcome();
    }, []);

    const getWelcome = async () => {
        const response = await axios.get("http://localhost:8888/welcome", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setMensaje(response.data.message);
    }

    return (
        <>
            <h1> {mensaje} </h1>
        </>
    )

}