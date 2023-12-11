import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
// reactstrap components
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
  } from './MenuElements';

import { UncontrolledTooltip, NavbarBrand } from 'reactstrap';

function Menu () {


 
  return (
    <div>
        <Nav >
        <Bars />
        <NavLink to='/' id='navbar-brand' >
          <h1 styles={{fontSize:'100px'}}>
                  Teccaft 
          </h1>
        </NavLink>
        <NavbarBrand >
        <div className="navbar-collapse-header">
            
        </div>
        <div style={{top:"-100px"}}>
        <UncontrolledTooltip id='spam' placement="bottom" target="navbar-brand">
          <p style={{color:'black', top: '10px',left: '20px'}}>La mejor cafeteria </p>
          
        </UncontrolledTooltip>
        </div>
        </NavbarBrand>
        <NavMenu>
          <NavLink to="/productos" activeStyle>
            Productos
          </NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/usuario" activeStyle>
            Usuarios
          </NavLink>
          
        </NavMenu>
        
      </Nav>
      </div>
  );
}


export default Menu;