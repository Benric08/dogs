import React, { useState } from 'react';

import PeopleComponent from './PeopleComponent';
import axios from 'axios';

function Search() {
    const [name, setName] = useState('');
    const [people, setPeople] = useState([]);

    const apiUrl = 'http://localhost:9090/api/people';
    const handleChange=(e)=>{
        setName(e.target.value);
        getData(name)
    }
    const handleSearch=()=>{
        setName('');
        setPeople([])
    }
    const getData = async(name)=>{
        const {data} = await axios.get(`${apiUrl}/search?name=${name}`);
        if (data) {
            setPeople(data)
        }
        else{
            setPeople(['no se encontraron coincidencias'])
        }
    }

    
  return (
    <div>
        <input type="text" name='name' id='name' placeholder='enter the name' onChange={handleChange} value={name}/>
        <button onClick={handleSearch}>clear</button>
        {<PeopleComponent people={people}/>}
    </div>
  )
}

export default Search