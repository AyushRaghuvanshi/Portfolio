import React from "react";

import { useSpring, animated } from "react-spring";


var x = 0;
var y = 0;
function findpos(num, index) {
  var ang = ((2 * Math.PI) / num) * index;
  x = Math.round(250 - 32 - Math.cos(ang) * 220);
  y = Math.round(250 - 32 - Math.sin(ang) * 220);
}

function Techstack(props) {
 
  var num = parseInt(props.num);
  var index = parseInt(props.index);
  findpos(num, index);
  const style= useSpring({
    from: { transform: "rotate(360deg)" },
    to: { transform: "rotate(0deg)" },
    loop: true,
    pause:props.hov,
    config: { duration: 10000 },
  });
  
  
  return (
    <div className="absolute w-[500px] h-[500px]">
      <div className={` absolute`} style={{ top: `${y}px`, left: `${x}px` }}>
        <animated.div
          style={style}
          
          className={"flex flex-col items-center justify-center bg-white h-16 w-16 left rounded-full"}
        >
          <img src={`./assets/${props.name}`} className={"h-8 w-8" } alt={props.name}/>
        </animated.div>
      </div>
    </div>
  );
}

Techstack.propTypes = {};

export default Techstack;
