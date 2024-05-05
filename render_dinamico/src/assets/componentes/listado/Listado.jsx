import { useState } from "react";

const Listado = ({ colaboradores }) => {
  // recibo colaboradores como prop en el componente 
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">E-mail</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Teléfono</th>
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
          </tr>
            ))}
                 </tbody>
      </table>
      </>
  );
};

export default Listado;
