"use client";
 
import Image from "next/image";
import logo3a from "../../assets/logo3a.gif";


const Hero = () => {
  return (
    <div className="h-[80vh] p-4  md:flex  justify-center  items-center   ">
     <div className="w-full md:w-4/6 h-full    flex flex-col  justify-center   items-center  gap-5">
        <h1 className="text-xl md:text-5xl  text-white w-4/6 text-left ">Hey, Im Javier!</h1>
        <p className="text-base md:text-xl text-[#ffffffbd] text-justify w-4/6">
          Welcome to my digital space. 🚀 Im a software developer and user interface designer in Ushuaia
          ARG. I make <span className="text-[#4b5dad] hover:text-[#6885c9] cursor-pointer">open-source</span> and <span className="text-[#4b5dad] hover:text-[#6885c9] cursor-pointer">projects</span> and write about code, design. I like technology, sci-fi, reading, and gaming.
        </p>
      </div>
    
    
    
      <div className="w-full   hidden   md:w-3/6 h-full  md:flex  items-center justify-center   ">
        {/* <Rocket/> */}
     
        <Image
          src={logo3a}
          alt="Javier's Logo"
          width={330}
          height={330} // Especifica la altura para evitar "layout shift"
          className="rounded-full"
        />
    
        
      </div>
     
    </div>
  );
};

export default Hero;
