import { prismaClient } from "../src/prisma-client";

describe("CRUD Prisma", () => {

    it("should be able to create customer", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "3",
                name: "Hadi",
                email: "hadi@gmail.com",
                phone: "1234567890"
            }
        });

        expect(customer.name).toBe("Hadi");
        expect(customer.email).toBe("hadi@gmail.com");
        expect(customer.phone).toBe("1234567890");
    });

    it("should be able to update customer", async () => {
        const customer = await prismaClient.customer.update({
            data: {
                name: "M Hadi"
            },
            where: {
                id: "3",
                email: "hadi@gmail.com"
            }
        });

        expect(customer.name).toBe("M Hadi");
        expect(customer.email).toBe("hadi@gmail.com");
    });

    it("should be able to read customer", async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "3",
            }
        });

        expect(customer.name).toBe("M Hadi");
        expect(customer.email).toBe("hadi@gmail.com");
        expect(customer.phone).toBe("1234567890");
    });

    it("should be able to delete customer", async () => {
        const customer = await prismaClient.customer.delete({
            where: {
                id: "3",
            }
        });

        expect(customer.name).toBe("M Hadi");
        expect(customer.email).toBe("hadi@gmail.com");
        expect(customer.phone).toBe("1234567890");
    });

});