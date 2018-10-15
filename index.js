//SERVER
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// CONTROLLERS
const createAccount = require('./controllers/createAccount')
const getAccount = require('./controllers/getAccount')
const addNewTransaction = require('./controllers/addNewTransaction')
const getBalance = require('./controllers/getBalance')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/',  (req, res)=>
  res.send('Hello World')
)

//CREATE ACCOUNT
const Accounts = new Map();
app.post('/create-account', createAccount(Accounts))

// GET_ACCOUNT
app.get('/get-account/:name', getAccount(Accounts))

// ADD New Transaction
app.post('/add-transaction', addNewTransaction(Accounts))

// GET_BALANCE
app.get('/get-balance/:name', getBalance(Accounts))


app.listen(port, ()=>console.log(`[SERVER_STARTED] SMALL API 😉 has started on port : "${port}" - http://localhost:${port}`))
