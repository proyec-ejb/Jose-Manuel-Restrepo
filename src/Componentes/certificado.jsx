import React from 'react'
import imagen from './img/pdf.gif'
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
const certificado = () => {
  function DescargarCertificado() {
    const steps = ['Nombre', 'Apellido', 'Correo', 'Curso']
const swalQueueStep = Swal.mixin({
  confirmButtonText: 'Siguiente',
  cancelButtonText: 'Atras',
  progressSteps: steps,
  input: 'text',
  inputAttributes: {
    required: true
  },
  reverseButtons: true,
  validationMessage: 'Es requerido para seguir'
})

async function ValuesSteps(){
  const values = []
  let currentStep
  
  for(currentStep = 0; currentStep < steps.length;) {
    const result = await swalQueueStep.fire({
      title: `${steps[currentStep]}`,
      inputValue: values[currentStep],
      showCancelButton: currentStep > 0,
      currentProgressStep: currentStep
    })
  
    if (result.value) {
      values[currentStep] = result.value
      currentStep++
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      currentStep--
    } else {
      break
    }
  }
  
  if (currentStep === steps.length) {
    Swal.fire(
      'Enviada!',
      'Su solicitud sera respondida en un tiempo menor a 48 horas',
      'success'
    )
  }
}
ValuesSteps()

}

  return (
    <div>
      <br />
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100">
            <div className='p-4'>
              <img src={imagen} alt="" width="150" height="150" class="d-inline-block align-text-top "></img>
            </div>
            <div class="card-body">
              <h5 class="card-title">Certificado de Escolar</h5>
              <Button id="AbrirModal" for="flexCheckDefault" onClick={DescargarCertificado}>
                Solicite certificado
              </Button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default certificado;