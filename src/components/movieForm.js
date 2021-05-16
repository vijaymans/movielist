import React , {useState} from 'react'
import {addForm} from '../actions/movieactions'
import {useDispatch} from 'react-redux'


const MovieForm = () =>
{
    const [movname ,setMovName] = useState('')
    const [rank ,setRank] = useState('')

    const dispatch = useDispatch()

    const handleChange =(e) =>
    {
        if( e.target.name == 'moviename')
        {
            setMovName(e.target.value)
        }
        else 
        {
            const num =  Number(e.target.value)
            setRank(num)
        }
    }

    const handleSubmit =(e) =>
    {
        e.preventDefault()

        const formData = {
                            id: Number(new Date()),
                            moviename :movname,
                            IMDB_Rank : rank
                         }

        
        setMovName('')
        setRank('')

        dispatch(addForm(formData))
      
   }

    return ( <form onSubmit ={handleSubmit}>
                <h2>Enter Movie Details</h2>
                <input type ="text" value ={movname} name ="moviename" onChange ={handleChange} placeholder ="Enter movie name"/> <br/>
                <input type ="number" value ={rank}  name ="rank" onChange ={handleChange} placeholder ="Enter IMDB Ranking"/> <br/>
                <input type ="submit" value="add"/>
            </form>
            )
}

export default MovieForm