import { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./BaseColaboradores";
import Listado from "./assets/componentes/listado/Listado";
import Formulario from "./assets/componentes/formulario/Formulario";
import Alert from "./assets/componentes/alert/Alert";

function App() {
  const [baseCol, setBaseCol] = useState(BaseColaboradores);
  const [mensajeError, setMensajeError] = useState("");
  console.log(baseCol);

  return (
    <>
      <h1>Registro de Colaboradores</h1>
      <Listado colaboradores={baseCol} />
      {/* pasamos baseCol como propiedad llamada colaboradores al componente listado  */}
      <h2>Agregue un nuevo Colaborador</h2>
      <Formulario setBaseCol={setBaseCol} />
      {/* setBaseCol se pasa como propiedad a formulario */}
      <Alert mensajeError={mensajeError} setMensajeError={setMensajeError} />
    </>
  );
}

export default App;
