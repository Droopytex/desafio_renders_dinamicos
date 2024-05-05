import React from "react";

const Listado = ({ colaboradores, setBaseCol }) => {
  const handleEliminar = (id) => {
    // Filtrar los colaboradores para eliminar el que tiene el ID correspondiente
    const colaboradorFiltrado = colaboradores.filter((colaborador) => colaborador.id !== id);
    // Actualizar el estado de colaboradores con la lista filtrada
    setBaseCol(colaboradorFiltrado);
  };
  // recibo colaboradores como prop en el componente
  return (
    <>
      <div className="table-responsive-sm">
        <table className="col-12 mt-5 mb-5 table table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nombre</th>
              <th scope="col">E-mail</th>
              <th scope="col">Edad</th>
              <th scope="col">Cargo</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>
          <tbody>
            {/* el método map se utiliza para iterar sobre el array de "colaboradores" y generar dinámicamente las filas de la tabla basadas en los datos  */}
            {colaboradores.map((colaborador) => (
              <tr key={colaborador.id}>
                <th scope="row">{colaborador.id}</th>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.email}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
                <td><button onClick={() => handleEliminar(colaborador.id)}>
                  X
                </button></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Listado;
