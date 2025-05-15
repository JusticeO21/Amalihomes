import { formatCurrency } from "./format-currency";

describe("formatCurrency", () => {
  test("formats currency", () => {
    expect(formatCurrency(100)).toBe("$100.00");
  });
});
