import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
const secondBubbles = {}

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
//Cory's initial notes for changes
//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
