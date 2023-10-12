import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBreeds } from '../redux/actions'
import Card from './Card'
import styled from 'styled-components'
import Pagination from './Pagination'

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-between;
    width: 80vw;
    gap: 20px;
    justify-self: center;
    `;
  
const Cards = (props) => {
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.breeds);
  const error = useSelector((state) => state.error);

  //? Local States
  const [isLoanding, setIsLoanding] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [breedsPerPage, setBreedsPerPage] = useState(8);

  const numberOfBreeds = breeds.length;
  //!logueao estado global bredds
  
  const finalIndexBreed = currentPage * breedsPerPage;
  const initIndexBreed = finalIndexBreed - breedsPerPage;
  
  const loadBreeds = async () => {
    await dispatch(getAllBreeds()).finally(() => setIsLoanding(false));
  }
  
  useEffect(() => {
    setIsLoanding(true);
    loadBreeds();
  }, []);
  
  useEffect(() => {   
    setCurrentPage(1);
  }, [breeds]);

  return (
    <>
      {isLoanding && <h1>is loading ...</h1>}
      {error.length > 0 ?
        <div>{error}</div> :
        <CardWrapper>
          <CardContainer>
            {breeds?.slice(initIndexBreed, finalIndexBreed).map((breed) => <Card key={breed.breed.id} breed={breed.breed} />)}
          </CardContainer> 
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} numberOfBreeds={numberOfBreeds} breedsPerPage={breedsPerPage} />

        </CardWrapper>
          
      }

    </>
  )
}

export default Cards