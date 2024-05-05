import { useState } from "react";
import "./App.css";
import Listado from "./assets/componentes/listado/Listado";
import Formulario from "./assets/componentes/formulario/Formulario";
import Alert from "./assets/componentes/alert/Alert";
import Buscador from "./assets/componentes/buscador/Buscador";
import { BaseColaboradores } from "./BaseColaboradores";

function App() {
  const [baseCol, setBaseCol] = useState(BaseColaboradores);
  const [filtroColaboradores, setFiltroColaboradores] = useState([]);
  const [mensajeError, setMensajeError] = useState(""); // Estado para mensaje de error o éxito
  //mensajeError es el estado que almacena el mensaje de erro o éxito y
  //setMensajeError es la función para actualizar ese estado
  console.log(baseCol);

  return (
    <>
      <h1 className="mb-5">Registro de Colaboradores</h1>
      <Buscador
        baseColaboradores={baseCol}
        setFiltroColaboradores={setFiltroColaboradores}
      />
      {/* <Listado colaboradores={baseCol} /> */}
      <Listado colaboradores={filtroColaboradores.length > 0 ? filtroColaboradores : baseCol} setBaseCol={setBaseCol}  />

      {/* pasamos baseCol como propiedad llamada colaboradores al componente listado  */}
      <h2 className="mb-3">Agregue un nuevo Colaborador</h2>
      <Formulario setBaseCol={setBaseCol} setMensajeError={setMensajeError} />
      {/* setBaseCol se pasa como propiedad a formulario */}
      <div className="mt-3">
      <Alert mensajeError={mensajeError} />
      </div>
      {/* llamando al mensaje por props  */}
    </>
  );
}

export default App;
