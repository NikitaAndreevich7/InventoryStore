import React ,{ Component,Fragment } from 'react'
import './top-menu.css'
import { Link } from 'react-router-dom'

class TopMenu extends Component{



    render(){
        return(
            <div className='top-menu-wrap'>
                <div className='icon-box'>
                    <span className='icon'>
                      <Link to='/' > <img src='https://image.flaticon.com/icons/png/512/553/553310.png'
                                        alt='icons-header' /></Link>
                    </span>
                    <span className='icon-text'>
                        <Link to='/'>
                          inventory
                        </Link>
                    </span>
                </div>
                <div className='data-time-box'>
                   <Time />
                </div>
            </div>
        )
    }
}

let Time = () =>{
    //добавляет 0
    function addZero(num) {
           var str = num.toString();
           return str.length === 1? "0" + str : str;
    }

    let day = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье']
    let month = [
        'Янв.',
        'Фев.',
        'Мар.',
        'Апр.',
        'Май',
        'Июнь',
        'Июль',
        'Авг.',
        'Сент.',
        'Окт.',
        'Нояб.',
        'Дек.']

    let data = new Date();
    
    //получаем дату
    let dat = (
        `${addZero(data.getDate())} ${month[data.getMonth()]} ${data.getFullYear()} `
    )
    //получаем день
    let days = day[data.getDay() -1]

    //получаем время
    let clock = (
       `${addZero(data.getHours())} :
        ${addZero(data.getMinutes())}`
    )

    return(
        <Fragment>
            <span className='data'>
                <span>{days}</span>
                <span>{dat}</span>
            </span>
            <span className='time'>
                <img src='https://image.flaticon.com/icons/svg/2441/2441640.svg' alt='time' />
                {clock}
            </span>
        </Fragment>
    )
}




export default TopMenu



