import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllTemperaments, setFilter } from '../redux/actions';
import styled from 'styled-components';

const FiltroContainer = styled.aside`
    height: 100vh;
    justify-self: stretch;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const SubTitle = styled.h4`
    border-bottom: 2px solid #0000006d;
`;
const TemperamentOptions = styled.div`
    height: 350px;
    padding: 4px;
    overflow-y: scroll;  
  & label{
    cursor: pointer;
    margin-left: 10px;
  }
`;
const SourceOptions = styled.div`
    padding: 4px;

  & label{
    cursor: pointer;
    margin: 0 10px;
  }
`;


const Filter = () => {
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);
    const [isLoading, setIsLoading] = useState(false);

    const loadTemperaments = async () => {
        await dispatch(getAllTemperaments()).finally(() => { setIsLoading(false) });
    }
    let temperemtsToFilter = [];
    let sourcesToFilter = [];
    useEffect(() => {
        setIsLoading(true);
        loadTemperaments();
    }, [])

    const handleChangeFilterTemperaments = (evento) => {

        const { name, checked } = evento.target;
        if (checked) {
            temperemtsToFilter.push(name);
            console.log(temperemtsToFilter);
        }
        else {
            temperemtsToFilter = temperemtsToFilter.filter((temp) => temp !== name);
            console.log(temperemtsToFilter);

        }

    };
    const handleChangeFilterSource = (evento) => {
        const { name, checked } = evento.target;
        if (checked) sourcesToFilter.push(name);
        else sourcesToFilter = sourcesToFilter.filter((source) => source !== name);
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
        <FiltroContainer>
            <h4>Filtros</h4>
            <div>
                <SubTitle>Temperamentos</SubTitle>
                <TemperamentOptions>
                    {isLoading ? <h3>IS LOADING</h3> :
                        temperaments.map((temperament) => (
                            <div key={temperament.id}>
                                <input type="checkbox" name={temperament.name} id={temperament.id} onChange={handleChangeFilterTemperaments} />
                                <label htmlFor={temperament.id}>{temperament.name}  </label>
                            </div>
                        ))}
                </TemperamentOptions>
            </div>
            <br />
            <div>
                <SubTitle>Origen</SubTitle>
                <SourceOptions>
                    <input type="checkbox" name="api" id="api" onChange={handleChangeFilterSource} />
                    <label htmlFor="api"> Api </label>
                    <input type="checkbox" name="dbbreeds" id="dbbreeds" onChange={handleChangeFilterSource} />
                    <label htmlFor="dbbreeds"> Local </label>
                </SourceOptions>
            </div>

            <button onClick={handleApplyFilter}>Aplicar filtros</button>


        </FiltroContainer>
    )
}

export default Filter;