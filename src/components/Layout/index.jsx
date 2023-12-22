import React, {useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Sidebar from "../Sidebar/index.jsx";
import Home from "../Home";
import Education from "../Eduaction/Education";
import Experience from "../Experience/Experience";
import Skill from "../Skill/Skill";
import Contact from "../Contact/contact";
import Project from "../Project/project.jsx";
import EndingText from "../End/EndingText.jsx";
import "./index.scss";
import "../../index.css";
import "../Sidebar/index.scss"
import Loading from "../Sidebar/Loading.jsx";

const Layout = () => {
  const { ref: myref, inView: myEducationElement } = useInView();
  const { ref: myrefEx, inView: myExperienceElement } = useInView();
  const { ref: myrefSk, inView: mySkillElement } = useInView();
  const { ref: myrefPr, inView: myProjectElement } = useInView();
  const { ref: myrefCo, inView: myContactElement } = useInView();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },4000)
  },[4000])
  
  if (isLoading) {
    return (
      <>
       <Loading/>
      </>
    );
  } else {
    return (
      <>
        <Sidebar />
        <Home />
        <Education ref={myref} inView={myEducationElement} />
        <Experience ref={myrefEx} inView={myExperienceElement} />
        <Skill ref={myrefSk} inView={mySkillElement} />
        <Project ref={myrefPr} inView={myProjectElement} />
        <Contact ref={myrefCo} inView={myContactElement} />
        <EndingText />
      </>
    );
  }
};

export default Layout;
