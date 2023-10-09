import React from 'react'
import styled from 'styled-components';
const InputGroup = styled.div`
  position  : relative ;
`;
const Input = styled.input`
  font  : inherit;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  outline: 2px solid #fff;
  background-color: transparent;
  transition: outline-color 500ms;
  &:is(:focus, :valid){
    outline-color: #3c50eb;
  }
  &:focus {
    padding-inline:5px ;
    translate:10px -14px;
    scale: 0.8;
    background-color: #000;
  }
  &:valid {
    padding-inline:5px ;
    translate:10px -14px;
    scale: 0.8;
    background-color: #000;
  }
`;

const Label = styled.label`
  position  : absolute;
  top: 0;
  left: 0;
  translate: 10px 10px;
  color: #fff;
  transition: translate 500ms,scale 500ms;
`;

const InputField = () => {
    return (
    <InputGroup>
        <Label htmlFor="name">Nombre de la raza</Label>
        <Input type="text" id="name" name='name'/>
    </InputGroup>
    )
}

export default InputField;