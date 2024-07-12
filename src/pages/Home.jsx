import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import bg_img from "../assets/bg_img_1.jpg";
import img_1 from "../assets/image_1.png";
import img_2 from "../assets/image_2.png";
import img_3 from "../assets/image_3.png";
import img_4 from "../assets/image_4.png";
import logo from '../assets/chistats_logo.svg'

const Home = () => {
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate("/prompt");
  };
  return (
    <section
      className="relative w-screen h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      {/* Header Part */}
      <section className="flex justify-between w-full fixed px-4 py-0.5 bg-white shadow-md">
        <h2 className="text-[30px] ocean-dark-blue font-extrabold">FinGenie</h2>
        <img src={logo} alt="logo" className="w-24" />
      </section>


      {/* About FinGeni */}
      <div className="absolute top-[160px] left-[37%] text-center flex flex-col items-center">
        <h2 className="font-extrabold text-[60px] merriweather">FinGenie</h2>
        <p className="mt-1 merriweather text-[22px]">
          Step into the Future of Finance with us!
        </p>
        <p className="mt-4 merriweather text-[15px]">
          Your Journey to Smarter Decisions Starts Here!
        </p>

        {/* Check out button */}
        <div
          className="flex items-center px-4 py-2 mt-6 rounded-md cursor-pointer w-fit ocean-dark-blue-bg gap-x-3 hover:shadow-[#575757] hover:shadow-lg hover:duration-100 hover:ease-in-out"
          onClick={handlenavigate}
        >
          <button className="flex text-[18px] font-medium">
            Check It Out{" "}
            <TiArrowRight className="w-auto text-2xl hover:-rotate-45 hover:transition-all hover:duration-100" />
          </button>
        </div>
      </div>

      {/* Features section */}
      <div className="absolute top-[500px] w-full flex justify-center gap-x-36">
        <div className="w-[200px] rounded-md py-3 px-3 text-center border-[1px] border-black flex flex-col justify-center items-center">
          <img src={img_1} className="w-16" />
          <h2 className="mt-4">Query-Based Financial Information</h2>
        </div>
        <div className="w-[200px] rounded-md py-3 px-3 text-center border-[1px] border-black flex flex-col justify-center items-center">
          <img src={img_2} className="w-12" />
          <h2 className="mt-4">Comprehensive Knowledge Base</h2>
        </div>
        <div className="w-[200px] rounded-md py-3 px-3 text-center border-[1px] border-black flex flex-col justify-center items-center">
          <img src={img_3} className="w-12" />
          <h2 className="mt-4">
            Instant <br />
            Responses
          </h2>
        </div>
        <div className="w-[200px] rounded-md py-3 px-3 text-center border-[1px] border-black flex flex-col justify-center items-center">
          <img src={img_4} className="w-12" />
          <h2 className="mt-4">User-Friendly Interface</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
