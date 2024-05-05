import React, { useState } from "react";

const Buscador = ({ baseColaboradores, setFiltroColaboradores }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleBusqueda = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);

    // Filtrar los colaboradores según la búsqueda en cualquier campo
    const colaboradoresFiltrados = baseColaboradores.filter((colaborador) => {
      return (
        colaborador.id.toLowerCase().includes(valor.toLowerCase()) ||
        colaborador.nombre.toLowerCase().includes(valor.toLowerCase()) ||
        colaborador.email.toLowerCase().includes(valor.toLowerCase()) ||
        colaborador.edad.toString().includes(valor.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(valor.toLowerCase()) ||
        colaborador.telefono.toLowerCase().includes(valor.toLowerCase())
      );
    });

    // Actualizar el estado de los colaboradores filtrados
    setFiltroColaboradores(colaboradoresFiltrados);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Buscar colaborador..."
        value={busqueda}
        onChange={handleBusqueda}
        className="form-control"
      />
    </div>
  );
};

export default Buscador;
