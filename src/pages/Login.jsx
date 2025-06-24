import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

//Importar la información de useAuth
import { useAuth } from '../contexts/AuthContext';

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

//Importamos axios para consumir el API
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Login(){

    const {login} = useAuth();

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");

    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();

        const response = await axios.post(`${API_BASE_URL}/login`, {
            email,
            contrasena
        });

        if( response.data.success ){
            login( response.data );
            navigate("/dashboard");

        }else{
            Swal.fire({
                title: "Error",
                text: response.data.message,
                icon: "error"
            });
        }

    }

    return (
        <>
            <h1> Iniciar sesión  </h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Corre electrónico</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                </Form.Group>
                <Button type="submit" variant="success"> Iniciar sesión </Button>
            </Form>
        </>
    )

}