import React, { useEffect, useRef } from 'react';

const Brands = () => {
  const partnerLogos = [
    { id: 1, name: 'AZB & Partners', image: '/Logo1.png' },
    { id: 2, name: 'Deloitte', image: '/Logo3.png' },
    { id: 3, name: 'Deloitte', image: '/Logo2.jpeg' },
    { id: 4, name: 'EY', image: '/Logo4.png' },
    { id: 5, name: 'PwC', image: '/Logo5.png' },
    { id: 6, name: 'Grant Thorton', image: '/Logo6.png' },
     { id: 7, name: 'BDO', image: '/Logo7.jpeg' },
      { id: 8, name: 'Forvis', image: '/Logo8.png' },
            { id: 9, name: 'Cyril', image: '/Logo9.png' },
             { id: 10, name: 'Trilegal', image: '/Logo10.png' },
              { id: 11, name: 'JSA', image: '/Logo11.png' },
              { id: 12, name: 'NDA', image: '/Logo12.png' },
                { id: 13, name: 'SAM', image: '/Logo13.jpeg' },
  ];

  const logos = [...partnerLogos, ...partnerLogos]; 
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!container) return;

      scrollAmount += 0.5;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      }

      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
       
        <div className="inline-block text-2xl border font-bold border-[#789BFF] text-[#789BFF] rounded-full px-6 py-2 mb-6">
          Our Partners
        </div>

      
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Built on Trust. Partnered for Impact.
        </h2>

       
        <p className="text-lg mb-12">
          Our partners represent the benchmark of professional and ethical standards.
        </p>

       
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden whitespace-nowrap gap-12"
        >
          {logos.map((partner, index) => (
          <div
  key={`${partner.id}-${index}`}
  className="w-64 h-36 flex items-center justify-center bg-gray-50 rounded-lg shadow-md p-6 flex-shrink-0"
>
  <img
    src={partner.image}
    alt={partner.name}
    className="w-full h-full object-contain"
  />
</div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;