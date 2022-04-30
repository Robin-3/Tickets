const { Schema, model } = require('mongoose')

const projectSchema = new Schema({
  project_name: String,
  description: String,
  tickets: {
    type: [Schema.Types.ObjectId],
    ref: 'Ticket'
  },
  project_owners: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  },
  assigned_users: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  }
})

const Project = model('Project', projectSchema)

module.exports = Project
