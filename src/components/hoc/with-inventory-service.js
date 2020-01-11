import React from 'react';
import { InventoryStoreConsumer } from '../inventory-store-context'

const withInventoryService = () => (Wrapped) => {
    
    return (props) =>{
        return(
            <InventoryStoreConsumer>
                {
                    (storeService) => {
                        return (<Wrapped {...props}
                                storeService={storeService} />)
                    }
                }
            </InventoryStoreConsumer>
        )
    }
}

export default withInventoryService;