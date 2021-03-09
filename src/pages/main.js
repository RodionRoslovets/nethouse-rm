import React, { useReducer, useEffect, useState } from 'react';
import {reducer} from '../reducers/mainReducer';
import getCharacters from '../helpers/getCharacters';
import CharList from '../components/charList'
import { InView } from 'react-intersection-observer';

const Main = () => {
    let [data, dispatch] = useReducer(reducer)

    let [error, setError] = useState('')

    useEffect( ()=>{
        async function fetchData(){
        await getCharacters('https://rickandmortyapi.com/api/character')
                .then(res=>dispatch({type:'INIT', payload:res.data}))
                .catch(()=>{setError('Загрузка не удалась')})
        }

        fetchData()
    }, [])

    async function loadMore(){
        await getCharacters(data.info.next)
                .then(res=>dispatch({type:'LOADMORE', payload:res.data}))
                .catch(()=>{setError('Загрузка не удалась')})
    }
    return ( 
        <div>
            {data ? 
                <>
                <CharList chars={data.results}/>
                <InView onChange={(inView)=>inView && data.info ? loadMore() : null}>
                </InView>
                </>
            : null}
            {error ? <p className="error">{error}</p> : null}
        </div>
    );
}

export default Main;