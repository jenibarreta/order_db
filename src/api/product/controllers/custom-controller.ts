export default {

    async getProducts(ctx) {
        try {
            const data = await strapi.documents('api::product.product').findMany()
            ctx.body = data;
            ctx.status = 200;
        } catch (err) {
            ctx.badRequest(err)
        }
    },

    async getLowStocks(ctx) {
        try {
            const data = await strapi.documents('api::product.product').findMany({
                filters: {
                    stock: {
                        $lte: 10
                    }
                }
            })
            ctx.body = data;
            ctx.status = 200;
        } catch (err) {
            ctx.badRequest(err)
        }
    },

    async getLowStocksByPriceRange(ctx) {
        try {
            const data = await strapi.documents('api::product.product').findMany({
                filters: {
                    stock: {
                        $lte: 10
                    },
                    price: {
                        $gte: 500,
                        $lte: 1500,
                    }
                }
            });

            ctx.body = data;
            ctx.status = 200;
        } catch (err) {
            ctx.badRequest(err);
        }
    }

}
