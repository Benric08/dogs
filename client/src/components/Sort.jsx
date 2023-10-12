import React from 'react'
import { useDispatch } from 'react-redux';
import { setOrder } from '../redux/actions';
import styled from 'styled-components';
const SortCopntainer = styled.div`
    display: flex;
    align-items: center;
`;
const SelectTag = styled.select`
    background-color: #f4f2f2;
    border: none;
    color: #646464;
    padding: 0.7rem 1rem;
    border-radius: 30px;
    width: 12rem;
    transition: all ease-in-out .5s;
    &:focus{
        outline: none;
    background-color: #f0eeee;
    }
`;

const Sort = () => {
  //!bug in el ordenamiento despued de filtrar se queda seleccionado un ordenamiento inadecuado
  const dispatch = useDispatch();
  const handleSort = (evento) => {
    const { value } = evento.target;
    dispatch(setOrder(value));
    
  }
  return (
    <SortCopntainer>
      <label htmlFor="sort">Ordenar por: </label>
      <SelectTag name="sort" id="sort" onChange={handleSort} defaultValue={"upward"}>
        <option value="upward" >Temperaments: A-Z </option>
        <option value="falling">Temperaments: Z-A </option>
        <option value="lowerweight">Peso: menor peso</option>
        <option value="greaterweight">Peso: mayor peso</option>
      </SelectTag>
    </SortCopntainer>
  )
}

export default Sort;