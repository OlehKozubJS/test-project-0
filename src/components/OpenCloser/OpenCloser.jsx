import { useState } from "react";

const OpenCloser = ({ element, elementName }) => {
  const [isElement, setIsElement] = useState(false);

  const openElement = () => {
    setIsElement(true);
  };

  const closeElement = () => {
    setIsElement(false);
  };

  return (
    <div>
      <button onClick={isElement ? closeElement : openElement}>{`${
        isElement ? "Close" : "Open"
      } ${elementName}`}</button>
      {isElement && element}
    </div>
  );
};

export { OpenCloser };
