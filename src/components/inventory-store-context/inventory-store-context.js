import React from 'react';

const {
    Provider: InventoryStoreProvider,
    Consumer: InventoryStoreConsumer
} = React.createContext();

export {
    InventoryStoreProvider,
    InventoryStoreConsumer
}