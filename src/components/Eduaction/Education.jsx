import React, { useState } from "react";
import { useEffect, useRef } from "react";
import logo from "../../assets/images/PDEU Logo.png";
import schoolLogo from "../../assets/images/ssgv-removebg-preview.png";
import CollageLogo from "../../assets/images/Pandit_Deendayal_Energy_University_logo.png";
import "../../index.css";
import "./Education.scss";
import "../../assets/animation/componentOpeningAni.scss";

const Education = React.forwardRef((props, ref) => {
  //  const myref = useRef();
  //  const [myEducationElement,setMyEducationElement] = useState();
  //  console.log(myEducationElement );
  //  useEffect(() => {
  //    const observer = new IntersectionObserver((entries) => {
  //      const entry = entries[0];
  //       setMyEducationElement(entry.isIntersecting)
  //      console.log("entry", entry);
  //    });
  //    observer.observe(myref.current);
  //  }, []);
  return (
    <>
      <div id="Education" className="3xl:w-[65%] 3xl:mx-auto pt-5 ">
        <div
          className={`Eduaction-part ${
            props.inView ? "active fade-left" : "reveal"
          }`}
          ref={ref}
        >
          <div className=" text-[2.4rem] w-[50%] mx-auto sm:mx-auto sm:mt-2 sm:text-[1.4rem] text-center sm:tracking-[2px] bg-slate-200 text-[#262626] sm:mx-8 sm:py-2 sm:font-medium md:text-[2rem] md:px-6 mx:px-6 md:font-medium md:tracking-wide xl:text-[2rem] 2xl:text-[2rem] 3xl:text-[2rem]	">
            EDUCATION QUALIFICATION
          </div>
          <div
            className="acedamicGrid w-[48rem] sm:w-[80%] sm:mx-auto sm:my-8 md:w-[80%] md:mx-auto md:my-10 mx:mx-auto mx:my-10 mx:w-[80%]
        lg:mx-auto lg:my-10 lg:w-[80%] 
        xl:mx-auto xl:my-10 xl:w-[80%]
        2xl:mx-auto 2xl:my-10 2xl:w-[80%]
        3xl:mx-auto 3xl:my-10 3xl:w-[80%]"
          >
            <div className="schoolGrid flex flex-col">
              <div className="schoolLogo ">
                <img
                  src={schoolLogo}
                  className="sm:h-[6em] md:h-[8em] mx:h-[10em] lg:h-[10em] xl:h-[9.8rem] 2xl:h-[9.8rem] 3xl:h-[9.8rem]"
                ></img>
              </div>
              <div className="schoolName text-center mb-5 xl:text-[2rem]  2xl:text-[2rem] 3xl:text-[2rem]">
                Shree Swaminarayan Gurukul Vidhyalaya, <br />
                Surat, Gujarat.
              </div>
            </div>
          </div>
          <div
            className="acedamicGrid w-[48rem] sm:w-[80%] sm:mx-auto sm:my-8 md:w-[80%] md:mx-auto md:my-10 mx:mx-auto mx:my-10 mx:w-[80%]
         lg:mx-auto lg:my-10 lg:w-[80%]
         xl:mx-auto xl:my-10 xl:w-[80%]
         2xl:mx-auto 2xl:my-10 2xl:w-[80%]
         3xl:mx-auto 3xl:my-10 3xl:w-[80%]"
          >
            <div className="collegeGrid">
              <div className="collegeLogo">
                <img
                  src={logo}
                  className="mx:h-[15%] lg:h-[20%] xl:h-[8rem] 2xl:h-[10rem] 3xl:h-[50%] md:hidden ssm:hidden sm:hidden "
                ></img>
                <img
                  className="sm:h-[6em] md:h-[8em] mx:hidden md:block  lg:hidden xl:hidden 2xl:hidden 3xl:hidden"
                  src={CollageLogo}
                ></img>
              </div>
              <div className="collegeName text-center mb-5 ssm:mx-2  xl:text-[2rem] 2xl:text-[2rem] 3xl:text-[2rem] ">
                Pandit Deendayal Energy University,
                <br /> Gandhinagar, Gujarat.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
});

export default Education;
