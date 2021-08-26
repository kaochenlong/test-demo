const adder = require("./adder");

describe("about money", () => {
  it("should be 3", () => {
    let result = adder(1, 2);
    expect(result).toBe(3);
  });

  it("should not pass", () => {
    let result = adder(100, 200);
    expect(result).not.toBe(400);
  });
});
