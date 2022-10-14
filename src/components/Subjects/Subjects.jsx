
import { useEffect, useState } from 'react';
import './Subjects.css';

const mainSubjects = ['matematicas', 'lenguaje']

function Subjects({ subjects, reset }) {
  
  const [selectedSubject, setSelectedSubject] = useState('ninguna')
  const [isSelectedSubjectMain, setIsSelectedSubjectMain] = useState(false)

  useEffect(() => {
    console.log('cambio la materia a: ', selectedSubject)
    if (mainSubjects.includes(selectedSubject)) {
      setIsSelectedSubjectMain(true)
    } else {
      setIsSelectedSubjectMain(false)
    }
  }, [selectedSubject])

  useEffect(() => {
    console.log('reset aplicado')
    setSelectedSubject('ninguna')
    setIsSelectedSubjectMain(false)
  }, [reset])

  
  return (
    <div>
      <div className="Subjects">
          Las materias:
          {subjects.map((subject, indice) => {
            return (
              <div
                className={`subject${subject === selectedSubject ? '-selected' : ''}`}
                key={indice}
                onClick={() => setSelectedSubject(subject)}
              >
                {subject}
              </div>
            )
          })}
      </div>
      <div className='selected-subject'>
        Materia seleccionada: {selectedSubject} Es Materia princial: {isSelectedSubjectMain ? 'Si es materia principal' : 'no es materia principal'}
      </div>
    </div>
  );
}

export default Subjects;
