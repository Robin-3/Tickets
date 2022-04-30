const { Schema, model } = require('mongoose')

const fileSchema = new Schema({
  data: Buffer,
  content_type: String
})

const File = model('File', fileSchema)

module.exports = File
