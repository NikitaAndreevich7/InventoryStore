import React, { Component } from 'react'
import './orders.css'
import OrderList from './order-list'
import OrderDetails from './order-details'
import Row from '../row/row'

class Orders extends Component {

    render(){
        return(
            <div className='orders'>
                <div className='head-orders'>
                    <span className='title-orders'>
                        Приходы
                    </span>
                </div>
                <Row    
                    left={<OrderList />}
                    right={<OrderDetails />} />

            </div>
        )
    }
}

export default Orders;


/**
 * ? Row - сомпонент обертка,который принимает два компонента и применяет к ним позиционирование относительно заданых стилей
 * 
 * ? В данной ситуации компонент Row принимает OrderList - список приходов  и OrderDetails - будет показывать детали конкретного прихода
 * 
 */