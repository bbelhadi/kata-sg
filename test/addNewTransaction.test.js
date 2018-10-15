const createAccount = require('./../controllers/createAccount')
const addNewTransaction = require('./../controllers/addNewTransaction')
const { expect } = require('chai')




describe('TRANSACTIONS',()=>{


  it('Should add new transaction type "credit" +100 EUR', async ()=>{

    const AccountsTestMap = new Map();
    const transactionValue = 100
    const transactionType = 'credit'

    // CREATE ACCOUNT
    const initialAmount = 700
    const name = 'jhon-doe'
    const fakeReq = {body:{name, amount:initialAmount }}
    const fakeRes = {send:(statusCode)=>{}, sendStatus:(statusCode)=>{}}
    await createAccount(AccountsTestMap)(fakeReq,fakeRes)



    // ADD NEW TRANSACTION
    const fakeReqTransaction = {body:{name, type:transactionType, value:transactionValue }}
    await addNewTransaction(AccountsTestMap)(fakeReqTransaction,fakeRes)
    const accountTransaction = AccountsTestMap.get(name)



    expect(accountTransaction.initialAmount).to.eql(initialAmount)
    expect(accountTransaction.transactions.length).to.eql(1)
    expect(accountTransaction.transactions[0].type).to.eql(transactionType)
    expect(accountTransaction.transactions[0].value).to.eql(transactionValue)
  })



  it('Should add new transaction type "debit" +100 EUR', async ()=>{

    const AccountsTestMap = new Map();
    const transactionValue = 100
    const transactionType = 'debit'

    // CREATE ACCOUNT
    const initialAmount = 700
    const name = 'jhon-doe'
    const fakeReq = {body:{name, amount:initialAmount }}
    const fakeRes = {send:(statusCode)=>{}, sendStatus:(statusCode)=>{}}
    await createAccount(AccountsTestMap)(fakeReq,fakeRes)



    // ADD NEW TRANSACTION
    const fakeReqTransaction = {body:{name, type:transactionType, value:transactionValue }}
    await addNewTransaction(AccountsTestMap)(fakeReqTransaction,fakeRes)
    const accountTransaction = AccountsTestMap.get(name)



    expect(accountTransaction.initialAmount).to.eql(initialAmount)
    expect(accountTransaction.transactions.length).to.eql(1)
    expect(accountTransaction.transactions[0].type).to.eql(transactionType)
    expect(accountTransaction.transactions[0].value).to.eql(transactionValue)
  })




})
