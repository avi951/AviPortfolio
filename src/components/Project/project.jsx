import React, { useRef } from "react";
import "./Project.scss";
import "../../index.css";
import { useEffect, useState } from "react";
import SandL from "../../assets/images/Snake&Ladder.webp";
import CPSN from "../../assets/images/CPSN.webp";
import Book from "../../assets/images/Book.webp";
import profilePic from "../../assets/images/profile-removebg.webp";
import portfolioWeb from "../../assets/images/PortfoioWeb.webp";
import airplaneDataBase from "../../assets/images/airplanedatabase.webp";
import Adobeillustrator from "../../assets/images/Adobeillustrator.webp";
import { Link } from "react-router-dom";
const project = React.forwardRef((props, ref) => {
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <>
  //       <div className="Loading" style={{ margin: "0rem auto", width: "50%" }}>
  //         <img src={profilePhoto} alt="" />
  //       </div>
  //       <div className="LoadingCursor"></div>
  //     </>
  //   );
  // }
  return (
    <div id="Project" className="3xl:w-[70%] 3xl:mx-auto pt-5">
      <div
        className={`Project project-container ${
          props.inView ? "active fade-right" : "reveal"
        }`}
        ref={ref}
      >
        <div
          className="text-[2.4rem] w-[50%] mx-auto sm:mx-auto  sm:mt-2 sm:text-[1.4rem] text-center sm:tracking-[2px] bg-slate-200 text-[#262626] sm:mx-8 sm:font-medium sm:py-2 md:text-[2rem] mx:text-[2rem]  xl:text-[2rem] 2xl:text-[2rem] 3xl:text-[2rem]"
          style={{ marginTop: "2rem", marginBottom: "0rem" }}
        >
          PROJECTS
        </div>

        <div className="ProjectWork sm:grid sm:grid-cols-1 md:grid md:grid-cols-2  mx:grid mx:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-3 3xl:grid 3xl:grid-cols-3">
          <div className="nft">
            <div className="main sm:w-[14rem] md:w-[15rem] md:h-[30rem] mx:w-[17rem] xl:w-[17rem] 2xl:w-[17rem] 3xl:w-[17rem] 3xl:h-[32rem]">
              <div className="">
                <Link
                  to="https://github.com/avi951/BookReader"
                  style={{ margin: " 0 auto" }}
                >
                  <img
                    className="tokenImage mx-auto sm:w-[10rem] sm:mx-auto md:mx-auto sm:h-[18rem] md:h-[15rem] md:mx-auto lg:h-[18rem] xl:h-[18rem] 3xl:h-[16rem] 3xl:mt-4 "
                    src={Book}
                    alt="Book Web App"
                  />
                </Link>
              </div>
              <div>
                <h2 className="sm:text-base sm:tracking-[1px] lg:text-lg lg:tracking-[2px] md:text-lg md:tracking-[2px] mx:text-lg mx:tracking-[2px] 2xl:text-[1.6rem] xl:text-[1.2rem] xl:tracking-[2px] 2xl:tracking-[2px] 3xl:text-[1.5rem] 3xl:tracking-[2px]">
                  Book Management Web App
                </h2>
                <hr />
                <div className="description">
                  <div className="tag">HTML</div>
                  <div className="tag">CSS</div>
                  <div className="tag">JS</div>
                  <div className="tag">React</div>
                  <div className="tag">NodeJs</div>
                  <div className="tag">MongoDB</div>
                </div>
                {/* <div className="creator">
                <div className="wrapper">
                  <img
                    src={profilePic}
                    alt="Creator"
                    style={{ backgroundSize: "contain" }}
                  />
                </div>
                <p>
                  <ins>Created by</ins>{" "}
                  <a href="https://github.com/avishihora/Project1">
                    Avi Shihora
                  </a>
                </p>
              </div> */}
              </div>
            </div>
          </div>
          <div className="nft">
            <div className="main sm:w-[14rem] sm:h-[28rem] md:w-[15rem] md:h-[30rem] mx:w-[17rem] lg:h-[30rem] xl:h-[30rem] ">
              <div>
                {" "}
                <a href="http://localhost:5173/">
                  <img
                    className="tokenImage sm:h-[18rem] md:h-[17rem] lg:mt-[6rem]  xl:mt-[6rem]  3xl:h-[20rem]"
                    src={portfolioWeb}
                    alt="NFT"
                  />
                </a>
              </div>
              <div>
                <h2 className="sm:text-base sm:tracking-[1px] lg:text-lg lg:tracking-[2px] md:text-lg md:tracking-[2px] mx:text-lg mx:tracking-[2px] 2xl:text-[1.6rem] xl:text-[1.2rem] xl:tracking-[2px] 2xl:tracking-[2px] 3xl:text-[1.5rem] 3xl:tracking-[2px]">
                  PortFolio Website
                </h2>
                <hr />
                <div className="description">
                  <div className="tag">HTML</div>
                  <div className="tag">CSS</div>
                  <div className="tag">JavaScript</div>
                  <div className="tag">React</div>
                </div>
              </div>
              {/* <div className="creator">
                <div className="wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                    alt="Creator"
                  />
                </div>
                <p>
                  <ins>Created By</ins> Avi Shihora
                </p>
              </div> */}
            </div>
          </div>
          <div className="nft">
            <div className="main sm:w-[14rem] md:w-[15rem] md:h-[30rem] lg:h-[30rem] xl:h-[30rem] ">
              <div>
                <img
                  className="tokenImage  sm:h-[18rem] md:h-[15rem] md:mx-auto lg:h-[17rem] lg:mx-auto xl:w-[13rem] xl:mx-auto"
                  src={CPSN}
                  alt="NFT"
                />
              </div>
              <div>
                <h2 className="sm:text-base sm:tracking-[1px] lg:text-lg lg:tracking-[2px] md:text-lg md:tracking-[2px] mx:text-lg mx:tracking-[2px] 2xl:text-[1.6rem] xl:text-[1.2rem] xl:tracking-[2px] 2xl:tracking-[2px] 3xl:text-[1.5rem] 3xl:tracking-[2px]">
                  CPSN Project
                </h2>
                <hr />
                <div className="description">
                  <div className="tag">HTML</div>
                  <div className="tag">CSS</div>
                  <div className="tag">JS</div>
                  <div className="tag">React</div>
                  <div className="tag">NodeJs</div>
                  <div className="tag">MongoDB</div>{" "}
                </div>
              </div>

              {/* <div className="creator">
                <div className="wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                    alt="Creator"
                  />
                </div>
                <p>
                  <ins>Created By</ins> Avi Shihora and Prasanna Patel
                </p>
              </div> */}
            </div>
          </div>
          <div className="nft">
            <div className="main sm:w-[14rem] md:w-[15rem] md:h-[30rem] lg:h-[30rem] xl:h-[30rem]">
              <div>
                <img
                  className="tokenImage  sm:h-[18rem] sm:mx-auto md:mx-auto md:h-[15rem] md:w-[13rem] md:mx-auto lg:mx-auto lg:w-[15rem] xl:w-[14rem] xl:mx-auto 3xl:h-[22rem] "
                  src={SandL}
                  alt="Snake&Ladder"
                  width="fit-content"
                />
              </div>
              <div>
                <h2 className="sm:text-base sm:tracking-[1px] lg:text-lg lg:tracking-[2px] md:text-lg md:tracking-[2px] mx:text-lg mx:tracking-[2px] 2xl:text-[1.6rem] xl:text-[1.2rem] xl:tracking-[2px] 2xl:tracking-[2px] 3xl:text-[1.5rem] 3xl:tracking-[2px]">
                  Snake and Ladder Project
                </h2>
                <hr />
                <div className="description">
                  <div className="tag">JAVA</div>
                </div>
              </div>
              {/* <div className="creator">
                <div className="wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                    alt="Creator"
                  />
                </div>
                <p>
                  <ins>Created By</ins> Avi Shihora
                </p>
              </div> */}
            </div>
          </div>
          <div className="nft">
            <div className="main sm:w-[14rem]  md:w-[15rem] md:h-[30rem] lg:h-[30rem] xl:h-[30rem] 2xl:h-[30rem]">
              <div>
                <img
                  className="tokenImage sm:h-[18rem]  md:mt-[7rem] lg:mt-[5rem] xl:mt-[5rem] 2xl:mt-[5rem] 3xl:h-[21rem]"
                  src={airplaneDataBase}
                  alt="NFT"
                />
              </div>
              <div>
                <h2 className="sm:text-base sm:tracking-[1px] lg:text-lg lg:tracking-[2px] md:text-lg md:tracking-[2px] mx:text-lg mx:tracking-[2px] 2xl:text-[1.6rem] xl:text-[1.2rem] xl:tracking-[2px] 2xl:tracking-[2px] 3xl:text-[1.5rem] 3xl:tracking-[2px]">
                  Airline Management Project
                </h2>
                <hr />
                <div className="description">
                  <div className="tag">MySQL</div>
                  {/* <div className="tag">MySQL</div>
              <div className="tag">MySQL</div> */}
                </div>
              </div>

              {/* <div className="creator">
                <div className="wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                    alt="Creator"
                  />
                </div>
                <p>
                  <ins>Created By</ins> Avi Shihora 
                </p>
              </div> */}
            </div>
          </div>

          <div className="nft">
            <div className="main sm:w-[14rem] md:w-[15rem] md:h-[30rem] lg:h-[30rem]  xl:h-[30rem] 2xl:h-[30rem]">
              <div>
                <Link to="/project/images">
                  <img
                    className="tokenImage sm:h-[18rem] md:mt-[7rem] lg:object-none	 lg:h-[11rem] lg:mt-[5rem]
                    xl:mt-[5rem] 2xl:mt-[5rem] 3xl:h-[22rem] "
                    src={Adobeillustrator}
                    alt="NFT"
                  />
                </Link>
              </div>
              <div className="">
                {" "}
                <h2 className="sm:text-base sm:tracking-[1px] lg:text-lg lg:tracking-[2px] md:text-lg md:tracking-[2px] mx:text-lg mx:tracking-[2px] 2xl:text-[1.6rem] xl:text-[1.2rem] xl:tracking-[2px] 2xl:tracking-[2px] 3xl:text-[1.5rem] 3xl:tracking-[2px]">
                  Design
                </h2>
                <hr />
                <div className="description">
                  <div className="tag">Adobe illustrartor</div>
                  <div className="tag">Canva</div>
                </div>
              </div>

              {/* <div className="creator">
                <div className="wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                    alt="Creator"
                  />
                </div>
                <p>
                  <ins>Created By</ins> Avi Shihora
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default project;
