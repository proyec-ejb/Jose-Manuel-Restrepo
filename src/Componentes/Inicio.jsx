import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import imagen from './img/Historia.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Inicio = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div class="row">
      <div class="col-sm-8">
        <div class="card">
          <div class="card-body">
            <Box
              sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 450 }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
              >
                <Tab label="Visión" {...a11yProps(0)} />
                <Tab label="Misión" {...a11yProps(1)} />
                <Tab label="Objetivos" {...a11yProps(2)} />
                <Tab label="Datos Institución" {...a11yProps(3)} />
                <Tab label="trayectoria e historia" {...a11yProps(4)} />
              </Tabs>
              <div >
                <TabPanel value={value} index={0}>
                  <h5>VISION DE LA EMPRESA</h5>
                  <span>Entregar una educación integral y de calidad, donde se fomenten habilidades, aprendizajes y valores, desarrollando conciencia por el bienestar y el cuidado del medio ambiente, incluyendo a la comunidad educativa para cumplir con el proyecto educativo de nuestro establecimiento.</span>
                </TabPanel>
              </div>
              <TabPanel value={value} index={1}>
                <h5>MISION DE LA EMPRESA</h5>
                <span>La Institución Educativa José Manuel Restrepo es una institución de carácter oficial que ofrece los niveles de preescolar, Básica (Primaria-Secundaria) y Media académica, con una integración en el área de tecnología e informática con el SENA como respuesta a la necesidad que se acrecienta en la actualidad debido a los cambios sociales, económicos y tecnológicos; los cuales plantean cada día nuevas exigencias en el mundo productivo.</span>
                <br />
                <span>La Institución Educativa José Manuel Restrepo es una institución de carácter oficial que ofrece los niveles de preescolar, Básica (Primaria-Secundaria) y Media académica, con una integración en el área de tecnología e informática con el SENA como respuesta a la necesidad que se acrecienta en la actualidad debido a los cambios sociales, económicos y tecnológicos; los cuales plantean cada día nuevas exigencias en el mundo productivo.</span>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <h5>OBJETIVOS ESPECIFICOS</h5>
                <span>1.	Desarrollar acciones y programas de prevención </span>
                <span>social que conlleven a mejorar la convivencia y el entorno </span>
                <span>social que afecta la seguridad estudiantil.</span>
                <br />
                <span>2.	Establecer mecanismos pedagógicos y culturales que dinamicen la conciliación </span>
                <br />
                <span>3.	Sensibilizar a los estudiantes sobre valores cívicos y patrióticos, derechos y deberes fundamentales, que le permitan garantizar la seguridad y sana convivencia.</span>
                <br />
                <span>4.	Obtener comportamientos sociales de apego a la ley que favorezcan la convivencia social y la resolución pacífica de los conflictos.</span>
                <br />
                <span>5.	Realizar seguimiento de los recursos destinados a la implementación de la seguridad y convivencia estudiantil y verificar su respectiva inversión.</span>
                <br />
                <br />
                <h5>OBJETIVOS CORPORATIVOS</h5>
                <span>Crear estrategias y metodologías formuladas que deben ser desarrolladas e implementadas para hacer de Arboletes un municipio íntegro en factor de seguridad y convivencia ciudadana.</span>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <h5>DATOS INTITUCIONALES</h5>
                <span>📍	Ubicación</span>
                <span>Zona: Urbana/Rural</span>
                <br />
                <span>Dirección: CR 33 # 27 51, Arboletes-Antioquia</span>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <h5>TRAYECTORIA DEL COLEGIO </h5>
                <span>Fundada el 7 de febrero 1973, inicio como escuela de primaria y paulatinamente fue creciendo el número de estudiantes y grados hasta obtener lo grados completos de primaria y bachillerato, teniendo 2 sedes donde la primera graduación de bachillerato fue en el 2004 hasta la última que ha sido en el 2020.</span>
              </TabPanel>
            </Box>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <CardContent>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={imagen}
                  alt="green iguana"
                />
              </Card>
              <Typography gutterBottom variant="h5" component="div">
                Nuestra historia
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fundada el 7 de febrero 1973, inicio como escuela de primaria y
                paulatinamente fue creciendo el número de estudiantes y grados
                hasta obtener lo grados completos de primaria y bachillerato, teniendo
                2 sedes donde la primera graduación de bachillerato fue en el 2004
                hasta la última que ha sido en el 2020.
              </Typography>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio;