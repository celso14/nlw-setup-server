import Fastify from "fastify";
import cors from "@fastify/cors"
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const PORT = 3000;
const prisma = new PrismaClient();

app.register(cors);

app.get( '/', async () => {
    const habits = await prisma.habit.findMany()

    return {
        msg: "Hello World!",
        ...habits
    }
});

app.listen({
    port: PORT
}).then( ()=> {
    console.log(`Running on http://localhost:${PORT}`)
});