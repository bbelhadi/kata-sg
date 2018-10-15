module.exports = (Accounts)=> (req, res)=>{
 const {name} = req.params
 const account = Accounts.get(name)
 const {initialAmount, transactions} = account
 const balance = transactions.reduce((acc, transaction)=>{
   return (acc + ((transaction.type === 'debit') ? transaction.value*(-1) : transaction.value))
 }, initialAmount)
 res.send({balance})
}
