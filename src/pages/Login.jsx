import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//Importar la información de useAuth
import { useAuth } from '../contexts/AuthContext';

import { useNavigate } from 'react-router-dom';

export default function Login(){

    const {login} = useAuth();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        login();
        navigate("/dashboard");
    }

    return (
        <>
            <h1> Iniciar sesión  </h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Corre electrónico</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="passsord" />
                </Form.Group>
                <Button type="submit" variant="success"> Iniciar sesión </Button>
            </Form>
        </>
    )

}