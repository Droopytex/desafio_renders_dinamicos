import { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./BaseColaboradores";
import Listado from "./assets/componentes/listado/Listado";
import Formulario from "./assets/componentes/formulario/Formulario";
import Alert from "./assets/componentes/alert/Alert";
import Buscador from "./assets/componentes/buscador/Buscador";

function App() {
  const [baseCol, setBaseCol] = useState(BaseColaboradores);
  const [filtroColaboradores, setFiltroColaboradores] = useState([]);
  // const [mensajeError, setMensajeError] = useState(""); // Estado para mensaje de error o éxito
  //mensajeError es el estado que almacena el mensaje de erro o éxito y
  //setMensajeError es la función para actualizar ese estado
  console.log(baseCol);

  return (
    <>
      <h1>Registro de Colaboradores</h1>
      <Buscador
        baseColaboradores={baseCol}
        setFiltroColaboradores={setFiltroColaboradores}
      />
      {/* <Listado colaboradores={baseCol} /> */}
      <Listado colaboradores={filtroColaboradores.length > 0 ? filtroColaboradores : baseCol} />

      {/* pasamos baseCol como propiedad llamada colaboradores al componente listado  */}
      <h2>Agregue un nuevo Colaborador</h2>
      <Formulario setBaseCol={setBaseCol} />
      {/* setBaseCol se pasa como propiedad a formulario */}
      <Alert  />

      {/* llamando al mensaje por props  */}
    </>
  );
}

export default App;
