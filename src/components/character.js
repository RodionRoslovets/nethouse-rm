import React from 'react';

const Character = ({character}) => {
    return ( 
        <>
            <p><img src={character.image} alt={character.name} /></p>
            <p>{character.name}</p>
            <p>{character.status}</p>
            <p>{character.gender}</p>        
            <p>{character.location.name}</p>
        </>
     );
}
 
export default Character;