import React from 'react'
import {useSelector} from 'react-redux'
import {useState ,useEffect} from 'react'

const MovieStats =() =>
{
    const [highrank ,setHighRank] = useState({})
    

    const totalMovies = useSelector( (state) =>
                                            {
                                                return state.movies
                                            })
    

     useEffect ( () =>
    {
        let max
        if(totalMovies.length >0)
        {
            max = totalMovies[0]
            totalMovies.forEach( ele =>
                {
                    if(ele.IMDB_Rank > max.IMDB_Rank)
                    {
                       return  max = {...ele}
                    }
                    else{
                        return max

                    }
                })
            setHighRank(max)
        }
       
       else
       {
         setHighRank({})
       }
       // 


    },[totalMovies]) 
                       
                            

    return (<div>
                 <h2>Movie Stats</h2>
                 <h3>Total Movies - {totalMovies.length} </h3>
                 { Object.entries(highrank).length > 0 &&  <h3>Top Ranked Movie - { highrank.moviename}</h3> } 
             </div>)
}

export default MovieStats