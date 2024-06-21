const express =require('express')
const colors = require('colors')
const moragan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//config
dotenv.config()

// rest object 
    const app = express()
// connection db
connectDB()
// middleware
app.use(express.json())
app.use(moragan('dev'))

//routes
app.get("/",(res,req)=>{
    res.status(200).send({
        message:"server running"
    })
})
// port 
const port  = process.env.PORT || 8080
//listen
app.listen(port, () => {
    console.log(`server is runnig ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white)
})

