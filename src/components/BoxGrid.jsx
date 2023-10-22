import React from "react";
import Box from "./Box";
import "../styles/BoxGrid.css";

const BoxGrid = ({ colors }) => {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<Box colors={colors} />);
  }
  return <div className="BoxGrid">{boxes}</div>;
};

export default BoxGrid;
