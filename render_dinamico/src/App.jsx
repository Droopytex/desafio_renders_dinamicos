import { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./BaseColaboradores";
import Formulario from "./assets/componentes/formulario/Formulario";
import Listado from "./assets/componentes/listado/Listado";

function App() {
  const [baseCol, setBaseCol] = useState(BaseColaboradores);
  console.log(baseCol);

  return (
    <>
      <Listado />
      <Formulario />
    </>
  );
}

export default App;
