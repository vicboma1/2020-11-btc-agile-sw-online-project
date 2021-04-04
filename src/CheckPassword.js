import { useState } from "react";
import { moveProgressBar } from "./Utils/MoveProgressBar";
import { setAlertValues } from "./Utils/SetAlertValues";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAstronaut,
  faRocket,
  faExclamationCircle,
  faRadiationAlt,
  faBomb,
  faSatelliteDish,
  faPoo,
  faTeethOpen,
  faGrinBeam,
  faSmileWink,
  faJedi,
  faCat,
} from "@fortawesome/free-solid-svg-icons";

const CheckPassword = () => {
  const defaulTitle = "Password evaluation";
  const defaulText = "Nothing yet";
  const defaulTimeText = "Your password can be cracked in ";
  const [toCheck, setState] = useState("");
  const [icon, setIcon] = useState(faSatelliteDish);
  const [messageIcon, setMessageIcon] = useState(faCat);
  const [title, setTitle] = useState(defaulTitle);
  const [text, setText] = useState(defaulText);
  const [time, setTime] = useState("");
  const [timeText, setTimeText] = useState("");
  const [style, setStyle] = useState("");

  const statusIcons = [
    faBomb,
    faRadiationAlt,
    faExclamationCircle,
    faRocket,
    faUserAstronaut,
  ];
  const messageStatusIcons = [
    faPoo,
    faTeethOpen,
    faGrinBeam,
    faSmileWink,
    faJedi,
  ];
  const data = setAlertValues();

  const zxcvbn = require("zxcvbn");

  const handleChange = (e) => {
    setState(e.target.value);
    const evaluation = zxcvbn(e.target.value);
    moveProgressBar(evaluation.score, e.target.value, data.statusClasses);
    if (e.target.value !== "") {
      setIcon(statusIcons[evaluation.score]);
      setStyle(data.statusClasses[evaluation.score]);
      setTitle(data.statusTitle[evaluation.score]);
      setText(data.statusText[evaluation.score]);
      setTime(evaluation.crack_times_display.online_throttling_100_per_hour);
      setTimeText(defaulTimeText);
      setMessageIcon(messageStatusIcons[evaluation.score]);
    } else {
      setIcon(faSatelliteDish);
      setStyle("");
      setTitle(defaulTitle);
      setText(defaulText);
      setTime("");
      setTimeText("");
      setMessageIcon(faCat);
    }
  };
  return (
    <div className="home">
      <div className="formContainer">
        <form>
          <div id="check">
            <div>
              <fieldset className="title">
                <legend className="desc">Type or paste your password</legend>
                <label htmlFor="checkPassword" className="include"></label>
              </fieldset>
            </div>
            <div>
              <input
                type="text"
                name="checkPassword"
                maxLength="50"
                value={toCheck}
                onChange={handleChange}
              />
            </div>
          </div>
          <div id="result">
            <div>
              <div className="" id="strength"></div>
            </div>
          </div>
          <div id="alert">
            <div>
              <h4 className={style}>
                <FontAwesomeIcon icon={icon} />
                <strong>{title}</strong>
              </h4>
              <div>
                <p>
                  {timeText}
                  <span className={style}>{time}</span>
                </p>
                <p>
                  <span className={style}>
                    <FontAwesomeIcon icon={messageIcon} />
                  </span>
                  {text}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckPassword;
