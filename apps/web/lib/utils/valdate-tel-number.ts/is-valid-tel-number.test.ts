import { isValidTelNumber } from "./is-valid-tel-number";

describe("isValidTelNumber", () => {
  it("should validate correct Ghana number with plus", () => {
    expect(isValidTelNumber("+233545447189")).toBe(true);
  });

  it("should validate correct Ghana number without plus", () => {
    expect(isValidTelNumber("233545447189")).toBe(true);
  });

  it("should validate local Ghana number", () => {
    expect(isValidTelNumber("0545447189")).toBe(true);
  });

  it("should invalidate too short number", () => {
    expect(isValidTelNumber("123")).toBe(false);
  });

  it("should invalidate number with letters", () => {
    expect(isValidTelNumber("+233ABCDEF12")).toBe(false);
  });

  it("should validate US number", () => {
    expect(isValidTelNumber("+14155552671")).toBe(true);
  });

  it("should invalidate number with special characters", () => {
    expect(isValidTelNumber("+233!545@447#189")).toBe(false);
  });
});
