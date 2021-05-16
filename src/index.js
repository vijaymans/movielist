import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import ConfigureStore from './store/configureStore'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 

const store = ConfigureStore()


store.subscribe ( () =>
{
  console.log('state updated',store.getState())
})

ReactDOM.render(<Provider store ={store}>
                <App/>
                </Provider>,document.getElementById('root')
                );


