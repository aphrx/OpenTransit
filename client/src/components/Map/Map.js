import React, { useRef, useEffect } from "react";
import "./Map.css";
import { motion, useCycle } from "framer-motion";
import { useSelector } from "react-redux";

import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";
import Line4 from "./Lines/Line4";
import Line1 from "./Lines/Line1";
import Line2 from "./Lines/Line2";
import Line3 from "./Lines/Line3";

const Map = () => {
  const Viewer = useRef(null);

  useEffect(() => {
    Viewer.current.fitToViewer();
  }, []);

  return (
    <div className="container">
      <UncontrolledReactSVGPanZoom
        ref={Viewer}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={(event) =>
          console.log("click", event.x, event.y, event.originalEvent)
        }
      >
        <motion.svg
          width={window.innerWidth}
          height={window.innerHeight}
          id="map"
          x="0px"
          y="0px"
          viewBox="0 0 4650 2100"
        >
          <metadata
            pagecolor="#ffffff"
            objecttolerance="10"
            gridtolerance="10"
            guidetolerance="10"
            id="namedview2312"
            showgrid="false"
          />
          <g className="viewport" id="map-layer">
          <Line1 />
          <Line2 />
          <Line3 />
          <Line4 />
            
          </g>
        </motion.svg>
      </UncontrolledReactSVGPanZoom>
    </div>
  );
};

export default Map;
