import React from 'react';
import {Link} from 'react-router-dom'

const CharListItem = ({src, name, id}) => {
    return ( 
        <li>
            <Link to={`char/${id}`}>
                <img src={src} alt={name}/>
                <p>{name}</p>
            </Link>
        </li>
     );
}
 
export default CharListItem;