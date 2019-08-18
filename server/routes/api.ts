import { Router } from 'express'

const api = Router()

api.get('/', (req, res) => {
  res.send('Olá!');
})

export default api
