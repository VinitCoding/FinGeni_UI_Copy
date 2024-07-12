import React, { useState } from "react";
import bg_img from "../assets/prompt_bg.svg";
import sidebar_img from "../assets/sidebar_bg.svg";
import logo from "../assets/fingeni_by_chistats_logo.svg";
import sidepanel_img from "../assets/show_sidepanel.png";

const PromptPage = () => {
  const [sidebar, setSidebar] = useState(false);

  const sidebarMotion = () => {
    setSidebar(!sidebar);
  }
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
      <div className="relative flex justify-start gap-x-24">
        {/* Sidebar area */}
        <div className="w-[130px] h-auto border-white border-[2px] relative ml-3" >
          <img src={sidepanel_img} className="absolute bottom-0 w-10 ml-2" onMouseEnter={sidebarMotion} onMouseLeave={sidebarMotion}/>
        </div>
        
        {
          sidebar ? (
            // Sidebar div
            <div
              className="w-[223px] h-screen bg-center bg-cover bg-no-repeat absolute -top-14 left-0"
              style={{ backgroundImage: `url(${sidebar_img})` }}
            >
              {/* Header */}
              <nav>
                <img src={logo} className="pl-3" />
              </nav>
            </div>) : (null)
        }

        <div>
          
        </div>
      </div>
    </section>
  );
};

export default PromptPage;
