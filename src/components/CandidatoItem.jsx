import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';

export default function CandidatoItem({ ID, nombre, imagen, initialVotos, changeVotos }) {

    const [votos, setVotos] = useState(initialVotos);

    const sumar = () => {
        const votos_nuevo = votos + 1;
        changeVotos( votos_nuevo - votos );
        setVotos(votos_nuevo);
    }

    const restar = () => {
        const votos_nuevo = votos - 1;
        changeVotos( votos_nuevo - votos );
        setVotos(votos_nuevo);
    }

    const handleVotos = (e) => {
        const votos_nuevo = Number(e.target.value);
        if( isNaN(votos_nuevo) || votos_nuevo < 1 ){
            return false;
        }
        changeVotos( votos_nuevo - votos );
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
                <Form.Group className="my-3">
                    <Form.Control type="number" value={votos} onChange={handleVotos} />
                </Form.Group>
            </Card.Footer>
        </Card>
    )

}