
import {useState, useEffect} from "react"
import axios from 'axios'; 


function Card({preguntas}){
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
        <br />
        <div class="row row-cols-1 row-cols-md-1 g-2">
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                        <h2 className="text-center title">{preguntas.pregunta}</h2>

                        <p>{preguntas.respuesta}</p>
                        </div>

                    </div>
                </div>
        </div>
        </>
            )
        }
export default Card