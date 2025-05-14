import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Importar la información de useAuth
import { useAuth } from '../contexts/AuthContext';

//Importamos Link de react router dom
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

export default function Menu(){

    const navigate = useNavigate();

    const {is_logueado, logout} = useAuth();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/login");
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/"> Inicio </Nav.Link>
                        {
                            (is_logueado)
                            ?
                                <>
                                    <Nav.Link as={Link} to="/dashboard"> Dashboard </Nav.Link>
                                    <Nav.Link href="#" onClick={handleLogout}> Logout </Nav.Link>
                                </>
                            :
                                <>
                                    <Nav.Link as={Link} to="/login"> Login </Nav.Link>
                                </>
                        }                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}