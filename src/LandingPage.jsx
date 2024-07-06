import Btn from './Btn';
import Freelancer from './Freelancer'
import BG from "./assets/BG.png"
import ClientReg from './ClientReg';
import React, { useState, useRef, useEffect } from 'react';
function slide(){
    const tmp = document.querySelector("#form")
    const page = document.querySelector("#page");
    tmp.classList.remove("hidden")
    tmp.classList.add("slide-right")
    page.classList.add("blur");
}
function slide2(){
    const temp = document.querySelector("#Form2");
    const page = document.querySelector("#page");
    temp.classList.remove("hidden");
    temp.classList.add("slide-left")
    page.classList.add("blur")
}


export default function LandingPage() {
    return (
        <>
        
        <div id="page" className=" absolute flex flex-row justify-center items-center w-full h-screen">
            <div className="w-full h-screen relative" style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
      {/* <div className="m-auto flex items-center justify-center w-full h-screen border-r-2 rounded-r-3xl bg-glass-bg backdrop-blur-sm">
        <h1 className="drop-shadow-md mb-8 p-7 font-serif text-white">Vector Jobs</h1>
      </div> */}
      </div>
      <div className="relative m-auto flex flex-col items-center justify-center w-full h-screen">
        
        <div className="flex flex-col items-center justify-center gap-y-10">
          
          <div className='flex flex-col items-center justify-center max-w-[600px] gap-y-10 text-center'>
          <p className='text-gray-600 font-serif text-lg text-pretty'>
          Start reaching out to a wide network of qualified professionals and streamline your hiring process today. 
          </p>
          <Btn text="Hire a FreeLancer" func={slide}/>
          </div>

          <div className="flex items-center w-full my-4 h-full">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-gray-500 font-semibold">or</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <div className='flex flex-col items-center justify-center max-w-[600px] gap-y-10 text-center'>
          <p className='text-gray-600 font-serif text-lg'>
          Take control of your freelance career and discover new projects that inspire you. 
          </p>
          <Btn text="Find a Job" func={slide2}/>
          </div>
        </div>
      </div>
    </div>
    <Freelancer/>
    <ClientReg />
        
        </>
    );
}
