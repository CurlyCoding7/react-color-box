import React, { useState } from "react";
import "../styles/box.css";

const getRandomColor = (colors) => {
  const index = Math.floor(Math.random() * colors.length);
  const randomColor = colors[index];
  return randomColor;
};

const Box = ({ colors }) => {
  const [color, setColor] = useState(getRandomColor(colors));
  const changeColor = () => {
    setColor(getRandomColor(colors));
  };

  return (
    <div
      className="box"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Box;
