import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Line1 = () => {
  const history = [0, 0];

  const trains = useSelector((state) => state.trains);
  var animation3, animation4, line_1;

  for (var i = 0; i < trains.length; i++) {
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
      <polyline
        xmlns="http://www.w3.org/2000/svg"
        class="st2-disabled"
        points="2193.6,1394.3 2118.5,1319.2 2118.5,1169.1 1969.5,1018.9 1894.4,719.7 1819.3,569.5  "
        id="polyline18"
      />
      <polyline
        xmlns="http://www.w3.org/2000/svg"
        class="st2-disabled"
        points="1819.3,569.5 1669.2,494.4 1594.1,419.4 1443.9,306.7 1293.8,194.1 1293.8,120.1  "
        id="polyline72"
      />

      <motion.line
        key={history[-1]}
        id={history[-1]}
        variants={line_1}
        animate={animation3}
        opacity="0.5"
        className="train1"
        x1="0"
        y1="-20"
        x2="0"
        y2="20"
        id="train101"
      />

      <motion.line
        key={history[-1]}
        id={history[-1]}
        variants={line_1}
        animate={animation4}
        opacity="0.5"
        className="train1"
        x1="0"
        y1="-20"
        x2="0"
        y2="20"
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
      <circle class="st16" cx="1293.8" cy="120.1" r="10.7" id="circle721" />
      <circle class="st16" cx="1293.8" cy="194.1" r="10.7" id="circle723" />
      <circle class="st16" cx="1394.6" cy="269.2" r="10.7" id="circle725" />
      <circle class="st16" cx="1494.3" cy="344.3" r="10.7" id="circle727" />
      <circle class="st16" cx="1669.2" cy="494.4" r="10.7" id="circle729" />
      <circle class="st17" cx="1819.3" cy="569.5" r="10.7" id="circle731" />
      <circle class="st17" cx="1894.4" cy="719.7" r="10.7" id="circle733" />
      <circle class="st17" cx="1912.6" cy="794.7" r="10.7" id="circle735" />
      <circle class="st17" cx="1931.9" cy="869.8" r="10.7" id="circle737" />
      <circle class="st17" cx="1950.2" cy="944.9" r="10.7" id="circle739" />
      <circle class="st17" cx="2118.5" cy="1169.1" r="10.7" id="circle741" />
      <circle class="st17" cx="2118.5" cy="1244.1" r="10.7" id="circle743" />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        class="st17"
        cx="1969.5"
        cy="1018.9"
        r="10.7"
        id="circle895"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        class="st17"
        cx="2118.5"
        cy="1319.2"
        r="10.7"
        id="circle432"
      />
      <circle
        xmlns="http://www.w3.org/2000/svg"
        class="st17"
        cx="1594.1"
        cy="419.4"
        r="10.7"
        id="circle1064"
      />
    </>
  );
};

export default Line1;
