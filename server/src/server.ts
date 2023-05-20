import fastify from 'fastify'
import { memoriesRoutes } from './routes/memoriesRoutes'

const app = fastify()

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`Server is running on port http://localhost:3333 ✔`)
  })
