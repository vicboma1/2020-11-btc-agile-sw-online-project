import { useState } from "react";
import PasswordLength from "./PasswordLengthSelector";
import { password } from "./Utils/RandomPassword.tsx";
import { validate } from "./Utils/Validate.tsx";
import { checkSelection } from "./Utils/CheckSelection.tsx";
import { CopyText } from "./Utils/CopyToClipboard";

const PasswordForm = () => {
  const [toShow, setState] = useState("");
  const handleTextarea = (newPassword) => {
    setState(newPassword.join(""));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      length: e.target[0].value,
      uppers: e.target[2].checked,
      lowers: e.target[3].checked,
      numbers: e.target[4].checked,
    };
    handleTextarea(password(data, checkSelection(data), validate));
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit.bind(this)}>
        <div>
          <label htmlFor="passwordLength">Password Length</label>
          <div>
            <PasswordLength />
          </div>
        </div>
        <div>
          <fieldset>
            <legend className="desc">Add security to your password</legend>
            <div>
              <input
              id="upperChecker"
              name="upperChecker"
              type="checkbox"
              value="upper"
              tabIndex="8"
                
              />
              <label htmlFor="upperChecker" className="include">
                Include Uppercase Characters
              </label>
            </div>
            <div>
              <input
                id="lowerChecker"
                name="lowerChecker"
                type="checkbox"
                value="lower"
                tabIndex="8"
              />
              <label htmlFor="lowerChecker" className="include">
                Include Lowercase Characters
              </label>
            </div>
            <div>
              <input
                
                id="numbersChecker"
                name="numbersChecker"
                type="checkbox"
                value="numbers"
                tabIndex="8"
              />
              <label htmlFor="numbersChecker" className="include">
                Include Numbers
              </label>
            </div>
          </fieldset>
        </div>
        <div>
          <label htmlFor="newPassword">
            <strong>Get your password</strong>
          </label>
          <div>
            <textarea
              value={toShow}
              name="newPassword"
              onChange={handleTextarea}
              readOnly
            />
            <CopyText text={toShow} />
          </div>
        </div>
        <div>
          <button type="submit" className="btn-grad">
            Generate password
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordForm;
