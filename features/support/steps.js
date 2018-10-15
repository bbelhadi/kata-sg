const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const axios = require('axios')


Given('an existing client named {string} with {int} EUR in his account', async function (name,amount){
  this.setAccountHolder(name) // Save name of account in context
  await axios.post('http://localhost:3000/create-account',{name,amount})
})


Given('the account of {string} has {int} EUR', async function (name,expectedAmount){
  const response = await axios.get(`http://localhost:3000/get-account/${name}`)
  const amount = response.data.initialAmount
  expect(expectedAmount).to.eql(amount)
})

When('he withdraws {int} EUR from his account', async function (value){
  const name = this.getAccountHolder() // get name of account from this context
  await axios.post('http://localhost:3000/add-transaction',{name, value, type:'debit' })
})

Then('the new balance is {int} EUR', async function (expectedBalance){
  const name = this.getAccountHolder()
  const response = await axios.get(`http://localhost:3000/get-balance/${name}`)
  const {balance} = response.data
  expect(expectedBalance).to.eql(balance)
})
