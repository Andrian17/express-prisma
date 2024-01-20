import { prismaClient } from "../src/prisma-client";

describe("Prisma ORM Transaction", () => {

    it("Truncate table", async () => {
        const result = await prismaClient.customer.deleteMany({where: {}})
        expect(result).not.toBe(10);
    });

    it("Create Prisma transaction", async () => {
        const [...customers] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data: {
                    id: "6",
                    name: "Liana",
                    email: "liana@gmail.com",
                    phone: "0912345678"
                }
            }),
            prismaClient.customer.create({
                data: {
                    id: "7",
                    name: "Ali",
                    email: "ali@gmail.com",
                    phone: "08123456800"
                }
            })
        ], );

        expect(customers[0].name).toBe("Liana");
        expect(customers[0].email).toBe("liana@gmail.com");
        expect(customers[0].phone).toBe("0912345678");

        expect(customers[1].name).toBe("Ali");
        expect(customers[1].email).toBe("ali@gmail.com");
        expect(customers[1].phone).toBe("08123456800");

    });

    it("Create Prisma interactive transaction", async () => {
        const [...customers] = await prismaClient.$transaction(async (prisma) => {
            const name10 = await prisma.customer.create({
                data: {
                    id: "10",
                    name: "Name 10",
                    email: "name10@gmail.com",
                    phone: "474746464653"
                }
            });
            const name11 = await prisma.customer.create({
                data: {
                    id: "11",
                    name: "Name 11",
                    email: "name11@gmail.com",
                    phone: "35353353535353"
                }
            });

            return [name10, name11];
        });

        expect(customers[0].name).toBe("Name 10");
        expect(customers[0].email).toBe("name10@gmail.com");
        expect(customers[0].phone).toBe("474746464653");

        expect(customers[1].name).toBe("Name 11");
        expect(customers[1].email).toBe("name11@gmail.com");
        expect(customers[1].phone).toBe("35353353535353");

    });

});