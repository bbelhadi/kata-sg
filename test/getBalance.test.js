const createAccount = require('./../controllers/createAccount')
const addNewTransaction = require('./../controllers/addNewTransaction')
const getBalance = require('./../controllers/getBalance')
const { expect } = require('chai')




describe('BALANCE',()=>{


  it('GET BALANCE WITH CREDIT 10 EUR ( 100 + 10  = 110 EUR )', async ()=>{

    const AccountsTestMap = new Map();
    const transactionValue = 10
    const transactionType = 'credit'

    // CREATE ACCOUNT
    const initialAmount = 100
    const name = 'jhon-doe'
    const fakeReq = {body:{name, amount:initialAmount }}
    const fakeRes = {sendStatus:(statusCode)=>{}, send:(statusCode)=>{}}
    await createAccount(AccountsTestMap)(fakeReq,fakeRes)


    // ADD NEW TRANSACTION
    const fakeReqTransaction = {body:{name, type:transactionType, value:transactionValue }}
    await addNewTransaction(AccountsTestMap)(fakeReqTransaction,fakeRes)
    const accountTransaction = AccountsTestMap.get(name)



    // GET BALANCE
    const fakeReqBalance = {params:{name}}
    const resultBalance = {sendStatus:(statusCode)=>{},send:(res)=>{
        expect(res.balance).to.eql(110)
    }}
    const balanceValue = await getBalance(AccountsTestMap)(fakeReqBalance,resultBalance)


  })


  it('GET BALANCE WITH DEBIT 10 EUR ( 100 - 10  = 90 EUR )', async ()=>{

    const AccountsTestMap = new Map();
    const transactionValue = 10
    const transactionType = 'debit'

    // CREATE ACCOUNT
    const initialAmount = 100
    const name = 'jhon-doe'
    const fakeReq = {body:{name, amount:initialAmount }}
    const fakeRes = {sendStatus:(statusCode)=>{}, send:(statusCode)=>{}}
    await createAccount(AccountsTestMap)(fakeReq,fakeRes)


    // ADD NEW TRANSACTION
    const fakeReqTransaction = {body:{name, type:transactionType, value:transactionValue }}
    await addNewTransaction(AccountsTestMap)(fakeReqTransaction,fakeRes)
    const accountTransaction = AccountsTestMap.get(name)



    // GET BALANCE
    const fakeReqBalance = {params:{name}}
    const resultBalance = {send:(res)=>{
        expect(res.balance).to.eql(90)
    }}
    const balanceValue = await getBalance(AccountsTestMap)(fakeReqBalance,resultBalance)


  })




})
