import { useState, useEffect } from 'react'

import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
  //listado de pacientes
const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);

//un solo paciente
const [paciente, setPaciente] = useState({})


useEffect(()=>{
  localStorage.setItem('pacientes', JSON.stringify(pacientes))
},[pacientes])


const eliminarPaciente = (id) =>{
  const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)

  setPacientes(pacientesActualizados)
console.log("eliminar paciente ", id)
}
  return (
    <div className="container">
    
    <div className="flex">
    <Formulario
    setPacientes={setPacientes}
    pacientes={pacientes}
    paciente={paciente}
    setPaciente={setPaciente}/>
    
    <ListadoPacientes
    pacientes={pacientes}
    setPaciente={setPaciente}
    eliminarPaciente={eliminarPaciente}
    />
    </div>
    </div>
  )
}

export default App
