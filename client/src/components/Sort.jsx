import React from 'react'
import { useDispatch } from 'react-redux';
import { setOrder } from '../redux/actions';
const Sort = () => {
  //!bug in el ordenamiento despued de filtrar se queda seleccionado un ordenamiento inadecuado
  const dispatch = useDispatch();
  const handleSort = (evento) => {
    const { value } = evento.target;
    dispatch(setOrder(value));
    
  }
  return (
    <div>
      <label htmlFor="sort">Ordenar por: </label>
      <select name="sort" id="sort" onChange={handleSort} defaultValue={"upward"}>
        <option value="upward" >Temperaments: A-Z </option>
        <option value="falling">Temperaments: Z-A </option>
        <option value="lowerweight">Peso: menor peso</option>
        <option value="greaterweight">Peso: mayor peso</option>
      </select>
    </div>
  )
}

export default Sort;