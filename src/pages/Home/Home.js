import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="w-[100v] h-[100vh]  bg-[#2EC4B6] flex justify-center items-center">
      <Header />
      <section className="flex flex-col justify-center items-center">
        <h1 className="fontType-2 text-white font-semibold text-9xl underline">
          Let's Type <span className="text-[#FF371C] heading">Fastest</span>
        </h1>
        <p className="fontType-2 text-white mt-8 text-4xl text-center">
          Test your inner typing pro with our website
        </p>
        <Link to="/type">
          <Button text={"Let's Type"} font={"white"} border={"white"} />
        </Link>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
