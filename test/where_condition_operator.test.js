import { prismaClient } from "../src/prisma-client";

describe("Where condition Prisma", () => {
    it("should be able products GTE/LTE", async () => {
        let products = await prismaClient.product.findMany({
            where: {
                price: {
                    gte: 4000
                },
                AND: {
                    category: {
                        equals: "K2"
                    }
                }
            },
            select: {
                price: true,
                category: true
            }
        });

        console.log(products);

        expect(products[0].category).toBe("K2");
        expect(products[0].price).toBeGreaterThanOrEqual(4000);

        products = await prismaClient.product.findMany({
            where: {
                price: {
                    lte: 2000
                },
                AND: {
                    category: {
                        equals: "K1"
                    }
                }
            },
            select: {
                price: true,
                category: true
            }
        });

        console.log(products);

        expect(products[0].category).toBe("K1");
        expect(products[0].price).toBeLessThanOrEqual(2000);

    });

    it("should can using Where condition operator", async () => {
        let products = await prismaClient.product.findMany({
            orderBy: [
                {
                    category: "asc",
                },
                {
                    price: "desc"
                }
            ],
            select: {
                price: true,
                category: true,
                name: true
            },
            where: {
                category: {
                    in: ["K1", "k2"]
                },
                AND: {
                    price: {
                        gte: 3000
                    }
                }
            }, 
            
        });

        console.log(products);

        expect(products[0].category).toBe("K1");
        expect(products[0].price).toBeGreaterThanOrEqual(3000);

    });



});