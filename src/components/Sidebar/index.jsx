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

  if (isLoading) {
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
              className=" h-20 ssm:h-12 sm:h-[3rem] md:h-[3rem] mx:h-[3.5rem] lg:h-16 xl:h-16 2xl:h-16"
            />
          </div>
          <div className="flex flex-row space-x-3  justify-end  text-2xl subpixel-antialiased font-light tracking-widest sm:items-center sm:bg-sky-300 md:hidden mx:hidden lg:hidden  ssm:hidden	sm:hidden">
            <div className="px-2 pb-1 hover:border-b-2 border-white-500 ">
              <a href="#Home_id ">Home</a>
            </div>
            <div className="px-2 pb-1 hover:border-b-2 border-white-500">
              <a href="#Education_id ">Education</a>
            </div>
            <div className="px-2 pb-1 hover:border-b-2 border-white-500">
              <a href="#Exp_id">Experience</a>
            </div>
            <div className="px-2 pb-1 hover:border-b-2 border-white-500">
              <a href="#Project_id">Project</a>
            </div>
            <div className="px-2 pb-1 hover:border-b-2 border-white-500">
              <a href="#Contact_id">Contact</a>
            </div>
          </div>

          <div className="responsive-btn  xl:hidden 2xl:hidden 3xl:hidden">
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
        </div>


        {/* Responsive */}

        {isOpen === true ? (
          <>
            <div className="nav-bar">
              {/* <Link className='logo' to='/'><div>AviShihora</div></Link> */}
              {/* <div>
              <Link className="logo" to="/">
                <img src={namelogo} alt="" />
              </Link>
            </div> */}
              <nav>
                {/* <div className="nav-part"> */}
                {/* <div className="nav-list"> */}
                {/* <div className='nav-ContentList'> */}
                <NavLink
                  exact="true"
                  activeclassname="active"
                  className=""
                  to="/"
                >
                  <FontAwesomeIcon icon={faHome} color="#ffffff" />
                </NavLink>
                {/* <div>Home</div> */}
                {/* </div> */}

                {/* <div className='nav-ContentList'> */}
                <NavLink
                  exact="true"
                  activeclassname="active"
                  className="about-link"
                  to="/about"
                >
                  <FontAwesomeIcon icon={faUser} color="#ffffff" />
                </NavLink>
                {/* <div>About Me</div> */}
                {/* </div> */}

                {/* <div className='nav-ContentList'> */}
                <NavLink
                  exact="true"
                  activeclassname="active"
                  className="work-link"
                  to="/project"
                >
                  <FontAwesomeIcon icon={faBriefcase} color="#ffffff" />
                </NavLink>
                {/* <div>Project</div> */}
                {/* </div> */}

                {/* <div className='nav-ContentList'> */}
                <NavLink
                  exact="true"
                  activeclassname="active"
                  className="contact-link"
                  to="/contact"
                >
                  <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
                </NavLink>
                {/* <div>Contact</div> */}
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
              </nav>
            </div>
          </>
        ) : null}
      </>
    );
  } else {
    return (
      <>
        <div className="waviy">
          {/* <span style={anime()}>A</span>
          <span style={anime()}>V</span>
          <span style={anime()}>I</span>
          <span style={anime()}>&nbsp;</span>
          <span style={anime()}>S</span>
          <span style={anime()}>H</span>
          <span style={anime()}>I</span>
          <span style={anime()}>H</span>
          <span style={anime()}>O</span>
          <span style={anime()}>R</span>
          <span style={anime()}>A</span> */}
          {/* <span style={{--i:2}}>V</span> */}
          {/* <span style="--i:3">I</span>
          <span style="--i:3">&nbsp;</span>
          <span style="--i:4">S</span>
          <span style="--i:5">H</span>
          <span style="--i:6">I</span>
          <span style="--i:7">H</span>
          <span style="--i:8">O</span>
          <span style="--i:9">R</span>
          <span style="--i:10">A</span> */}
        </div>
      </>
    );
  }
};
// };

export default Sidebar;
