import React from "react";
import Project_card from "./Project_card";

function Project(props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="flex text-white text-7xl font-bold p-8">My Projects</h2>
      <div>
        <Project_card />
      </div>
    </div>
  );
}

Project.propTypes = {};

export default Project;
