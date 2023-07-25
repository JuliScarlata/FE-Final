import React, { useState } from 'react';
//import './App.css';
import TurnoForm from './components/TurnoForm';
import TurnoList from './components/TurnoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css'; // Import the custom styles file
import './styles.css'



const medicosPorEspecialidad = {
  Dermatologia: ["Florencia Zelarayán", "Rosario Viejobueno", "Virginia Paz Zavalía"],
  Gastroenterologia: ["Patricio Jerez", "Mercedes Depalo"],
  Cardiologia: ["Paula Moreno", "Santiago Anun", "José Martin", "Mariana Gallar"],
  ClinicaMedica: ["Martina Lopez", "Marcos Juarez", "Rodolfo Guzman", "Lorena Macedosa"],
  Oftalmologia: ["Pedro Ruiz", "Máximo Barros", "Belén Zapata"],
  Neumonologia: ["Sofía Gonzalez", "Guadalupe Allende"],
};

function App() {
  const [turnos, setTurnos] = useState([]);
  const [especialidad, setEspecialidad] = useState('');
  const [medico, setMedico] = useState('');
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [turnoEdit, setTurnoEdit] = useState(null);

  const handleAddTurno = (nuevoTurno) => {
    if (turnoEdit && turnoEdit.id) {
      // Si hay un turno editado y tiene un 'id', entonces es una edición
      setTurnos((prevTurnos) => {
        // Reemplazamos el turno anterior con el mismo 'id' por el nuevo turno editado
        return prevTurnos.map((turno) => (turno.id === turnoEdit.id ? nuevoTurno : turno));
      });
      setTurnoEdit(null); // Limpiamos el turno en edición
    } else {
      // Si no hay un turno editado o no tiene 'id', entonces es un nuevo turno
      setTurnos([...turnos, nuevoTurno]);
    }

    // Limpiamos el formulario
    setEspecialidad('');
    setMedico('');
    setNombre('');
    setFecha('');
  };

  const handleEdit = (turnoModificado) => { // Si hay un turno editado y tiene un 'id', entonces es una edición
    if (turnoEdit && turnoEdit.id) {
      setTurnos((prevTurnos) => { // Reemplazamos el turno anterior con el mismo 'id' por el nuevo turno editado
        return prevTurnos.map((turno) => (turno.id === turnoEdit.id ? turnoModificado : turno));
      });
      setTurnoEdit(null); // Limpiamos el turno en edición
    }
  };

  const handleDelete = (turno) => {
    setTurnos(turnos.filter((t) => t !== turno));
  };

  return (
    <div className="App">
      <TurnoForm
        medicosPorEspecialidad={medicosPorEspecialidad}
        handleAddTurno={handleAddTurno}
        handleEdit={handleEdit} // Renombramos la función a 'handleEdit'
        turnoEdit={turnoEdit}
        setTurnoEdit={setTurnoEdit}
      />
      <TurnoList
        turnos={turnos}
        handleEdit={handleEdit} // Renombramos la función a 'handleEdit'
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
