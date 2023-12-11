import { useCanister } from "@connect2ic/react";
import React, { useState } from "react";
import './estilos.css';


function CafeteriaItemUsr (props) {
    const { usuario, refresh} = props;

    const [teccaft_backend] = useCanister("teccaft");

    const [nombre,setnombre] = useState(usuario[1].nombre)
    const [apellidop,setapellidop] = useState(usuario[1].apellidop)
    const [apellidom,setapellidom] = useState(usuario[1].apellidom)
    const [telefono,settelefono] = useState(usuario[1].telefono)

    const [visible, setVisible] = useState(false);

    const [update, setUpdate] = useState(false);

    const handleUpdateUsr = async (producto) => {
        producto.preventDefault();

        try {
            await teccaft_backend.actualizarUsuario(
                usuario[0], 
                nombre,
                apellidop,
                apellidom,
                telefono);
            await refresh();
        } catch(e) {
            console.log(e);
        } finally {
            setVisible(false);
        }
    }

    const handleDeleteUsr = async (producto) => {
        producto.preventDefault();
        try {
            await teccaft_backend.eliminarUsuario(usuario[0]);
            await refresh();
        } catch(e) {
            console.log(e);
        } finally {
            setVisible(false);
        }
    }


  return (
    <div>
        <div>
        <br></br><label id="modal-items-text">Usuario: {nombre}</label>
        <br></br><label>Introduce el nombre</label>
        <br></br><label id="modal-items-text">Introduce el Nombre</label>
        <br></br><input id="nombre" className="modal-items2" placeholder='Nombre' value={nombre} onChange={(e) => setnombre(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce el Apellido Paterno</label>
        <br></br><input id="apellidop" className="modal-items2" placeholder='Apellido Paterno' value={apellidop} onChange={(e) => setapellidop(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce el Apellido Materno</label>
        <br></br><input id="apellidom"  className="modal-items2" placeholder='Apellido Materno' value={apellidom} onChange={(e) => setapellidom(e.target.value)}/>
        <br></br><label id="modal-items-text">Introduce el teléfono</label>
        <br></br><input id="telefono" className="modal-items2" placeholder='Teléfono' value={telefono} onChange={(e) => settelefono(e.target.value)}/>
        <br></br><br></br>
        <div style={{display:'flex' ,flexDirection:'row'}}><button id='button' onClick={handleUpdateUsr}>Actualizar</button>
        <button id='button' onClick={handleDeleteUsr}>Borrar</button></div>
        
        </div>


    </div>
  )
}

export default CafeteriaItemUsr;