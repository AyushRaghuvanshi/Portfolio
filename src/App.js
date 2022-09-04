import "./App.css";
import React from "react";
import Home_page from "./Major_sections/Home_page`";
import ExpPage from "./Major_sections/Experience_page/ExpPage";
import Project from "./Major_sections/Project/Project";

function App() {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <div >
        <Home_page />
      </div>

      <div className="h-auto  bg-white pb-20">
        <ExpPage />
      </div>

      <div className="h-screen bg-blue-700">
          <Project />
      </div>

    </div>
  );
}

export default App;
