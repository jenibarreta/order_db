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
    },

    async getoneProduct(ctx) {
        try {
            const { documentId } = ctx.params;

            const data = await strapi.documents('api::product.product').findOne({
                documentId: 're4ehbspuya7dti2jggmxo2p',
                status: "published",
                fields: ["name", "description", "price", "stock"],
            });

            if (!data) {
                return ctx.notFound("Product not found");
            }

            ctx.body = data;
            ctx.status = 200;
        } catch (err) {
            ctx.throw(500, err);
        }
    },

    async createProduct(ctx) {
        try {
            const data = await strapi.documents('api::product.product').create({
                status: "published",
                data: {
                    name: "CK",
                    description: "Perfume",
                    price: 500,
                    stock: 15
                },
                fields: ["name", "description", "price", "stock"],
            });

            ctx.body = data;
        } catch (err) {
            ctx.throw(err);
        }
    },

    async updateProduct(ctx) {
        try {
            const { documentId } = ctx.params;

            const data = await strapi.documents('api::product.product').update({
                documentId,
                status: 'published',
                data: {
                    name: 'Updated CK',
                    description: 'Updated Perfume',
                    price: 600,
                    stock: 20,
                },
                fields: ['name', 'description', 'price', 'stock'],
            });

            ctx.body = data;
        } catch (err) {
            ctx.throw(500, err);
        }
    },

    async deleteProduct(ctx) {
        try {
            const { documentId } = ctx.params;

            const data = await strapi.documents('api::product.product').delete({
                documentId,
            });

            ctx.body = {
                message: 'Product deleted successfully',
                data,
            };
        } catch (err) {
            ctx.throw(500, err);
        }
    }

}
