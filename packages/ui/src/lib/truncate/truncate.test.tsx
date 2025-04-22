import { truncateText } from ".";

describe("truncateText", () => {
  it("should truncate text longer than maxLength", () => {
    const text = "Hello World";
    const result = truncateText(text, 5);
    expect(result).toBe("Hello...");
  });

  it("should not truncate text shorter than maxLength", () => {
    const text = "Hello";
    const result = truncateText(text, 10);
    expect(result).toBe("Hello");
  });

  it("should return original input when text is not a string", () => {
    const element = <div>Hello</div>;
    const result = truncateText(element, 5);
    expect(result).toBe(element);
  });

  it("should return original input when maxLength is 0", () => {
    const text = "Hello World";
    const result = truncateText(text, 0);
    expect(result).toBe(text);
  });

  it("should handle empty string", () => {
    const text = "";
    const result = truncateText(text, 5);
    expect(result).toBe("");
  });

  it("should truncate at exact maxLength", () => {
    const text = "Hello World is in the world";
    const result = truncateText(text, 11);
    expect(result).toBe("Hello World...");
  });
});
