import express from 'express'
import usersController from '../controllers/usersController'
const router = express.Router()

router.post('/',usersController.addUser)
module.exports = router