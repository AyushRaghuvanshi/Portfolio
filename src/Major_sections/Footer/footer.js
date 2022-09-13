import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <div className="bg-black h-auto flex flex-col">
      <div className="p-4 items-center justify-center flex">
        <a
          className="text-white"
          href="https://www.codechef.com/users/hash0308"
        >
          CodeChef
        </a>
      </div>
      <div className="p-4 items-center justify-center flex">
        <a
          className="text-white"
          href="https://leetcode.com/ayushraghuvanshi03/"
        >
          LeetCode
        </a>
      </div>
      <div className="p-4 items-center justify-center flex">
        <a className="text-white" href="https://www.instagram.com/ayushrag03/">
          Instagram
        </a>
      </div>
      <div className="p-4 items-center justify-center flex">
        <a
          className="text-white"
          href="https://www.linkedin.com/in/ayush-raghuwanshi-240bb7217/"
        >
          LinkedIn
        </a>
      </div>
      <div className="p-4 items-center justify-center flex">
        <a className="text-white" href="https://ayushraghuwanshi.hashnode.dev/">
          My Blog
        </a>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
