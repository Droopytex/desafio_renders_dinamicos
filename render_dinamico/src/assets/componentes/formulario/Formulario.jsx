import { useState } from "react";
import { BaseColaboradores } from "../../../BaseColaboradores";


const Formulario = ({ setBaseCol, mensajeError, setMensajeError }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    id: "",
    nombre: "",
    email: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  // const [mensajeError, setMensajeError] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault(); // Evita que se recargue la página al enviar el formulario

    if (
      !nuevoColaborador.id ||
      !nuevoColaborador.nombre ||
      !nuevoColaborador.email ||
      !nuevoColaborador.edad ||
      !nuevoColaborador.cargo ||
      !nuevoColaborador.telefono
    ) {
      setMensajeError("Todos los campos son obligatorios");
      return;
    }

    // Agregar el nuevo colaborador a la lista baseCol
    setBaseCol((prevBaseCol) => [...prevBaseCol, nuevoColaborador]);

    // Limpiar el estado del nuevo colaborador después de agregarlo
    setNuevoColaborador({
      id: "",
      nombre: "",
      email: "",
      edad: "",
      cargo: "",
      telefono: "",
    });

    // Mostrar mensaje de éxito
    setMensajeError("Registro completo");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form className="col-12" onSubmit={enviarFormulario}>
        <div className="mb-3">
          <input
            placeholder="Ingrese Id"
            name="id"
            value={nuevoColaborador.id}
            onChange={handleInputChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Ingrese nombre"
            name="nombre"
            value={nuevoColaborador.nombre}
            onChange={handleInputChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Ingresa email"
            name="email"
            value={nuevoColaborador.email}
            onChange={handleInputChange}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Ingrese edad"
            name="edad"
            value={nuevoColaborador.edad}
            onChange={handleInputChange}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Ingrese cargo"
            name="cargo"
            value={nuevoColaborador.cargo}
            onChange={handleInputChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Ingrese teléfono"
            name="telefono"
            value={nuevoColaborador.telefono}
            onChange={handleInputChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mt-2">{mensajeError && <p className="error">{mensajeError}</p>}</div>

        <button type="submit" className="btn btn-primary">
          Agregar colaborador
        </button>
      </form>
    </>
  );
};


export default Formulario;
