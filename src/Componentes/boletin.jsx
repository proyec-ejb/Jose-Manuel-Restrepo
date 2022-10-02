import React from 'react'
import imagen from './img/news.gif'
import imagen1 from './img/actividades.gif'
import imagen2 from './img/eventos.gif'
import imagen3 from './img/proyectos.gif'

const boletin = () => {
    return (
        <div>
            <br />
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card h-100">
                        <div className='p-4'>
                            <img src={imagen} alt="" width="200" height="200" class="d-inline-block align-text-top "></img>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Noticias de Interes</h5>
                            <ul class="list-group list-group-flush">
                                <a class="list-group-item" href="#ReportesdelDia">
                                    Reportes del día
                                </a>
                                <a class="list-group-item" href="#RegresoaClases">
                                    Regreso a Clases
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div className='p-4'>
                            <img src={imagen1} alt="" width="200" height="200" class="d-inline-block align-text-top "></img>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Actividades Escolares</h5>
                            <ul class="list-group list-group-flush">
                                <a class="list-group-item" href="#ReportesdelDia">
                                    Celebraciones
                                </a>
                                <a class="list-group-item" href="#RegresoaClases">
                                    Día del Profesor
                                </a>
                                <a class="list-group-item" href="#ReportesdelDia">
                                    Día de la lengua
                                </a>
                                <a class="list-group-item" href="#RegresoaClases">
                                    Día del niño
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div className='p-4'>
                            <img src={imagen2} alt="" width="200" height="200" class="d-inline-block align-text-top "></img>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Eventos</h5>
                            <ul class="list-group list-group-flush">
                                <a class="list-group-item" href="#ReportesdelDia">
                                    Concursos
                                </a>
                                <a class="list-group-item" href="#RegresoaClases">
                                    Campeonatos
                                </a>
                                <a class="list-group-item" href="#ReportesdelDia">
                                    Disfraces
                                </a>
                                <a class="list-group-item" href="#RegresoaClases">
                                    Baile
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div className='p-4'>
                            <img src={imagen3} alt="" width="200" height="200" class="d-inline-block align-text-top "></img>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Proyecto Estudiantil</h5>
                            <ul class="list-group list-group-flush">
                                <a class="list-group-item" href="#ReportesdelDia">
                                    Proyectos destacados
                                </a>
                                <a class="list-group-item" href="#RegresoaClases">
                                    Ambiental
                                </a>
                                <a class="list-group-item" href="#RegresoaClases">
                                    tecnológico

                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default boletin;