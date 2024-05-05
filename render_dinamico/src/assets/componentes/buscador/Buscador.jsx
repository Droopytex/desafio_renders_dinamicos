import React, { useState } from "react";

const Buscador = ({ baseColaboradores, setFiltroColaboradores }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleBusqueda = (e) => {
    const valor = e.target.value.toLowerCase(); // Convertir la búsqueda a minúsculas
    setBusqueda(valor);

    // Filtrar los colaboradores según la búsqueda en cualquier campo
    const colaboradoresFiltrados = baseColaboradores.filter((colaborador) => {
            // Validar cada campo para asegurarse de que no sea undefined antes de llamar a toLowerCase()

      return (
        (colaborador.id && colaborador.id.toLowerCase().includes(valor)) ||
        (colaborador.nombre && colaborador.nombre.toLowerCase().includes(valor)) ||
        (colaborador.email && colaborador.email.toLowerCase().includes(valor)) ||
        (colaborador.edad && colaborador.edad.toString().includes(valor)) ||
        (colaborador.cargo && colaborador.cargo.toLowerCase().includes(valor)) ||
        (colaborador.telefono && colaborador.telefono.toLowerCase().includes(valor))
      );
    });

    // Actualizar el estado de los colaboradores filtrados
    setFiltroColaboradores(colaboradoresFiltrados);
    // Imprimir mensaje de depuración
    console.log("Búsqueda realizada:", valor);
    console.log("Colaboradores filtrados:", colaboradoresFiltrados);
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
