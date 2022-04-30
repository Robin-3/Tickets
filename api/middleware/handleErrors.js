const ERROR_HANDLERS = {
  defaultError: (res, { name, message }) => {
    console.error({ name, message })
    res.status(500).end()
  }
}

module.exports = (error, request, response, next) => {
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError
  handler(response, error)
}
