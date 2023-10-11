import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AutoComplete from '../../components/AutoComplete';
import createDogValidation from '../../utils/form-validations/createDogValidator';
import { createBreed } from '../../redux/actions';
import styles from './CreateDog.module.css';
import iconCamera from '../../assets/icons/camera.svg';

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
  //TODO: recibimos los cambios del componente AutoComplete y los modificacmos en el estado de los inputs
  const getTemperamentsSelected = (temperament) => {
    setDataOfBreed({ ...dataOfBreed, temperaments: [...dataOfBreed.temperaments, temperament.id] });
  }

  const removeTemperamentsFromSelected = (temperament) => {
    setDataOfBreed({ ...dataOfBreed, temperaments: dataOfBreed.temperaments.filter((temper) => temper !== temperament.id) });
  }
  const handleSubmit = (e) => {
    console.log("enviado datos del peero ", dataOfBreed);
    e.preventDefault();
    //!validar form

    const dataToSend =
    {
      name: dataOfBreed.name,
      height: `${dataOfBreed.heightMin} - ${dataOfBreed.heightMax}`,
      weight: `${dataOfBreed.weightMin} - ${dataOfBreed.weightMax}`,
      lifeSpan: `${dataOfBreed.lifeSpanMin} - ${dataOfBreed.lifeSpanMax}`,
      temperaments: dataOfBreed.temperaments
    }
    console.log("formadno los datos para enviar ", dataToSend);
    const formData = new FormData();
    formData.append('breed', JSON.stringify(dataToSend));
    formData.append('image', dataOfBreed.image);
    console.log("formdata--->>>", formData);
    dispatch(createBreed(formData));
  }

  const handleChangeDataBreed = (evento) => {
    const { name, value } = evento.target;

    if (name === "image") {
      setDataOfBreed({ ...dataOfBreed, [name]: evento.target.files[0] });

    } else {
      setDataOfBreed({ ...dataOfBreed, [name]: value });

    }

  }

  const handleErrors = (evento) => {
    const { name, value } = evento.target;
    if (name === "image") {
      setErrors(createDogValidation({ ...dataOfBreed, [name]: evento.target.files[0] }));
    } else setErrors(createDogValidation({ ...dataOfBreed, [name]: value }));
    setInputTouch({ ...inputTouch, [name]: true });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Raza de Perro</h3>
      <br />
      <div className={styles.row}>
        <div className={styles.name}>
          <label htmlFor="name">Denominacion de la raza </label>
          <input type="text" id='name' name='name' className={errors?.name && inputTouch?.name && styles.inputError} onChange={handleChangeDataBreed} value={dataOfBreed.name} onBlur={handleErrors} />
          <ul className={styles.listErrors}>
            {errors?.name && inputTouch?.name && <li className={styles.error}>{errors.name}</li>}
          </ul>
        </div>

        <div className={styles.fileContainer}>
          <input type="file" name="image" id="image" onChange={handleChangeDataBreed} className={styles.fileInput} onBlur={handleErrors} />
          <label htmlFor="image" className={styles.labelInputFile}>
            <figure>
              <img src={iconCamera} alt="" />
            </figure>
            <span className={errors?.image && inputTouch?.image ? styles.errorMessageLabel : styles.messageLabel}>{dataOfBreed.image === "" ? `Seleccionar imagen` : `Imagen seleccionada`}</span>
          </label>
          <ul className={styles.listErrors}>
            {errors?.image && inputTouch?.image && <li className={styles.error}>{errors.image}</li>}
          </ul>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.height}>
          <label htmlFor="height">Altura(cm)</label>
          <div id='height' >
            <input type="text" placeholder="Minimo" className={errors?.heightMin && inputTouch.heightMin && styles.inputError} id='hmin' name='heightMin' onChange={handleChangeDataBreed} value={dataOfBreed.heightMin} onBlur={handleErrors} />
            <input type="text" placeholder="Máximo" className={errors?.heightMax && inputTouch.heightMax && styles.inputError} id='hmax' name='heightMax' onChange={handleChangeDataBreed} value={dataOfBreed.heightMax} onBlur={handleErrors} />
          </div>
          <ul className={styles.listErrors} >
            {errors?.heightMin && inputTouch?.heightMin && <li className={styles.error}>{errors.heightMin}</li>}
            {errors?.heightMax && inputTouch?.heightMax && <li className={styles.error}>{errors.heightMax}</li>}
          </ul>
        </div>
        <div className={styles.weight}>
          <label htmlFor="weight">Peso (kilos)</label>
          <div>
            <input type="text" placeholder="Minimo" className={errors?.weightMin && inputTouch.weightMin && styles.inputError} id='wmin' name='weightMin' onChange={handleChangeDataBreed} value={dataOfBreed.weightMin} onBlur={handleErrors} />
            <input type="text" placeholder="Máximo" className={errors?.weightMax && inputTouch.weightMax && styles.inputError} id='wmax' name='weightMax' onChange={handleChangeDataBreed} value={dataOfBreed.weightMax} onBlur={handleErrors} />
          </div>
          <ul className={styles.listErrors} >
            {errors?.weightMin && inputTouch?.weightMin && <li className={styles.error}>{errors.weightMin}</li>}
            {errors?.weightMax && inputTouch?.weightMax && <li className={styles.error}>{errors.weightMax}</li>}
          </ul>
        </div>
      </div>


      <div className={styles.row}>
        <div className={styles.lifeSpan}>
          <label htmlFor="lspanmin">Tiempo de vida (años)</label>
          <div>
            <input type="text" placeholder="Minimo" className={errors?.lifeSpanMin && inputTouch.lifeSpanMin && styles.inputError} id='lspanmin' name='lifeSpanMin' onChange={handleChangeDataBreed} value={dataOfBreed.lifeSpanMin} onBlur={handleErrors} />
            <input type="text" placeholder="Máximo" className={errors?.lifeSpanMax && inputTouch.lifeSpanMax && styles.inputError} id='lspanmax' name='lifeSpanMax' onChange={handleChangeDataBreed} value={dataOfBreed.lifeSpanMax} onBlur={handleErrors} />
          </div>
          <ul className={styles.listErrors} >
            {errors?.lifeSpanMin && inputTouch?.lifeSpanMin && <li className={styles.error}>{errors.lifeSpanMin}</li>}
            {errors?.lifeSpanMax && inputTouch?.lifeSpanMax && <li className={styles.error}>{errors.lifeSpanMax}</li>}
          </ul>
        </div>
        <div className={styles.temperament}>
          <label htmlFor="">Temperamento</label>
          <AutoComplete opciones={temperaments} getTemperamentsSelected={getTemperamentsSelected} onBlur={handleErrors} removeTemperamentsFromSelected={removeTemperamentsFromSelected} />
          <ul className={styles.listErrors} >
            {errors?.temperaments && inputTouch?.temperaments && <li className={styles.error}>{errors.temperaments}</li>}
          </ul>
        </div>

      </div>

      <button type="submit" >Guardar</button>

    </form>
  )
}

export default CreateDog;