import { useState, useEffect } from "react"
import axios from "axios";

//Importar la información de useAuth
import { useAuth } from '../contexts/AuthContext';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Dashboard(){

    const [mensaje, setMensaje] = useState("");

    const {token} = useAuth();

    useEffect(() => {
        getWelcome();
    }, []);

    const getWelcome = async () => {
        const response = await axios.get(`${API_BASE_URL}/welcome`, {
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