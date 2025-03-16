import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import pool from './db/db.config'
import path from 'path'
import booksRouter from './routes/routes'

dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const _dirname = path.resolve()

const port = process.env.PORT;

app.use('/api', booksRouter);




app.listen(port, () => {
  console.log(`Server is running on port ${port}😊😊`)
})
 


// app.use(cors({
//   origin: 'http://localhost:3000',
//methods: 'GET,POST,PUT,DELETE',
// credentials: true}))