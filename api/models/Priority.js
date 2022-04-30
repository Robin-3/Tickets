const { Schema, model } = require('mongoose')

const prioritySchema = new Schema({
  priority_name: String,
  description: String,
  tickets: {
    type: [Schema.Types.ObjectId],
    ref: 'Ticket'
  }
})

const Priority = model('Priority', prioritySchema)

module.exports = Priority
