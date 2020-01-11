export default class StoreService {
    orders = [
        {
          id: 1,
          title: 'Samsung',
          date: '2017-06-29 12:09:33',
          serialNumber:12312,
          quantity:23
        },
        {
          id: 2,
          title: 'ASUS',
          date: '2017-06-29 12:09:33',
          serialNumber:23565,
          quantity:17
         },
        {
          id: 3,
          title: 'Philips',
          date: '2017-06-29 12:09:33',
          serialNumber:6567,
          quantity:4
        },
        {
            id: 4,
            title: 'Dell',
            date: '2017-06-29 12:09:33',
            serialNumber:56845,
            quantity: 12,
        },
        {
            id: 5,
            title: 'Samsung',
            date: '2017-06-29 12:09:33',
            serialNumber:12312,
            quantity:23
          },
          {
            id: 6,
            title: 'ASUS',
            date: '2017-06-29 12:09:33',
            serialNumber:23565,
            quantity:17
           },
          {
            id: 7,
            title: 'Philips',
            date: '2017-06-29 12:09:33',
            serialNumber:6567,
            quantity:4
          },
          {
              id: 8,
              title: 'Dell',
              date: '2017-06-29 12:09:33',
              serialNumber:56845,
              quantity: 12,
          },
    ]
      
   products = [
    {
        id: 1,
        serialNumber: 12312,
        isNew: 1,
        photo: 'https://hotline.ua/img/tx/180/180674910_s265.jpg',
        title: 'Samsung C27JG50 (LC27JG50QQIXCI)',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
        },
        price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 1,
        date: '2017-06-29 12:09:33',
        characteristic:{
            title:'Samsung C27JG50 (LC27JG50QQIXCI)',
            manufacturer: 'Samsung',
            diagonal: '27',
            illumination: 'WLED',
            dimensions: '614,2х462,9х138,9'
        }
    },
    {
        id: 2,
        serialNumber: 23565,
        isNew: 1,
        photo: 'https://hotline.ua/img/tx/158/158068921_s265.jpg',
        title: 'ASUS VP249H (90LM03L0-B01A70) Black',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
        },
        price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 2,
        date: '2017-06-29 12:09:33',
        characteristic:{
            title:'ASUS VP249H (90LM03L0-B01A70) Black',
            manufacturer: 'ASUS',
            diagonal: '23,8',
            illumination: 'WLED',
            dimensions: '541,1x393x215'
        }
    },
    {
        id: 3,
        serialNumber: 6567,
        isNew: 1,
        photo: 'https://hotline.ua/img/tx/185/185005639_s265.jpg',
        title: 'Philips 276E8VJSB/00',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
        },
        price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 1,
        date: '2017-06-29 12:09:33',
        characteristic:{
            title:'Philips 276E8VJSB/00',
            manufacturer: 'Philips',
            diagonal: '27',
            illumination: 'WLED',
            dimensions: '613x466x189'
        }
    },
    {
        id: 4,
        serialNumber: 56845,
        isNew: 1,
        photo: 'https://hotline.ua/img/tx/156/156681757_s265.jpg',
        title: 'Dell P2418D (210-AMPS)',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
        },
        price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 2,
        date: '2017-06-29 12:09:33',
        characteristic:{
            title:'Dell P2418D (210-AMPS)',
            manufacturer: 'Dell',
            diagonal: '23,8',
            illumination: 'WLED',
            dimensions: '356,9-486,9х538,9х180'
        }
    },
    {
        id: 5,
        serialNumber: 12312,
        isNew: 1,
        photo: 'https://hotline.ua/img/tx/180/180674910_s265.jpg',
        title: 'Samsung C27JG50 (LC27JG50QQIXCI)',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
        },
        price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 1,
        date: '2017-06-29 12:09:33',
        characteristic:{
            title:'Samsung C27JG50 (LC27JG50QQIXCI)',
            manufacturer: 'Samsung',
            diagonal: '27',
            illumination: 'WLED',
            dimensions: '614,2х462,9х138,9'
        }
    },
    {
        id: 6,
        serialNumber: 23565,
        isNew: 1,
        photo: 'https://hotline.ua/img/tx/158/158068921_s265.jpg',
        title: 'ASUS VP249H (90LM03L0-B01A70) Black',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
        },
        price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 2,
        date: '2017-06-29 12:09:33',
        characteristic:{
            title:'ASUS VP249H (90LM03L0-B01A70) Black',
            manufacturer: 'ASUS',
            diagonal: '23,8',
            illumination: 'WLED',
            dimensions: '541,1x393x215'
        }
    },
    {
        id: 7,
        serialNumber: 6567,
        isNew: 1,
        photo: 'https://hotline.ua/img/tx/185/185005639_s265.jpg',
        title: 'Philips 276E8VJSB/00',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
        },
        price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 1,
        date: '2017-06-29 12:09:33',
        characteristic:{
            title:'Philips 276E8VJSB/00',
            manufacturer: 'Philips',
            diagonal: '27',
            illumination: 'WLED',
            dimensions: '613x466x189'
        }
    },
    {
        id: 8,
        serialNumber: 56845,
        isNew: 1,
        photo: 'https://hotline.ua/img/tx/156/156681757_s265.jpg',
        title: 'Dell P2418D (210-AMPS)',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
        start: '2017-06-29 12:09:33',
        end: '2017-06-29 12:09:33'
        },
        price: [
        {value: 100, symbol: 'USD', isDefault: 0},
        {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 2,
        date: '2017-06-29 12:09:33',
        characteristic:{
            title:'Dell P2418D (210-AMPS)',
            manufacturer: 'Dell',
            diagonal: '23,8',
            illumination: 'WLED',
            dimensions: '356,9-486,9х538,9х180'
        }
    },

    ]

    getOrders(){
        return new Promise((resolve, reject) => {
            if(reject){
                new Error('error')
            }
            resolve(this.orders)
        })
    }

    getProducts(){
        return new Promise((resolve, reject) => {
            if(reject){
                new Error('error')
            }
            resolve(this.products)
        })
    }
}