const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrl = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env['MONGO_URI'], () => console.log('Database connected'))

app.use(express.json()) /* body parser supaya bisa mengirimkan/menerima data dalam bentuk json*/
app.use(cors())

app.use('/', routesUrl)
app.listen(4000, () => console.log('server is up and running in port 4000'))