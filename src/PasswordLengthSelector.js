import { useState } from "react";

const PasswordLenght = () => {
  //Initial options
  const [defVal, setState] = useState("12");
  const options = [];
  for (let index = 6; index <= 16; index++) {
    options.push(
      <option key={index} value={index}>
        {index}
      </option>
    );
  }

  // Handle selection event
  const handleChange = (e) => {
    const value = e.target.value;
    setState(value);
  };

  return (
    <select value={defVal} onChange={handleChange} name="passwordLength">
      {options}
    </select>
  );
};

export default PasswordLenght;
