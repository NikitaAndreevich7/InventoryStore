import React,{ Component } from 'react'
import './order-list.css'
import { connect } from 'react-redux'
import { compose } from '../../../utils'
import { withInventoryService } from '../../hoc'
import { fetchOrders,fetchProducts, idDetailsElement,deleteOrder } from '../../../actions'
import OrdersListItem from '../order-list-item'

class OrderList extends Component{


    componentDidMount(){
        this.props.fetchProducts()
        this.props.fetchOrders()
    }


    // функция создает список элементов
    getList = (arr) =>{
        return arr.map((item) =>{
            const {id, ...items} = item
            const { idDetails, deleteOrder,products } = this.props

            return(
                <li 
                    className="list-group-item"
                    key={id}>
                   <OrdersListItem {...items}
                    product={products[item.id-1]} // передаем массив с ценой
                    getDetails={() => idDetails(item.serialNumber)} //событие открывает детали прихода
                    getDelet={() => deleteOrder(item.id)} /> 
            </li>
            )
        })
    }

    render(){

        const { order } = this.props
        const ordersList = this.getList(order)
        return(
                <ul className="list-group">
                    {ordersList}
                </ul>
        )
    }
}

const mapStateToProps = ({order,products}) =>{
    return { order, products }
}
const mapDispatchToProps = (dispatch, { storeService }) =>{
    return{
        fetchOrders: fetchOrders(storeService, dispatch),
        fetchProducts: fetchProducts(storeService, dispatch),
        idDetails: (id) => dispatch(idDetailsElement(id)),
        deleteOrder: (id) => dispatch(deleteOrder(id))
    }
}

export default compose(
    withInventoryService(),
    connect(mapStateToProps, mapDispatchToProps)
)(OrderList)