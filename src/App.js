import { useEffect, useState } from 'react';
import './App.css';
import Subjects from './components/Subjects/Subjects';
import Footer from './components/Footer/Footer';

function App() {
  const [subjects, setSubjects] = useState([])

  const [reset, setReset] = useState(false)

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

  return (
    <div className="App">
      <Subjects subjects={subjects} reset={reset} />
      <h1>Datos del estudiante</h1>
      <p>Nombre: {student.name}</p>
      <p>Apellidos: {student.lastName}</p>
      <p>Edad: {student.age}</p>
      <p>Colegio: {student.school}</p>
      <div className='footer-container'>
        <Footer reset={reset} setReset={setReset} />
      </div>
    </div>
  );
}

export default App;
