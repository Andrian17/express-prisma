import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it("Should be able to connect to database", async () => {
        await prismaClient.$connect();

        prismaClient.$disconnect();
    });

    it("Insert into table", async () => {
        const id = '1';
        const name = "Andrian Cimen";

        const impacted = await prismaClient.$executeRaw `INSERT INTO samples(id, name) VALUES (${id}, ${name})`;
        expect(impacted).toBe(1);
    });
});