import React, { useEffect } from "react";
import { loadModules } from "esri-loader";

const ArcMapComponent = () => {
  useEffect(() => {
    let view;
    loadModules(["esri/views/MapView"]);
  });
  return <div></div>;
};

export default ArcMapComponent;
