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
        },

        {
            method: 'GET',
            path: '/products/get-one-product/:documentId',
            handler: 'custom-controller.getoneProduct'
        },

        {
            method: 'POST',
            path: '/products/create-product',
            handler: 'custom-controller.createProduct'
        },

        {
            method: 'PUT',
            path: '/products/update-product/:documentId',
            handler: 'custom-controller.updateProduct',
        },

        {
            method: 'DELETE',
            path: '/products/delete-product/:documentId',
            handler: 'custom-controller.deleteProduct',
        }
    ]
}
