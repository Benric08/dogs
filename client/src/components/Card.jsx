import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteIcon from './FavoriteIcon';

const baseurl = "http://localhost:3001";
const CardElement = styled.section`
        border-radius: 50px;
        height: 70vh;
        width: 28vw;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
const ImageContent = styled.main`
    width: 90%;
    height: 60%;
`;

const BreedImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const TemperamentWraper = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around ;
    
`;
const Card = ({ breed }) => {
    const myFavorites = useSelector((state) => state.favorites);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleShowDetail = () => {

    }

    useEffect(() => {
        myFavorites.forEach(favorite => {
            favorite.id === breed.id && setIsFavorite(true);
        });

    }, [myFavorites])


    return (
        <CardElement>
            <header>
                <Link to={`/detail/${breed.id}`}>
                    <h3>{breed.name}</h3>
                </Link>
                <FavoriteIcon breed={breed} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
            </header>
            <ImageContent >
                <Link to={`/detail/${breed.id}`}>
                    <BreedImage src={typeof breed.id==='string'? `${baseurl}/images/${breed.image}`:breed.image} alt={breed.name} />
                </Link>
            </ImageContent>
            <footer>
            <Link to={`/detail/${breed.id}`}>
                <span>Peso: {breed.weight}</span>
                <TemperamentWraper>
                    {breed.temperaments.map((temperament, index) => <li key={index}>{temperament}</li>)}
                </TemperamentWraper>
            </Link>
            </footer>
        </CardElement>
    )
}

export default Card