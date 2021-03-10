import React from 'react'
import { motion, useCycle } from "framer-motion";
import { useSelector } from "react-redux";

const Line4 = () => {
    const history = [0, 0];

    const trains = useSelector((state) => state.trains);
    var animation1, animation2, line_4;
  
    for (var i = 0; i < trains.length; i++) {
      animation1 = Object.keys(trains[0].data)[trains[0].current]
      animation2 = Object.keys(trains[0].data)[trains[1].current]
      line_4 = trains[0].data;
    }

    return (
        <>
            <line
              className="st25"
              x1="2868.2"
              y1="569.5"
              x2="2343.8"
              y2="569.5"
              id="line965"
            />
                        
            <motion.line
              key={history[-1]}
              opacity="0.5"
              className="train4"
              id={history[-1]}
              x1="2325"
              y1="569.5"
              x2="2365"
              y2="569.5"
              variants={line_4}
              animate={animation1}
            />
            <motion.line
              key={history[-1]}
              opacity="0.5"
              className="train4"
              id={history[-1]}
              x1="2325"
              y1="569.5"
              x2="2365"
              y2="569.5"
              variants={line_4}
              animate={animation2}
            />

            <circle
              className="st26"
              cx="2569"
              cy="569.5"
              r="13.9"
              id="circle969"
            />
            <circle
              className="st26"
              cx="2681.6"
              cy="569.5"
              r="13.9"
              id="circle971"
            />
            <circle
              className="st26"
              cx="2794.2"
              cy="569.5"
              r="13.9"
              id="circle973"
            />
            <circle
              className="st17"
              cx="2569"
              cy="569.5"
              r="10.7"
              id="circle975"
            />
            <circle
              className="st17"
              cx="2681.6"
              cy="569.5"
              r="10.7"
              id="circle977"
            />
            <circle
              className="st17"
              cx="2794.2"
              cy="569.5"
              r="10.7"
              id="circle979"
            />
            <circle
              className="st26"
              cx="2868.2"
              cy="569.5"
              r="13.9"
              id="circle2303"
            />
            <circle
              className="st17"
              cx="2868.3"
              cy="569.5"
              r="10.7"
              id="circle2305"
            />

            <circle
              xmlns="http://www.w3.org/2000/svg"
              className="st8"
              cx="2343.8"
              cy="569.5"
              r="13.9"
              id="circle983"
            />
        </>
    )
}

export default Line4
