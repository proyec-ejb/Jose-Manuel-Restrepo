import axios from 'axios';
import { Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom';


function FormPreguntas(){
/*una ruta useHistory useNavigate constante para que retorne al listar*/
const navigate=useNavigate();


/* Inicializando los inputs en el estado, para poder escribir los datros o los valores que el usuario digite en el form y manejarlos o controlarlos*/
    const [data,setData]=useState({id:"", pregunta:""});

     const handleChange=({target})=>{
/*[id:2,nombre:"tatiana",apellido:"cabrera"]
int num=10;*/
/*cada vez que exista un cambio se guarda el valor en el estado data*/
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    /*Peticiones asincronas conectar con bd*/
    const url="http://localhost:5000/preguntas";
    /* crear una funcion para procesar el envio de datos del formulario*/
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.post(url,data);
        //console.log(response)
        if(response.status===201){
            Swal.fire(
                'Guardado!',
                `La pregunta <strong>
                ${response.data.pregunta}
                </strong>
                ha sido guardado exitosamente!`,
                'Pronto podra ver la respuesta a su pregunta',
                    'success'
            )
                navigate("/");
        }else{
            Swal.fire(
                'Error!',
                `Hubo un problema al registrar la pregunta!`,
                    'error'
            )
        }
    }

return(
    <div>
        <Container>

        <Form onSubmit={handleSubmit} >
        <Form.Group class="mb-3">
        <Form.Label>Pregunta</Form.Label>
        <Form.Control 
        type="text"
        placeholder="Ingrese su Pregunta"
        name="pregunta"
        value={data.pregunta}
        onChange={handleChange}
        />
        </Form.Group>
        
        <button className='btn btn-primary' >
            Guardar
        </button>

        </Form>
        </Container>
    </div>
);

}
export default FormPreguntas