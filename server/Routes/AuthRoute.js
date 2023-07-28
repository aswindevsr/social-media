import express from 'express'
import { loginUser, registerUser } from '../Controller/AuthController.js'

const router = express.Router()

router.post('/register', registerUser)
router.post("/Login", loginUser)

export default router