import React from 'react';
import './navigation-menu.css'
import { Link } from 'react-router-dom'

const NavigationMenu = () =>{

    return(
        <div className='navigation-menu'>
            <ul className='category-list'>
                <li className='category'>
                    <Link to='/orders' className='effect'>Приход</Link>
                </li>
                <li className='category'>
                    <Link to='/products' className='effect'>Продукты</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu