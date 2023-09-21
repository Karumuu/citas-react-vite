import  {useEffect} from 'react'

const Paciente = ({setPaciente, paciente, eliminarPaciente}) => {

 const handleEliminar = () =>{

  const respuesta = confirm("¿Deseas eliminar la cita seleccionada?") //CONFIRM es de javascript, un pequeño modal

  if(respuesta){
    eliminarPaciente(paciente.id)
  }
  
 }
  
  return (
    <>
    {/* LISTA */}
    <div className="mt-5 bg-white px-5 py-5 rounded-xl shadow-md">
      {/*NOMBRE*/}
    <p className="font-bold text-gray-700 uppercase">Nombre: {''}</p>
    <span className="font-normal normal-case">{paciente.nombre}</span>

     {/*PROPIETARIO*/}
     <p className="font-bold text-gray-700 uppercase">Propietario: {''}</p>
    <span className="font-normal normal-case">{paciente.propietario}</span>

     {/*CONTACTO*/}
     <p className="font-bold text-gray-700 uppercase">Contacto: {''}</p>
    <span className="font-normal normal-case">{paciente.contacto}</span>

     {/*FECHA DE ALTA*/}
     <p className="font-bold text-gray-700 uppercase">Fecha de consulta: {''}</p>
    <span className="font-normal normal-case">{paciente.fecha}</span>

     {/*MOTIVO DE CONSULTA*/}
     <p className="font-bold text-gray-700 uppercase">Motivo de consulta: {''}</p>
    <span className="font-normal normal-case">{paciente.motivo}</span>

    <div className="flex justify-between mt-5">
      <button type="button"
      className="py-2 px-10 bg-sky-400 rounded-md uppercase text-white font-bold"
      onClick={() => setPaciente(paciente)}>Editar</button>

<button type="button"
      className="py-2 px-10 bg-rose-600 rounded-md uppercase text-white font-bold"
      onClick={handleEliminar}>Eliminar</button>
    </div>
    </div>
    </>
  )
}

export default Paciente