import {isEmpty} from '../validation';
export default function createDogValidation(inputs){
    console.log("Validador de Dog", inputs);
    const errors={};
    if(isEmpty(inputs?.name)) errors.name='El campo nombre no puede estar vacio';
    //if(isEmpty(inputs?.temperaments)) errors.temperaments='Debe seleccionar almenos un temperamento';
    if(isEmpty(inputs?.heightMin)) errors.heightMin='Debe ingresar una altura minima';
    if(isEmpty(inputs?.heightMax)) errors.heightMax='Debe ingresar una altura maxima';
    /* if(isEmpty(inputs.descripcion)) errors.descripcion='El campo descripción es obligatorio';
    if(isLengthMax(inputs.descripcion,200)) errors.descripcion='No puede ingresar más de 200 carateres';
    if(isLengthMin(inputs.descripcion,6)) errors.descripcion='Debe ingresar al menos 6 caracteres';
    if(isLengthMax(inputs.detalle,200)) errors.detalle="No puede ingresar más de 200 carateres";
    if(isEmpty(inputs.cantidad)) errors.cantidad='El campo cantidad es obligatorio';
    if(isNumber(inputs.cantidad)) errors.cantidad='Debe ingresar solo numeros';
    if(isGreaterThanZero(inputs.cantidad)) errors.cantidad='0 es una cantidad no valida';
    if(isNumberMax(inputs.cantidad,6)) errors.cantidad=`${inputs.cantidad} es una cantidad no valida`;
    if(isDecimal(inputs.precio_unitario)) errors.precio_unitario='Debe ingresar solo numeros';
    if(isGreaterThanZero(inputs.precio_unitario)) errors.precio_unitario=`${inputs.precio_unitario} es un precio no valida`;
    if(isEmpty(inputs.precio_unitario)) errors.precio_unitario='El campo precio unitario es obligatorio'; */
    return errors
}