import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Lista from './components/Lista';

export default function App(){

  return (
    <Container>
      <h1> Mi primer APP en React </h1>
      <Lista />
    </Container>    
  )

}