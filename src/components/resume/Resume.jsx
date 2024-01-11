import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative my-6">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Full Stack Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Aceteq Web Services Pvt Ltd
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                February 2022 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Contributed to frontend development with a primary focus on React-based applications in Asghal Project Management System.
                  Developed  user interaction for failed integration and log view, using modern React applications resulting in improved user experience
                  Troubleshot and maintained  company websites, ensuring fast and optimal performance.
                  Worked closely with the UI/UX team to resolving technical and functional queries.
                  Involved in mapping discussion to facilitate the utility development.

                </p>
              </div>
            </div>
            <div className=" relative my-6">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Web Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Jai Guru Sai Doors
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  August 2020 - January 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Founder of JGS Door. Responsible for designing and maintaining company's website.
                  Implemented React Hooks in  projects, enhancing code reusability and efficiency.
                  Identified and fixed  issues in web properties, improving website usability
                  Handling techincals, operationals, and sales of JGS Door . 
                  JGS Door is in manufacture and disturbution of Doors ,lamination Doors, Plywood Doors and Teak Doors in variours parts of Jharkhand and Bihar.
                </p>
              </div>
            </div>
           
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Consultant
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Konica Minolta Business Solutions India Pvt Ltd 
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                January 2015 - November 2019
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Configuring and deploying YSoft Safeq,  which is an accounting software. Understanding company environment, client  system  and there requirement and  integrate layer between client and
                company to optimize printing jobs. And to ensure all the print copy and scan operations can be
                tracked at user access to output devices to centrally controlled system.
                </p>
              </div>
            </div>

          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  BE, Electronics and Communications Engineering (ECE) 
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Shri Sant Gadge Baba College, Bhusawal
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2009 - Year 2013
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Completed BE in Electronics and comminication with Distiction. Involved in various Technical event 
                  organised by College.Co-Founder of  Robotics Group “BLANKA-BOTS” in 2011. Participated in event Hydronoid Acent in Techfest 2012 held at IIT Powai.
                  Completed project of Designing and Implementation of Vedic Multiplication in VLSI.
                  
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
