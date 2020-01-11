import React from 'react'
import './home.css'
import ErrorBoundry from '../error/error-boundry'

import { Route, Switch } from 'react-router-dom'


import Orders from '../orders'
import Products from '../products'


const RouterService = () =>{

   
    return(
        <React.Fragment>
            <ErrorBoundry>
                <Switch>
                    <Route path='/'exact component={() =>{
                        return(
                            <div className='home'>
                                <img src='https://image.flaticon.com/icons/svg/145/145664.svg'/>
                                <span className='home-details'>
                                    <span><i>'Продукты'</i> - список доступных твоваров</span>
                                    <span><i>'Приход'</i> - поступление и описание продукции</span>
                                </span>
                            </div>
                        )
                    }} />
                    <Route path='/products' component={Products} />
                    <Route path='/orders' component={Orders} />
                </Switch>
            </ErrorBoundry>
        </React.Fragment>
        )
}



export default RouterService