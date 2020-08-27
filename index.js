const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World'))

app.listen(3008)
console.log('server on port: ',3008)