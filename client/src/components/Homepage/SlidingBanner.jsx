import React, { useState, useEffect } from "react";

const bannerImages = [
  "/Data Privacy.jpg",
  "/Banner- AI Finance.jpg", 
  
];

const SlidingBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-6">
      <img
        src={bannerImages[currentImage]}
        alt="Masterclass Banner"
        className="w-full h-auto rounded-md transition-all duration-500"
      />
    </div>
  );
};
export default SlidingBanner;