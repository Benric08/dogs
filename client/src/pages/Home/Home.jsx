
import React from 'react'
import SearchBar from '../../components/SearchBar';
import NavBar from '../../components/NavBar';
import Cards from '../../components/Cards';
import styles from './Home.module.css'
import Filter from '../../components/Filter';
import Sort from '../../components/Sort';

export const Home = (props) => {
  return (
    <main className={styles.container}>Home
        <SearchBar/>
        <NavBar/>
        <Filter/>
        <Sort/>
        <Cards/>
    </main>
  )
}



export default Home;