import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {getAllTemperaments,setFilter} from '../redux/actions';

const Filter = () => {
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);
    const [isLoading, setIsLoading] = useState(false);
    
    const loadTemperaments = async() => { 
        await dispatch(getAllTemperaments()).finally(() => { setIsLoading(false) });
     }
    let temperemtsToFilter = [];
    let sourcesToFilter = [];
     useEffect(() => { 
        setIsLoading(true);
        loadTemperaments();
      },[])

      const handleChangeFilterTemperaments = (evento) => { 

        const {name,checked} = evento.target;
        if(checked)
            {temperemtsToFilter.push(name);
            console.log(temperemtsToFilter);
        }
        else{
            temperemtsToFilter = temperemtsToFilter.filter((temp) => temp!==name);
            console.log(temperemtsToFilter);

        }
        
       };
       const handleChangeFilterSource = (evento) => { 
            const {name,checked} = evento.target;
            if(checked) sourcesToFilter.push(name);
            else sourcesToFilter = sourcesToFilter.filter((source) => source!==name);
        }

        const handleApplyFilter = () => { 
            const filters = {
                temperemtsToFilter,
                sourcesToFilter,
            }
            console.log("Consologueamos el contenido del filtro", filters);
            dispatch(setFilter(filters));
         }

       

  return (
    <div>
        Filtros
        <b>Temperamentos</b>    
            {isLoading?<h3>IS LOADING</h3>:
            temperaments.map((temperament) => (
                <div key={temperament.id}>
                    <input type="checkbox" name={temperament.name} id={temperament.id}  onChange={handleChangeFilterTemperaments} />
                    <label htmlFor={temperament.id}>{temperament.name}  </label> 
                </div>
            ))}

        <b>origen</b>
            <input type="checkbox" name="api" id="api" onChange={handleChangeFilterSource} />
            <label htmlFor="api"> Api </label> 
            <input type="checkbox" name="dbbreeds" id="dbbreeds" onChange={handleChangeFilterSource}  />
            <label htmlFor="dbbreeds"> Local </label> 

        <button onClick={handleApplyFilter}>Aplicar filtros</button>
            

    </div>
  )
}

export default Filter;