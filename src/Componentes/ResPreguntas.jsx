import { Link } from 'react-router-dom';
import CardCrud from './CardCrud';
import Swal from 'sweetalert2';
import { useState, useEffect } from "react"
import axios from 'axios';
import { Modal, Form, ModalFooter } from "react-bootstrap"
const ResPreguntas = () => {
    const url = "http://localhost:5000/preguntas";

    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    const[list,setList]=useState([]);

    const[upList,setUplist]=useState([false]);

    const[show,setShow]=useState(false);
    const handleOpen=()=>{setShow(true);}
    const handleClose=()=>{setShow(false);}

    
    const[dataModal, setDataModal]=useState({});
    const handleChangeModal=({target})=>{
        setDataModal({
            ...dataModal,
            [target.name]:target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.put(`${url}/${dataModal.id}`,dataModal);
        console.log(response); 
        //console.log(response)
        if(response.status===200){
            Swal.fire(
                'Guardado!',
                `La pregunta y su respuesta <strong>
                ${response.data.pregunta}
                </strong>
                ha sido guardado exitosamente!`,
                    'success'
            )
               handleClose();
               setUplist(!upList)
        }else{
            Swal.fire(
                'Error!',
                `Hubo un problema al actualizar la pregunta!`,
                    'error'
            )
        }
    

    }

    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
    
        })
    },[upList])
    console.log(list)
    return (
        <>
            <Link to="/preguntas"><button className="btn posicion-pregunta">Cerrar Sesión</button></Link>
            <h1>Aqui responden preguntas</h1>
            {
                
                list.map((pre, index)=>(
                            <CardCrud
                                key={index}
                                preguntas={pre}
                                setUplist={setUplist}
                                upList={upList} 
                                handleClose={handleClose}
                                handleOpen={handleOpen} 
                                setDataModal={setDataModal}
                            />
                        ))
                }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Formulario Solicitud
                    </Modal.Title>

                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Pregunta</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder="Ingrese la pregunta"
                        name="pregunta"
                        value={dataModal.pregunta}
                        onChange={handleChangeModal}
                        />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Respuesta</Form.Label>
                        <Form.Control 
                        type="text"
                        placeholder="Ingrese repuesta"
                        name="respuesta"
                        value={dataModal.respuesta}
                        onChange={handleChangeModal}
                        />
                </Form.Group>
                </Modal.Body>
                <ModalFooter>
                <button className='btn btn-secondary' onClick={handleClose}>Cancelar
                </button>
                <button className='btn btn-primary' type="submit" >Enviar
                </button>
                </ModalFooter>
                </Form>
                </Modal>

            
        </>
    )
}

export default ResPreguntas