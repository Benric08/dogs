import React, { useEffect, useState } from 'react';
import styled from 'styled-components'


const Autocomplete = styled.div`
    border: ${props => props.error ?'2px solid red':'2px solid #ccc'};

    position: relative;
    width: 300px;
    background-color: white;
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 2px;
    &:hover{
        border: 1px solid #807182;

    }
  `;

const Input = styled.input`
    width: 90%;
    height: 80%;
    padding: 3% 5%;
    margin: 3px;
    border: none;
    &:focus{
        outline-color: white;
    }
    
  `;

const Options = styled.ul`
    position: absolute;
    background-color: white;
    
    top: 90%;
    left: 0;
    width: 100%;
    border: 1px solid #9c8a8a;
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
const ItemSelected = styled.span`
    border-radius: 16px;
    border: 1px solid #b9b0b099;
    cursor: pointer;
    padding: 2% 4%;
    &::after {
        content: "X";
        margin-left: 5px;
        font-weight: 700;
       
    }

    
  `;




const AutoComplete = ({ opciones, getTemperamentsSelected, onBlur,removeTemperamentsFromSelected ,className}) => {
    
    const [opcionesToShow, setOpcionesToShow] = useState();
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
        // ? getting temperaments according the data in the input
        const filtered = opcionesToShow.filter((opcion) =>
            opcion.name.toLowerCase().includes(inputValue?.toLowerCase())
        );
        setFilteredOptions(filtered);
        //? if there are concidences to show the component is showed with the filtered options
        setShowOptions(filtered.length > 0);
    };

    const handleDeleteElement = (opcion) => {
        //? Eliminamos la opcion de los elementos seleccionados
        setSelectedOptions(selectedOptions.filter((item) => item.id !== opcion.id));
        //? Agregamos denuevo el elemento elimnido a las opciones para mostrar
        setOpcionesToShow([...opcionesToShow, opcion]);
        //? Ejeutamos la funcion que viene por pros para actualizar los temperamentos selccioados
        removeTemperamentsFromSelected(opcion);
    }
    const handleOptionClick = (opcion) => {

        console.log("viendo la opcion seleccionada",opcion);
        //? agregamos la opcion seleccionada al estado selectedOptions
        setSelectedOptions([...selectedOptions, opcion]);
        //? Eliminamos la opcion del estado opcionesToShow para que ya no sea elegible 
        setOpcionesToShow(opcionesToShow.filter((item) => item.name !== opcion.name));

        setInputValue("");
        setShowOptions(false);

        getTemperamentsSelected(opcion);
    };
    const handleOnBlur = () => {
        
        onBlur({target:{name:'temperaments', value:selectedOptions}});
    }
    useEffect(() => {
      setOpcionesToShow(opciones);
    }, [opciones])
    
    
    
    
    return (
        <Autocomplete error={className }>
            {selectedOptions.map((opcion) => <ItemSelected key={opcion.id} onClick={() => handleDeleteElement(opcion)}>{opcion.name}</ItemSelected>)}
            <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleOnBlur}
                placeholder="Escriba el temperamento de la raza..."
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
