import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { faClone } from "@fortawesome/free-solid-svg-icons";

export function CopyText(text) {
  const [copyAlert, setCopyAlert] = useState('Press "generate password!"');
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onCopyText = (e) => {
    if (e === "") {
      setCopyAlert('Press "generate password!"');
    } else {
      setCopyAlert("Password copied!");
    }
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <CopyToClipboard text={text.text} onCopy={onCopyText}>
      <div className="copy-area">
        <button onClick={handleSubmit}>
          <FontAwesomeIcon icon={faClone}/>
          Hit to copy
        </button>
        <div className="details">
          <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
            {copyAlert}
          </span>
        </div>
      </div>
    </CopyToClipboard>
  );
}
