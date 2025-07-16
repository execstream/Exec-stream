import React from 'react';
import { Link } from 'react-router-dom';  

const MostPopular = () => {
  const popularArticles = [
    {
      id: 1,
      title: 'Risk Management Playbook for Alternative Investment Funds',
      category: ['Legal', 'Fund Governance'],
      image: '/medical.jpg',
      authors: [
        {
          name: 'Shagoofa Rashid Khan',
          image: '/Shagoofa.jpg',
          designation: 'Senior Partner ',
          company: 'AZB & Partners',
        }
      ],
      path: '/articles/article/9',
    },
    {
      id: 5,
      title: "Looks Like Content, Acts Like Ads: The Legal Risk in E-Commerce's Influencer",
      category: ['Legal', 'E Commerce'],
      image: '/Karishma.jpeg',
      authors: [
        { name: 'Sumit Ghoshal', image: '/Sumit Ghoshal.webp' },
        { name: 'Karishma', image: '/Karishma.jpeg' }
      ],
      path: '/articles/article/5',
    },
    {
      id: 6,
      title: "Finfluencers in India: The Do's and Don’ts under SEBI’s Regulatory Framework",
      category: ['Legal', 'Consumer Protection'],
      image: '/Utkarsha Sharma .jpg',
      authors: [
        { name: 'Tanvi Muraleedharan', image: '/Tanvi.jpg' },
        { name: 'Utkarsha Sharma', image: '/Utkarsha Sharma .jpg' }
      ],
      path: '/articles/article/6',
    },
    {
      id: 7,
      title: 'How to Effectively Negotiate with Trade Unions in India',
      category: ['Legal', 'Employment', 'GC', 'CHRO'],
      image: '/Rohitaashv Sinha.svg',
      authors: [{ name: 'Rohitaashv Sinha', image: '/Rohitaashv Sinha.jpeg' }],
      path: '/articles/article/7',
    },
    {
      id: 8,
      title: "From Shelf to Scooter: The Legal Mess Behind India's 10-Minute Commerce Boom",
      category: ['Legal', 'E Commerce'],
      image: '/Rahul Sundaram.webp',
      authors: [{ name: 'Rahul Sundaram', image: '/Rahul Sundaram.webp' }],
      path: '/articles/article/8',
    }
  ];

  const latestPost = popularArticles[0];

  return (
    <div className="border border-[#D9D9D9] rounded-xl p-4 w-full max-w-full sm:max-w-[350px] bg-[#FBFAF9] mx-auto">
      <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
        Latest Articles
      </h3>

      <Link to={latestPost.path} className="block mb-6 cursor-pointer">
        {latestPost.authors[0]?.image && (
          <img
            src={latestPost.authors[0].image}
            alt={latestPost.authors[0].name}
            className="w-full aspect-video object-cover rounded-xl mb-3"
          />
        )}
        <span className="text-[10px] font-semibold px-2 py-[2px] bg-[#789BFF] text-white rounded mb-2 inline-block uppercase">
          {latestPost.category[0]}
        </span>
        <h4 className="text-[15px] font-bold leading-snug text-gray-900 mb-1">
          {latestPost.title.length > 80 ? latestPost.title.slice(0, 80) + '...' : latestPost.title}
        </h4>
        <p className="text-xs text-gray-600 mb-2">
          {latestPost.title.length > 100 ? latestPost.title.slice(0, 100) + '...' : latestPost.title}
        </p>

        <div className="flex items-center space-x-3">
          {latestPost.authors[0]?.image && (
            <img
              src={latestPost.authors[0].image}
              alt={latestPost.authors[0].name}
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
          <p className="text-[11px] font-semibold uppercase text-gray-500 tracking-wide">
            {latestPost.authors.map((author) => author.name).join(', ')}
          </p>
        </div>
      </Link>

      {popularArticles.slice(1).map((item) => (
        <Link
          to={item.path}
          key={item.id}
          className="flex items-start gap-3 mb-4 cursor-pointer hover:bg-gray-100 rounded-md p-2"
        >
          {item.authors[0]?.image && (
            <img
              src={item.authors[0].image}
              alt={item.authors[0].name}
              className="w-10 h-10 object-cover rounded-full flex-shrink-0"
            />
          )}
          <div className="flex-1">
            <h5 className="text-sm font-semibold text-gray-900 leading-tight hover:underline">
              {item.title.length > 60 ? item.title.slice(0, 60) + '...' : item.title}
            </h5>
            <p className="text-[11px] text-gray-600 uppercase mt-1 font-medium">
              {item.authors.map((author) => author.name).join(', ')}
            </p>
          </div>
        </Link>
      ))}

      <div className="text-center mt-5">
        <Link to="/articles">
          <button className="px-5 py-2 text-sm rounded-full bg-[#789BFF] hover:bg-[#5f87ff] text-white transition">
            VIEW ALL
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MostPopular;
