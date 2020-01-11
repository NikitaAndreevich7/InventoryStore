const initialState = {
    order: [],
    products: [],
    serialNumber:null
}

const reducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'ADD_PRODUCT_TO_LIST':
            return{
                ...state,
                products : action.payload
            }

        case 'ADD_ORDERS_TO_LIST':
            return{
                ...state,
                order : action.payload
            }

        case 'ID_DETAILS_ELEMENT':
            const id = action.payload
            const { products } = state
            const idx = products.findIndex((el) => el.serialNumber === id)
            const elem = products[idx].characteristic
            return{
                ...state,
                serialNumber: elem
            }

        case 'CLOSE_DETAILS':
            return{
                ...state,
                serialNumber: null
            }
        
        case 'DELETE_ORDER':
            const num = action.payload;
            const element  = state.order.findIndex(el => el.id === num);

            return{
                ...state,
                order:[
                    ...state.order.slice(0, element),
                    ...state.order.slice(element + 1)
                ]
            }
        
        default:
            return state
    }
}

export default reducer



