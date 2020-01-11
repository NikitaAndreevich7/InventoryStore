import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import App from '../src/components/app'
import StoreService from './services/store-service'
import { InventoryStoreProvider } from './components/inventory-store-context'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store';

const storeService = new StoreService();

ReactDOM.render(

    <Provider store={store}>
        <InventoryStoreProvider value={storeService} >
            <Router>
                <App/>
            </Router>
        </InventoryStoreProvider>
    </Provider>,

document.querySelector('#root'))