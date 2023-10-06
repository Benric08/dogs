import React from 'react'
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import iconActive from '../assets/images/huellaactive.png';
import icon from '../assets/images/huella.png'
import { addFavorites,removeFavorites } from '../redux/actions';
const IconWraper = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
`;
const Icon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
const FavoriteIcon = ({breed, isFavorite, setIsFavorite}) => {
    const dispatch = useDispatch();
    

    const toggleIcon = () => {
        isFavorite?
        dispatch(removeFavorites(breed.id)):
        dispatch(addFavorites(breed));
        setIsFavorite(!isFavorite);
    }
    
    return (
        <IconWraper>
            {isFavorite ?
                <Icon src={iconActive} onClick={toggleIcon} /> :
                <Icon src={icon} onClick={toggleIcon} />
            }
        </IconWraper>
    );
}

export default FavoriteIcon;