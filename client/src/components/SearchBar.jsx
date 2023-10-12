import React, { useState } from 'react'
import styled from 'styled-components';
import {useDispatch} from 'react-redux'
import { searchByName } from '../redux/actions';
import searchIcon from '../assets/icons/search-icon.svg';
const SearchContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        padding: 20px;
    `;
const SearchIcon = styled.img`
        height: 1.3em;
        width: 1.3em;
        fill: #b4b4b4;
    `;
const SearchInput = styled.input`
        font-family: inherit;
  font-size: inherit;
  background-color: #f4f2f2;
  border: none;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 12em;
  transition: all ease-in-out .5s;
  margin-right: -2rem;
  &:hover,:focus{
    box-shadow: 0 0 1em #00000013;
  }
  &:focus{
    outline: none;
  background-color: #f0eeee;
  }
  &::placeholder{
    font-weight: 100;
  color: #ccc;
  }
  &:focus + button{
    background-color: #f0eeee;
  }
    `;

const SearchButton = styled.button`
        
        
       
        
        border: none;
        background-color: #f4f2f2;
        margin-top: .1em;
        &:hover{
            cursor: pointer;
        }
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
            
            <SearchInput type="text" placeholder="Buscar..." name='searcher' onChange={handleChangeSearcher} value={searchearContent}/>
            <SearchButton onClick={handleSearchByName}>
                <SearchIcon src={searchIcon}/>
            </SearchButton>
        </SearchContainer>
    )
}

export default SearchBar;