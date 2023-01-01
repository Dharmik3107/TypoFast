import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ParaObj } from "../../Data/Paras";

const Type = () => {
  const [typedPara, setTypedPara] = useState("");

  const handleTypedPara = (event) => {
    let value = event.target.value;
  };

  const randomParaGenerator = () => {
    let paras = Object.values(ParaObj);
    let randomPara = paras[Math.floor(Math.random() * paras.length)];
    return randomPara;
  };

  let para = randomParaGenerator();
  return (
    <main className="w-[100vw] h-[100vh] flex justify-center items-center">
      <Header />
      <section className="w-5/6 h-[700px]">
        <div className="w-full h-[56px] flex justify-end items-center text-[#2EC4B6] font-semibold text-xl">
          Timer:
        </div>
        <div className="w-full h-[580px] flex justify-between items-center">
          <div className="w-1/2 h-full mr-2 font-medium text-lg">{para}</div>
          <div className="w-1/2 h-full ml-2 border-2 border-solid border-[#2EC4B6]">
            <textarea
              name="paraSpace"
              id="paraSpace"
              cols="30"
              rows="10"
              className="w-full h-full outline-none font-medium text-lg pl-1"
              onPaste={(e) => e.preventDefault()}
              onChange={handleTypedPara}
            ></textarea>
          </div>
        </div>
        <div className="w-full h-[56px] flex justify-end items-center mt-2">
          <button className="fontType-2 relative text-[#2EC4B6] border-2 border-solid border-[#2EC4B6] py-2 px-10 w-52 text-2xl hoverEffect">
            Reset
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Type;
