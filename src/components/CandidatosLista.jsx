import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CandidatoItem from './CandidatoItem';

export default function CandidatosLista(){

    return (
        <>
            <Row>
                <Col>
                    <CandidatoItem 
                        nombre="Sofía"
                        imagen="https://randomuser.me/api/portraits/women/90.jpg"
                    />
                </Col>
                <Col>
                    <CandidatoItem 
                        nombre="Pablo"
                        imagen="https://randomuser.me/api/portraits/men/49.jpg"
                    />
                </Col>
                <Col>
                    <CandidatoItem 
                        nombre="Valeria"
                        imagen="https://randomuser.me/api/portraits/women/61.jpg"
                    />
                </Col>
            </Row>
        </>
    );

}
