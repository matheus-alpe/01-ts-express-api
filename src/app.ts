import express, { application } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

export class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database(): void {
    mongoose.connect('mongodb://localhost:27017/tsnode')
  }

  private routes(): void {
    this.express.use(routes)

    this.express.get('/', (req, res) => {
      return res.json({ message: 'Welcome to Typescript Express API' })
    })
  }
}

export default new App().express
