export default {
    routes: [
        {
            method: 'GET',
            path: '/products/by-name',
            handler: 'prelim-controller.getProductsByName'
        },
        {
            method: 'GET',
            path: '/products/by-price',
            handler: 'prelim-controller.getProductsByPrice'
        },
        {
            method: 'GET',
            path: '/products/with-stock',
            handler: 'prelim-controller.getProductsWithStock'
        },
        {
            method: 'GET',
            path: '/products/sorted-price',
            handler: 'prelim-controller.getProductsSortedByPrice'
        },
        {
            method: 'GET',
            path: '/products/fields-only',
            handler: 'prelim-controller.getProductFields'
        }
    ]
}
