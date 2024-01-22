import { prismaClient } from "../src/prisma-client";

describe("One to One test", () => {
    it("should be able to create one to one", async () => {
        const wallet = await prismaClient.wallet.create({
            data: {
                id: "4",
                customer_id: "19",
                balance: 400000
            },
            include: {
                customer: true
            }
        });
        console.log(wallet);

        expect(wallet.customer_id).toBe("19");
        expect(wallet.balance).toBe(400000);
        expect(wallet.customer.email).toBe("name19@gmail.com");

    });

    it("should be able create one to one with relation", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "22",
                name: "Name 22",
                email: "name22@gmail.com",
                phone: "090909090222",
                wallet: {
                    create: {
                        id: "5",
                        balance: 150000
                    }
                }
            },
            include: {
                wallet: true
            }
        });

        expect(customer).toHaveProperty("wallet");
        expect(customer.email).toBe("name22@gmail.com");
        expect(customer.wallet.balance).toBe(150000);
    });

    it("should be find one to one with relation by unique", async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                email: "name22@gmail.com",
            },
            include: {
                wallet: true
            }
        });

        console.log(customer);

        expect(customer.name).toBe("Name 22");
        expect(customer).toHaveProperty("wallet");
    });

    it("should be find one to one with relation", async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                email: {
                    in: ["name21@gmail.com", "name22@gmail.com", "name20@gmail.com", "name19@gmail.com"]
                },
                AND: {
                    wallet: {
                        isNot: null
                    }
                }
            },
            include: {
                wallet: true
            }
        })

        console.log(customer);

        expect(customer[1].name).toBe("Name 22");
        expect(customer[1]).toHaveProperty("wallet");
    });
});