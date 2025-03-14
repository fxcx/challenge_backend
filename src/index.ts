// import swaggerJSDoc from "swagger-jsdoc"
// import path from "path"
import Express from 'express'

const PORT = process.env.PORT ?? 5000

const app = Express()

app.use(Express.json())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
