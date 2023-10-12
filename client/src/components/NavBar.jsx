import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const active = {
    backgroundColor:'#807182',
    color:'#ffffff',
    display: 'block',
    height: '60px',
    padding: '16px',
}
const deactivate = {
    backgroundColor: ' rgb(255 0 0)',
    color:' rgb(255, 255, 255)',
    display: 'block',
    height: '60px',
    padding: '16px',
}
const Nav = styled.nav`
        width: 100vw;
        padding: 10px;
        background-color: red;
        height: 60px;
        box-shadow: 0 8px 2px -2px #d6939386;
        `;
const NavConatainer = styled.ul`
        height: 100%;
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;
const NavElements = styled.li`
    

    `;

const NavAnchor = styled(NavLink)`
        display: block;
        text-decoration: none;
        
        height: 100%;
        padding: 2px;
       
        &:hover {
            color: green;
            background-color: blue;
        }
        
    `;
const NavBar = () => {


    return (
        <Nav>
            <NavConatainer>
                <NavElements><NavAnchor to="/home" style={({isActive})=>isActive?active:deactivate} >Home</NavAnchor></NavElements>
                <NavElements><NavAnchor to="/favorites" style={({isActive})=>isActive?active:deactivate}> Favoritos</NavAnchor></NavElements>
                <NavElements><NavAnchor to="/createdog" style={({isActive})=>isActive?active:deactivate}> Agregar Raza</NavAnchor></NavElements>
                <NavElements></NavElements>
                <NavElements></NavElements>
            </NavConatainer>
        </Nav>
    )
}

export default NavBar;