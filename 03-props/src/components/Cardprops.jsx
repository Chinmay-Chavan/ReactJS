import React from 'react'


const Card = ({name, age, city}) => {

    return (
        <div className='card'>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{city}</p>
            

        </div>
    )
}

export default Card
