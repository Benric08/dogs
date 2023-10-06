import React from 'react'
import styled from 'styled-components';
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

    return (
        <SearchContainer>
            <SearchIcon className="fas fa-search search-icon"></SearchIcon>
            <SearchInput type="text" placeholder="Buscar..." />
            <SearchButton >Buscar</SearchButton>
        </SearchContainer>
    )
}

export default SearchBar;