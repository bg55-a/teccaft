import { FaCoffee } from 'react-icons/fa'; /* Cambiado a un ícono de taza de café */
import { NavLink as Link } from 'react';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #8B4513; /* Marrón oscuro */
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  color: #fff; /* Cambiado el color del texto a blanco */

  h1 {
    font-family: 'Times New Roman', sans-serif; /* Cambiado a tipo de letra Times New Roman */
    color: #fff;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-family: 'Cursive', sans-serif; /* Cambiado a tipo de letra cursiva */
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;

  &.active {
    color: #8B4513; /* Marrón oscuro */
  }
`;

export const Bars = styled(FaCoffee)` /* Cambiado a un ícono de taza de café */
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #D2691E; /* Marrón claro */
  padding: 15px 22px;
  font-size: 18px;
  color: #fff;
  font-style: normal; /* Cambiado a estilo de letra normal */
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #8B4513; /* Marrón oscuro */
    color: #fff;
  }
`;
