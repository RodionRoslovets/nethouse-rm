import React from 'react';
import CharListItem from './charListItem'
import style from './characterList.module.css'

const CharList = ({chars}) => {
    let processedChars = chars.map(char=>(
        <CharListItem 
            key={char.id}
            id={char.id}
            name={char.name}
            src={char.image}
        />
    ))
    return ( 
        <ul className={style.charList}>
            {processedChars}
        </ul>
     );
}
 
export default CharList;