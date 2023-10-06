import axios from 'axios';
import {
   GET_ALL_BREEDS,
   GET_ALL_BREEDS_FAILURE,
   GET_ALL_TEMPERAMENTS,
   GET_ALL_TEMPERAMENTS_FAILURE,
   ADD_BREED_TO_FAVORITES,
   REMOVE_BREED_TO_FAVORITES,
   SET_FILTER,
   SET_ORDER,
} from './types';
const basePath = 'http://localhost:3001'


export const getAllBreeds = () => {
   console.log(`Estoy dentro del breedaction`);
   return async (dispatch) => {
      try {
         await axios.get(`${basePath}/dogs`)
            .then(({ data }) => {
               return dispatch({
                  type: GET_ALL_BREEDS,
                  payload: data
               });
            })
      } catch (error) {
         return dispatch({
            type: GET_ALL_BREEDS_FAILURE,
            payload: error.message,
         })
      }
   }
}

export const getAllTemperaments = () => async (dispatch) => {
   try {
      const { data } = await axios.get(`${basePath}/temperaments`);
      return dispatch({ type: GET_ALL_TEMPERAMENTS, payload: data });
   } catch (error) {
      return dispatch({ type: GET_ALL_TEMPERAMENTS_FAILURE, payload: "No pudimos Obtener los temperamentos :(" });
   }
}
export const addFavorites = (breed) => ({ type: ADD_BREED_TO_FAVORITES, payload: breed });

export const removeFavorites = (idBreed) => ({ type: REMOVE_BREED_TO_FAVORITES, payload: idBreed });

export const setFilter = (filters) => ({ type: SET_FILTER, payload: filters });

export const setOrder = (orderBy) => ({ type: SET_ORDER, payload: orderBy });


