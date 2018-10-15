module.exports = (Accounts)=>(req, res)=>{
  if(req.body.amount > 0){
    Accounts.set(req.body.name, { initialAmount: req.body.amount,  devise: req.body.devise ||'EUR', transactions:[]})
    res.sendStatus(200)
  }else{
    console.error(`[BAD REQUEST] > initialAmount : "is null or negative amount , account is not create !"`)
    res.sendStatus(400)
  }
}
