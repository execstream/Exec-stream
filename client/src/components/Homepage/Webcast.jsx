import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Webcast = () => {
  const webcastItems = [
    {
      id: 1,
      image: '/Web1.svg',
      title: 'Cloud Security for Financial Services',
      description:
        'Financial industry is a heavily regulated industry such that embracing...',
      date: 'June 28, 2021',
      selected: false,
    },
    {
      id: 2,
      image: '/Web2.svg',
      title:
        'A Follow-Up Session: The Five Most Dangerous New Attack Techniques...and What to Do for Each',
      description:
        'Join this follow up session that was presented by the SANS institute at RSAC...',
      date: 'June 28, 2021',
      selected: false,
    },
    {
      id: 3,
      image: '/Web3.svg',
      title: 'Leveraging AI for Cybersecurity Workflow Augmentation',
      description:
        'This session explores how AI can be leveraged to augment cybersecurity...',
      date: 'June 28, 2021',
      selected: false,
    },
    {
      id: 4,
      image: '/Web4.svg',
      title: "Beyond the Basics: SCRM from a Hacker's Perspective",
      description:
        'This webcast delves into the evolving landscape of Supply Chain Risk....',
      date: 'June 28, 2021',
      selected: false,
    },
    {
      id: 5,
      image: '/Web1.svg',
      title: "Beyond the Basics: SCRM from a Hacker's Perspective",
      description:
        'This webcast delves into the evolving landscape of Supply Chain Risk....',
      date: 'June 28, 2021',
      selected: false,
    },
  ];

  return (
    <div className="w-full py-8 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col w-full">
            <div className="flex items-center mb-1">
              <h2 className="text-2xl font-bold text-gray-800 mr-4 whitespace-nowrap">Webcast</h2>
              <div
                className="h-[1px] w-full"
                style={{
                  background: 'linear-gradient(to right, black 30%, #d1d5db 30%)',
                }}
              />
            </div>
          </div>
          <a
            href="/webcasts"
            className="text-[#789BFF] hover:text-black text-lg whitespace-nowrap ml-4"
          >
            View All
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {webcastItems.map((item) => (
            <div
              key={item.id}
              className={`group bg-white overflow-hidden border transition-all duration-300 transform h-80 flex flex-col ${
                item.selected
                  ? 'border-[#789BFF] bg-[#F8F9FD] scale-[1.06]'
                  : 'border-gray-200'
              } hover:border-[#789BFF] hover:bg-[#F8F9FD] hover:scale-[1.06] hover:shadow-md`}
            >
              <div className="w-full h-48 overflow-hidden p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="p-3 flex flex-col h-full">
                <h3 className="text-sm font-semibold text-black mb-1 leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 mb-3 leading-snug line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span
                    className={`text-[10px] font-bold px-2 py-[2px] rounded-sm uppercase transition-all duration-300 ${
                      item.selected
                        ? 'bg-[#789BFF] text-white'
                        : 'bg-black text-white'
                    } group-hover:bg-[#789BFF] group-hover:text-white cursor-pointer`}
                  >
                    Webcast
                  </span>
                  <span className="text-xs text-gray-600">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4">
          <button className="p-3 border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors ">
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button className="p-3 border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors ">
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Webcast;
