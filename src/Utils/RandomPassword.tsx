export function password(
  options: {
    length: number;
    uppers: boolean;
    lowers: boolean;
    numbers: boolean;
  },
  checkSelection: string[],
  validate: (options: string[], password: string) => boolean
) {
  if (options.length < 4) {
    options.length = 8;
  }
  const data = [
    [26, 65],
    [26, 97],
    [10, 48],
    [14, 33],
  ];
  let passwordElements: string[] = [];
  checkSelection.forEach((value: string) => {
    let key: number = 0;
    switch (value) {
      case "uppers":
        key = 0;
        break;
      case "lowers":
        key = 1;
        break;
      case "numbers":
        key = 2;
        break;
    }
    const chars = Array.from(Array(data[key][0])).map(
      (e, i) => i + data[key][1]
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
  } while (!validate(checkSelection, newPassword.join("")));
  return newPassword;
}
