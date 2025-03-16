import Express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from '@/utils/swaggers'
import router from '@/routes/index'

const PORT = process.env.PORT ?? 5000

const app = Express()

app.use(Express.json())

app.use('/api/', router)

app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
