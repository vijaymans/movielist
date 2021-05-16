const moviesInitalState =[]

const moviesReducer =(state = moviesInitalState , action) =>
{
   
    
    const sortObjectsArray = require('sort-objects-array');

    switch(action.type)
    {
        case 'ADD_FORM' : {
                             return [{...action.payload}, ...state ]
                          }

        case 'REMOVE_FORM' :{
                                const removeItem = state.filter( ele =>
                                    {
                                        return ele.id != action.payload.id
                                    })
                                return removeItem
                                
                            }

        case 'DISPLAY_ONE' : {  
                                const Originalstate =[...state] 

                                      const singleItem = Originalstate.filter( ele =>
                                        {
                                            return ele.moviename.toLowerCase().includes(action.payload.toLowerCase())
                                        })
                                    console.log('singleitem' , singleItem)
                                    console.log('Original' , Originalstate)
                                    if(action.payload == "")
                                    {
                                        return Originalstate
                                    }
                                    else
                                    {
                                        return singleItem
                                    }
                                    
                                   
                                 /* const singleItem = state.filter ( ele =>
                                    {
                                        //console.log('reducer',ele.moviename.toLowerCase().includes(action.payload.toLowerCase()))
                                        return ele.moviename.toLowerCase().includes(action.payload.toLowerCase())
                                    })
                                
                                return singleItem */
                                
                             }

        case 'DISPLAY_ORDER' : {
                                    if(action.payload === 'ascending')
                                    {
                                       return  sortObjectsArray(state ,'IMDB_Rank')
                                    }
                                    else
                                    {
                                        return  sortObjectsArray(state ,'IMDB_Rank' ,'desc')
                                    }
                               }

        default : return state
    }
    
}

export default moviesReducer