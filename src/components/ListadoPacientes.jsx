import {useEffect} from 'react'
import Header from './Header';
import Paciente from './Paciente';

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {



  return (
    <div className="md:w-1/2 lg:w-3/5 mt-5 px-10 " >
      <Header/>
    <h2 className="font-black text-2xl mt-5">Listado de citas</h2>
    <p className="text-md">Citas pendientes para consulta</p>

<div className="md:h-screen overflow-y-scroll">

{pacientes.length !== 0 ? 
 pacientes.map( (paciente) => (
     <Paciente
     key={paciente.id}                                                         
        paciente={paciente}  
        setPaciente={setPaciente} 
        eliminarPaciente={eliminarPaciente}                                                
     />                    
  )) : (
    <p>No hay pacientes aún</p>
 )
}
    
  
    </div>
    </div>
  )
}

export default ListadoPacientes