import React, { useState, useEffect } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Banner = () => {
  
  const bannerContents = [
     {
      id: 1,
      image: "/ES-11.jpg",
      title: "KYC, Crypto & The Cracks Within: The CoinDCX Breach as a Case Study in Platform Risk Maturity",
      tags: ['Infosec', 'Legal', 'Data Breach', 'Platform Security','FinTech'],
      path: "/enterprise-signals/enterprise/11",
    },
     {
      id: 2,
      image: "/ES-10.webp",
      title: "When Public Moments Go Too Far: Legal, Privacy, People & Brand Faultlines in the Kiss Cam Controversy",
      tags: ['HR', 'Legal', 'Privacy'],
      path: "/enterprise-signals/enterprise/10",
    },
     {
      id: 3,
      image: "/ES-9.jpg",
      title: "The Exit That Didn’t End: What the Wipro Defamation Ruling Means for CHROs and GCs",
      tags: ['HR', 'Legal', 'HR Risk','Employment'],
      path: "/enterprise-signals/enterprise/9",
    },
    {
      id: 4,
      image: "/ES-8.jpg",
      title: "The New Control Room: Why HR Is Now a Risk Nerve Center and What Leaders Must Do About It",
      tags: ['HR', 'Risk Management', 'HR Risk','TPRM'],
      path: "/enterprise-signals/enterprise/8",
    },
    {
      id: 5,
      image: "/ES-7.jpg",
      title: "After 285 Edits, India’s New Tax Code Inches Closer to Reality. CFOs Stay on the Watchtower",
      tags: ['Finance',  'Tax', 'Direct Tax Code 2025'],
      path: "/enterprise-signals/enterprise/7",
    },
   {
    id: 6,
    title: 'AI Leadership Is Surging - But So Are the Risks: Why CXOs Must Balance Acceleration with Accountability',
    tags: ['AI Skills', 'Leadership', 'HR', 'CHRO'],
    image: '/ES-6.webp',
   path: '/enterprise-signals/enterprise/6',
    
  },
  
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === bannerContents.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? bannerContents.length - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === bannerContents.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => setCurrentSlide(index);

  const currentBanner = bannerContents[currentSlide];

  return (
    <div
      className="relative w-full h-[70vh] min-h-[300px] bg-cover bg-center transition-all duration-500 ease-in-out z-0"
      style={{ backgroundImage: `url('${currentBanner.image}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none z-0"></div>

  
      <div
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={() => window.location.href = currentBanner.path} 
      >
<div
  className="relative z-10 flex flex-col justify-center h-full text-white px-8 md:px-16 lg:px-32 w-full md:w-[80%] 
             text-center md:text-left items-center md:items-start ml-auto mr-auto md:ml-0">

 
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
    {currentBanner.title}
  </h1>

  <div className="flex flex-wrap gap-2 mt-2 mb-8 justify-center md:justify-start">
 
    {currentBanner.tags.map((tag, index) => (
      <span
        key={index}
        className="text-white text-xs sm:text-sm px-3 py-1 uppercase border border-white whitespace-nowrap"
      >
        {tag}
      </span>
    ))}
  </div>
</div>

      </div>

   
      <div className="absolute inset-0 hidden md:flex items-center justify-between z-20 px-4">
        <button
          onClick={goToPrevSlide}
          className="text-white p-2 rounded-full border border-white hover:border-[#789BFF] hover:text-[#789BFF] transition-colors"
        >
          <HiChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={goToNextSlide}
          className="text-white p-2 rounded-full border border-white hover:border-[#789BFF] hover:text-[#789BFF] transition-colors"
        >
          <HiChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

     
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20 md:hidden">
        <button
          onClick={goToPrevSlide}
          className="text-white p-2 rounded-full border border-white hover:border-[#789BFF] hover:text-[#789BFF] transition-colors"
        >
          <HiChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNextSlide}
          className="text-white p-2 rounded-full border border-white hover:border-[#789BFF] hover:text-[#789BFF] transition-colors"
        >
          <HiChevronRight className="w-6 h-6" />
        </button>
      </div>

    
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {bannerContents.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`block w-3 h-3 cursor-pointer ${
              currentSlide === index ? "bg-white" : "bg-[#789BFF] opacity-70"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
