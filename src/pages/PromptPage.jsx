import React, { useState } from "react";
import bg_img from "../assets/prompt_bg.svg";
import sidebar_img from "../assets/sidebar_bg.svg";
import logo from "../assets/fingeni_by_chistats_logo.svg";
// import sidepanel_img from "../assets/show_sidepanel.png";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import send_img from '../assets/sent.png'

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
      <div className="relative flex justify-start h-[630px] gap-x-[200px]">
        {/* Sidebar */}
        <div className="relative flex justify-end w-10 h-auto ml-3">
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

        {/* Prompt Area */}

        {/* Prompt  */}
        <div className="flex flex-col w-full mr-36">
          <div className="w-full h-[90%] border-[1px] border-white px-5 overflow-y-auto">
            <div className="w-full mt-3 px-3 h-fit border-[1px] border-black ">
              <div>hiii</div>
            </div>
          </div>
          <div className="p-1.5 mt-3 bg-white flex justify-between gap-x-7 px-3 h-fit rounded-lg items-center">
            <textarea  type="text" className="focus:border-[0.5px] focus:border-[#666666] focus:rounded focus:outline-none w-full resize-none p-1" rows='1' cols='1' placeholder="Ask Me Anything..."/>
            <img src={send_img} className="w-8 h-fit hover:cursor-pointer"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptPage;
