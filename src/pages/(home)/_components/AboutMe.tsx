import React from "react";

import doodleItems from "@/assets/doodle-items.png";
import personTwo from "@/assets/person-two.png";

export const AboutMe = () => {
  const age = new Date().getFullYear() - 2004;

  return (
    <div
      className="grid h-screen grid-cols-1 md:h-[80vh] md:grid-cols-2"
      id="#about"
    >
      <div className="flex flex-col justify-center gap-3">
        <h1 className="text-5xl font-bold md:text-6xl">
          <span>About</span> <span className="colored">me</span>
        </h1>
        <p className="max-w-md text-lg font-bold md:text-xl">
          Hi, I am Halil Aydın {age} Im years old. I am focused on full-stack
          development and I am passionate about creating beautiful and
          functional web applications. I graduated from high school in 2022 and
          I am currently studying English language and literature at university.
          I am coding since 2022 and I have been working as a freelancer since
          then. I am a self-taught developer and I am always looking for new
          things to learn. I am a quick learner and very adaptable. I am a team
          player and I am always ready to help my my teammates. I do not any
          experience in a company but I have worked on many projects. I have
          experience in React, NodeJS, ExpressJS, MongoDB, TailwindCSS, Docker,
          Nestjs AWS, and many more. I am always looking for new opportunities
          to learn and grow.
        </p>
      </div>
      <div className="grid place-items-center" style={aboutMeBgStyle}>
        <div
          className="h-72 w-72 md:h-96 md:w-96"
          style={aboutMePersonStyle}
        ></div>
      </div>
    </div>
  );
};

const aboutMeBgStyle: React.CSSProperties = {
  backgroundImage: `url(${doodleItems})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

const aboutMePersonStyle: React.CSSProperties = {
  backgroundImage: `url(${personTwo})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};
