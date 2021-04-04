export function checkSelection(options: {
  [key: string]: number | boolean;
}) {
  let toInclude: string[] = [];
  Object.keys(options).forEach(function(value:string)  {
    if (options[value] === true) {
      toInclude.push(value);
    }
  });
  if (toInclude.length === 0) {
    toInclude.push("lowers");
  }
  return toInclude;
}
