import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import namelogo from "../../assets/images/AviShihora.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import "../../index.css";
import "./animation.css";

import {
  faBriefcase,
  faEnvelope,
  faHome,
  faUser,
  faScrewdriverWrench,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // function anime() {

  //   // console.log(props);
  //   // getComputedStyle(document.documentElement).getPropertyValue("--i");
  //   // document.documentElement.style.setProperty("--i", "--i:1");

  //   for(let k;k<12;k++){
  //     document.documentElement.style.setProperty("none",`--i:${k}`)
  //   }
  // }
  const toggleClick = () => {
    if (isOpen == false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <div
        className="
        ssm:flex ssm:flex-row ssm:justify-between 
        sm:mx-10 sm:my-4 sm:items-center sm:flex sm:flex-row  sm:justify-between
        md:flex md:flex-row md:justify-between md:items-center md:my-6 md:mx-10
        mx:flex mx:flex-row mx:justify-between mx:items-center mx:mx-12 mx:my-3
        lg:flex lg:flex-row lg:justify-between lg:items-center lg:my-6 lg:mx-10
        xl:flex xl:flex-row xl:justify-around xl:items-center xl:my-6 
        2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center 2xl:my-6 2xl:mx-[10%]
        3xl:flex 3xl:flex-row 3xl:justify-between 3xl:items-center 3xl:my-6 3xl:mx-[10%] 3xl:my-[2rem]"
      >
        <div>
          <img
            src={namelogo}
            alt=""
            className="animate-fade-down animate-ease-in h-20 ssm:h-12 sm:h-[3rem] md:h-[3rem] mx:h-[3.5rem] lg:h-16 xl:h-16 2xl:h-16"
          />
        </div>
        <div className="flex flex-row space-x-3  justify-end  text-2xl subpixel-antialiased font-light tracking-widest sm:items-center sm:bg-sky-300 md:hidden mx:hidden lg:hidden  ssm:hidden	sm:hidden">
          <div className="px-2 pb-1 hover:border-b-2 border-white-500 animate-fade-up animate-ease-in">
            <a href="/">Home</a>
          </div>
          <div className="px-2 pb-1 hover:border-b-2 border-white-500 animate-fade-down animate-ease-in">
            <a href="#Education">Education</a>
          </div>
          <div className="px-2 pb-1 hover:border-b-2 border-white-500 animate-fade-up animate-ease-in">
            <a href="#Experience">Experience</a>
          </div>
          <div className="px-2 pb-1 hover:border-b-2 border-white-500 animate-fade-down animate-ease-in">
            <a href="#Skill">Skill</a>
          </div>
          <div className="px-2 pb-1 hover:border-b-2 border-white-500 animate-fade-up animate-ease-in">
            <a href="#Project">Project</a>
          </div>
          <div className="px-2 pb-1 hover:border-b-2 border-white-500 animate-fade-down animate-ease-in">
            <a href="#Contact">Contact</a>
          </div>
        </div>

        <div
          onClick={toggleClick}
          className="responsive-btn  xl:hidden 2xl:hidden 3xl:hidden"
        >
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {/* Responsive */}

        {isOpen === true ? (
          <>
            <div className="nav-bar">
              <nav>
                <div className="nav-part">
                  <div className="nav-list">
                    <div className="nav-ContentList">
                      {/* <NavLink
                        exact="true"
                        activeclassname="active"
                        className=""
                        to="/"
                      > */}
                      <a href="/" onClick={()=>{setOpen(false)}} >
                        <FontAwesomeIcon icon={faHome} color="#ffffff" />
                      </a>
                      {/* </NavLink> */}
                      {/* <div>Home</div> */}
                    </div>
                    <div className="nav-ContentList">
                      {/* <NavLink
                        exact="true"
                        activeclassname="active"
                        className="education-link"
                        to="Education_id"
                      > */}
                      <a href="#Education" className="education-link" onClick={()=>{setOpen(false)}}>
                        <FontAwesomeIcon
                          icon={faBuildingColumns}
                          color="#ffffff"
                        />
                      </a>
                      {/* </NavLink> */}
                      {/* <div>About Me</div> */}
                    </div>

                    <div className="nav-ContentList">
                      {/* <NavLink
                        exact="true"
                        activeclassname="active"
                        className="skill-link"
                        to="skill_id"
                      > */}
                      <a href="#Skill" className="skill-link" onClick={()=>{setOpen(false)}}>
                        <FontAwesomeIcon
                          icon={faScrewdriverWrench}
                          color="#ffffff"
                        />
                      </a>
                      {/* </NavLink> */}
                    </div>
                    <div className="nav-ContentList">
                      <a href="#Project" className="work-link" onClick={()=>{setOpen(false)}}>
                        <FontAwesomeIcon icon={faBriefcase} color="#ffffff" />
                      </a>
                    </div>

                    {/* <div className="nav-ContentList">
                      <NavLink
                        exact="true"
                        activeclassname="active"
                        className="contact-link"
                        to="#Contact_id"
                      >
                        <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
                      </NavLink>
                    </div> */}

                    <div className="nav-ContentList">
                      {/* <NavLink
                        exact="true"
                        activeclassname="active"
                        className="contact-link"
                        to="#Contact"
                      > */}
                      <a href="#Contact" className="contact-link" onClick={()=>{setOpen(false)}}>
                        <FontAwesomeIcon icon={faUser} color="#ffffff" />
                      </a>
                      {/* </NavLink> */}
                      {/* <div>About Me</div> */}
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

// };

export default Sidebar;
