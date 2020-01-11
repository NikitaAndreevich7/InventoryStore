import React,{ Component } from 'react'
import './products.css'
import { connect } from 'react-redux'
import ProductsHeader from './products-header'
import ProductsListItem from './products-list-item'
import { compose } from '../../utils'
import { withInventoryService } from '../hoc'
import { fetchProducts } from '../../actions'

class Products extends Component{

    state={
        term: ''
    }
    componentDidMount(){
        this.props.fetchProducts()
    }

    // функция создает список элементов
    getList = (arr) =>{
        return arr.map((item) =>{
            const {id, ...items} = item
            return(
                <li className="list-group-item" key={id}>
                   <ProductsListItem {...items} />
            </li>
            )
        })
    }

    //функция поиска   Достаем из state значение которое вводит пользователь ,и сравниваем с нашим списком.
    search(items, term){

        if(term.length === 0){
           return items; 
        }

        return items.filter((item) =>{
            return item.title.indexOf(term) > -1;
        })
    }

    //получаем то что вводит пользователь в input , и записывает в state
    onSearchChange = (term) =>{
        this.setState({term})
    }

    render(){
        const { products } = this.props
        const { term } = this.state

        const visibleItems = this.search(products, term); // вызываем функцию поиска.Передаем в нее в виде аргументов наш список продуктов и то что водит пользователь

        const productsList = this.getList(visibleItems) // принимает массив, и при помощи функции map ,работает  с каждым елементом массива

        return(
            <div className='products'>
                <ProductsHeader onSearchChange={this.onSearchChange} />
                <ul className="list-group">
                    {productsList} 
                </ul>
            </div>
        )
    }
}
//получаем значения из state
const mapStateToProps = ({products}) =>{
    return { products }
}
//передаем значения в state
const mapDispatchToProps = (dispatch, { storeService }) =>{
    return{
        fetchProducts: fetchProducts(storeService, dispatch),

    }
}
export default compose(
    withInventoryService(),
    connect(mapStateToProps,mapDispatchToProps)
)(Products)

/*
* compose - для оптимизации (код лучше читается)

* withInventoryService - получаем из контекста  данные с сервера

* connect - hoc реакта , для удобной работы
*/