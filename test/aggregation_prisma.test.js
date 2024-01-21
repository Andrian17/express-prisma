import { prismaClient } from "../src/prisma-client";

describe("Prisma aggregation", () => {
    it("should be able count", async () => {
        const count = await prismaClient.customer.count({
            // where: {
            //     name: "Andrian"
            // }
        })

        expect(count).toBe(6);
    });

    it("should be able query using aggregate", async () => {
        const results = await prismaClient.product.aggregate({
            _min: {
                price: true
            },
            _avg:{
                price: true,
            },
            _max: {
                price: true
            }
        });
        expect(results._min.price).toBe(1000);
        expect(results._avg.price).toBe(3000);
        expect(results._max.price).toBe(5000);
    });

    it("should be able query using aggregate and group by", async () => {
        const products = await prismaClient.product.groupBy({
            by:['category'],
            orderBy: [{
                category: 'desc'
            }],
            _min: {
                price: true
            },
            _avg:{
                price: true,
            },
            _max: {
                price: true
            }
        });
        
        for (const product of products) {
            console.log(product.category);
            console.log(product._min);
            console.log(product._avg);
            console.log(product._max);
        }

        expect(products[1].category).toBe("K2");
        expect(products[1]._min.price).toBe(4000);
        expect(products[1]._avg.price).toBe(4500);
        expect(products[1]._max.price).toBe(5000);

    });

    it("should be able query using aggregate and group by having", async () => {
        const products = await prismaClient.product.groupBy({
            by:['category'],
            orderBy: [{
                category: 'desc'
            }],
            _min: {
                price: true
            },
            _avg:{
                price: true,
            },
            _max: {
                price: true
            },
            having: {
                price: {
                    _avg: {
                        gt: 4000,
                        // lte: 2000
                    }
                }
            }
        });
        console.log(products);
        
        for (const product of products) {
            console.log(product.category);
            // console.log(product._min);
            console.log(product._avg);
            // console.log(product._max);
        }

        expect(products[0].category).toBe("K2");
        expect(products[0]._min.price).toBe(4000);
        expect(products[0]._avg.price).toBe(4500);
        expect(products[0]._max.price).toBe(5000);

    });

});