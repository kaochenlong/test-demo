class BankAccount {
  constructor(initMoney) {
    this.money = initMoney
  }

  deposit(money) {
    if (money > 0) {
      this.money += money
    }
  }

  withdraw(money) {
    if (money > 0 && this.enough(money)) {
      this.money -= money
      return money
    }

    return 0
  }

  get balance() {
    return this.money
  }

  enough(money) {
    return this.money >= money
  }
}

module.exports = BankAccount
