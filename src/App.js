import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from './Componentes/Inicio';
import Boletin from './Componentes/boletin';
import Certificados from './Componentes/certificado';
import CertificadosNotas from './Componentes/cerificadoNotas';
import Constancia from './Componentes/Constancia';
import Preguntas from './Componentes/preguntas';
import imagen from './Componentes/img/ESCUDO.png'
import Login from './Componentes/login';
import Dashboard from './Componentes/Dashboard'
import ResPreguntas from './Componentes/ResPreguntas'
import FormPreguntas from './Componentes/FormPregunta';

function App() {
  return (
    <Router>
      <nav class="navbar bg-light">

        <div class="container-fluid">
          <img src={imagen} alt="" width="100" height="100" class="d-inline-block align-text-top"></img>
          <div class="position-absolute top-50 start-50 translate-middle">
            <a class="navbar-brand" href="#">
              COLEGÍO JOSÉ MANUEL-RESTREPO - ANTIOQUIA - ARBOLETES
            </a>
          </div>

          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
            <button class="btn btn-outline-warning" type="submit">🔍</button>
          </form>
        </div>
      </nav>
      <div className="container">
        <br></br>
        <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group" role="group" aria-label="First group">
            <Link to="/" class="btn btn-light">INICIO</Link>
            <Link to="/boletin" class="btn btn-light">BOLETIN INFORMATIVO Y EDUCATIVO</Link>
            <Link to="/certificados" class="btn btn-light">CERTIFICADO ESCOLAR</Link>
            <Link to="/certificados/notas" class="btn btn-light">CERTIFICADO DE NOTAS</Link>
            <Link to="/constancias" class="btn btn-light"> CONSTANCIAS</Link>
            <Link to="/preguntas" class="btn btn-light">PREGUNTAS FRECUENTES</Link>
            <Link to="/user" class="btn btn-light">
              <button class="btn change-color" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
              </button>
          </Link>
          </div>
        </div>
        <br></br>
        <Routes>
          <Route path='/' element={<Inicio />} exact></Route>
          <Route path='/boletin' element={<Boletin />}></Route>
          <Route path='/certificados' element={<Certificados />}></Route>
          <Route path='/certificados/notas' element={<CertificadosNotas />}></Route>
          <Route path='/constancias' element={<Constancia />}></Route>
          <Route path='/preguntas' element={<Preguntas />}></Route>
          <Route path='/preguntas/anadirPregunta' element={<FormPreguntas />}></Route>
          <Route path='/user' element={<Login />}></Route>
           <Route path='/dashboard/' element={<Dashboard />}></Route>
           <Route path='/dashboard/responderpreguntas' element={<ResPreguntas />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
