const express = require('express')
const router = express.Router()
const todosController = require('../controller/todo_controller')

router.get('/', todosController.getAll)
// Get a specific Todo by its ID
router.get('/:id', todosController.getById)
// Create a new Todo
router.post('/', todosController.create)
// Delete an existing Todo
router.delete('/:id', todosController.delete)

module.exports = router