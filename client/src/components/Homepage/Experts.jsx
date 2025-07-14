import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Experts = () => {
  const baseExperts = [
    { id: 1, image: "/Tanya Ganguli.jpg" },
    { id: 2, image: "/Tarini Sahoo.jpg" },
    { id: 3, image: "/Supratim Chakraborty.jpg" },
    { id: 4, image: "/Puneet Bansal.jpg" },
    { id: 5, image: "/Nishant Shah.jpg" },
    { id: 6, image: "/Prashant Phillips.jpg" },
    { id: 7, image: "/Nehaa Chaudhari.jpg" },
    { id: 8, image: "/Milind Antani.jpg" },
    { id: 9, image: "/Lalit Kumar JSA.jpg" },
    { id: 10, image: "/Jay Gandhi.jpg" },
  ];

  const experts = [...baseExperts, ...baseExperts, ...baseExperts];
  const CARD_WIDTH = 256;
  const GAP = 32;

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(baseExperts.length);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollTo = currentIndex * (CARD_WIDTH + GAP);
    container.scrollLeft = scrollTo;
  }, [currentIndex]);

  useEffect(() => {
    const container = scrollRef.current;
    const scrollAmount = (CARD_WIDTH + GAP) * baseExperts.length;

    const scroll = () => {
      if (!container) return;
      container.scrollLeft += 1;
      if (container.scrollLeft >= 2 * scrollAmount) {
        container.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scroll);
    };

    const id = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(id);
  }, []);

  const scrollByCard = (dir) => {
    let next = currentIndex + (dir === "right" ? 1 : -1);
    if (next >= baseExperts.length * 2) next = baseExperts.length;
    if (next < baseExperts.length) next = baseExperts.length * 2 - 1;
    setCurrentIndex(next);
    scrollRef.current?.scrollTo({
      left: next * (CARD_WIDTH + GAP),
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative w-full py-20 px-4 md:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url("/back.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-screen-xl mx-auto text-center relative z-10">
        {/* Heading */}
        <div className="inline-block border border-[#789BFF] rounded-full px-6 py-1 mb-6">
          <h3 className="text-[#789BFF] text-2xl font-bold">Our Experts</h3>
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold mb-12 leading-snug text-white"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Partnered with most of the <br />
          <span
            className="italic text-[#789BFF] font-light text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            top people in each industry
          </span>
        </h2>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={() => scrollByCard("left")}
            className="absolute left-0 lg:left-[-50px] p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors z-10"
          >
            <IoIosArrowBack size={24} className="text-white" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll no-scrollbar gap-8 pb-4 px-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {experts.map((expert, i) => (
              <div
                key={`${expert.id}-${i}`}
                className="flex-none w-64 h-100 rounded-xl overflow-hidden shadow-xl   bg-white"
              >
                <img
                  src={expert.image}
                  alt={`Expert ${i}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scrollByCard("right")}
            className="absolute right-0 lg:right-[-50px] p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors z-10"
          >
            <IoIosArrowForward size={24} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experts;
