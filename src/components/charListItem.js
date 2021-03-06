import React from 'react';

const CharListItem = ({src, name}) => {
    return ( 
        <li>
            <img src={src} alt={name}/>
            <p>{name}</p>
        </li>
     );
}
 
export default CharListItem;