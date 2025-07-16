import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Themes = () => {
  const [selectedCategory, setSelectedCategory] = useState('LEGAL');

  const categories = [
    'LEGAL', 'DATA PRIVACY', 'M & A', 'HR TECH', 'SUSTAINABILITY',
    'INFO SEC', 'HEALTHCARE', 'FINTECH', 'EMPLOYMENT','E-COMMERCE'
  ];

  const articles = [
    {
      id: 1,
      image: '/Shagoofa.jpg', 
      category: 'Legal',
      title: 'Risk Management Playbook for Alternative Investment Funds',
      author: 'Shagoofa Rashid Khan',
      date: 'July 9, 2025',
      description: 'The Alternative Investment Funds (AIF) industry has witnessed tremendous growth in the last decade on the back of quality ...',
      path:'articles/article/9'
    },
    {
      id: 2,
      image: '/Rohitaashv Sinha.jpeg', 
      category: 'Employment',
      title: 'How to Effectively Negotiate with Trade Unions in India',
      author: 'Rohitaashv Sinha',
      date: 'July 14, 2025',
      description: ' Negotiating with trade unions in India requires a thorough understanding of the legal landscape, effective communication...',
     path:'articles/article/7'
    },
    {
      id: 3,
      image: '/ES-1.jpg', 
      category: 'Info Sec',
      title: 'TRAI-RBI Spam Call Control Signal: When Consent Becomes...',
      author: 'Biplab Sengupta',
      date: 'July 14, 2025',
      description: " This isn't just about stopping spam call, it's about rewiring how organisations prove consent, control communication, and own their outreach systems.",
     path:'enterprise-signals/enterprise/1'
    },
    {
      id: 4, 
      image: '/ES-2.webp', 
      category: 'Legal',
      title: 'When Contracts Collide With Geopolitics',
      author: 'Biplab Sengupta',
      date: 'July 14, 2025',
      description: " India's Rare Earth Disruption Is a Legal, Supply Chain, and Strategic Alarm - Not Just a Trade Blip.",
     path:'enterprise-signals/enterprise/2'
    },
  ];
  return (
    <div className="w-full py-8 px-4 md:px-6 lg:px-8">
    
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          
          <h2 className="text-2xl font-bold text-gray-800">Focus Areas</h2>

        
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category, index) => (
              <span
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 text-sm font-semibold cursor-pointer transition
                  ${selectedCategory === category
                    ? 'bg-[#789BFF] text-white '
                    : 'bg-[#EFEFEF]   hover:bg-gray-300 hover:border-gray-500'
                  }
                `}
              >
                {category}
              </span>
            ))}
          </div>

          
          <a href="/categories" className="text-[#789BFF] hover:text-black">View All</a>
        </div>
      </div>

      
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {articles.map((article) => (
    <Link
      to={article.path}
      key={article.id}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group hover:shadow-lg"
    >
      <div className="w-full h-48 overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-contain" />
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold text-[#789BFF] uppercase mb-1 block">
          {article.category}
        </span>
        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">{article.title}</h3>
        <p className="text-gray-500 text-sm mb-2">
          {article.author} • {article.date}
        </p>
        <p
          className="text-gray-700 text-sm transition-all duration-300 group-hover:text-[#789BFF] group-hover:underline cursor-pointer"
        >
          {article.description}
        </p>
      </div>
    </Link>
  ))}
</div>


    </div>
  );
};

export default Themes;
