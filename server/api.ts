import { Router } from 'express'
import cors from 'cors'

const api = Router()
api.use(cors())

api.get('/', (req, res) => {
  res.send({
    message: 'Olá!'
  });
})

export default api
