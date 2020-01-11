import React from 'react'
import './products-list-item.css'

const ProductsListItem = ({title, type, guarantee, price, date,photo}) =>{


    return(
        <span className='list'>
            <span className='name-icon'>
            <img src={photo} alt='img-product'/>
                <span>{title}</span>
            </span>
            <span className='type'>{type}</span>
            <span className='data-wrap'>
                <span className='data-line'><span>с</span> {guarantee.start.slice(0, 10)}</span>
                <span className='data-line'><span>по</span> {guarantee.end.slice(0, 10)}</span>
            </span>
            <span>
                <span className='money'>
                    <span>{price[0].value} {price[0].symbol}</span>
                    <span>{price[1].value} {price[1].symbol}</span>
                </span>
            </span>
            <span className='time-create-product'>
                <span>{date.slice(0,10)}</span>
                <span>{date.slice(10)}</span>
            </span>
        </span>
    )
}

export default ProductsListItem;