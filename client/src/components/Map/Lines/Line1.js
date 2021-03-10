import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Line1 = () => {
  const history = [0, 0];

  const trains = useSelector((state) => state.trains);
  var animation3, animation4, line_1;

  for(var i = 0; i < trains.length; i++){
    animation3 = Object.keys(trains[2].data)[trains[2].current];
    animation4 = Object.keys(trains[3].data)[trains[3].current];
  line_1 = trains[2].data;
  }

  return (
    <>
      <line
        className="st5"
        x1="2343.8"
        y1="419.4"
        x2="2343.8"
        y2="1769.7"
        id="path24"
      />
      <line
        className="st5"
        x1="2193.6"
        y1="1394.3"
        x2="2193.6"
        y2="1769.7"
        id="path24"
      />
      <circle
        id="low"
        r="75"
        cx="2268"
        cy="1769"
        stroke="#ffcc29"
        strokeWidth="30"
        strokeDasharray="230, 600"
        fill="none"
      />

      <motion.line
        key={history[-1]}
        id={history[-1]}
        variants={line_1}
        animate={animation3}
        opacity="0.5"
        className="train1"
        x1="2343"
        y1="399"
        x2="2343"
        y2="439"
        id="train101"
      />

      <motion.line
        key={history[-1]}
        id={history[-1]}
        variants={line_1}
        animate={animation4}
        opacity="0.5"
        className="train1"
        x1="2343"
        y1="399"
        x2="2343"
        y2="439"
        id="train101"
      />

      <circle
        xmlns="http://www.w3.org/2000/svg"
        className="st8"
        cx="2343.8"
        cy="569.5"
        r="13.9"
        id="circle983"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        className="st8"
        cx="2343.8"
        cy="1018.9"
        r="13.9"
        id="circle893"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        className="st8"
        cx="2343.8"
        cy="1394.3"
        r="13.9"
        id="circle534"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        className="st8"
        cx="2193.6"
        cy="1394.3"
        r="13.9"
        id="circle536"
      />
      <circle className="st17" cx="2343.8" cy="419.4" r="10.7" id="circle791" />
      <circle className="st17" cx="2343.8" cy="494.4" r="10.7" id="circle793" />
      <circle className="st17" cx="2343.8" cy="719.7" r="10.7" id="circle795" />
      <circle className="st17" cx="2343.8" cy="869.8" r="10.7" id="circle797" />
      <circle className="st17" cx="2343.8" cy="1094" r="10.7" id="circle799" />
      <circle
        className="st17"
        cx="2343.8"
        cy="1169.1"
        r="10.7"
        id="circle801"
      />
      <circle
        className="st17"
        cx="2343.8"
        cy="1244.1"
        r="10.7"
        id="circle803"
      />
      <circle
        className="st17"
        cx="2343.8"
        cy="1319.2"
        r="10.7"
        id="circle805"
      />
      <circle
        className="st17"
        cx="2193.6"
        cy="1469.4"
        r="10.7"
        id="circle809"
      />
      <circle
        className="st17"
        cx="2343.8"
        cy="1469.4"
        r="10.7"
        id="circle811"
      />
      <circle
        className="st17"
        cx="2193.6"
        cy="1544.4"
        r="10.7"
        id="circle813"
      />
      <circle
        className="st17"
        cx="2343.8"
        cy="1544.4"
        r="10.7"
        id="circle815"
      />
      <circle
        className="st17"
        cx="2193.6"
        cy="1619.5"
        r="10.7"
        id="circle817"
      />
      <circle
        className="st17"
        cx="2343.8"
        cy="1619.5"
        r="10.7"
        id="circle819"
      />
      <circle
        className="st17"
        cx="2193.6"
        cy="1694.6"
        r="10.7"
        id="circle821"
      />
      <circle
        className="st17"
        cx="2343.8"
        cy="1694.6"
        r="10.7"
        id="circle823"
      />
      <circle
        className="st17"
        cx="2193.6"
        cy="1769.7"
        r="10.7"
        id="circle825"
      />
      <circle
        className="st17"
        cx="2343.8"
        cy="1769.7"
        r="10.7"
        id="circle827"
      />
      <circle
        className="st17"
        cx="2268.7"
        cy="1844.7"
        r="10.7"
        id="circle829"
      />
    </>
  );
};

export default Line1;
