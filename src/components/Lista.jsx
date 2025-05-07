import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

export default function Lista(){

    const [lista, setLista] = useState([]);
    const [completed, setCompleted] = useState("");

    useEffect( () => {
        getLista();
    }, [completed]);

    const getLista = async() => {

        let url = "https://jsonplaceholder.typicode.com/todos";

        if(completed){
            url += `?completed=${completed}`;
        }

        const response = await axios.get(url);
        setLista(response.data);
    }

    const handleCompleted = (e) => {
        setCompleted(e.target.value);
        console.log(e.target.value);
    }

    return (
        <>

            <Form.Select className='mb-3' aria-label="Default select example" value={completed} onChange={ handleCompleted }>
                <option value=""> Sin filtros </option>
                <option value="true"> Tareas completas </option>
                <option value="false"> Tareas incompletas </option>
            </Form.Select>

            <ListGroup>
                {
                    lista.map( (item) => (
                        <ListGroup.Item key={item.id} variant={ (item.completed) ? "success" : "danger" }> {item.title} </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </>
    )

}