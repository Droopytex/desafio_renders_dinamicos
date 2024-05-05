import { useState } from "react";
import { BaseColaboradores } from "../../../BaseColaboradores";

const Formulario = ({ mensajeError, setMensajeError }) => {
  const [idLista, setIdLista] = useState("");
  const [nombreLista, setNombreLista] = useState("");
  const [emailLista, setEmailLista] = useState("");
  const [edadLista, setEdadLista] = useState("");
  const [cargoLista, setCargoLista] = useState("");
  const [telefonoLista, setTelefonoLista] = useState("");

  const [baseCol, setBaseCol] = useState({ BaseColaboradores });

  const enviarFormulario = (e) => {
    e.preventDefault();
    setBaseCol([
      ...baseCol,
      {
        id: idLista,
        nombre: nombreLista,
        email: emailLista,
        edad: edadLista,
        cargo: cargoLista,
        telefono: telefonoLista,
        completada: false,
      },
    ]);
  };

  const inputId = (e) => {
    setIdLista(e.target.value);
  };

  const inputNombre = (e) => {
    setNombreLista(e.target.value);
  };

  const inputEmail = (e) => {
    setEmailLista(e.target.value);
  };

  const inputEdad = (e) => {
    setEdadLista(e.target.value);
  };

  const inputCargo = (e) => {
    setCargoLista(e.target.value);
  };

  const inputTelefono = (e) => {
    setTelefonoLista(e.target.value);
  };

  if (
    idLista === "" ||
    nombreLista === "" ||
    emailLista === "" ||
    edadLista === "" ||
    cargoLista === "" ||
    telefonoLista === ""
  ) {
    // setError(true);
    setMensajeError("Todos los campos son obligatorios");
    return; // si existe error, no avanza en la lógica del programa
  }

  // Si el formulario se envía correctamente devolvemos todos nuestros inputs al inicio, se resetea el formulario
  // setError(false); //elimina el mensaje de error
  setMensajeError("Registro completo"); // Mensaje de éxito
  setNombreLista("");
  setEmailLista("");
  setEdadLista("");
  setCargoLista("");
  setTelefonoLista("");

  return (
    <>
      <form onSubmit={enviarFormulario}>
        <div className="mb-3">
          <input
            placeholder="Ingrese Id"
            name="id"
            onChange={inputId}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Ingrese nombre"
            name="nombre"
            onChange={inputNombre}
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Ingresa email"
            name="nombre"
            onChange={inputEmail}
            type="email"
            className="form-control"
            id="Email"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Ingrese edad"
            name="edad"
            onChange={inputEdad}
            type="number"
            className="form-control"
            id="age"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Ingrese cargo"
            name="nombre"
            onChange={inputCargo}
            type="text"
            className="form-control"
            id="cargo"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Ingrese teléfono"
            name="telefono"
            onChange={inputTelefono}
            type="text"
            className="form-control"
            id="phone"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar colaborador
        </button>
      </form>
      <div className="mt-2">
        {" "}
        {mensajeError && <p className="error">{mensajeError}</p>}{" "}
      </div>
    </>
  );
};

export default Formulario;
