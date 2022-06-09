import calculate from "../logic/calculate";

describe("test all the math operation functions", () => {
  test("Use AC button to reset the calculation", () => {
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

  test("Check if minus plus button works properly", () => {
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