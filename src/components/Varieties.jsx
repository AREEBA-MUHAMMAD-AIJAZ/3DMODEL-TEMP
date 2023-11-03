"use client"
import { useState } from "react"
import ReactDOM from "react-dom/client";

const Varieties = () => {
  return (
    <div className=" ">
         <p className='text-[250px] font-sans font-extrabold'>CAST </p>
        
         <div className="flex gap-10 -mt-[150px]  overflow-scroll cursor-pointer my-20 ml-40">

            <img src="/IMG1.avif" className="mt-5"/>
            <img src="/IMG2.webp" className="mb-5"/>
            <img src="/IMG3.avif" className="mt-5"/>
            <img src="/IMG4.avif" className="mb-5"/>
            <img src="/IMG5.avif" className="mt-5"/>
            <img src="/IMG6.avif" className="mb-5"/>
            <img src="/IMG7.avif" className="mt-5"/>
            <img src="/IMG8.avif" className="mb-5"/>
            <img src="/IMG9.jpg"  className="mt-5"/>
            <img src="/IMG10.avif"className="mb-5"/>

         </div>

    </div>
  )
}

export default Varieties
