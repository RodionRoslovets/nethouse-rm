import React from 'react';

import CharListItem from './charListItem'

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
        <ul>
            {processedChars}
        </ul>
     );
}
 
export default CharList;