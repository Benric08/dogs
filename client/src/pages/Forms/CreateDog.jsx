import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import AutoComplete from '../../components/AutoComplete';
import InputField from '../../components/InputField';
import createDogValidation from '../../utils/form-validations/createDogValidator';
import {createBreed} from '../../redux/actions';
import styles from './CreateDog.module.css';
/* "name":"pitfruit bur", 
   "image":"./hashaha.png", 
   "height":"", 
   "weight":"", 
   "lifeSpan":"9 - 15", 
   "temperaments": ["c174438f-cb5e-440a-8c94-d60ddd2c0b83"] */

const dataInput = {
  name: "",
  image: "",
  heightMin: "",
  heightMax: "",
  weightMin: "",
  weightMax: "",
  lifeSpanMin: "",
  lifeSpanMax: "",
  temperaments: []
}
function CreateDog() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  console.log("tempressssssss", temperaments);
  const [dataOfBreed, setDataOfBreed] = useState(dataInput);
  const [inputTouch, setInputTouch] = useState(dataInput);
  const [errors, setErrors] = useState({});

  const getTemperamentsSelected = (temperaments) => {
    setDataOfBreed({ ...dataOfBreed, temperaments })
  }
  const handleSubmit = (e) => { 
    e.preventDefault();
    //!validar form
    const formData = new FormData();
    formData.append('breed',JSON.stringify(dataOfBreed));
    formData.append('image',dataOfBreed.image);
    dispatch(createBreed(formData));
  }

  const handleChangeDataBreed = (evento) => {
    const { name, value } = evento.target;
    //setErrors(createDogValidation({...dataOfBreed, [name]: value }));
    if (name==="image" ) {
      setDataOfBreed({ ...dataOfBreed, [name]: evento.target.files[0] });
    }else setDataOfBreed({ ...dataOfBreed, [name]: value });
  }

  const handleErrors = (evento) => {
    const { name, value } = evento.target;
    if (name==="image" ) {
      setErrors({ ...dataOfBreed, [name]: evento.target.files[0] });
    }else setErrors(createDogValidation({ ...dataOfBreed, [name]: value }));
    setInputTouch({ ...inputTouch, [name]: true })
  }

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <input type="text" id='name' name='name' onChange={handleChangeDataBreed} value={dataOfBreed.name} onBlur={handleErrors} />
      <label htmlFor="name">Denominacion de la raza </label>
      {errors?.name && inputTouch?.name && <span className={styles.error}>{errors.name}</span>}
      <b>Altura</b>
      <input type="text" id='hmin' name='heightMin' onChange={handleChangeDataBreed} value={dataOfBreed.heightMin} onBlur={handleErrors} />
      <label htmlFor="hmin">Mínimo</label>
      {errors?.heightMin && inputTouch?.heightMin && <span className={styles.error}>{errors.heightMin}</span>}
      <input type="text" id='hmax' name='heightMax' onChange={handleChangeDataBreed} value={dataOfBreed.heightMax} onBlur={handleErrors} />
      <label htmlFor="hmax">Máximo</label>
      {errors?.heightMax && inputTouch?.heightMax && <span className={styles.error}>{errors.heightMax}</span>}
      <b>Peso</b>
      <input type="text" id='wmin' name='weightMin' />
      <label htmlFor="wmin">Mínimo</label>
      <input type="text" id='wmax' name='weightMax' />
      <label htmlFor="wmax">Máximo</label>
      <b>Tiempo de vida</b>
      <input type="text" id='lspanmin' name='lifeSpanMin' />
      <label htmlFor="lspanmin">Mínimo</label>
      <input type="text" id='lspanmax' name='lifeSpanMax' />
      <label htmlFor="lspanmax">Máximo</label>

      <input type="file" name="image" id="image" onChange={handleChangeDataBreed}/>
      <label htmlFor="image">seleccionar imagen</label>


      <AutoComplete opciones={temperaments} getTemperamentsSelected={getTemperamentsSelected} onFocus={handleErrors} />
      {errors?.temperaments && <span className={styles.error}>{errors.temperaments}</span>}

    </form>
  )
}

export default CreateDog;