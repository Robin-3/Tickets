require('dotenv').config()
require('./mongo')

const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')

const notFound = require('./middleware/notFound.js')
const handleErrors = require('./middleware/handleErrors.js')

app.use(cors())
app.use(
  multer({
    dest: './uploads/',
    rename: (fieldname, filename) => {
      return filename
    }
  })
)
app.use(express.json())
app.use(express.static('../app/build'))

app.use(notFound)

app.use(handleErrors)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
