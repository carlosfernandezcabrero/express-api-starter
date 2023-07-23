import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import api from './api/index.js'
import middlewares from './middlewares.js'

dotenv.config()

const app = express()

app.use(compression())
app.use(morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  })
})

app.use('/api/v1', api)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

export default app
