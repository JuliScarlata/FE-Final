import React from 'react';

const TurnoItem = ({ turno, handleEdit, handleDelete }) => {
  return (
    <tr className='registro'>
      <td>{turno.especialidad}</td>
      <td>{turno.medico}</td>
      <td>{turno.nombre}</td>
      <td>{turno.fecha}</td>
      <td>
        <button onClick={() => handleEdit(turno)} className="btn btn-primary me-2">
          Editar
        </button>
        <button onClick={() => handleDelete(turno)} className="btn btn-danger">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TurnoItem;
