import React from "react";

const GridSqure = ({ color }) => {
  const classes = `grid-square color-${color}`;
  return <div className={classes}></div>;
};

export default GridSqure;
