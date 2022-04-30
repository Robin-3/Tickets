const { Schema, model } = require('mongoose')

const authorizationSchema = new Schema({
  authorization_name: String,
  description: String,
  enable: {
    type: Boolean,
    default: true
  },
  roles: {
    type: [Schema.Types.ObjectId],
    ref: 'Role'
  }
})

const Authorization = model('Authorization', authorizationSchema)

module.exports = Authorization
