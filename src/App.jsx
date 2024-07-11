import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PromptPage from "./pages/PromptPage";
import Header from "./components/Header";

const App = () => {
  return (
    <section >
      <nav className='fixed flex justify-between w-full px-4 py-1 bg-white shadow-md'>
        <Header />
      </nav>
      
      {/* Main Content */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prompt" element={<PromptPage />} />
        </Routes>
      </div>
    </section>
  );
};

export default App;
