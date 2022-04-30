const mongoose = require('mongoose')

const { MONGO_DB_URI, MONGO_DB_URI_DEV, NODE_ENV } = process.env

const connectionString = NODE_ENV === 'dev'
  ? MONGO_DB_URI_DEV
  : MONGO_DB_URI

console.log(connectionString)

if (!connectionString) {
  console.error('Recuerda que tienes que tener un archivo .env con las variables de entorno definidas y el MONGO_DB_URI que servirá de connection string.')
}

// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// })
mongoose.connect(connectionString)
  .then(() => {
    console.log('Database connected')
  }).catch(err => {
    console.error(err)
  })

process.on('uncaughtException', error => {
  console.error(error)
  mongoose.disconnect()
})
