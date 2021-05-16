import { createStore,combineReducers } from "redux";
import moviesReducer from '../reducers/moviesReducer'

  const ConfigureStore =() =>
    {
        const store = createStore(combineReducers({
                                            movies : moviesReducer,
                                            
                                         })
                        )
        return store
    }

export default ConfigureStore
