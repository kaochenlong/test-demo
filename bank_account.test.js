const BankAccount = require("./bank_account")

// BDD - Behavior-Driven Development
describe("存錢功能", () => {
  it("可以存錢", () => {
    let bankAccount = new BankAccount(10)
    bankAccount.deposit(5)
    expect(bankAccount.balance).toBe(15)
  })

  it("不可以存 0 元或是小於 0 元的金額", () => {
    let bankAccount = new BankAccount(10)
    bankAccount.deposit(-5)
    expect(bankAccount.balance).toBe(10)
  })
})

describe("領錢功能", () => {
  it("可以領錢", () => {
    // test case
    let bankAccount = new BankAccount(10)

    let amount = bankAccount.withdraw(6)

    expect(bankAccount.balance).toBe(4)
    expect(amount).toBe(6)
  })

  it("不能領 0 元或是小於 0 元的金額", () => {
    let bankAccount = new BankAccount(10)

    let amount = bankAccount.withdraw(-5)

    expect(bankAccount.balance).toBe(10)
    expect(amount).toBe(0)
  })

  it("不能領超過本身餘額", () => {
    let bankAccount = new BankAccount(10)

    let amount = bankAccount.withdraw(20)

    expect(bankAccount.balance).toBe(10)
    expect(amount).toBe(0)
  })
})
