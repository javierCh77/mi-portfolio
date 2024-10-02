"use client";

// import Rocket from "../rocket/Rocket";



const Hero = () => {
  return (
    <div className="h-[90vh]  md:flex  justify-center  items-center">
     <div className="w-full md:w-3/6 h-full    flex flex-col  justify-center   items-center  gap-5">
        <h1 className="text-4xl text-white  w-4/6 text-left ">Hey, I'm Javier!</h1>
        <p className="text-xl text-white text-justify w-4/6">
          Welcome to my digital space. 🚀 I'm a software developer in Ushuaia
          ARG. I make <span className="text-[#4b5dad] hover:text-[#6885c9] cursor-pointer">open-source</span> and <span className="text-[#4b5dad] hover:text-[#6885c9] cursor-pointer">projects</span> and write about code, design, and
          life. I like technology, drawing, sci-fi, reading, and gaming.
        </p>
      </div>
    
    
    
      <div className="w-full   hidden   md:w-3/6 h-full  md:flex  items-center">
        {/* <Rocket/> */}
        
        
        
        
      </div>
     
    </div>
  );
};

export default Hero;
