import { useState } from "react";
import { baseColaboradoresInicial } from "../../BaseColaboradores";

const Formulario = () => {
  const [idLista, setIdLista] = useState("");
  const [nombreLista, setNombreLista] = useState("");
  const [emailLista, setEmailLista] = useState("");
  const [edadLista, setEdadLista] = useState("");
  const [cargoLista, setCargoLista] = useState("");
  const [telefonoLista, setTelefonoLista] = useState("");

  const [listadoInicial, setListadoInicial] = useState(
    baseColaboradoresInicial
  );

  const enviarFormulario = (e) => {
    e.preventDefault();
    setListadoInicial([
      ...listadoInicial,
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

  return (
    <>
      <form onSubmit={enviarFormulario}>
        <div className="mb-3">
          <label>Ingrese id</label>
          <input
            name="id"
            onChange={inputId}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label>Ingrese nombre</label>
          <input
            name="nombre"
            onChange={inputNombre}
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label>Ingrese email</label>
          <input
            name="nombre"
            onChange={inputEmail}
            type="email"
            className="form-control"
            id="Email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label>Ingrese edad</label>
          <input
            name="edad"
            onChange={inputEdad}
            type="number"
            className="form-control"
            id="age"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label>Ingrese cargo</label>
          <input
            name="nombre"
            onChange={inputCargo}
            type="text"
            className="form-control"
            id="cargo"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label>Teléfono</label>
          <input
            name="telefono"
            onChange={inputTelefono}
            type="number"
            className="form-control"
            id="phone"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Formulario;
