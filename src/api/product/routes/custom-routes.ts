export default {
    routes: [
        {
            method: 'GET',
            path: '/products/get-all-products',
            handler: 'custom-controller.getProducts'
        },

        {
            method: 'GET',
            path: '/products/get-low-stocks',
            handler: 'custom-controller.getLowStocks'
        },

        {
            method: 'GET',
            path: '/products/get-low-stocks-price-range',
            handler: 'custom-controller.getLowStocksByPriceRange'
        }
    ]
}
