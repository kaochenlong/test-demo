class BankAccount {
  constructor(m) {
    this.money = m
  }

  deposit(money) {
    this.money += money
  }

  balance() {
    return this.money
  }
}

module.exports = BankAccount
