import './pokemon.css'
import {useState, useEffect} from 'react'
import {getAllData, deleteData} from '../../Redux/slice'
import {useDispatch, useSelector} from 'react-redux' 
import {Link} from 'react-router-dom'
// import {withRouter} from 'react-router-dom'

export default function Pokemon(props){
    const value = useSelector(state=>state.pokemonData.value)
    const dispatch = useDispatch()

    // let getApi = async () =>{
    //     let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    //     let d = await res.json()
    //     let apiData = d.results
    //     apiData.forEach(e=>getEachApi(e.url))
    // }

    // let getEachApi = async (value) =>{
    //     let newData = await fetch(value)
    //     let finalData = await newData.json()
    //     dispatch(getAllData(finalData))
    //    }

       let pokemonDelete = (obj) =>{
        if(window.confirm('Are You Sure ?'))
        dispatch(deleteData(obj))
       }

       let pokemonUpdate = (obj) =>{
        // console.log(obj)
        props.handleUpdateObj(obj)
       }

    // useEffect(()=>{
    //     getApi()
    // },[])

    return <div className="container-fluid pokemon">
        <h1 className='text-center pt-4'>Welcome to Pokemon's World !!</h1>
        <div className='row'>
        {value?<>
        {value
        .filter(e=>props.searchVal===''?e:e.name.includes(props.searchVal) || e.name.toUpperCase().includes(props.searchVal))
        .map(e=>
            <div className='col-lg-2 innerBox text-center'>
                <img src={e.sprites.front_default}/>
                <b>Name : {e.name}</b>
                <br/>
                <br/>
                <b>Abilities :  <br/><br/>{e.abilities.slice(0,1).map(e=><b className='innerBoxType1'>{e.ability.name}</b>)}</b>
                <br/>
                <br/>
                <b>Type : <br/><br/>{e.types.slice(0,1).map(e=><b className='innerBoxType'>{e.type.name}</b>)}</b>
                <br/><br/>
                {e.breed?<><b>Breed : {e.breed}</b><br/><br/></>:''}
                {e.description?<><b>Description : {e.description}</b><br/><br/></>:''}
                <Link to='/update' style={{textDecoration:'none'}}><button className='form-control' onClick={()=>pokemonUpdate(e)}><b>Update</b></button></Link>
                <br/>
                <button className='form-control' onClick={()=>pokemonDelete(e)}><b>Delete</b></button>
            </div>
        )}
        </>:''}
        </div>
    </div>
}   