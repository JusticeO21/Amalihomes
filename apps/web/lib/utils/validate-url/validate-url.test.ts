import { isValidUrl } from "./validate-url";

describe("isValidUrl", () => {
  it("should return true for valid URLs", () => {
    expect(isValidUrl("https://example.com")).toBe(true);
    expect(isValidUrl("http://example.com")).toBe(true);
    expect(isValidUrl("https://sub.example.com")).toBe(true);
    expect(isValidUrl("http://example.com/path")).toBe(true);
    expect(isValidUrl("https://example.com/path?query=value")).toBe(true);
    expect(isValidUrl("http://example.com:8080")).toBe(true);
    expect(isValidUrl("https://example.co.uk")).toBe(true);
  });

  it("should return false for invalid URLs", () => {
    expect(isValidUrl("")).toBe(false);
    expect(isValidUrl("example.com")).toBe(false);
    expect(isValidUrl("www.example.com")).toBe(false);
    expect(isValidUrl("ftp://example.com")).toBe(false);
    expect(isValidUrl("https://localhost")).toBe(false);
  });

  it("should handle non-string inputs", () => {
    expect(isValidUrl(null as unknown as string)).toBe(false);
    expect(isValidUrl(undefined as unknown as string)).toBe(false);
    expect(isValidUrl(123 as unknown as string)).toBe(false);
    expect(isValidUrl({} as unknown as string)).toBe(false);
    expect(isValidUrl([] as unknown as string)).toBe(false);
  });

  it("should handle unusual but valid URLs", () => {
    expect(isValidUrl("https://a.b")).toBe(true);
    expect(isValidUrl("https://xn--80akhbyknj4f.xn--p1ai")).toBe(true);
    expect(isValidUrl("https://user:pass@example.com")).toBe(true);
    expect(isValidUrl("https://example.com/path/with/emoji/🚀")).toBe(true);
  });
});
