import React from 'react';
import style from './character.module.css'

const Character = ({character}) => {
    let status = ''
    switch(character.status){
        case 'Alive':
            status = style.character__status_alive
            break
        case 'Dead':
            status = style.character__status_dead
            break
        default:
            status = style.character__status_unknown
            break
    }

    return ( 
        <div className={style.character}>
            <figure><img src={character.image} alt={character.name} /></figure>
            <div className={style.character__description}>
                <p>Name: {character.name}</p>
                <p>Status: <span className={status}>{character.status}</span></p>
                <p>Gender: {character.gender}</p>        
                <p>Location: {character.location.name}</p>
            </div>
        </div>
     );
}
 
export default Character;