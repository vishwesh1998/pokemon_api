import './header.css'
import { CgPokemon } from "react-icons/cg";
import { SiPokemon } from "react-icons/si";
import {Link} from 'react-router-dom'
import {useState} from 'react'

export default function Header(props){
    // const [search, setSearch] = useState('')

    let handleSearchInput = (e) =>{
        console.log(e.target.value)
        // setSearch(e.target.value)
        // setTimeout(()=>{
            props.handleSearchVal(e.target.value)
        // },1000)
        // if(search!=='')
    }

    return <div className="container-fluid header">
        <div className='row'>
            <div className='col-lg-4 headerLeft'>
                <h1><SiPokemon/></h1>
            </div>
            <div className='col-lg-4 mt-4'>
                <input type='text' placeholder='You Can Search Pokemon Here ... !!' className='form-control headerInput' onChange={(e)=>handleSearchInput(e)}/>
            </div>
            <div className='col-lg-4 mt-4 headerRight'>
                <Link to='/' style={{textDecoration:'none', color:'white'}}><b>Pokemon's List </b><span><CgPokemon/></span></Link>
                <Link to='/add' style={{textDecoration:'none', color:'white'}}><b>Add Pokemon </b><span><CgPokemon/></span></Link>
            </div>
        </div>
    </div>
}