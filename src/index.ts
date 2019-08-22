import express from 'express'
import { users } from './users'
const app = express()

app.get('/', (req, res) => {
  const user:User = users[0]
  res.send(user)
})

app.listen(3030, () => { console.log('app listening on port 3030') })
