import React from "react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

function Project_card(props) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div
      className="p-4"
      onMouseEnter={() => {
        set(true);
      }}
      onMouseLeave={() => {
        set(false);
      }}
    >
      <animated.div
        className="h-80 w-80 bg-white grid grid-cols-1 m-4 grid-rows-[80%_20%] rounded-lg cursor-pointer "
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        <div className="flex flex-col ">
          <img
            src={`./assets/projects/${props.src}`}
            className="row-start-1 p-4 block max-h-full max-w-full self-center items-center justify-center"
          ></img>
        </div>
        <h4 className="row-start-2 self-center text-center font-bold text-2xl">
          {props.name}
        </h4>
      </animated.div>
      <animated.div
        className="h-80 w-80 bg-white flex flex-col rounded-lg cursor-pointer"
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
      >
        <p className="font-bold p-4 text-center text-lg">TechStack Used:</p>
        <p className="font-bold pb-[16px] text-center">{props.ts}</p>
        <p className="px-4 text-center">{`${props.desc}`}</p>
        <div className="flex flex-col items-start justify-center ">
          <a
            className="self-center items-center justify-center flex "
            href={props.link }
          >
            <img
              className="w-10 h-10 hover:w-20 hover:h-20"
              src={`./assets/projects/link.png`}
            ></img>
          </a>
        </div>
      </animated.div>
    </div>
  );
}

Project_card.propTypes = {};

export default Project_card;
