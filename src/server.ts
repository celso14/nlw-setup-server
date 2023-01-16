import Fastify from "fastify";

const app = Fastify();

const PORT = 3000

app.get('/', ()=> {
    return {msg: "Hello World!"}
})

app.listen({
    port: PORT
}).then( ()=> {
    console.log(`Running on http://localhost:${PORT}`)
})