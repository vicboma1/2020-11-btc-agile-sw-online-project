// export function validate(options, password) {
//   let validate = false;
//   if (password.length === 0) {
//     return validate;
//   }
//   for(let value of options)  {
//     if (value === "uppers") {
//       validate = /[A-Z]/.test(password);
//       if (!validate){       
//         break;
//       }
//     }
//     if (value === "lowers") {
//       validate = /[a-z]/.test(password);
//       if (!validate){       
//         break;
//       }
//     }
//     if (value === "numbers") {
//       validate = /\d/.test(password);
//       if (!validate){       
//         break;
//       }
//     }
//     if (value === "specialChars") {
//       validate = /[!"#$%&'()*+,-./]/.test(password);
//       if (!validate){       
//         break;
//       }
//     }
//   };

//   return validate;
// }
