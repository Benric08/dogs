import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getBreedById } from '../../redux/actions';
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
        isLoading?
        <h3>is loading... </h3>:
        <div>Detail
            {breed?.breed?.name}
            <img src={breed?.breed?.image} alt={breed?.breed?.name}/>
        </div>
    )
}

export default Detail