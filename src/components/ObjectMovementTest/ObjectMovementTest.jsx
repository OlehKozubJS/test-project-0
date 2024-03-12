import { useState } from "react";

const ObjectMovementTest = () => {
  const [topValue, setTopValue] = useState(50);
  const [leftValue, setLeftValue] = useState(120);

  const handlePurpleDivMousedown = (event) => {
    let newTopValue = event.clientY - event.target.getBoundingClientRect().top;
    let newLeftValue =
      event.clientX - event.target.getBoundingClientRect().left;

    if (event.target !== event.currentTarget) {
      return;
    }

    if (newTopValue > event.target.offsetHeight - 25) {
      newTopValue = event.target.offsetHeight - 25;
    }

    if (newLeftValue > event.target.offsetWidth - 50) {
      newLeftValue = event.target.offsetWidth - 50;
    }

    setTopValue(newTopValue);
    setLeftValue(newLeftValue);
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100px",
        width: "200px",
        backgroundColor: "rgb(120, 100, 250)",
        marginTop: "25px",
      }}
      onMouseDown={handlePurpleDivMousedown}
    >
      <div
        style={{
          position: "absolute",
          top: topValue + "px",
          left: leftValue + "px",
          height: "25px",
          width: "50px",
          backgroundColor: "rgb(150, 100, 250)",
        }}
      ></div>
    </div>
  );
};

export { ObjectMovementTest };
