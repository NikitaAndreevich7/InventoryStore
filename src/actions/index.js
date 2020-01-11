

const addProductsToList = (list) =>{
    return{
        type: 'ADD_PRODUCT_TO_LIST',
        payload: list
    }
}

const addOrdersToList = (list) =>{
    return{
        type: 'ADD_ORDERS_TO_LIST',
        payload: list
    }
}

const idDetailsElement = (id) =>{
    return{
        type: 'ID_DETAILS_ELEMENT',
        payload: id
    }
}

const closeDetails = () =>{
    return{
        type: 'CLOSE_DETAILS'
    }
}

const deleteOrder = (id) =>{
    return{
        type: 'DELETE_ORDER',
        payload: id
    }
}

const fetchProducts = (storeService, dispatch) => () =>{
    storeService.getProducts()
        .then((data) => dispatch(addProductsToList(data)))
}

const fetchOrders = (storeService, dispatch) => () =>{
    storeService.getOrders()
        .then((data) => dispatch(addOrdersToList(data)))
}

export{
    addProductsToList,
    idDetailsElement,
    fetchProducts,
    closeDetails,
    deleteOrder,
    fetchOrders
}