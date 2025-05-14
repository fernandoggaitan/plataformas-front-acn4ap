import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Lista from './components/Lista';
import Menu from './components/Menu';

//Importar react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Importar las páginas
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Error404 from './pages/Error404';

//Importar contextos
import AuthProvider from './contexts/AuthContext';
import ProtectedRoute from './contexts/ProtectedRoute';

export default function App(){

  return (

    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={ <Inicio /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="*" element={ <Error404 /> } />
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
    
  )

}