const express = require('express')
const router = express.Router()
// Require controller modules.
const todoRouter = require('./todos')


router.use('/todos', todoRouter)

module.exports = router