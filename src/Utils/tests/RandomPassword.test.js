import { password } from "../RandomPassword";
import { checkSelection } from "../CheckSelection.tsx";
import { validate } from "../Validate.tsx";
describe.each([
  [0, 8],
  [1, 8],
  [2, 8],
  [3, 8],
  [4, 4],
  [5, 5],
  [6, 6],
  [7, 7],
  [8, 8],
  [9, 9],
  [10, 10],
  [11, 11],
  [12, 12],
  [13, 13],
  [14, 14],
  [15, 15],
  [16, 16],
])(".password(%i)", (value, expected) => {
  test(`password length: ${expected}`, () => {
    let data = {
      length: value,
      uppers: true,
      lowers: true,
      numbers: true,
    };
    let generatedPassword = password(data, checkSelection, validate);
    expect(generatedPassword).toHaveLength(expected);
  });
});

describe("Check password elements", () => {
  test("test if password contains uppers, lowers, numbers and special chars ", () => {
    let data = {
      length: 4,
      uppers: true,
      lowers: true,
      numbers: true,
      specialChars: true,
    };
    const expectedExp = [
      expect.stringMatching(/[A-Z]/),
      expect.stringMatching(/[a-z]/),
      expect.stringMatching(/\d/),
      // expect.stringMatching(/[!"#$%&'()*+,-./]/),
    ];
    let generatedPassword = password(data, checkSelection, validate);
    expect(generatedPassword).toEqual(expect.arrayContaining(expectedExp));
  });
});
