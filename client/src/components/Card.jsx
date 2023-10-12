import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteIcon from './FavoriteIcon';

const baseurl = "http://localhost:3001";
const CardElement = styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 16px;
    background: linear-gradient(135deg, #ebadb6 0%, #aceae1 100%);
    box-shadow: -1rem 0 3rem #00000067;
    transition: .2s;
    width: 340px;
    height: 500px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    
    
    border: 1px solid rgba(255, 255, 255, 0.125);
   
    filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
    
    justify-content: center;
    text-align: center;

    &:hover {
        transform: translateY(-0.4rem);
    }
    `;
const ImageContent = styled.main`
    width: 100%;
    height: 100%;
`;

const BreedImage = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
    border: 2px solid red;
`;

const TemperamentWraper = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around ;
    
`;

const StyledLink = styled(Link)`
  color: #e6dbf4;
  text-decoration: none;
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
                <StyledLink to={`/detail/${breed.id}`}>
                    <h4>{breed.name}</h4>
                </StyledLink>
                <FavoriteIcon breed={breed} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
            </header>
            <ImageContent >
                <Link to={`/detail/${breed.id}`}>
                    <BreedImage src={typeof breed.id === 'string' ? `${baseurl}/images/${breed.image}` : breed.image} alt={breed.name} />
                </Link>
            </ImageContent>
            <footer>
                
                    <span>Peso: {breed.weight}</span>
                    <TemperamentWraper>
                        {breed.temperaments.map((temperament, index) => <li key={index}>{temperament}</li>)}
                    </TemperamentWraper>
                
            </footer>
        </CardElement>
    )
}

export default Card