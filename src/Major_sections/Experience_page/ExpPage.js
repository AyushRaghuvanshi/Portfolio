import React from "react";
import Timeline from "./Timeline";
import PropTypes from "prop-types";

function ExpPage(props) {
  return (
    <div className="flex flex-col justify-start items-center h-auto">
      <h2 className="p-14 font-bold text-7xl ">My Journey</h2>
      <Timeline />
    </div>
  );
}

ExpPage.propTypes = {};

export default ExpPage;
