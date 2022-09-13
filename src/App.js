import "./App.css";
import React from "react";
import Home_page from "./Major_sections/Home_page`";
import ExpPage from "./Major_sections/Experience_page/ExpPage";
import Project from "./Major_sections/Project/Project";
import Footer from "./Major_sections/Footer/footer";

function App() {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <div>
        <Home_page />
      </div>
      <div className="h-auto bg-white pb-20">
        <ExpPage />
      </div>
      <div className="h-auto bg-blue-700">
        <Project />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
