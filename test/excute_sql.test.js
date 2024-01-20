import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    it("Insert into table", async () => {
        const id = '2';
        const name = "Hadi";
    
        const impacted = await prismaClient.$executeRaw `INSERT INTO samples(id, name) VALUES (${id}, ${name})`;
        expect(impacted).toBe(1);
    });

    it("Select table", async () => {
        const name = "Andrian Cimen";
        const impacted = await prismaClient.$queryRaw `SELECT * FROM samples WHERE name=${name}`;

        for (const sample of impacted) {
            // expect(sample).toEqual({
            //     id: "1",
            //     name: "Andrian Cimen"
            // });
            console.log(` Id : ${sample.id}, name: ${sample.name}`);
        }
    });
});