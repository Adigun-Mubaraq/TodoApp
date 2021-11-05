import "dotenv/config";
import express, { Express } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import todoRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 5000;
const { USER, PASSWORD, DB_NAME} = process.env

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(todoRoutes)

const url: string = `mongodb+srv://${USER}:${PASSWORD}@cluster0.0mjoi.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose
  .connect(url, options as ConnectOptions)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  }) 