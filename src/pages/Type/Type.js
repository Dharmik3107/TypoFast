import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ParaObj } from "../../Data/Paras";
import {
  countWords,
  getCorrectness,
  getCaseMistake,
} from "../../helper/result";

const Type = () => {
  //State management
  const [para, setPara] = useState("");
  const [typedPara, setTypedPara] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [reset, setReset] = useState(false);
  const [stop, setStop] = useState(false);
  const [start, setStart] = useState(true);
  const aux = useRef([]);
  const timer = useRef(null);

  //Persisted State
  useEffect(() => {
    const randomParaGenerator = () => {
      let paras = Object.values(ParaObj);
      let randomPara = paras[Math.floor(Math.random() * paras.length)];
      return randomPara;
    };
    let para = randomParaGenerator();
    setPara(() => para);
  }, [reset]);

  const handleTypedPara = (event) => {
    if (!stop) setTypedPara(() => event.target.value);
  };

  const handleKeyDown = (event) => {
    if (aux.current.length < 1 && event.key.match(/[a-z]/i)) {
      aux.current.push(event.key);
      timer.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
  };
  if (seconds > 59) {
    setMinutes((minutes) => minutes + 1);
    setSeconds(0);
  }

  const handleReset = () => {
    setReset((reset) => !reset);
    clearInterval(timer.current);
    setSeconds(0);
    setMinutes(0);
    setTypedPara(() => "");
    aux.current = [];
  };

  const handleStop = () => {
    setStop(!stop);
    setStart(!start);
  };

  if (stop) {
    clearInterval(timer.current);
  }
  if (start && aux.current.length === 1) {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }

  let speed = minutes === 0 ? 0 : Math.floor(countWords(typedPara) / minutes);
  let efficiency = getCorrectness(para, typedPara);
  let caseResult = getCaseMistake(para, typedPara);

  return (
    <main className="w-[100vw] h-[100vh] flex justify-center items-center">
      <Header />
      <section className="w-5/6 min-h-[600px] max-h-[700px]">
        <div className="w-full h-[56px] flex justify-end items-center text-[#2EC4B6] font-semibold text-xl">
          Timer:{minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className="w-full h-[580px] flex justify-between items-center">
          <div className="w-1/2 h-full mr-2 font-medium text-lg text-justify overflow-clip leading-6">
            {para}
          </div>
          <div className="w-1/2 h-full ml-2 border-2 border-solid border-[#2EC4B6]">
            <textarea
              name="paraSpace"
              id="paraSpace"
              cols="30"
              rows="10"
              className="w-full h-full outline-none font-medium text-lg pl-1"
              onPaste={(e) => e.preventDefault()}
              onKeyDown={handleKeyDown}
              onChange={handleTypedPara}
              value={typedPara}
            ></textarea>
          </div>
        </div>
        <div className="w-full h-8 flex justify-end items-center mt-1 text-[#2EC4B6] fontType-2 text-base font-semibold">
          Speed: {speed} Correctness: {efficiency} Case Mistakes: {caseResult}
        </div>
        <div className="w-full h-[56px] flex justify-end items-center mt-1">
          <button
            className="fontType-2 relative text-[#2EC4B6] border-2 border-solid border-[#2EC4B6] py-2 px-10 w-52 text-2xl hoverEffect2 mr-2"
            onClick={handleStop}
          >
            {stop ? `Start` : `Stop`}
          </button>
          <button
            className="fontType-2 relative text-[#2EC4B6] border-2 border-solid border-[#2EC4B6] py-2 px-10 w-52 text-2xl hoverEffect2"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Type;
