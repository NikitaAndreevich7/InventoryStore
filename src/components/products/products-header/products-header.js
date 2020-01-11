import React, { Component } from 'react'
import './products-header.css'

export default class ProductsHeader extends Component{

    state={
        term: ''
    }

    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState({term})
        this.props.onSearchChange(term)
    }

    render(){
        return(
            <div className='head-products'>
                <span className='title-product'>
                    Продукты
                </span>
                <span  className='input-product-search' >
                    <input 
                        type='text'
                        className='search'
                        placeholder='search'
                        value={this.state.term}
                        onChange={this.onSearchChange}  />
                </span>
            </div>
        )
    }
}
