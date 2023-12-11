import React from 'react';
import { useState } from 'react';

import { useCanister } from '@connect2ic/react';
import  CafeteriaItemProd  from "./CafeteriaItemProd";
import './estilos.css';
import { Modal } from 'reactstrap';

function Productos () {
     // Estado para el modal3
  const [modalIsOpen3, setModalIsOpen3] = useState(false);

  // Funciones para abrir y cerrar el modal del modal 1
  const openModal3 = () => {
    setModalIsOpen3(true);
  };

  const closeModal3 = () => {
    setModalIsOpen3(false);
  };

   // Estado para el modal2
   const [modalIsOpen4, setModalIsOpen4] = useState(false);

   // Funciones para abrir y cerrar el modal
   const openModal4 = async () => {
    console.log("Abriendo modal y buscando productos...");
    await handleBuscarProd(); // Realiza la búsqueda al abrir el modal
    setModalIsOpen4(true);
  };

  const closeModal4 = () => {
    setModalIsOpen4(false);
  };
      

    const [teccaft_backend] = useCanister("teccaft");

    const [Productos, setProductos] = useState([]);

    const [nombrep,setnombrep] = useState('')
    const [descripcion,setdescripcion] = useState('')
    const [existencias,setexistencias] = useState('')
    const [caducidad,setcaducidad] = useState('')
    const [marca,setmarca] = useState('')
    const [precio,setprecio] = useState('')

    const handleBuscarProd = async () => {
        try {
            const result = await teccaft_backend.buscarProducto();
            setProductos(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmitProd = async (e) =>{
        e.preventDefault();
        try{
            const result = await teccaft_backend.crearProducto(
                nombrep,
                descripcion,
                existencias,
                caducidad,
                marca,
                precio)
            console.log(result)
        }catch(error){
            console.error(error)
        }
        
    }

    const modalContentClass = Productos.length > 1 ? 'many-records' : '';

 return (
    <div>
      {/* Otros componentes */}

      <button className='button' onClick={openModal3}>Agregar Producto</button>

      <button className='button' onClick={openModal4}>Buscar Producto</button>   
    

    <Modal isOpen={modalIsOpen3}
        onRequestClose={closeModal3}
        contentLabel="Modal 3"
        className="custom-modal">

        <button className="modal-items-button" onClick={closeModal3}>X</button>
        {/* Campos del formulario */}
        <form onSubmit={handleSubmitProd}>
        <div>
        <br></br><br></br><label id="modal-items-text">Introduce el nombre</label>
        <br></br><input id="nombreEv"  className="modal-items"placeholder='Nombre' value={nombrep} onChange={(e) => setnombrep(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce la descripcion</label>
        <br></br><input id="descripcion"  className="modal-items"placeholder='Descripcion' value={descripcion} onChange={(e) => setdescripcion(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce las existencias</label>
        <br></br><input id="existencias"  className="modal-items"placeholder='Existencias' value={existencias} onChange={(e) => setexistencias(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce la fecha de caducidad</label>
        <br></br><input id="caducidad" className="modal-items" placeholder='Caducidad' value={caducidad} onChange={(e) => setcaducidad(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce la marca</label>
        <br></br><input id="marca" className="modal-items"placeholder='Marca' value={marca} onChange={(e) => setmarca(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce el precio</label>
        <br></br><input id="precio" className="modal-items" placeholder='Precio' value={precio} onChange={(e) => setprecio(e.target.value)}/>
        <br></br><br></br><button id='button' type="submit">Enviar</button>
        </div>
        </form>
    </Modal>
    {/* Buscar Producto */}
    <Modal isOpen={modalIsOpen4}
        onRequestClose={closeModal4}
        contentLabel="Modal 4"
        className={`custom-modal modal-content ${modalContentClass}`}>
        <button className="modal-items-button" onClick={closeModal4}>X</button>
               <div className="user-records-container">
    {Productos.map((productos) => (
<div key={productos[0]} className="user-record">
  <CafeteriaItemProd Evento={productos} refresh={handleBuscarProd} />
  </div>
))}
</div>
</Modal>
</div>
    
  );
}


export default Productos;