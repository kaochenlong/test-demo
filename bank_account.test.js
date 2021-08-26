const BankAccount = require("./bank_account")

describe("存錢功能", () => {
  it("可以存錢", () => {
    // 3A 原則
    // Arrange
    let bankAccount = new BankAccount(10)

    // Act
    bankAccount.deposit(5)

    // Assert
    expect(bankAccount.balance()).toBe(15)
  })
  // 2. 不可以存 0 元或是小於 0 元的金額（越存錢越少！）
})

describe("領錢功能", () => {
  // 3. 可以領錢
  // 4. 不能領 0 元或是小於 0 元的金額（越領錢越多！）
  // 5. 不能領超過本身餘額
})
