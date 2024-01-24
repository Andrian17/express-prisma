import { prismaClient } from '../src/prisma-client';


describe("Prisma many to many (explicit)", () => {
    it("Many to many likes", async () => {
        const like = await prismaClient.like.create({
            data: {
                product_id: "P0001",
                customer_id: "21"
            },
            include: {
                customers: true,
                products: true
            }
        });

        console.log(like);

        expect(like.customers.name).toBe("Name 21");
        expect(like.customers.email).toBe("name21@gmail.com");
        expect(like.products.name).toBe("A");
        expect(like.products.price).toBe(1000);
    });

    it("Find customer include like and products", async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                email: "name22@gmail.com"
            },
            include: {
                likes: {
                    include: {
                        products: true
                    }
                }
            }
        });

        console.log(JSON.stringify(customer));

        expect(customer.name).toBe("Name 22");
        expect(customer).toHaveProperty("likes");
        expect(customer.likes[0]).toHaveProperty("products");
        expect(customer.likes[0].customer_id).toBe("22");
        expect(customer.likes[0].products.price).toBe(1000);
    });

    it("Find many with include", async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                likes: {
                    some: {
                        products: {
                            name: {
                                contains: "A"
                            }
                        }
                    }
                }
            },
            include: {
                wallet:true,
                likes: {
                    include: {
                        products: true
                    }
                }
            }
        });

        console.log(JSON.stringify(customer));

        expect(customer[0]).toHaveProperty("wallet");
        expect(customer[0]).toHaveProperty("likes");
        expect(customer[0].likes[0]).toHaveProperty("products");
    });

});

describe("Many to many (implicit)", () => {
    it("customer loves the products", async () => {
        const customer = await prismaClient.customer.update({
            where: {
                id: "22"
            },
            data: {
                loves: {
                    connect: [
                        {
                            id: "P0003",
                        },
                        {
                            id: "P0004"
                        }
                    ]
                }
            },
            include: {
                loves: true
            }
        });

        console.log(JSON.stringify(customer));
        
        expect(customer.name).toBe("Name 22");
        expect(customer.loves[0]).toHaveProperty("name")
        expect(customer.loves[0]).toHaveProperty("price");
        expect(customer.loves[0]).toHaveProperty("category");
    });

    it("find many with implicit relation", async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                loves: {
                    some: {
                        id: "P0001"
                    }
                }
            },
            include: {
                loves: true
            }
        });

        console.log(JSON.stringify(customer));

        expect(customer[0]).toHaveProperty("loves");
        expect(customer[0].loves[0]).toHaveProperty("price");
        expect(customer[0].loves[0].id).toBe("P0001");

    });

    it("find customer by unique and with include loves", async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "22"
            },
            include: {
                loves: true,
                likes: {
                    include: {
                        products: true
                    }
                }
            }
        });

        console.log(JSON.stringify(customer));

        expect(customer.likes[0].products).toHaveProperty("price");
        expect(customer.loves[0]).toHaveProperty("price");
    });
});