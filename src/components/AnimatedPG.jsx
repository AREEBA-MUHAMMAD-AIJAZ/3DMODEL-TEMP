"use client";
// const AnimatedPG = () => {
//   $('video').mousemove(function(e){
//     var moveX = (e.pageX * -1 / 15);  e.clientX / window.innerWidth *-1/15
//     var moveY = (e.pageY * -1 / 15);
//     $(this).css('background-position' , moveX + 'px ' + moveY + 'px')
// })
//   return (

//     <div className=" video mx-auto">
//         <video className="w-full" controls>
//         <source src="/iconVideo.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//     </div>
//   )
// }

// export default AnimatedPG
import React, { useEffect, useRef } from "react";

const AnimatedPG = () => {
  const imgRotate = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth * 80 - 15; // Adjust the multiplier and offset according to your preference
      const mouseY = e.clientY / window.innerHeight * 30 - 15; // Adjust the multiplier and offset according to your preference
      imgRotate.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    if (imgRotate.current) {
      imgRotate.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (imgRotate.current) {
        imgRotate.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen bg-black" style={{ perspective: "1000px" }}>
      <div
        className="w-full h-full bg-cover bg-center background-image "
        style={{ backgroundImage: 'url("/bglast4.jpg")', transformStyle: "preserve-3d" }}
        ref={imgRotate}
      ></div>
    </div>
  );
};

export default AnimatedPG;

