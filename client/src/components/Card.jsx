import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FavoriteIcon from './FavoriteIcon';
import { useSelector } from 'react-redux';

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
const Card = ({breed}) => {
    const myFavorites = useSelector((state) => state.favorites);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
      myFavorites.forEach(favorite => {
        favorite.id===breed.id && setIsFavorite(true);
      });
    
    }, [myFavorites])
    

    return (
        <CardElement>
            <header>
                <h3>{breed.name}</h3>
                <FavoriteIcon breed={breed} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
            </header>
            <ImageContent>
                <BreedImage src={breed.image} alt={breed.name}/>
            </ImageContent>
            <footer>
                <span>Peso: {breed.weight}</span>
                <TemperamentWraper>
                    {breed.temperaments.map((temperament,index) => <li key={index}>{temperament}</li>)}
                </TemperamentWraper>
            </footer>
        </CardElement>
    )
}

export default Card