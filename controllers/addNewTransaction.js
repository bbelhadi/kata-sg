module.exports = (Accounts)=> (req, res)=>{
 const {type,value,name} = req.body
 const account = Accounts.get(name)
 account.transactions.push({type,value})
 res.send(account)
}
