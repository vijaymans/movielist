import React ,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import MovieCard from './movieCard'
import {displayOne,displayOrder} from '../actions/movieactions'

const MovieList = () =>
{
    /* const [search,setSearch] = useState('') */
    const [order ,setOrder] = useState('')  
    const [searchName, setSearchName] = useState('')
    const [movieResult, setMovieResult] = useState([])
   


    const state2 = useSelector( (state) =>
    {
        return state.movies
    })


    const dispatch = useDispatch()

    useEffect( () =>
    {
        console.log('movies',movieResult)
        setMovieResult(state2)
    },[state2]) 




    const handleSearch =(e) =>
    {
        const res = e.target.value
        setSearchName(res)

        if(res.toLowerCase() == "")
        {
            setMovieResult(state2)
        }
        else
        {
            const getMovie = state2.filter( ele =>
                {
                    return ele.moviename.toLowerCase() == res.toLowerCase()
                })
            console.log('none',getMovie)
            setMovieResult(getMovie)   
        }
          
        
    }


    const handleChange =(e) =>
    {
        setOrder(e.target.value)
        dispatch(displayOrder(e.target.value))
    }
    
        return ( <div>
                <h2>Movie List</h2>
                <form>
                    <input type ="text" value={searchName}  onChange={handleSearch} placeholder = "search by name"/>
                    <select value ={order} onChange ={handleChange}>
                        <option value= "">Order By</option>
                        <option value ="ascending">Smaller</option>
                        <option value ="descending">Larger</option>
                    </select>
                </form>
                {
                     movieResult.map( ele =>
                        {
                            return <MovieCard movlist ={ele}/>
                        })
                }
                </div>)
                                                           
}

export default MovieList