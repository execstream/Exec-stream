import React from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Functions = () => {
  const functionsCategories = [
    {
      name: "Finance",
      description:
        "Corporate Finance, Taxation, Regulatory Developments, Capital Strategy, and Enterprise Financial Decision-Making.",

      icon: <img src="/Finance.svg" alt="Finance icon" className="w-16 h-16" />,
    },
    {
      name: "Legal",
      description:
        "Business Law, Compliance Trends, Dispute Management, LegalTech",

      icon: <img src="/Finance.svg" alt="Legal icon" className="w-16 h-16" />,
    },
    {
      name: "HR",
      description: "HR Tech, HR Risk Management, Workforce Strategy, Talent Management, Organizational Policy, and Leadership.",
      icon: <img src="/HR.svg" alt="HR icon" className="w-16 h-16" />,
    },
    {
      name: "Sustainability",
      description:
        "ESG Compliance, ESG Reporting, Climate Risk, Circular Economy and Responsible Supply Chains.",
      icon: (
        <img
          src="/Sustainability.svg"
          alt="Sustainability icon"
          className="w-16 h-16"
        />
      ),
    },
  ];

  const topCategories = [
    {
      name: "Finance",
    
      icon: (
        <img
          src="/Financecat.svg"
          alt="Finance category icon"
          className="w-5 h-5"
        />
      ),
    },
    {
      name: "CyberSecurity",
     
      icon: (
        <img
          src="/Cyber.svg"
          alt="Cyber Security category icon"
          className="w-5 h-5"
        />
      ),
    },
    {
      name: "Data Privacy",
     
      icon: (
        <img
          src="/WhiteHouse.svg"
          alt="White House category icon"
          className="w-5 h-5"
        />
      ),
    },
    {
      name: "Legal",
     
      icon: (
        <img
          src="/Legalcat.svg"
          alt="Legal category icon"
          className="w-5 h-5"
        />
      ),
    },
    {
      name: "World",
      posts: 16,
      icon: (
        <img src="/World.svg" alt="World category icon" className="w-5 h-5" />
      ),
    },
    {
      name: "Economy",
      posts: 10,
      icon: (
        <img
          src="/Economy.svg"
          alt="Economy category icon"
          className="w-5 h-5"
        />
      ),
    },
  ];

 const industryCards = [
  {
    category: "BFSI",
    title: "Finfluencers in India: The Do's and Don’ts under SEBI’s Regulatory Framework",
    image: "Tanvi.jpg",
    path: "/articles/article/6",
  },
  {
    category: "Healthcare",
    title: "The Invisible Risk in Digital Diagnostics: Who Regulates AI-Powered Medical Devices in India?",
    image: "/Biplab Lenin.png",
    path: "/articles/article/1",
  },
  {
    category: "E-Commerce",
    title: "Looks Like Content, Acts Like Ads: The Legal Risk in E-Commerce's Influencer",
    image: "/Karishma.jpeg",
    path: "/articles/article/5",
  },
];


  const speakers = [
    { name: "Nishant Shah", avatar: "/Speaker1.svg" },
    { name: "Supratim Chakraborty", avatar: "/Speaker2.svg" },
    { name: "Raunak Singh", avatar: "/Speaker3.svg" },
    { name: "Shrikrishna Dikshit", avatar: "/Speaker4.svg" },
  ];

  const upcomingEvents = [
    {
      title: "AI for Finance Transformation",
      description:
        "15-Hours advanced masterclass on AI for Finance Transformation and Process Automation",
     
      image: "/Event1.png",
link: 'https://forms.gle/W9bSCCyPvEdwRsGU6',
     
    },
    {
      title: "Data Privacy,AI & Risk 2025",
      description:
        "15-Hour advanced masterclass on Data Privacy, Global Privacy management, AI Trust , IP and Risk Governance",
    
      image: "/Event2.png",
link: 'https://forms.gle/eNAMquJguwTYkCiS8',
      
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 md:p-8 lg:p-10  ">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Functions
                </h2>
                <div
                  className="h-px flex-grow mx-5"
                  style={{
                    background:
                      "linear-gradient(to right, black 30%, #d1d5db 30%)",
                  }}
                />
                  <Link
                  to="/function"
                  className="text-[#789BFF] hover:text-black font-medium"
                >
                  View All
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {functionsCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full">
                      {" "}
                     
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-medium text-[#789BFF] mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                <button className="p-2 border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors duration-200">
                  {" "}

                  <IoIosArrowBack className="w-5 h-5" />{" "}
          
                </button>
                <button className="p-2 border border-gray-300  text-gray-600 hover:bg-gray-100 transition-colors duration-200">
                  {" "}
                
                  <IoIosArrowForward className="w-5 h-5" />{" "}
                 
                </button>
              </div>
            </div>

           

            <div className="bg-white p-6 md:p-8 lg:p-10 ">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Industries
                </h2>
               
                <div className="h-px flex-grow mx-5 bg-gray-300" />
                <a
                  href="#"
                  className="text-[#789BFF] hover:text-blue-700 text-sm md:text-base"
                >
                  View All
                </a>
              </div>
           
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 divide-x divide-gray-200">
                {industryCards.map((card, index) => (
                 <Link to={card.path} key={index}>
  <div className="overflow-hidden hover:shadow-md transition-shadow duration-300">
    <img
      src={card.image}
      alt={card.title}
      className="w-full h-40 object-contain"
    />
    <div className="p-4">
      <span className="text-xs font-semibold uppercase tracking-wider text-[#789BFF]">
        {card.category}
      </span>
      <h3 className="text-lg font-medium text-gray-900 mt-2 leading-tight">
        {card.title}
      </h3>
    </div>
  </div>
</Link>

                ))}
              </div>
            </div>

          
            <div className="bg-white p-6 md:p-8 lg:p-10 shadow-sm rounded-lg border-b border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Partnered Events
                </h2>
                <div className="h-px flex-grow mx-5 bg-gray-300" />
                <a
                  href="#"
                  className="text-[#789BFF] hover:text-blue-700 text-sm md:text-base"
                >
                  View All
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                   <a
  key={index}
  href={event.link}
  target="_blank"
  rel="noopener noreferrer"
  className="group block overflow-hidden hover:shadow-md transition-shadow duration-300"
>
  <div className="w-full h-48 bg-white border border-[#789BFF] flex items-center justify-center">
    <img
      src={event.image}
      alt={event.title}
      className="max-w-full max-h-full object-contain"
    />
  </div>

  <div className="px-4 pt-4">
    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
      {event.tag}
    </span>
  </div>

  <div className="p-4 pt-2">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      {event.title}
    </h3>
    <p className="text-gray-600 text-sm mb-3 group-hover:text-blue-600 transition-colors duration-300">
      {event.description}
    </p>

   
  </div>
</a>



                 

                
                  </div>
                ))}
              </div>
            </div>
          </div>

       
          <div className="lg:col-span-1 flex flex-col h-full">
          
            <div className="space-y-8">
             
              <div className="bg-white p-6 md:p-8 lg:p-10">
                <div className="h-[1px] w-full bg-black mb-4 mt-4"></div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  TOP CATEGORIES
                </h2>
                <div className="space-y-3">
                  {topCategories.map((category, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-300 last:border-b-0"
                    >
                      <div className="flex items-center space-x-3">
                        {category.icon}
                        <span className="text-gray-700 font-bold text-sm">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-gray-500 text-xs">
                        {category.posts} Posts
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="flex items-center hover:underline mt-4 text-sm"
                >
                  See more <IoIosArrowForward className="ml-1 w-4 h-4" />
                </a>
              </div>

            
              <div className="bg-white px-6 md:px-8 lg:px-10">
                <div className="h-[1px] w-full bg-black mb-4"></div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  SPEAKERS
                </h2>
                <div className="space-y-4">
                  {speakers.map((speaker, index) => (
                    <div
                      key={index}
                      className="flex items-center py-2 space-x-4 border-b border-gray-300"
                    >
                      <img
                        src={speaker.avatar}
                        alt={speaker.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                      />
                      <span className="text-gray-800 font-medium">
                        {speaker.name}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
  to="/speakers"  
  className="flex items-center hover:underline mt-4 text-sm"
>
  See more <IoIosArrowForward className="ml-1 w-4 h-4" />
</Link>
              </div>
            </div>

            
            <div className="flex-grow mt-6 flex justify-center ">
              <div className="overflow-hidden ">
                <img
                  src="/ExecStream Banner.svg"
                  alt="Exec Stream Banner"
                  className="w-96 h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functions; 
