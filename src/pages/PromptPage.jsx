import React, { useState } from "react";
import bg_img from "../assets/prompt_bg.svg";
import sidebar_img from "../assets/sidebar_bg.svg";
import logo from "../assets/fingeni_by_chistats_logo.svg";
// import sidepanel_img from "../assets/show_sidepanel.png";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { Dock } from "react-dock";

const PromptPage = () => {
  const [sidebar, setSidebar] = useState(false);

  const sidebarMotion = () => {
    setSidebar(!sidebar);
  };
  return (
    <section
      className="w-screen h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      {/* Header */}
      <nav>
        <img src={logo} className="pl-3" />
      </nav>
      {/* Body */}
      <div className="relative flex justify-start h-[630px] gap-x-24">
        {/* Sidebar */}
        <div className="w-10 h-auto border-white border-[2px] relative ml-3 flex justify-end">
          <BsArrowRightCircleFill
            className="absolute top-[49%] text-[#666666] text-3xl"
            onClick={sidebarMotion}
          />
        </div>

        {sidebar ? (
          // Sidebar panel
          <div
            className="w-[223px] h-screen bg-center bg-cover bg-no-repeat absolute -top-14 left-0 transition-all duration-75 ease-in-out"
            style={{ backgroundImage: `url(${sidebar_img})` }}
          >
            <nav>
              <img src={logo} className="pl-3 mt-[2.1px]" />
            </nav>

            <div className="flex justify-between mx-2 gap-x-3">
              <div className="border-[1px] border-gray-500 w-full h-[630px]">
                hiii
              </div>
              <div className="border-[1px] w-fit border-white h-[630px] flex items-center">
                <BsArrowLeftCircleFill
                  className="text-3xl text-[#666666] "
                  onClick={sidebarMotion}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default PromptPage;
