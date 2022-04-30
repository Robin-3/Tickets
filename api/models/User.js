const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
  name: String,
  username: {
    type: String,
    unique: true
  },
  password: String,
  emails: [String],
  phone_numbers: [String],
  websites: [String],
  projects: {
    type: [Schema.Types.ObjectId],
    ref: 'Project'
  },
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Role'
  },
  tickets: {
    type: [Schema.Types.ObjectId],
    ref: 'Ticket'
  }
})

userSchema.plugin(uniqueValidator)

const User = model('User', userSchema)

module.exports = User
