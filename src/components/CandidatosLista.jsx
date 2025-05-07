import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CandidatoItem from './CandidatoItem';
import { use, useState } from 'react';

export default function CandidatosLista(){

    const [cant_votos, setCantVotos] = useState(0);

    const [lista, setLista] = useState([
        {
            ID: 1,
            nombre: "Sofía",
            imagen: "https://randomuser.me/api/portraits/women/90.jpg"
        },
        {
            ID: 2,
            nombre:"Pablo",
            imagen: "https://randomuser.me/api/portraits/men/49.jpg"      
        },
        {
            ID: 3,
            nombre: "Valeria",
            imagen: "https://randomuser.me/api/portraits/women/61.jpg"
        }
    ]);

    const handleVotos = (votos_actualizado) => {
        setCantVotos( votos_actualizado + cant_votos );
    }

    return (
        <>
            <p> Cantidad de votos: {cant_votos} </p>
            <Row>                
                {
                    lista.map( item => (
                        <Col key={item.ID}>
                            <CandidatoItem 
                                nombre={item.nombre}
                                imagen={item.imagen}
                                onChangeVotos={handleVotos}
                            />
                        </Col>
                    ))
                }
            </Row>
        </>
    );

}
