import React from "react";
import PropTypes from "prop-types";

function Circle(props) {
  return (
    <div className=" flex flex-col items-center  justify-center absolute">
      <div className="flex flex-col items-center  justify-center h-80 w-80 rounded-full bg-white">
        <div className="flex flex-col items-start justify-start w-full"><p className="text-2xl font-bold px-4">I am</p></div>
        <p className="text-3xl font-bold">
          <span className="text-5xl font-extrabold text-blue-700 hover:text-black">
            A
          </span>
          <span className="text-blue-700 hover:text-black">y</span>
          <span className="text-blue-700 hover:text-black">u</span>
          <span className="text-blue-700 hover:text-black">s</span>
          <span className="text-blue-700 hover:text-black">h</span>{" "}
          <span className="hover:text-blue-700">R</span>
          <span className="hover:text-blue-700">a</span>
          <span className="hover:text-blue-700">g</span>
          <span className="hover:text-blue-700">h</span>
          <span className="hover:text-blue-700">u</span>
          <span className="hover:text-blue-700">w</span>
          <span className="hover:text-blue-700">a</span>
          <span className="hover:text-blue-700">n</span>
          <span className="hover:text-blue-700">s</span>
          <span className="hover:text-blue-700">h</span>
          <span className="hover:text-blue-700">i</span>
        </p>
      </div>
    </div>
  );
}

Circle.propTypes = {};

export default Circle;
