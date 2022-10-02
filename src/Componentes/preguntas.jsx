import Card from "./Card"
import {useState, useEffect} from "react" 
import axios from 'axios';
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Preguntas = () => {
    const url = "http://localhost:5000/preguntas";

    
    /*2. Generar función asíncrona para conentarme a la API*/
    const getData = async () => {
        const response = axios.get(url);
        return response;
    }
 
    /*3.UseState para guardar la respuesta de la petición y ponerlo a disposión del componente */
 
    const [list, setList] = useState([]);
    /*5.Crear otro estadopara refrescar el listoadi despues de eliminar */
    const [upList,setUplist] = useState([false]);
 
    /*4. hook useEffect ejecutar funciones cada vez que renderizamos un componente */
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    }, [upList])
    console.log(list);
    return(
        <>
        <h1>Preguntas Frecuentes</h1>
        <Link to="/preguntas/anadirPregunta"><Button className="btn">Añadir pregunta</Button></Link>
        {
                
                list.map((pre, index)=>(
                            <Card
                                key={index}
                                preguntas={pre}
                                setUplist={setUplist}
                                upList={upList} 
                            />
                        ))
                }
        </>
    )
}

export default Preguntas