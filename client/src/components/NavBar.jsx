import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Nav = styled.nav`
        width: 30vw;
        background-color: red;
        `;
const NavConatainer = styled.ul`
        height: 32px;
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;
const NavElements = styled.li`

    `;

const NavAnchor = styled(NavLink)`
        text-decoration: none;
        background-color: red;
        padding: 2px;
        color:white;
        &:hover {
            color: green;
            background-color: blue;
        }
        
    `;
const NavBar = () => {


    return (
        <Nav>
            <NavConatainer>
                <NavElements><NavAnchor to="/home">Home</NavAnchor></NavElements>
                <NavElements><NavAnchor to="/favorites"> Favoritos</NavAnchor></NavElements>
                <NavElements><NavAnchor to="/createdog"> agregar raza</NavAnchor></NavElements>
                <NavElements></NavElements>
                <NavElements></NavElements>
            </NavConatainer>
        </Nav>
    )
}

export default NavBar;