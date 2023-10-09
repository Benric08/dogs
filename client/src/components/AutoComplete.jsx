import React, { useState } from 'react';
import styled from 'styled-components'


const Autocomplete = styled.div`
    position: relative;
    width: 300px;
    margin: 20px auto;
  `;

const Input = styled.input`
    width: 90%;
    padding: 3% 5%;
    border: 1px solid #ccc;
    border-radius: 4px;
    
  `;

const Options = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #786d6d;
    border-top: none;
    border-radius: 0 0 4px 4px;
    max-height: 150px;
    overflow-y: auto;
    display: block;
    list-style-type: none;
    padding: 0;
    margin: 0;
    
  `;

const Items = styled.li`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f2f2f2;
    }
  `;




const AutoComplete = ({ opciones, getTemperamentsSelected, onFocus }) => {
    console.log("tempre", opciones);
    const [opcionesToShow, setOpcionesToShow] = useState(opciones)
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputValue(value);

        // Filtra las opciones basadas en el valor de entrada
        const filtered = opcionesToShow.filter((opcion) =>
            opcion.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredOptions(filtered);

        // Muestra las opciones si hay coincidencias, ocúltalas si no las hay
        setShowOptions(filtered.length > 0);
    };

    const handleDeleteElement = (opcion) => {
        setSelectedOptions(selectedOptions.filter((item) => item.id !== opcion.id));
        setOpcionesToShow([...opcionesToShow, opcion]);
    }
    const handleOptionClick = (opcion) => {

        setOpcionesToShow(opcionesToShow.filter((item) => item.name !== opcion.name));
        setSelectedOptions([...selectedOptions, opcion]);
        setInputValue("");
        setShowOptions(false);
        getTemperamentsSelected(selectedOptions);
    };
    const handleOnFocus = (evento) => {
        evento.target.value = selectedOptions;
        onFocus(evento);
    }


    return (
        <Autocomplete>
            {selectedOptions.map((opcion) => <span key={opcion.id}>{opcion.name}<button onClick={() => handleDeleteElement(opcion)}>X</button></span>)}
            <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleOnFocus}
                placeholder="Buscar..."
                name='temperaments'
            />
            {showOptions && (
                <Options>
                    {filteredOptions.map((opcion) => (
                        <Items key={opcion.id} onClick={() => handleOptionClick(opcion)}>
                            {opcion.name}
                        </Items>
                    ))}
                </Options>
            )}
        </Autocomplete>
    );
};

export default AutoComplete;
