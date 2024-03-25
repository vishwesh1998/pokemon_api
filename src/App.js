import AddPokemon from './Components/AddPokemonComponent/addPokemon'
import Header from './Components/HeaderComponent/header'
import Pokemon from './Components/PokemonComponent/pokemon'
import {Routes, Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { getAllData } from './Redux/slice'
import {useDispatch} from 'react-redux'
import UpdatePokemon from './Components/UpdatePokemonComponent/updatePokemon'
import Footer from './Components/FooterComponent/footer'

export default function App(){
  const [updateObj, setUpdateObj] = useState('')
  const [searchVal, setSearchVal] = useState('') 
  const dispatch = useDispatch()

    let getApi = async () =>{
        let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
        let d = await res.json()
        let apiData = d.results
        apiData.forEach(e=>getEachApi(e.url))
    }

    let handleUpdateObj = (v) =>{
      console.log(v)
      setUpdateObj(v)
    }

    
    let handleSearchVal = (s) =>{
      console.log(s)
      setSearchVal(s)
    }

    
    let getEachApi = async (value) =>{
      let newData = await fetch(value)
      let finalData = await newData.json()
      dispatch(getAllData(finalData))
    }
    
    useEffect(()=>{
      getApi()
    },[])


  return <>
  <Header handleSearchVal={handleSearchVal}/>
  <Routes>
    <Route path='/' element={<Pokemon handleUpdateObj={handleUpdateObj} searchVal={searchVal}/>}/>
    <Route path='/add' element={<AddPokemon/>}/>
    <Route path='/update' element={<UpdatePokemon updateObj={updateObj}/>}/>
  </Routes>
  <Footer/>
  </>
}