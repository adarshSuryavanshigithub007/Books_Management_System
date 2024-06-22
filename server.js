const express = require('express')
const colors = require('colors')
const moragan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors')
//config
dotenv.config()

// rest object 
const app = express()
// connection db
connectDB()
// middleware
app.use(express.json())
app.use(moragan('dev'))

//cors
app.use(cors())
//routes
app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/book',require('./routes/booksRoutes'))


// port 
const port = process.env.PORT || 8080
//listen
app.listen(port, () => {
    console.log(`server is runnig ${process.env.NODE_MODE} Mode on porthttp://localhost:${process.env.PORT}`.bgCyan.white)
})

