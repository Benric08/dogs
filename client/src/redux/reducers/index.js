import {
    ADD_BREED_TO_FAVORITES,
    GET_ALL_BREEDS,
    GET_ALL_BREEDS_FAILURE,
    GET_ALL_TEMPERAMENTS,
    GET_ALL_TEMPERAMENTS_FAILURE,
    REMOVE_BREED_TO_FAVORITES,
    SET_FILTER,
    SET_ORDER,
    SEARCH_BY_NAME,
    GET_BREED_BY_ID,
    CREATE_BREED,
    CREATE_BREED_FAILURE,
} from "../actions/types";

const initialState = {
    allBreeds: [],
    breeds: [],
    temperaments: [],
    favorites: [],
    breed:{},
    error: ''
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BREEDS:
            return { ...state, breeds: action.payload, allBreeds: action.payload };
        case GET_ALL_BREEDS_FAILURE:
            return { ...state, error: action.payload };
        case GET_ALL_TEMPERAMENTS:
            return { ...state, temperaments: action.payload };
        case GET_ALL_TEMPERAMENTS_FAILURE:
            return { ...state, error: action.payload };
        case ADD_BREED_TO_FAVORITES:
            return { ...state, favorites: [...state.favorites, action.payload] };
        case REMOVE_BREED_TO_FAVORITES:
            const myFavorites = state.favorites.filter((favorite) => favorite.id !== action.payload);
            return { ...state, favorites: myFavorites };
        case SET_FILTER:
            let result = [];
            const { temperemtsToFilter, sourcesToFilter } = action.payload;
            if (temperemtsToFilter.length === 0 && sourcesToFilter.length === 0) return { ...state, breeds: state.allBreeds };
            if (temperemtsToFilter.length === 0 && sourcesToFilter.length !== 0) {
                if (sourcesToFilter.length === 2) {
                    return { ...state, breeds: state.allBreeds }
                }
                return { ...state, breeds: filterSources(result, sourcesToFilter, state.allBreeds) };
            };
            if (temperemtsToFilter.length !== 0 && sourcesToFilter.length === 0) {
                return { ...state, breeds: filterTemperaments(result, temperemtsToFilter, state.allBreeds) };
            };
            const sourceResult = filterSources(result, sourcesToFilter, state.allBreeds);
            return { ...state, breeds: filterTemperaments(result, temperemtsToFilter, sourceResult) };

        case SET_ORDER:
            switch (action.payload) {
                case "upward":
                    state.breeds.sort(function (a, b) {
                        if (a.breed.name < b.breed.name) return -1;
                        if (a.breed.name > b.breed.name) return 1;
                        return 0;
                    });
                    return { ...state, breeds: [...state.breeds] }

                case "falling":
                    state.breeds.sort(function (a, b) {
                        if (a.breed.name > b.breed.name) return -1;
                        if (a.breed.name < b.breed.name) return 1;
                        return 0;
                    });
                    return { ...state, breeds: [...state.breeds] }

                case "lowerweight":
                    state.breeds.sort(function (a, b) {
                        if (a.breed.weight < b.breed.weight) return -1;
                        if (a.breed.weight > b.breed.weight) return 1;
                        return 0;
                    });
                    return { ...state, breeds: [...state.breeds]  }

                case "greaterweight":
                    state.breeds.sort(function (a, b) {
                        if (a.breed.weight > b.breed.weight) return -1;
                        if (a.breed.weight < b.breed.weight) return 1;
                        return 0;
                    });
                    return { ...state, breeds: [...state.breeds]  }



                default:
                    return { ...state, breeds: state.allBreeds };

            }

        case SEARCH_BY_NAME:
            return {...state,breeds:action.payload}
        case GET_BREED_BY_ID:
            return {...state,breed:action.payload}
        case CREATE_BREED:
            return { ...state, breeds: [...state.breeds,action.payload], allBreeds: [...state.allBreeds,action.payload ]};
        case CREATE_BREED_FAILURE:
            return { ...state,error:action.payload}
        default:
            return { ...state };
    }
}


const filterSources = (result, sourcesToFilter, allBreeds) => {
    sourcesToFilter.forEach(source => {

        if (source === "api") {
            result = [...result, ...allBreeds.filter((breed) => typeof breed.breed.id === 'number')];
        } else {
            result = [...result, ...allBreeds.filter((breed) => typeof breed.breed.id === 'string')]
        }
    });
    return result;
    //return { ...state, breeds: result };
}

const filterTemperaments = (result, temperemtsToFilter, allBreeds) => {
    temperemtsToFilter.forEach(temperament => {
        result = [...result, ...allBreeds.filter((breed) => breed.breed.temperaments.includes(temperament))];
    });
    const breedsUniques = new Set();
    result = result.filter((breed) => {
        if (!breedsUniques.has(breed.breed.id)) {
            breedsUniques.add(breed.breed.id);
            return true;
        }
        return false;
    });
    return result
    //return { ...state, breeds: result };
}