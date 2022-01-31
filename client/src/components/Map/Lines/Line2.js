import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Line2 = () => {
  const history = [0, 0];

  const trains = useSelector((state) => state.trains);
  var animation4, animation5, line_2;

  for (var i = 0; i < trains.length; i++) {
    console.log(trains[4].data);
    animation4 = Object.keys(trains[4].data)[trains[4].current];
    animation5 = Object.keys(trains[5].data)[trains[5].current];
    line_2 = trains[4].data;
  }
  return (
    <>
      <polyline
        class="st1"
        points="1143.6,1394.3 2122.8,1394.3 3093.5,1394.3  "
        id="polyline16"
      />
      <polyline
        xmlns="http://www.w3.org/2000/svg"
        class="st1"
        points="3093.5,1394.3 3168.5,1356.7 3393.8,1169.1 3619,1018.9  "
        id="polyline14"
      />
      <line
        class="st1"
        x1="1144.7"
        y1="1394.3"
        x2="769.3"
        y2="1394.3"
        id="line1239"
      />
      <line
        xmlns="http://www.w3.org/2000/svg"
        class="st1"
        x1="769.3"
        y1="1394.3"
        x2="694.2"
        y2="1431.8"
        id="line616"
      />
      <motion.line
        key={history[-1]}
        id={history[-1]}
        variants={line_2}
        animate={animation4}
        opacity="0.5"
        className="train2"
        x1="-20"
        y1="0"
        x2="20"
        y2="0"
        id="train101"
      />

      <motion.line
        key={history[-1]}
        id={history[-1]}
        variants={line_2}
        animate={animation5}
        opacity="0.5"
        className="train2"
        x1="-20"
        y1="0"
        x2="20"
        y2="0"
        id="train101"
      />

      <circle class="st17" cx="2044.5" cy="1394.3" r="10.7" id="circle745" />
      <circle class="st17" cx="1969.5" cy="1394.3" r="10.7" id="circle747" />
      <circle class="st17" cx="2044.5" cy="1394.3" r="10.7" id="circle749" />
      <circle class="st17" cx="1819.3" cy="1394.3" r="10.7" id="circle751" />
      <circle class="st17" cx="1894.4" cy="1394.3" r="10.7" id="circle753" />
      <circle class="st17" cx="1669.2" cy="1394.3" r="10.7" id="circle755" />
      <circle class="st17" cx="1744.2" cy="1394.3" r="10.7" id="circle757" />
      <circle class="st17" cx="1519" cy="1394.3" r="10.7" id="circle759" />
      <circle class="st17" cx="1594.1" cy="1394.3" r="10.7" id="circle761" />
      <circle class="st17" cx="1293.8" cy="1394.3" r="10.7" id="circle763" />
      <circle class="st17" cx="1443.9" cy="1394.3" r="10.7" id="circle765" />
      <circle class="st17" cx="694.2" cy="1431.8" r="10.7" id="circle767" />
      <circle class="st17" cx="2943.3" cy="1394.3" r="10.7" id="circle769" />
      <circle class="st17" cx="3018.4" cy="1394.3" r="10.7" id="circle771" />
      <circle class="st17" cx="2869.3" cy="1394.3" r="10.7" id="circle773" />
      <circle class="st17" cx="2794.2" cy="1394.3" r="10.7" id="circle775" />
      <circle class="st17" cx="2644.1" cy="1394.3" r="10.7" id="circle777" />
      <circle class="st17" cx="2719.2" cy="1394.3" r="10.7" id="circle779" />
      <circle class="st17" cx="2569" cy="1394.3" r="10.7" id="circle781" />
      <circle class="st17" cx="2418.8" cy="1394.3" r="10.7" id="circle783" />
      <circle class="st17" cx="2493.9" cy="1394.3" r="10.7" id="circle785" />
      <circle class="st17" cx="3093.5" cy="1394.3" r="10.7" id="circle787" />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        class="st17"
        cx="2268.7"
        cy="1394.3"
        r="10.7"
        id="circle807"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        class="st8"
        cx="2118.5"
        cy="1394.3"
        r="13.9"
        id="circle434"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        class="st17"
        cx="1144.7"
        cy="1394.3"
        r="10.7"
        id="circle1245"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        class="st17"
        cx="994.5"
        cy="1394.3"
        r="10.7"
        id="circle1251"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        class="st17"
        cx="769.3"
        cy="1394.3"
        r="10.7"
        id="circle1247"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        class="st17"
        cx="3168.5"
        cy="1356.7"
        r="10.7"
        id="circle843"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        class="st17"
        cx="3393.8"
        cy="1169.1"
        r="10.7"
        id="circle789"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        class="st8"
        cx="3619"
        cy="1018.9"
        r="13.9"
        id="circle2129"
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
    </>
  );
};

export default Line2;
