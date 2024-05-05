import { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./BaseColaboradores";
import Formulario from "./assets/componentes/formulario/Formulario";
import Listado from "./assets/componentes/listado/Listado";
import Alert from "./assets/componentes/alert/Alert";

function App() {
  const [baseCol, setBaseCol] = useState(BaseColaboradores);
  const [mensajeError, setMensajeError] = useState("");
  console.log(baseCol);

  return (
    <>
      <Listado colaboradores={baseCol} /> 
      {/* pasamos baseCol como propiedad llamada colaboradores al componente listado  */}
      {/* <Formulario /> */}
      {/* <Alert mensajeError={mensajeError} setMensajeError={setMensajeError} /> */}
    </>
  );
}

export default App;
