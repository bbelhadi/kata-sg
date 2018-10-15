const createAccount = require('./../controllers/createAccount')
const getAccount = require('./../controllers/getAccount')
const { expect } = require('chai')


const AccountsTestMap = new Map();
const initialAmount = 100
const name = 'jhon-doe'

describe('GET ACCOUNT',()=>{
  it('BEFORE CREATE ACCOUNT name "jhon-doe", with initial amount 100 EUR' , async ()=>{

    // CREATE ACCOUNT
    const fakeReq = {body:{name, amount:initialAmount }}
    const fakeRes = {sendStatus:(statusCode)=>{}}
    await createAccount(AccountsTestMap)(fakeReq,fakeRes)

  })

  it('GET ACCOUNT', async ()=>{

    // GET BALANCE
    const fakeReqGetAccount = {params:{name}}
    const resultGetAccount = {send:(res)=>{
        expect(res.initialAmount).to.eql(initialAmount)
        expect(res.transactions.length).to.eql(0)
    }}

    await getAccount(AccountsTestMap)(fakeReqGetAccount,resultGetAccount)


  })


})
