import React, { useEffect, useState } from 'react'

const Pagination = ({ currentPage, setCurrentPage, numberOfBreeds, breedsPerPage }) => {
  const [isActive, setIsActive] = useState(currentPage);
  const styles = {
    active: {
      color: 'red',
    },
    inactive: {
      color: 'black',
    },
    enable: {

    },
    disable: {

    },
  };
  const numberOfPages = Math.ceil(numberOfBreeds / breedsPerPage);
  const nextPage = () => {
    currentPage < numberOfPages && setCurrentPage(currentPage + 1);
    setIsActive(currentPage+1);
  }
  const prevPape = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
    setIsActive(currentPage-1);
  }
  const handleChangePage = (i) => {
    setCurrentPage(i);
    setIsActive(i);
  }
  console.log("inicio paginado ---");
  const pages = []
  for (let i = 1; i <= numberOfPages; i++) {

    pages.push(<button key={i} onClick={() => handleChangePage(i)} style={isActive === i ? styles.active : styles.inactive}>{i}</button>);

  }
  console.log("fin paginado", pages);
  //! pendiente 
  //?corregir bug de paginado despues de aplicar filtros;
  
  return (
    <div>
      <h1>{`${currentPage}/${numberOfPages}`}</h1>
      <button onClick={prevPape} disabled={currentPage === 1}>atras</button>
      {pages}
      <button onClick={nextPage} disabled={currentPage === numberOfPages}>siguiente</button>
    </div>
  )
}

export default Pagination;