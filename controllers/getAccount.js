module.exports = (Accounts)=> (req, res)=>{
  res.send( Accounts.get(req.params.name))
}
