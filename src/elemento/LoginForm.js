import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ed12d"
}

const Formulario = styled.form `
	
	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`;

const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	color: #000;

	${props => props.valido === 'false' && css`
		color: ${colores.exito};
	`}
`;

const GrupoInput = styled.div`
	position: relative;
	z-index: 90;
`;

const Input = styled.input`
	width: 100%;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;
	background-color: black;
	color: white;

	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}

	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
        background: white;
        color: black;
	}

	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}

	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const LeyendaError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;

	${props => props.valido === 'true' && css`
		display: none;
	`}

	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;

	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}

	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;

const ContenedorTerminos = styled.div`
	grid-column: span 2;

	input {
		margin-right: 10px;
	}

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
	line-height: 45px;
	width: 30%;
	background: black;
	color: white;
	font-weight: bold;
	border: 2px solid white;
	border-radius: 50px;
	cursor: pointer;
	transition: .1s ease all;
	padding: 2px 20px;

	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
        background: white;
        color: black;
	}
`;

const MensajeExito = styled.p`
	font-size: 14px;
	color: ${colores.exito};
	display: block
`;

const MensajeError = styled.div`
	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	input{
		margin: 10px;
		padding: 5px 20px;
		border: 2px solid purple;
		border-radius:20px;
	
	
	}
	select{
		margin: 10px;
		padding: 2px 10px
		border: 2px solid purple;
		border-radius:20px;
	}
	textarea{
		margin: 10px;
		padding: 2px 10px
		border: 2px solid purple;
		border-radius:20px;
	}
	`;
	
const Overlay = styled.div`
	width: 100vw;	
	height:100vh;
	position: fixed;
	top:0;
	left:0;
	background-color:rgba(117, 41, 149, 0.674);

	display: flex;
	align-items: center;
	justify-content: center;
`;
const ContenedorModal= styled.div`
	width: 500px;	
	min-height:100px;
	position: relative;
	border-radius:20px;
	box-shadow: rgba(100,100,111,0.2)0px 7px 29px 0px;
	padding: 20px;
	background-color:#fff;
`;
const EncabezadoModal= styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom:20px;
	padding: 20px;
	border-bottom:1px solid #E8E8E8;

	h3{
		font-weight:500;
		font-size: 16px;
		color: purple;
	}

`;
const BotonCerrar= styled.div`
	position: absolute;
	top:40px;
	right: 40px;
	color: purple;

	width: 30px;
	height: 30px;
	border: none;
	background: none;
	cursor: pointer;
	trasnsition:.3s ease all;
	border-radius:5px;

	&:hover{
		background: #f2f2f2
	}

`;






export {
	Formulario,
	Label,
	GrupoInput,
	Input,
	LeyendaError,
	IconoValidacion,
	ContenedorTerminos,
	ContenedorBotonCentrado,
	Boton,
	MensajeExito,
	MensajeError,
	Contenido,
	ContenedorBotones,
	Overlay,
	ContenedorModal,
	EncabezadoModal,
	BotonCerrar
}