import React, { useEffect, useState } from 'react'


function PeopleComponent(props) {
    const {people} = props;
    
    const handleMessage = (person)=>{
        alert(`Que accion desea realizar estimado ${person.name} ${person.paternalSurname} ${person.maternalSurname}`)
    }

    useEffect(() => {
      
    }, [])

    
  return (
    <div>
        <ul>
        {  people?.map((person)=> <li key={person.id} onClick={()=>handleMessage(person)}>{`${person.name} ${person.paternalSurname}`}</li>)}

        </ul>
    </div>
  )
}

export default PeopleComponent