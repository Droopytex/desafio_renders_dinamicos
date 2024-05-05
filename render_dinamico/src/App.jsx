import { useState } from "react";

import "./App.css";

import { BaseColaboradores } from "./BaseColaboradores";
import Formulario from "./assets/componentes/formulario/Formulario";
function App() {
  console.log(BaseColaboradores);

  return (
    <>
      <Formulario />
    </>
  );
}

export default App;
