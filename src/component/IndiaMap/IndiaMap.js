/* eslint-disable */
import React from "react";
import { VectorMap } from "react-jvectormap";
import './IndiaMap.css'

const IndiaMap = () => {
  return (
    <div className="india">
      <VectorMap
        map={"in_mill"}
        backgroundColor="transparent"
        containerStyle={{
          height: "200px"
          }}
     />
  </div>
  );
};
export default IndiaMap;