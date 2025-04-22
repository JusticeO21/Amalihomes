import { isValidEmail } from "./validate-email";

describe("isValidEmail", () => {
  it("should return true for valid email addresses", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user.name@domain.com")).toBe(true);
    expect(isValidEmail("user-name@domain.com")).toBe(true);
    expect(isValidEmail("user_name@domain.com")).toBe(true);
    expect(isValidEmail("user+tag@domain.com")).toBe(true);
    expect(isValidEmail("user123@domain.co.uk")).toBe(true);
  });

  it("should return false for invalid email addresses", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("plaintext")).toBe(false);
    expect(isValidEmail("missing@domain")).toBe(false);
    expect(isValidEmail("@domain.com")).toBe(false);
    expect(isValidEmail("user@.com")).toBe(false);
    expect(isValidEmail("user@domain.")).toBe(false);
    expect(isValidEmail("user name@domain.com")).toBe(false);
    expect(isValidEmail("user@domain@domain.com")).toBe(false);
    expect(isValidEmail("user@domain.c")).toBe(false);
  });

  it("should handle edge cases", () => {
    expect(isValidEmail("a@b.co")).toBe(true);
    expect(isValidEmail('very.unusual."@".unusual.com@example.com')).toBe(false);
    expect(isValidEmail("user@localhost")).toBe(false);
  });
});
