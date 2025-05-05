import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';

export default function CandidatoItem({ nombre, imagen }) {

    const [votos, setVotos] = useState(0);

    const sumar = () => {
        const votos_nuevo = votos + 1;
        setVotos(votos_nuevo);
    }

    const restar = () => {
        const votos_nuevo = votos - 1;
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
                {votos}
            </Card.Footer>
        </Card>
    )

}
