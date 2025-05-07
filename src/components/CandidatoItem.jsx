import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';

export default function CandidatoItem({ nombre, imagen, onChangeVotos }) {

    const [votos, setVotos] = useState(0);
    const [votos, setVotos] = useState(0);

    const sumar = () => {
        const votos_nuevo = votos + 1;
        onChangeVotos(votos_nuevo - votos);
        setVotos(votos_nuevo);
    }

    const restar = () => {
        const votos_nuevo = votos - 1;
        onChangeVotos(votos_nuevo - votos);
        setVotos(votos_nuevo);
    }

    const handleVotos = (e) => {
        const votos_nuevo = Number( e.target.value );
        //Validación de lo que ingresa el usuario por teclado.
        if( isNaN(votos_nuevo) || votos_nuevo < 0 ) return null;
        onChangeVotos(votos_nuevo - votos);
        setVotos(votos_nuevo);
    }

    return (
        <Card>
            <Card.Img style={{ maxWidth: "128px" }} variant="top" src={imagen} />
            <Card.Body>
                <Card.Title> {nombre} </Card.Title>
            </Card.Body>
            <Card.Footer>
                <Button onClick={sumar} variant="success"> + </Button>
                <Button onClick={restar} variant="danger" disabled={votos < 1}> - </Button>
                <Form.Control size="lg" type="numbre" className='my-3' value={votos} onChange={handleVotos} />                
            </Card.Footer>
        </Card>
    )

}

