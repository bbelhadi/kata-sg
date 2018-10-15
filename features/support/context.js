const { setWorldConstructor } = require('cucumber')

class Context {
  setAccountHolder(name) {
    this.name = name
  }

  getAccountHolder() {
    return this.name
  }

}

setWorldConstructor(Context)
