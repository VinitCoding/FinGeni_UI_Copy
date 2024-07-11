import React from "react";
import { TiArrowRight } from "react-icons/ti";

const Home = () => {
  return (
    <section className="relative">
      {/* About FinGeni */}
      <div className="absolute top-[160px] left-[36%] text-center flex flex-col items-center">
        <h2 className="font-extrabold text-[80px] merriweather">FinGenie</h2>
        <p className="mt-1 merriweather text-[24px]">
          Step into the Future of Finance with us!
        </p>
        <p className="mt-1 merriweather text-[18px]">
          Your Journey to Smarter Decisions Starts Here!
        </p>

        {/* Check out button */}
        <div className="flex items-center px-4 py-2 mt-3 rounded-md cursor-pointer w-fit ocean-dark-blue-bg gap-x-3 hover:shadow-[#575757] hover:shadow-lg hover:duration-100 hover:ease-in-out ">
          <button className="flex ">Check It Out <TiArrowRight className="w-auto text-2xl hover:-rotate-45 hover:transition-all hover:duration-100"/></button>
          
        </div>
      </div>

      
    </section>
  );
};

export default Home;
