
//libreria useState, hooks
import { Link } from 'react-router-dom';
import imagen from './img/ESCUDO.png'
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import { ContenedorBotonCentrado, Boton, Label,Input} from '../elemento/LoginForm';
import './style/Login.css'

const Login = () => {
    return (

        <Formik
            initialValues={{
                usario: '',
                contraseña: ''
            }}
            validate={(valores) => {
                let errores = {}
                //VALIDACION CORREO Y CONTRASEÑA DEL ADMIN
                if (valores.usario === 'edujosemanuel' && valores.contraseña === 'JoseManuel123') {
                    Swal.fire({
                        title: 'Credenciales correctas',
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: 'Continuar',
                        denyButtonText: `volver`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            window.location="/dashboard"

                        } else if (result.isDenied) {
                            window.location="/user"
                        }
                    })
                }
                //VALIDACION USUARIO
                if (!valores.usario) {
                    errores.usario = 'Por favor ingrese sus credenciales correctamente';
                } else if (/^[a-zA-Z0-9_-]{4,12}$/.test(valores.usario)) {
                    errores.usario = "El Usuario debe contener solo numeros y letras."

                    //VALIDACION CONTRASEÑA
                } if (!valores.contraseña) {
                    errores.contraseña = 'Por favor ingrese su contraseña'
                } else if (!/^.{4,12}$/.test(valores.contraseña)) {
                    errores.contraseña = 'La contraseña tiene que ser de 4 a 12 dígitos.'

                }
                return errores;
            }}

            onSubmit={(valores, { resetForm }) => {
                resetForm();
                console.log('Entrar')
            }}>


            {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                <div>
                    <form action='/dashboard' onSubmit={handleSubmit} id="login">
                        <div class="images-login">
                            <img src={imagen} alt="Logotipo" className="logo2"></img>
                        </div>
                        <div class="form-login">
                            <h2>Login</h2>

                            <div className="form-group">
                                <Label htmlFor='usario'              
                                
                                className="form-label">Usuario</Label>
                                <Input
                                    className="form-input"
                                    type='text'
                                    id='usario'
                                    name='usario'
                                    placeholder='ingresa el usuario'
                                    value={values.usario}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />

                                {touched.usario && errors.usario && <div className='error'>{errors.usario}</div>}
                            </div>

                            <div className="form-group">
                                <Label htmlFor='contraseña' className="form-label">Contraseña</Label>
                                <Input
                                    className="form-input"
                                    type='password'
                                    id='contraseña'
                                    name='contraseña'
                                    placeholder='Ingrese su contraseña'
                                    value={values.contraseña}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {touched.contraseña && errors.contraseña && <div className='error'>{errors.contraseña}</div>}
                            </div>

                          
                              <br></br>
                            <ContenedorBotonCentrado>
                                <Boton type="submit">Entrar</Boton>
                            </ContenedorBotonCentrado>
                           

                        </div>


                    </form>
                </div>
            )}

        </Formik>

    );
}

export default Login;