const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
  category_name: String,
  description: String,
  tickets: {
    type: [Schema.Types.ObjectId],
    ref: 'Ticket'
  }
})

const Category = model('Category', categorySchema)

module.exports = Category
