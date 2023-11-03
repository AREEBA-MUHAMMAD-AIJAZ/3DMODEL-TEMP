"use client"
import React, { useState } from 'react';

const images = ['bmwWhite.webp', 'cyanBMW.png' , 'skyblueBMW.png', 'redBMW.png'];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div>
        <div className='flex flex-col gap-1'> 

            <h5 className='text-xs font-extrabold'>EQUIPMENT 1/1</h5>
            <h1 className='text-7xl font-extrabold'>Version here</h1>

            <div>
            <button className='text-red-800 border rounded-full p-3 border-gray-500' onClick={prevImage} >＜</button>
            <button className='text-red-800 border rounded-full p-3 border-gray-500 ml-2' onClick={nextImage}>＞</button>
            </div>

        </div>

        <div className="items-center h-screen">
            <img className="max-w-full max-h-96" src={images[currentImage]} alt={`Image ${currentImage + 1}`} />    
        </div>

    </div>
  );
};

export default ImageSlider;
