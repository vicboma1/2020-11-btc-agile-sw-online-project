export function password(options, checkSelection, validate) {
  if (options.length < 4) {
    options.length = 8;
  }
  const data = {
    uppers: {
      length: 26,
      starterCode: 65,
    },
    lowers: {
      length: 26,
      starterCode: 97,
    },
    numbers: {
      length: 10,
      starterCode: 48,
    },
    specialChars: {
      length: 14,
      starterCode: 33,
    },
  };
  let passwordElements = [];
  checkSelection(options).forEach((value) => {
    const chars = Array.from(Array(data[value].length)).map(
      (e, i) => i + data[value].starterCode
    );
    chars.forEach((x) => {
      passwordElements.push(String.fromCharCode(x));
    });
  });
  passwordElements = passwordElements.sort(() => Math.random() - 0.5);
  let newPassword = [];
  do {
    if (newPassword.length > 0) {
      newPassword = [];
    }
    for (let i = 0; i < options.length; i++) {
      newPassword.push(
        passwordElements[Math.floor(Math.random() * passwordElements.length)]
      );
    }
  } while (!validate(checkSelection(options), newPassword));
  return newPassword;
}
