import { validate } from "../Validate.tsx";

describe.each([
  [["uppers"], "", false],
  [["lowers"], "", false],
  [["numbers"], "", false],
  [["specialChars"], "", false],
  [["uppers"], "A", true],
  [["lowers"], "a", true],
  [["numbers"], "1", true],
  [["specialChars"], "$", true],
  [["uppers", "lowers"], "Aa", true],
  [["uppers", "numbers"], "A1", true],
  [["uppers", "specialChars"], "A$", true],
  [["lowers", "numbers"], "a1", true],
  [["lowers", "specialChars"], "a$", true],
  [["numbers", "specialChars"], "1$", true],
  [["uppers", "lowers", "numbers"], "Aa1", true],
  [["uppers", "lowers", "specialChars"], "Aa$", true],
  [["uppers", "numbers", "specialChars"], "A1$", true],
  [["lowers", "numbers", "specialChars"], "a1$", true],
  [["uppers", "lowers", "numbers", "specialChars"], "Aa1$", true],
  [["uppers", "lowers", "numbers", "specialChars"], "a1$", false],
  [["uppers", "lowers", "numbers", "specialChars"], "A1$", false],
  [["uppers", "lowers", "numbers", "specialChars"], "Aa1", false],
  [["uppers", "lowers", "numbers", "specialChars"], "Aa$", false],
])(".validate(%o,%s)", (data, password, expected) => {
  test(`returns ${expected}`, () => {
    expect(validate(data, password)).toBe(expected);
  });
});

// test('should ', () => {
//   expect(validate(["uppers","lowers", "numbers", "specialChars"], "Aa1$$")).toBe(true);
// })
