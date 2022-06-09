import calculate from "../logic/calculate";

describe("test all the math operation functions", () => {
  test("4 + 2 must be equal to 6", () => {
    expect(
      calculate(
        {
          total: 5,
          next: 5,
          operation: null,
        },
        "AC"
      )
    ).toEqual({
      total: 0,
      next: null,
      operation: null,
    });
  });

  test("4 + 2 must be equal to 6", () => {
    expect(
      calculate(
        {
          total: 1,
          next: 1,
          operation: null,
        },
        '+/-'
      )
    ).toEqual({
      total: 1,
      next: "-1",
      operation: null,
    });
  });
});