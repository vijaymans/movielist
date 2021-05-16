import React from 'react'
import {useSelector} from 'react-redux'
import MovieForm from './movieForm'
import MovieStats from './movieStats'
import MoviesList from './movieList'

const MoviesContainer =(props) =>
{
    const movies = useSelector( (state) =>
                        {
                           return state
                        })

     return (<div>
                <div className ="row">
                    <div className ="col-md-6">
                        <MoviesList/>
                    </div>
                    <div className ="col-md-6">
                        <MovieForm/>
                    </div>
                </div>
                
                <div className ="row">
                    <div className ="col-md-12">
                    <MovieStats/>
                    </div>
                </div>
                
            </div>)
}

export default MoviesContainer