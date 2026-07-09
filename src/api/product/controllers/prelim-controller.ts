export default {

    async getProductsByName(ctx) {
        try {
            const data = await strapi.documents('api::product.product').findMany({
                filters: {
                    name: {
                        $contains: 'lap'
                    }
                }
            });

            ctx.body = data;
            ctx.status = 200;
        } catch (err) {
            ctx.badRequest(err);
        }
    },

    async getProductsByPrice(ctx) {
        try {
            const data = await strapi.documents('api::product.product').findMany({
                filters: {
                    price: {
                        $gt: 5000
                    }
                }
            });

            ctx.body = data;
            ctx.status = 200;
        } catch (err) {
            ctx.badRequest(err);
        }
    },

    async getProductsWithStock(ctx) {
        try {
            const data = await strapi.documents('api::product.product').findMany({
                filters: {
                    stock: {
                        $ne: 0
                    }
                }
            });

            ctx.body = data;
            ctx.status = 200;
        } catch (err) {
            ctx.badRequest(err);
        }
    },

    async getProductsSortedByPrice(ctx) {
        try {
            const data = await strapi.documents('api::product.product').findMany({
                sort: {
                    price: 'desc'
                }
            });

            ctx.body = data;
            ctx.status = 200;
        } catch (err) {
            ctx.badRequest(err);
        }
    },

    async getProductFields(ctx) {
        try {
            const data = await strapi.documents('api::product.product').findMany({
                fields: ['id', 'name', 'price', 'stock']
            });

            ctx.body = data;
            ctx.status = 200;
        } catch (err) {
            ctx.badRequest(err);
        }
    }

}
