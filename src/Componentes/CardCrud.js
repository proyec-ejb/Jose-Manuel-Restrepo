
import axios from 'axios'; 
import Swal from 'sweetalert2';
import {Button} from 'react-bootstrap';

function CardCrud({preguntas,setUplist,upList,handleOpen,setDataModal}){
    const url = "http://localhost:5000/preguntas";

    
    /*2.Función asíncrona para borrar a partir del listener del boton eliminar */
    const handleDelete = async () => {
        Swal.fire({
            title: '¿Esta seguro que desea eliminar la pregunta?',
            text: "¡No puede revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                /*Eliminando el registro de la BD falsa */
                axios.delete(`${url}/${preguntas.id}`).then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        Swal.fire(
                            '¡Eliminado!',
                            'La pregunta ha sido borrada.',
                            'success'
                        )
                        setUplist(!upList);
                    } else {
                        Swal.fire(
                            '¡Error!',
                            'Hubo un problema al borrar la pregunta.',
                            'warning'
                        )
                    }
                })
            }
        })
    }
    const handleEdit=()=>{
        handleOpen();
        setDataModal(preguntas);

    }
    
    return(
        <>
        <br />
        <div class="row row-cols-1 row-cols-md-1 g-2">
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                        <h2 className="text-center title">{preguntas.pregunta}</h2>

                        <p>{preguntas.respuesta}</p>
                        <Button className="btn" onClick={handleEdit}>Editar</Button>
                        <Button className="btn" variant="danger" onClick={handleDelete}>Eliminar</Button>
                        </div>

                    </div>
                </div>
        </div>
        </>
            )
        }
export default CardCrud