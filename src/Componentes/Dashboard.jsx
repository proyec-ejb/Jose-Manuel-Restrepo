import { Link } from 'react-router-dom';
const Dashboard = () => {
    return(
        <>
        <h1>Bienvenido</h1>
        <p>¿Qué desea hacer?</p>
        <Link to="/preguntas"><button className="btn">Cerrar Sesión</button></Link>
        <Link to="/dashboard/responderpreguntas"><button>Responder Preguntas</button> </Link>
        </>
    )
}

export default Dashboard;