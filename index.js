const { application } = require('express')
const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())

app.use('/books', require('./controller'))
//get
app.get('/', (req, res) => {
    res.send('hello world!!')
})

//listen
app.listen(process.env.PORT)