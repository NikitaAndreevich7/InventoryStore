import React from 'react';
import './app.css';

import TopMenu from '../top-menu'
import NavigationMenu from '../navigation-menu'
import RouterService from '../router'


const App  = () => {

    return(
        <div className='app'>
            <TopMenu /> 
            <span className='box'>
                <NavigationMenu />
                <RouterService />
            </span>
        </div>
    )
}

export default App;

/**
 * * TopMenu - верхний блок .Содержит время,дату и ссылку на страницу home
 * 
 * * NavigationMenu -  боковое меню.Содержит ссылки на 2 главные странцы : Orders(приход) Products(продукты)
 * 
 * * RouterService - подключаем к навигации 2 компонента Orders  and   Products
 * 
 */