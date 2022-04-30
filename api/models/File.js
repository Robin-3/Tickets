const { Schema, model } = require('mongoose')

const fileSchema = new Schema({
  data: Buffer,
  content_type: String,
  ticket: {
    type: Schema.Types.ObjectId,
    ref: 'Ticket'
  }
})

const File = model('File', fileSchema)

module.exports = File
