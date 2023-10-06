import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBreeds } from '../redux/actions'
import Card from './Card'
import styled from 'styled-components'
import Pagination from './Pagination'

const CardContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 2%;
        
        width: 90vw;
        
        border:1px solid red;
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
    console.log("logueao estado global bredds", breeds);
    console.log("logueao estado global error", error);
  }, []);
  useEffect(() => {
    console.log("logueamos cada vez que cambio de pagina");
    
    
  }, [currentPage]);
  useEffect(() => {
    console.log("logueamos cada vez que brreds cambia de pagina");
    
    setCurrentPage(1);
  }, [breeds]);

  return (
    <>
      {isLoanding && <h1>is loading ...</h1>}
      {error.length > 0 ?
        <div>{error}</div> :
        <div>
          <CardContainer>
            {breeds?.slice(initIndexBreed, finalIndexBreed).map((breed) => <Card key={breed.breed.id} breed={breed.breed} />)}
          </CardContainer>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} numberOfBreeds={numberOfBreeds} breedsPerPage={breedsPerPage} />
        </div>
      }

    </>
  )
}

export default Cards