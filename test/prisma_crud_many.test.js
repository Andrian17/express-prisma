import { prismaClient } from "../src/prisma-client";

describe("Prisma CRUD many", () => {

    it("Truncate table", async () => {
        const result = await prismaClient.customer.deleteMany({where: {}})
        expect(result).not.toBe(10);
    });

    it("should be able to create many records", async () => {
        const { count } = await prismaClient.customer.createMany({
            data: [
                {
                    id: "15",
                    name: "Name 15",
                    email: "name15@gmail.com",
                    phone: "76543234565"
                },
                {
                    id: "16",
                    name: "Name 16",
                    email: "name16@gmail.com",
                    phone: "76543234566"
                },
                {
                    id: "17",
                    name: "Name 17",
                    email: "name17@gmail.com",
                    phone: "76543234567"
                },
                {
                    id: "18",
                    name: "Name 18",
                    email: "name18@gmail.com",
                    phone: "76543234568"
                },
                {
                    id: "19",
                    name: "Name 19",
                    email: "name19@gmail.com",
                    phone: "76543234569"
                },
                {
                    id: "20",
                    name: "Name 20",
                    email: "name20@gmail.com",
                    phone: "76543234520"
                }
            ]
        });

        expect(count).toBe(6);
    });

    it("should be able to update many records", async () => {
        const {count} = await prismaClient.customer.updateMany({
            where: {
                name: "Name 17",
            },
            data: {
                name: "Name 017",
                email: "name017@gmail.com"
            }
        });

        expect(count).toBe(1);
    });

    it("should be able to delete  many records", async () => {
        const {count} = await prismaClient.customer.deleteMany({
            where: {
                name: "Name 15",
            }
        });
        expect(count).toBe(1);
    });

    it("should be able to read data", async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                name: "Name 017"
            }
        });
        console.log(customer);
        expect(customer[0].name).toBe("Name 017");
        expect(customer[0].email).toBe("name017@gmail.com");
        expect(customer[0].phone).toBe("76543234567");
    });

    it("should be able to read many", async () => {
        const page1 = await prismaClient.customer.findMany({
            skip: 0,
            take: 2
        });
        expect(page1.length).toBe(2);

        const page2 = await prismaClient.customer.findMany({
            skip: 2,
            take: 2
        });
        expect(page2.length).toBe(2);

        const page3 = await prismaClient.customer.findMany({
            skip: 4,
            take: 2
        });
        expect(page3.length).toBe(1);

    });

    it("should be able to read many, with sorting", async () => {
        const page1 = await prismaClient.customer.findMany({
            skip: 0,
            take: 5,
            orderBy: [
                {
                    name: "asc"
                },
                {
                    email: "desc"
                }
            ]
        });
        expect(page1.length).toBe(5);

    });

    it("should be able create and select records", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "21",
                name: "Name 21",
                email: "name21@gmail.com",
                phone: "087654323420"
            },
            select: {
                id: true,
                name: true,
            }
        });

        expect(customer.id).toBe("21");
        expect(customer.name).toBe("Name 21");
        expect(customer.email).toBeUndefined();
        expect(customer.phone).toBeUndefined();
    });

    it("should be able to read many, with select", async () => {
        const page1 = await prismaClient.customer.findMany({
            orderBy: [
                {
                    name: "asc"
                },
                {
                    email: "desc"
                }
            ],
            select: {
                email: true,
                name: true
            }
        });
        console.log(page1);
        expect(page1[0].name).toBe("Name 017");
        expect(page1[0].email).toBe("name017@gmail.com");
        expect(page1[0].phone).toBeUndefined();

    });

});