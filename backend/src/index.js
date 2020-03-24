const express =  require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const app = express()

app.use(cors())

mongoose.connect('mongodb+srv://USERNAME:PASSWORD@cluster0-wuis8.mongodb.net/NOMEDOBANCO?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true})

app.use(express.json())
app.use(routes)

app.listen(3333)