import React from 'react';
import { useState } from 'react';
import { Modal } from 'reactstrap';
import { useCanister } from '@connect2ic/react';
import FestividadItemUsr from "./CafeteriaItemUsr";
import './estilos.css';

function User () {

    // Estado para el modal1
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Funciones para abrir y cerrar el modal del modal 1
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

   // Estado para el modal2
   const [modalIsOpen2, setModalIsOpen2] = useState(false);

   // Funciones para abrir y cerrar el modal
   // Funciones para abrir y cerrar el modal

   const openModal2 = async () => {
    console.log("Abriendo modal y buscando usuarios...");
    await handleBuscarUsr(); // Realiza la búsqueda al abrir el modal
    setModalIsOpen2(true);
  };

  const closeModal2 = () => {
    setModalIsOpen2(false);
  };

    const [teccaft_backend]  = useCanister("teccaft");

    const [usuarios, setUsuarios] = useState([]);

    const [nombre,setnombre] = useState('')
    const [apellidop,setapellidop] = useState('')
    const [apellidom,setapellidom] = useState('')
    const [telefono,settelefono] = useState('')
   

    const handleBuscarUsr = async () => {
        try {
            const result = await teccaft_backend.buscarProducto();
            setUsuarios(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmitUsr = async (e) =>{
        e.preventDefault();
        try{
            const result = await teccaft_backend.crearUsuario(
                nombre,
                apellidop,
                apellidom,
                telefono)
            console.log(result)
        }catch(error){
            console.error(error)
        }
        
    }

    const modalContentClass = usuarios.length > 1 ? 'many-records' : '';

 return (
    <div>
      {/* Otros componentes */}
      <button className='button'  onClick={openModal}>Agregar Usuario</button>
      <button className='button' onClick={openModal2}>Buscar Usuario</button>

    <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal 1"
        className="custom-modal">
    <button className="modal-items-button" onClick={closeModal}>X</button>
    <form onSubmit={handleSubmitUsr}>
        
        {/* Campos del formulario */}
        <br></br><br></br><label id="modal-items-text">Introduce el nombre</label>
        <br></br><input  className="modal-items" placeholder='Nombre' value={nombre} onChange={(e) => setnombre(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce el Apellido Paterno</label>
        <br></br><input id="apellidop" className="modal-items" placeholder='Apellido Paterno' value={apellidop} onChange={(e) => setapellidop(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce el Apellido Materno</label>
        <br></br><input id="apellidom" className="modal-items" placeholder='Apellido Materno' value={apellidom} onChange={(e) => setapellidom(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce el teléfono</label>
        <br></br><input id="telefono" className="modal-items" placeholder='Teléfono' value={telefono} onChange={(e) => settelefono(e.target.value)}/>
        <br></br><br></br><button id='button' type="submit">Enviar</button>
    </form>

    

    </Modal>

    {/* Buscar Usuario */}
    <Modal isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        contentLabel="Modal 2"
        className={`custom-modal modal-content ${modalContentClass}`}>   
          <button className="modal-items-button" onClick={closeModal2}>X</button>
          <div className="user-records-container">
          {usuarios.map((usuario) => (
      <div key={usuario[0]} className="user-record">
        <FestividadItemUsr usuario={usuario} refresh={handleBuscarUsr} />
        </div>
    ))}
  </div>
    </Modal>

    </div>
  );
}


export default User;