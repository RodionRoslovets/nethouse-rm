import React, { useReducer, useEffect } from 'react';
import {reducer} from '../reducers/mainReducer';
import getCharacters from '../helpers/getCharacters';
import CharList from '../components/charList'
import { InView } from 'react-intersection-observer';

const Main = () => {
    let [data, dispatch] = useReducer(reducer)

    useEffect( ()=>{
        async function fetchData(){
        await getCharacters('https://rickandmortyapi.com/api/character')
                .then(res=>dispatch({type:'INIT', payload:res.data}))
        }

        fetchData()
    }, [])

    async function loadMore(){
        await getCharacters(data.info.next)
                .then(res=>dispatch({type:'LOADMORE', payload:res.data}))
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
        
        </div>
    );
}

export default Main;