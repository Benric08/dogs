import React, { useState } from 'react'
import styled from 'styled-components';
import {useDispatch} from 'react-redux'
import { searchByName } from '../redux/actions';
const SearchContainer = styled.div`
        display: flex;
            align-items: center;
            background-color: #f0f0f0;
            padding: 10px;
            border-radius: 5px;
    `;
const SearchIcon = styled.i`
        color: #555;
        margin-right: 10px;
    `;
const SearchInput = styled.input`
        border: none;
        padding: 5px;
        font-size: 16px;
        width: 200px; 
        border-radius: 5px;
        outline: none;
    `;

const SearchButton = styled.button`
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
    `;
const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchearContent, setSearchearContent] = useState("");
    const handleChangeSearcher = (evento) => { 
        setSearchearContent(evento.target.value);
     }
    const handleSearchByName = () => { 
        dispatch(searchByName(searchearContent));
     }
    return (
        //!falta el loader de buscqueda y ver todos los perros de nuevo 
        <SearchContainer>
            <SearchIcon className="fas fa-search search-icon"></SearchIcon>
            <SearchInput type="text" placeholder="Buscar..." name='searcher' onChange={handleChangeSearcher} value={searchearContent}/>
            <SearchButton onClick={handleSearchByName}>Buscar</SearchButton>
        </SearchContainer>
    )
}

export default SearchBar;