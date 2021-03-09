import React, { useState, useEffect } from 'react'
import getCharacters from '../helpers/getCharacters'
import {useLocation} from 'react-router-dom'
import Character from '../components/character'

const CharacterPage = () => {
    let [character, setCharacter] = useState({})
    let loc = useLocation()
    let id = +loc.pathname.slice(6)

    useEffect(
        ()=>{
            async function fetchData(){
                await getCharacters(`https://rickandmortyapi.com/api/character/${id}`)
                        .then(res=>setCharacter(res.data))
            }
    
            fetchData()
        }, [] 
    )
    return (
        <>
            {character.id ? <Character character={character} /> : null}
        </>
     );
}
 
export default CharacterPage;