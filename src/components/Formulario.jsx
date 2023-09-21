import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [contacto, setContacto] = useState("");
  const [fecha, setFecha] = useState("");
  const [motivo, setMotivo] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setContacto(paciente.contacto);
      setFecha(paciente.fecha);
      setMotivo(paciente.motivo);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, contacto, fecha, motivo].includes("")) {
      console.log("Recuerda llenar todos los datos");
      setError(true);
    } else {
      setError(false);
      console.log("todo lleno yee");

      //OBJETO PACIENTE
      const objetoPaciente = {
        nombre,
        propietario,
        contacto,
        fecha,
        motivo
      };

if(paciente.id){
  objetoPaciente.id = paciente.id;

  const pacientesActualizados = pacientes.map (pacienteState => pacienteState.id === 
  paciente.id ? objetoPaciente : pacienteState)

  setPacientes(pacientesActualizados);

  setPaciente({})
}else{
  objetoPaciente.id = generarId()
  setPacientes([...pacientes, objetoPaciente]);
}


      
      console.log("pacientes ", pacientes);
      setNombre("");
      setPropietario("");
      setContacto("");
      setFecha("");
      setMotivo("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 bg-neutral-800 p-10 pt-5">
     

      <h2 className="font-black text-2xl text-white mt-3">
        Crear nueva consulta
      </h2>

      <p className="text-md mt-2 text-white">
        Agenda una nueva consulta para el paciente.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-5 px-5 mt-5"
      >
        {error && (
          <Error mensaje="Ha ocurrido un error, asegurate de haber llenado todos los campos" />
        )}

        {/* NOMBRE MASCOTA */}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        {/* NOMBRE PROPIETARIO */}
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre propietario
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del humano"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        {/* EMAIL */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Contacto
          </label>

          <input
            id="email"
            type="email"
            placeholder="Correo electronico"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        {/* FECHA CITA */}
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha alta
          </label>

          <input
            id="alta"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        {/* MOTIVO DE CITA */}
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Motivo cita
          </label>

          <textarea
            id="alta"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describa los sintomas de la mascota"
          />
        </div>

        {/*BOTON ENVIAR */}
        <input
          type="submit"
          className="bg-sky-400 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-sky-600 cursor-pointer transition-all"
          value={paciente.id ? "Editar paciente" : "Agendar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
