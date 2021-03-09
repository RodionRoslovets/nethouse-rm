import React from 'react';
import {Link} from 'react-router-dom'
import style from './characterListItem.module.css'

const CharListItem = ({src, name, id}) => {
    return ( 
        <li className={style.charListItem}>
            <Link to={`char/${id}`}>
                <figure>
                    <img src={src} alt={name}/>
                </figure>
                <p>{name}</p>
            </Link>
        </li>
     );
}
 
export default CharListItem;