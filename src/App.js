import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/subjects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      setSubjects(response)
    })
  }, [])

  const student = {
    name: "Pepito",
    lastName: "Perez Rojas",
    age: 22,
    school: 'Americano',
  }

  console.log(subjects)

  const getSubjectsWithFormat = () => {
    return subjects.map((subject, indice) => {
      if (subjects.length - 1 === indice) {
        return ` ${subject}.`
      }
      return ` ${subject},`
    })
  }

  return (
    <div className="App">
      <h1>Datos del estudiante</h1>
      <p>Nombre: {student.name}</p>
      <p>Apellidos: {student.lastName}</p>
      <p>Edad: {student.age}</p>
      <p>Colegio: {student.school}</p>
      <p>Materias: {getSubjectsWithFormat()}</p>
    </div>
  );
}

export default App;
