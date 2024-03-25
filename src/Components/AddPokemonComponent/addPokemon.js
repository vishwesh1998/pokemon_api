import './addPokemon.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { addData } from '../../Redux/slice'
import { useDispatch } from 'react-redux'

export default function AddPokemon() {
    const [name, setName] = useState('')
    const [abil, setAbil] = useState('')
    const [typ, setTyp] = useState('')
    const [pic, setPic] = useState('')
    const [breed, setBreed] = useState('')
    const [desc, setDesc] = useState('')
    const [msg, setMsg] = useState('')

    const dispatch = useDispatch()

    const data = useSelector(state => state.pokemonData.value)
    let ability = Array.from((new Set(data.map(e => e.abilities[0].ability.name))))
    let type = Array.from((new Set(data.map(e => e.types[0].type.name))))

    let handleSubmit = (e) => {
        console.log(pic)
        e.preventDefault()
        let obj = {
            name: name, abilities: [{ ability: { name: abil } }], types: [{ type: { name: typ } }], sprites: { front_default: pic }, breed: breed, description: desc
        }
        console.log(obj)
        dispatch(addData(obj))
        setName('')
        setAbil('')
        setTyp('')
        setPic('')
        setBreed('')
        setDesc('')
        setMsg('Pokemon Added Successfully !!')
        setTimeout(() => {
            setMsg('')
        }, 2000)
    }

    return <div className="container-fluid addPokemon">
        <h1 className="text-center pt-4">Add Pokemon Here !!</h1>
        <div className='container innerAddPokemon'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <label>
                            <b>Name :</b>
                        </label>
                        <input className='form-control nameInput' required type='text' onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className='col-lg-6'>
                        <label>
                            <b>Abilitites :</b>
                        </label>
                        <select className='form-control' required onChange={(e) => setAbil(e.target.value)} value={abil}>
                            <option>Choose Abilitities</option>
                            {ability ? <>{ability.map(e => <option>{e}</option>)}</> : ''}
                        </select>
                    </div>

                    <div className='col-lg-6 pt-5'>
                        <label>
                            <b>Types :</b>
                        </label>
                        <select className='form-control' required onChange={(e) => setTyp(e.target.value)} value={typ}>
                            <option>Choose Types</option>
                            {type ? <>{type.map(e => <option>{e}</option>)}</> : ''}
                        </select>
                    </div>

                    <div className='col-lg-6 pt-5'>
                        <label>
                            <b>Image :</b>
                        </label>
                        <select className='form-control' required onChange={(e) => setPic(e.target.value)} value={pic}>
                            <option>Choose Images By Name</option>
                            {data ? <>{data.map(e => <option value={e.sprites.front_default}>{e.name}</option>)}</> : ''}
                        </select>
                    </div>

                    <div className='col-lg-6 pt-5'>
                        <label>
                            <b>Breed :</b>
                        </label>
                        <input className='form-control' type='text' onChange={(e) => setBreed(e.target.value)} value={breed} />
                    </div>

                    <div className='col-lg-6 pt-5'>
                        <label>
                            <b>Description :</b>
                        </label>
                        <input className='form-control' type='text' onChange={(e) => setDesc(e.target.value)} value={desc} />
                    </div>
                    <div className='col-lg-12 pt-5'>
                        {msg === '' ? '' : <div className='text-center'><b className='text-center'>{msg}</b></div>}
                        <button className='form-control'><b>Add Pokemon</b></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
}