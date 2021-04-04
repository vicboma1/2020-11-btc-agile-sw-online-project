import { checkSelection } from "../CheckSelection.tsx";
describe.each([
  [
    { uppers: false, lowers: false, numbers: false, specialChars: false },
    ["lowers"],
  ],
  [
    { uppers: true, lowers: false, numbers: false, specialChars: false },
    ["uppers"],
  ],
  [
    { uppers: false, lowers: true, numbers: false, specialChars: false },
    ["lowers"],
  ],
  [
    { uppers: false, lowers: false, numbers: true, specialChars: false },
    ["numbers"],
  ],
  [
    { uppers: false, lowers: false, numbers: false, specialChars: true },
    ["specialChars"],
  ],
  [
    { uppers: true, lowers: true, numbers: false, specialChars: false },
    ["uppers", "lowers"],
  ],
  [
    { uppers: true, lowers: false, numbers: true, specialChars: false },
    ["uppers", "numbers"],
  ],
  [
    { uppers: true, lowers: false, numbers: false, specialChars: true },
    ["uppers", "specialChars"],
  ],
  [
    { uppers: false, lowers: true, numbers: true, specialChars: false },
    ["lowers", "numbers"],
  ],
  [
    { uppers: false, lowers: true, numbers: false, specialChars: true },
    ["lowers", "specialChars"],
  ],
  [
    { uppers: false, lowers: false, numbers: true, specialChars: true },
    ["numbers", "specialChars"],
  ],
  [
    { uppers: true, lowers: false, numbers: true, specialChars: true },
    ["uppers", "numbers", "specialChars"],
  ],
  [
    { uppers: true, lowers: true, numbers: false, specialChars: true },
    ["uppers", "lowers", "specialChars"],
  ],
  [
    { uppers: true, lowers: true, numbers: true, specialChars: false },
    ["uppers", "lowers", "numbers"],
  ],
  [
    { uppers: false, lowers: true, numbers: true, specialChars: true },
    ["lowers", "numbers", "specialChars"],
  ], 
  [
    { uppers: true, lowers: true, numbers: true, specialChars: true },
    ["uppers", "lowers", "numbers", "specialChars"],
  ],
])(".checkSelection(%j)", (data, expected) => {
  test(`returns ${expected}`, () => {
    expect(checkSelection(data)).toStrictEqual(expected);
  });
});
