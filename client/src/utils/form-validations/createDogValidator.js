import {isArrayEmpty, isEmpty, isFileImage, isFileSizeCorrect, isGreaterThan, isGreaterThanZero, isLengthMax, isLengthMin, isNumber, isText} from '../validation';
export default function createDogValidation(inputs){
    console.log("Validador de Dog", inputs);
    const errors={};
    if(isLengthMax(inputs?.name,30)) errors.name='Se permite un maximo de 30 caracteres';
    if(isLengthMin(inputs?.name,3)) errors.name='El nombre debe tener minimo 3 caracteres';
    if(isText(inputs?.name)) errors.name='Solo se permiten letras';
    if(isEmpty(inputs?.name)) errors.name='El campo nombre no puede estar vacio';
    //if(isEmpty(inputs?.temperaments)) errors.temperaments='Debe seleccionar almenos un temperamento';
    if (isFileSizeCorrect(inputs?.image,5)) errors.image='la imagen debe ser menor de 5mb';
    if (isFileImage(inputs?.image)) errors.image='Solo se aceptann imagenes .jpg y .png';

    if(isNumber(inputs?.heightMin)) errors.heightMin='solo se permiten números';
    if(isEmpty(inputs?.heightMin)) errors.heightMin='Debe ingresar una altura minima';
    if(isGreaterThanZero(inputs?.heightMin)) errors.heightMin='Debe ingresar una altura valida';
    if(isNumber(inputs?.heightMax)) errors.heightMax='solo se permiten números';
    if(isGreaterThan(inputs?.heightMax,inputs?.heightMin)) errors.heightMax='La altura Maxima debe ser mayor que la minima';
    if(isEmpty(inputs?.heightMax)) errors.heightMax='Debe ingresar una altura maxima';
    
    if(isNumber(inputs?.weightMin)) errors.weightMin='solo se permiten números';
    if(isGreaterThanZero(inputs?.weightMin)) errors.weightMin='Debe ingresar un peso valido';
    if(isEmpty(inputs?.weightMin)) errors.weightMin='Debe ingresar un peso minima';
    if(isNumber(inputs?.weightMax)) errors.weightMax='solo se permiten números';
    if(isGreaterThan(inputs?.wheightMax,inputs?.weightMin)) errors.wheightMax='El peso Maximo debe ser mayor que el minimo';
    if(isEmpty(inputs?.weightMax)) errors.weightMax='Debe ingresar un peso maximo';
    
    
    if(isGreaterThanZero(inputs?.lifeSpanMin)) errors.lifeSpanMin='Debe ingresar una altura valida';
    if(isNumber(inputs?.lifeSpanMin)) errors.lifeSpanMin='solo se permiten números';
    if(isEmpty(inputs?.lifeSpanMin)) errors.lifeSpanMin='Debe ingresar una edad minima';

    if(isNumber(inputs?.lifeSpanMax)) errors.lifeSpanMax='solo se permiten números';
    if(isGreaterThan(inputs?.lifeSpanMax,inputs?.lifeSpanMin)) errors.lifeSpanMax='la edad Maxima debe ser mayor que la minima';
    if(isEmpty(inputs?.lifeSpanMax)) errors.lifeSpanMax='Debe ingresar una edad maxima';
   

    if(isArrayEmpty(inputs.temperaments)) errors.temperaments=" Debe ingresar al menos un temperamento"

   
    return errors
}