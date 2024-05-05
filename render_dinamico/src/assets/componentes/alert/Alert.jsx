import React from "react";

const Alert = ({ mensajeError }) => {
  // Determinar el tipo de mensaje según el contenido de mensajeError
  const renderizarMensaje = () => {
    if (!mensajeError) {
      return null; // No renderizar ningún mensaje si mensajeError está vacío
    }

    if (mensajeError === "Todos los campos son obligatorios") {
      return <p className="error">{mensajeError}</p>;
    }

    if (mensajeError === "Registro completo") {
      return <p className="exito">{mensajeError}</p>;
    }
  };

  return (
    <>
      {renderizarMensaje()}{" "}
      {/* Llamada a la función renderizarMensaje para mostrar el mensaje */}
    </>
  );
};

export default Alert;
