const bodyParser = require('body-parser')
const notas = require('./notasRoute')
const infos = require('./infosRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        notas,
        infos
    )
}