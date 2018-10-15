const createAccount = require('./../controllers/createAccount')
const { expect } = require('chai')


const AccountsTestMap = new Map();

describe('ACCOUNT',()=>{

  it('Should create a new account for John-Doe with initialAmount +100 EUR', async ()=>{

    const fakeReq = {body:{name:'jhon-doe', amount:100, devise: 'EUR'}}
    const fakeRes = {sendStatus:(statusCode)=> expect(200).to.eql(statusCode) }
    await createAccount(AccountsTestMap)(fakeReq,fakeRes)

    const expectedName = AccountsTestMap.keys().next().value
    const expectedAccount = AccountsTestMap.get(fakeReq.body.name)

    expect(expectedName).to.eql(fakeReq.body.name)
    expect(expectedAccount.initialAmount).to.eql(fakeReq.body.amount)
    expect(expectedAccount.transactions.length).to.eql(0)

  })


  it('Should create a new account for John-Doe with initialAmount -100 EUR', async ()=>{

    const AccountsNewsTestMap = new Map();
    const fakeReq = {body:{name:'jhon-doe', amount: -100 , devise: 'EUR' }}
    const fakeRes = {sendStatus:(statusCode)=> expect(400).to.eql(statusCode) }
    const account = await createAccount(AccountsNewsTestMap)(fakeReq,fakeRes)

    const expectedCreateAccount =  AccountsTestMap
    const expectedName = AccountsNewsTestMap.keys().next().value
    const expectedAccount = AccountsNewsTestMap.get(fakeReq.body.name)

    expect(AccountsNewsTestMap).to.eql(new Map())
    expect(account).to.eql(undefined)

  })


})
