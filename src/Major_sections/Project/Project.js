import React from "react";
import Project_card from "./Project_card";

function Project(props) {
  var s = [
    "A basic Tribute website on Virat Kohli",
    "A Survey Form for trying out different ways of input in HTML",
    "A Product Description Page",
    "First Personal portfolio",
    "A AI Model to deteck whether people are wearing mask or not",
    "A Web App for tracking you Daily Expense with visual representation",
    "A Basic Documentation Page about JavaScript",
    "An Android app to find charity to donate to",
    "Flutter, Dart, FireBase \n A Complete Social Media App for College Students for each other to interact with",
    "Flutter, Dart, FireBase \n A Quiz App for taking Quizes on Science, Art and Technology, GK",
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="flex text-white text-7xl font-bold p-20">My Projects</h2>
      <div className="grid grid-cols-3 relative">
        <div className="static">
          <Project_card
            name="Tribute Page"
            src="tributePage.png"
            ts="HTML, CSS"
            link="https://codepen.io/hashrag0308/full/jOwPrzE"
            desc={s[0]}
          />
        </div>
        <div className="static">
          <Project_card
            name="Survey Form"
            src="surveyForm.png"
            ts="HTML, CSS"
            desc={s[1]}
            link="https://codepen.io/hashrag0308/full/wveaVaw"
          />
        </div>
        <div className="static">
          <Project_card
            name="Safecrete"
            src="safecrete.png"
            ts="HTML, CSS"
            desc={s[2]}
            link="https://codepen.io/hashrag0308/full/abwNRbV"
          />
        </div>
        <div className="static">
          <Project_card
            name="Portfolio"
            src="portfolio.png"
            ts="HTML, CSS"
            desc={s[3]}
            link="https://codepen.io/hashrag0308/full/VwWKmpd"
          />
        </div>
        <div className="static">
          <Project_card
            name="Mask Detector"
            src="maskDetector.png"
            ts="Python,TensorFlow"
            desc={s[4]}
            link="https://colab.research.google.com/drive/1ecEZx3cH_WFbB4u7pT94NooF0ApRAvPp"
          />
        </div>
        <div className="static">
          <Project_card
            name="Expense Tracker"
            src="expenseTracker.png"
            ts="React Js"
            desc={s[5]}
            link="https://ayushraghuvanshi.github.io/CSI-RENDER/"
          />
        </div>
        <div className="static">
          <Project_card
            name="Documentation"
            src="cheatsheet.png"
            ts="HTML, CSS"
            desc={s[6]}
            link="https://codepen.io/hashrag0308/full/NWgrvmZ"
          />
        </div>
        <div className="static">
          <Project_card
            name="Charity Finder"
            src="charityFinder.png"
            ts="Flutter, Dart, Firebase, CharityFinder API"
            desc={s[7]}
            link="https://github.com/Ayush-Raghuwanshi/Avathon"
          />
        </div>
        <div className="static">
          <Project_card
            name="AKGEC Connect"
            src="flutter.png"
            desc={s[8]}
            ts="Flutter, Dart, FireBase"
            link="https://github.com/AyushRaghuvanshi/AKGEC-Connect"
          />
        </div>
        <div className="static">
          <Project_card
            name="Quiz App"
            src="quiz.png"
            desc={s[9]}
            ts="Flutter, Dart, FireBase"
            link="https://github.com/AyushRaghuvanshi/Quiz-App"
          />
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {};

export default Project;
