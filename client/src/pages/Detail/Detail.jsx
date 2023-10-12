import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getBreedById } from '../../redux/actions';
import styles from './Detail.module.css';
const baseurl = "http://localhost:3001";
const Detail = () => {
    const breed = useSelector((state) => state.breed);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const getById = async (id) => {
        await dispatch(getBreedById(id)).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        setIsLoading(true);
        getById(id);
        return () => {
            //! desmontar falta implementar
            
        }
    }, [])

    return (
        isLoading ?
            <h3>is loading... </h3> :
            (<div className={styles.container}>

                <h2 className={styles.breedName}>
                    {breed?.breed?.name}
                </h2>

                <img className={styles.imageBreed} src={typeof breed?.breed?.id === 'string' ? `${baseurl}/images/${breed.image}` : breed?.breed?.image} alt={breed?.breed?.name} />
                <div className={styles.metricsContainer}>
                    <div className={styles.metrics}>
                        <p>{`Altura`}</p>
                        <p>{`${breed?.breed?.height}`}</p>
                        <p>{`cm`}</p>
                    </div>
                    <div className={styles.metrics}>
                        <p>{`Peso`}</p>
                        <p>{`${breed?.breed?.height}`}</p>
                        <p>{`Kg`}</p>
                    </div>
                    <div className={styles.metrics}>
                        <p>{`Tiempo de vida`}</p>
                        <p>{`${breed?.breed?.height}`}</p>
                        <p>{`años`}</p>
                    </div>
                </div>
                <br />
                <br />
                <h4>Temperamentos</h4>
                <div className={styles.temperaments}>
                    {breed?.breed?.temperaments?.map((temp) => <p key={temp}>{temp} </p>)}
                </div>
            </div>)
    )
}

export default Detail