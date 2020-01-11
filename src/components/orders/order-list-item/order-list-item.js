import React,{Fragment} from 'react'
import './order-list-item.css'



const OrderListItem = ({ title,date,quantity,getDetails,getDelet,product }) => {


        return(
            <Fragment>
                <span className='title'>{title}</span>
                <button 
                    className='icon-menu'
                    title='Посмотреть детали'
                    onClick={getDetails}>
                    <i className="fa fa-bars"/>
                </button>
                <span className='box-quantity'>
                    <span className='num'>{quantity}</span>
                    <span className='text'>шт.</span>
                </span>
                <span className='price'>
                    <span>{product.price[0].value * quantity} {product.price[0].symbol}</span>
                    <span>{product.price[1].value * quantity} {product.price[1].symbol}</span>
                </span>
                <span className='time-date'>
                    <span>{date.slice(0,10)}</span>
                    <span>{date.slice(10)}</span>
                </span>
                <button className='trash' title='Удалить' onClick={getDelet}>
                    <i className="fa fa-trash-o"/>
                </button>
            </Fragment>
        )
    
}



export default OrderListItem