import React from "react";
import "./Home_page.css";
import Circle from "./Home_page/Circle";
import Techstack from "./Home_page/Techstack";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

function Home_page(props) {
  const [ishovered, setishovered] = useState(false);
  const style = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(359deg)" },
    config: { duration: 10000 },
    loop: true,
    pause: ishovered,
  });
  return (
    <div className="flex flex-col bg-blue-700 h-screen  w-auto m-0 items-center justify-center relative">
      <animated.div
        style={style}
        onMouseEnter={() => setishovered(true)}
        onMouseLeave={() => setishovered(false)}
        className=" h-[500px] w-[500px] rounded-full"
      >
        <Techstack name="flutter.png" num="11" index="0" hov={ishovered} />
        <Techstack name="firebase.png" num="11" index="1" hov={ishovered} />
        <Techstack name="dart.png" num="11" index="2" hov={ishovered} />
        <Techstack name="android.png" num="11" index="3" hov={ishovered} />
        <Techstack name="html.png" num="11" index="4" hov={ishovered} />
        <Techstack name="css-3.png" num="11" index="5" hov={ishovered} />
        <Techstack name="javascript.png" num="11" index="6" hov={ishovered} />
        <Techstack name="react.png" num="11" index="7" hov={ishovered} />
        <Techstack name="tailwind.png" num="11" index="8" hov={ishovered} />
        <Techstack name="c++.png" num="11" index="9" hov={ishovered} />
        <Techstack name="python.png" num="11" index="10" hov={ishovered} />
      </animated.div>
              <Circle />
      
    </div>
  );
}

Home_page.propTypes = {};

export default Home_page;
