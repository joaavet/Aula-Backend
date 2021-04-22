const express = require('express')
const mongoose = require('mongoose')


const routes = require('./routes')

const app = express()

mongoose.connect('',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})


app.use(express.json())   
app.use(routes)

app.listen(3000)

console.log("servidor rodando no end: http://localhost:3000")