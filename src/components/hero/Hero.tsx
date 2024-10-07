"use client";

import Image from "next/image";
import logo3a from "../../assets/logo3a.gif";
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import facebook from '../../assets/icons/facebook.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import instagram from '../../assets/icons/instagram.svg'



const Hero = () => {
  return (
    <>
      <div className=" h-[85vh] justify-center items-center flex flex-col">
      
      <div className="h-[73vh]   md:flex  justify-center  items-center    ">
      
        <div className="w-full md:w-4/6 h-full    flex flex-col  justify-center   items-center  gap-5">
          <h1 className="text-xl md:text-5xl  text-white w-5/6 text-left ">
            Hey, Im Javier!
          </h1>
          <p className="text-base md:text-xl text-[#ffffffbd] text-justify w-5/6">
            Welcome to my digital space. 🚀 Im a software developer and user
            interface designer in Ushuaia ARG. I make{" "}
            <span className="text-[#4b5dad] hover:text-[#6885c9] cursor-pointer"> open-source </span>{" "} and{" "}<span className="text-[#4b5dad] hover:text-[#6885c9] cursor-pointer"> projects </span>{" "} and write about code, design. I like technology, sci-fi, reading, and gaming.</p>
        </div>
        <div className="w-full   hidden   md:w-3/6 h-full  md:flex  items-center justify-center   ">
          <Image
            src={logo3a}
            alt="Javier's Logo"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>
      <div className=" flex  text-center items-center gap-4 p-2 justify-center">
        <span className="flex gap-4 "><Image  src={github} className="hover:font-white"  alt="github" /> </span>
        <span className="flex gap-4">   <Image src={linkedin} alt="github"/></span>
        <span className="flex gap-4"> <Image src={facebook} alt="github"/></span>
        <span className="flex gap-4">    <Image src={whatsapp} alt="github"/> </span>
        <span className="flex gap-4">   <Image src={instagram} alt="github"/> </span>
      
        
      </div>
      
      <button className=" mt-2 font-semibold outline outline-offset-2 outline-1 rounded-full text-[#4b5dad] hover:bg-[#262b458c] hover:text-[#556dbb] px-12 py-1">Download cv</button>
      
      </div>
    </>
  );
};

export default Hero;
