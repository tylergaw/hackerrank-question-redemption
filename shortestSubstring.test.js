const shortestSubstring = require("./index");

describe("shortestSubstring", () => {
  it("should be a function", () => {
    expect(typeof shortestSubstring).toBe("function");
  });

  it("should return the correct number", () => {
    expect(shortestSubstring("bba")).toBe(2);
  });

  it("should return the correct number", () => {
    expect(shortestSubstring("bab")).toBe(2);
  });

  it("should return the correct number", () => {
    expect(shortestSubstring("aabceaa")).toBe(4);
  });

  it("should return the correct number", () => {
    expect(shortestSubstring("aabcgeegaabc")).toBe(5);
  });

  it("should return the correct number", () => {
    expect(shortestSubstring("aabcdabcdefefabcd")).toBe(6);
  });
});
