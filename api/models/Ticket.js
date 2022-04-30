const { Schema, model } = require('mongoose')

const dedicatedHourSchema = new Schema({
  start: Date,
  end: Date
})

const assignmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dedicated_hours: [dedicatedHourSchema]
})

const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  publication_date: Date,
  comment: String
})

const ticketSchema = new Schema({
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  proyect: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  title: String,
  description: String,
  what_happend: [String],
  what_should_happen: [String],
  files: {
    type: [Schema.Types.ObjectId],
    ref: 'File'
  },
  due_date: Date,
  priority: {
    type: Schema.Types.ObjectId,
    ref: 'Priority'
  },
  assignments: [assignmentSchema],
  comments: [commentSchema],
  categories: {
    type: [Schema.Types.ObjectId],
    ref: 'Category'
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: 'Status'
  },
  is_billable: Boolean
})

const Ticket = model('Ticket', ticketSchema)

module.exports = Ticket
