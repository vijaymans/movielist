import React from 'react'
import {useDispatch} from 'react-redux'
import {removeForm} from '../actions/movieactions'

const MovieCard = (props) =>
{
    const dispatch = useDispatch()

    const handleClick =(Obj) =>
    {
        dispatch(removeForm(Obj))
    }


    return (<div  className ="card text-white bg-dark mb-3" style={{width: "500px"}}>
                {/* <img src="..." className="card-img-top" alt="..."/> */}
                <div className="card-body">
                <h5 className="card-title">Movie Name - {props.movlist.moviename}</h5>
                <p className="card-text">IMDB Rank - {props.movlist.IMDB_Rank}</p>
                <button className="btn btn-danger" onClick ={()=>
                                                                {
                                                                    const conf = window.confirm('Are You Sure to delete It ?')
                                                                    if(conf)
                                                                    {
                                                                        handleClick(props.movlist)
                                                                    }
                                                                    
                                                                }}> Delete
                </button>
            </div>
        </div>)
  
}

export default MovieCard