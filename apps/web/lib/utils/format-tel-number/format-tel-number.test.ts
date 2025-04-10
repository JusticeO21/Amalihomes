import { formatPhoneNumber } from "./format-tel-number";

describe("formatPhoneNumber", () => {
  test("formats number with country code and plus sign", () => {
    expect(formatPhoneNumber("+48545447189")).toBe("+48 545 447 189");
  });

  test("formats number with country code without plus sign", () => {
    expect(formatPhoneNumber("48545447189")).toBe("48 545 447 189");
  });

  test("formats number without country code (9 digits)", () => {
    expect(formatPhoneNumber("545447189")).toBe("545 447 189");
  });

  test("formats number with special characters", () => {
    expect(formatPhoneNumber("+48 (545) 447-189")).toBe("+48 545 447 189");
  });

  test("formats number with dots as separators", () => {
    expect(formatPhoneNumber("+48.545.447.189")).toBe("+48 545 447 189");
  });

  test("returns empty string for empty input", () => {
    expect(formatPhoneNumber("")).toBe("");
  });

  test("returns empty string for non-numeric input", () => {
    expect(formatPhoneNumber("()")).toBe("");
  });

  test("returns empty string for plus sign only", () => {
    expect(formatPhoneNumber("+")).toBe("");
  });

  test("formats number with longer country code", () => {
    expect(formatPhoneNumber("+123545447189")).toBe("+123 545 447 189");
  });

  test("formats number with less than 9 digits", () => {
    expect(formatPhoneNumber("12345")).toBe("123 45");
  });

  test("formats number with exactly 9 digits", () => {
    expect(formatPhoneNumber("123456789")).toBe("123 456 789");
  });

  test("formats number with country code and 9 digits", () => {
    expect(formatPhoneNumber("1123456789")).toBe("1 123 456 789");
  });

  test("formats number with country code and very long number", () => {
    expect(formatPhoneNumber("+123456789123456")).toBe("+123456 789 123 456");
  });
});
