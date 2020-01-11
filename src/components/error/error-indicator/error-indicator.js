import React from 'react'
import './error-indicator.css'

const ErrorIndicator = () =>{

    return(
        <div className='error-indicator'>
            <img src='https://image.flaticon.com/icons/png/512/2246/2246723.png' alt='er' />
            <span className='error'>Что-то пошло не так...</span>
            <span className='detail'>Не волнуйтесь,скоро мы все починим </span>
        </div>
    )
}

export default ErrorIndicator