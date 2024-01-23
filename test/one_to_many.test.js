import { prismaClient } from "../src/prisma-client";

describe("One to many test", () => {
    it("One to many insert with include customer", async () => {
        const comment = await prismaClient.comment.create({
            data: {
                customer_id: "20",
                title: "Comment 20",
                description: "Sample Comment 20",
                created_at: new Date(),
            },
            include: {
                customer: true
            }
        });

        console.log(comment);

        expect(comment.customer_id).toBe("20");
        expect(comment.customer.name).toBe("Name 20");
    });

    it("should get data customer with comment", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "23",
                name: "Name 23",
                email: "name23@gmail.com",
                phone: "09876543456523",
                comments: {
                    createMany: {
                        data: [
                            {
                                title: "Comment 23 1",
                                description: "Sample Comment 23 1",
                                created_at: new Date()
                            },
                            {
                                title: "Comment 23 2",
                                description: "Sample Comment 23 2",
                                created_at: new Date()
                            }
                        ]
                    }
                },
                wallet: {
                    create: {
                        id: "6",
                        balance: 250000
                    }
                },
            },
            include: {
                comments: true,
                wallet: true
            }
        });

        console.log(customer);

        expect(customer.name).toBe("Name 23");
        expect(customer.comments[0].title).toBe("Comment 23 1");
        expect(customer.wallet.balance).toBe(250000);
    });

    it("find customer and comments", async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                comments: {
                    some: {
                        title: {
                            contains: "Comment"
                        }
                    }
                }
            },
            include: {
                comments: true,
                wallet: true
            }
        });

        console.log(customers);
        console.log(JSON.stringify(customers));

        expect(customers.length).toBeGreaterThan(2);
        expect(customers[0]).toHaveProperty("comments");
        expect(customers[0]).toHaveProperty("wallet");
    });
});