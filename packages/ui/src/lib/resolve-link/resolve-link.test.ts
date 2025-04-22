import { resolveLink } from "./resolve-link";

describe("resolveLink", () => {
  it('should return "/" when href is "home"', () => {
    expect(resolveLink("home")).toBe("/");
  });

  it('should prepend "/" to any other href value', () => {
    expect(resolveLink("about")).toBe("/about");
    expect(resolveLink("contact")).toBe("/contact");
    expect(resolveLink("products")).toBe("/products");
  });

  it("should handle empty string", () => {
    expect(resolveLink("")).toBe("/");
  });

  it("should handle hrefs that already have a leading slash", () => {
    expect(resolveLink("/about")).toBe("//about");
  });
});
