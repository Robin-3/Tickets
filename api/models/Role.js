const { Schema, model } = require('mongoose')

const roleSchema = new Schema({
  role_name: String,
  description: String,
  role_level: Number,
  users: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  },
  authorizations: {
    type: [Schema.Types.ObjectId],
    ref: 'Authorization'
  }
})

const Role = model('Role', roleSchema)

module.exports = Role
