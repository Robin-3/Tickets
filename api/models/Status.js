const { Schema, model } = require('mongoose')

const statusSchema = new Schema({
  status_name: String,
  description: String,
  tickets: {
    type: [Schema.Types.ObjectId],
    ref: 'Ticket'
  }
})

const Status = model('Status', statusSchema)

module.exports = Status
