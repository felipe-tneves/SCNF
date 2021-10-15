const bodyParser = require('body-parser')
const notas = require('./notasRoute')
const infos = require('./infosRoute')
const transferencias = require('./transferenciasRoute')
const calendarios = require('./calendariosRoute')
const matriculas = require('./matriculasRoute')
const materias = require('./materiasRouter')

module.exports = app => {
    app.use(
        bodyParser.json(),
        notas,
        infos,
        transferencias,
        calendarios,
        matriculas,
        materias
    )
}