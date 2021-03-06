import React, { useReducer, useEffect } from 'react'
import getCharacters from './helpers/getCharacters';
import {reducer} from './reducer';
import CharList from './components/charList'

import './App.css'

function App() {
  let [data, dispatch] = useReducer(reducer)

  useEffect( ()=>{
    async function fetchData(){
      await getCharacters('https://rickandmortyapi.com/api/character').then(res=>dispatch({type:'INIT', payload:res.data}))
    }

    fetchData()
  }, [])


  return (
    <div>
      {data ? <CharList chars={data.results}/> : null}
    </div>
  );
}

export default App;
