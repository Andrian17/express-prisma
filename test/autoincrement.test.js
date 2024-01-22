import { prismaClient } from "../src/prisma-client";

describe("Auto increment test", () => {
    it("Insert category", async () => {
        const category = await prismaClient.category.create({
            data: {
                name: "Gadget"
            }
        });
        expect(category).toHaveProperty("id");
        expect(category).toHaveProperty("name");
    });

    
    it("Customers test", async () => {
        const customer = await prismaClient.customer.findFirst({
            where: {
                name: "Name 18"
            }
        });
        
        expect(customer.name).toBe("Name 18");
    });
});