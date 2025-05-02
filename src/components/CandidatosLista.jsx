import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CandidatoItem from './CandidatoItem';
import { useState } from 'react';

export default function CandidatosLista(){

    const [cant_votos, setCantVotos] = useState(0);

    const [lista, setLista] = useState([
        {
            ID: 1,
            nombre: "Sofía",
            imagen: "https://randomuser.me/api/portraits/women/90.jpg",
            votos: 0
        },
        {
            ID: 2,
            nombre: "Pablo",
            imagen: "https://randomuser.me/api/portraits/men/49.jpg",
            votos: 0
        },
        {
            ID: 3,
            nombre: "Valeria",
            imagen: "https://randomuser.me/api/portraits/women/61.jpg",
            votos: 0
        }
    ]);

    const handlerCandidato = (diferencia) => {
        setCantVotos( cant_votos + diferencia );
    }

    return (
        <>
            <p> Cantidad: {cant_votos} </p>
            <Row>
                {lista.map( c => (
                    <Col key={c.ID}>
                        <CandidatoItem
                            ID={c.ID}           
                            nombre={c.nombre}
                            imagen={c.imagen}
                            initialVotos={c.votos}
                            changeVotos={handlerCandidato}
                        />
                    </Col>
                ))}
            </Row>
        </>
    );

}