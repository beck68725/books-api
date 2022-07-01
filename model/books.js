const mongoose = require('mongoose')
const {Schema} = mongoose

const bookSchema = new mongoose.Schema({
    id: '',
    title: { type: String, required: true},
    description:  {type: String},
    year: { type: Number},
    quantity: { type: Number},
    imageURL: { type: String}
})

const Books = mongoose.model('Books', bookSchema)
module.exports = Books