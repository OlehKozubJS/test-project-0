import { useState, useEffect } from "react";

const KeyDownTest = () => {
  const [keyName, setKeyName] = useState("");

  useEffect(() => {
    const handleKeydown = (event) => {
      setKeyName((keyName) => {
        return keyName + event.key;
      });
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return <div>{keyName}</div>;
};

export { KeyDownTest };
