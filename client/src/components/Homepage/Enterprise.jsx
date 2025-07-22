import React from 'react';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  const editorsPick = {
    id: 1,
    category: 'Infosec',
    title: 'KYC, Crypto & The Cracks Within: The CoinDCX Breach as a Case Study in Platform Risk Maturity',
    author: 'Biplab Sengupta',
    date: 'July 22, 2025',
    image: '/ES-11.jpg',
    path: '/enterprise-signals/enterprise/11',
  };

  const newsItems = [
    {
    id: 1,
    category: 'HR',
    title: 'When Public Moments Go Too Far: Legal, Privacy, People & Brand Faultlines in the Kiss Cam Controversy',
   
    date: 'July 21, 2025',
    image: '/ES-10.webp',
    path: '/enterprise-signals/enterprise/10',
  },
    {
      id: 2,
      category: 'Finance',
      title: "After 285 Edits, India’s New Tax Code Inches Closer to Reality. CFOs Stay on the Watchtower",
      date: 'July 18, 2025',
      image: '/ES-7.jpg',
      path: '/enterprise-signals/enterprise/7',
    },
    {
      id: 3,
      category: 'AI Skills',
      title: 'AI Leadership Is Surging - But So Are the Risks: Why CXOs Must Balance Acceleration with Accountability',
      date: 'July 17, 2025',
      image: '/ES-6.webp',
      path: '/enterprise-signals/enterprise/6',
    },
  ];

  return (
  <div className="w-full py-8 px-4 md:px-6 lg:px-8">
  <div className="flex flex-col gap-8">
  
    <div className="flex items-center justify-between">
      <div className="flex items-center w-full">
        <h2 className="text-2xl font-bold text-gray-800 mr-4 whitespace-nowrap">
          News & Analysis
        </h2>
        <div className="h-px flex-grow"
          style={{
            background: "linear-gradient(to right, black 30%, #d1d5db 30%)"
          }}
        />
      </div>
      <Link
        to="/news-&-analysis"
        className="text-[#789BFF] hover:text-black ml-4 whitespace-nowrap"
      >
        View All
      </Link>
    </div>

   
    <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
      
      <div className="lg:w-1/2 flex flex-col">
        <Link
          to={editorsPick.path}
          className="relative h-96 rounded-md overflow-hidden shadow-lg flex-grow transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
        >
          <img
            src={editorsPick.image}
            alt={editorsPick.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-[#00000080] px-6 py-5 z-10">
            <span className="bg-[#789BFF] text-white text-xs px-3 py-1 mb-2 inline-block uppercase font-semibold tracking-wide">
              {editorsPick.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-1">
              {editorsPick.title}
            </h3>
            <p className="text-xs text-gray-300">
              {editorsPick.author} &nbsp; &bull; &nbsp; {editorsPick.date}
            </p>
          </div>
        </Link>
      </div>

  
      <div className="lg:w-1/2 flex flex-col">
        <div className="space-y-6 flex-grow">
          {newsItems.map((news) => (
            <Link
              to={news.path}
              key={news.id}
              className="flex items-center space-x-4 transform transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="flex-shrink-0 w-56 h-28 bg-gray-200 rounded-md overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="bg-[#789BFF] text-white text-xs px-3 py-1 mb-2 inline-block uppercase font-semibold tracking-wide">
                  {news.category}
                </span>
                <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">
                  {news.title}
                </h3>
                <p className="text-gray-500 text-sm">{news.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default LatestNews;
