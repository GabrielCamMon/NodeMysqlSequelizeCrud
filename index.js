const express = require('express')

const controllers = require('./controllers')
const app =  express()
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res)=> res.send("Hello"))

app.use('/products',controllers.products);

app.listen(port,()=> console.log(`Listen on port ${port}`))