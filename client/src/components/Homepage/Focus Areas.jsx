import React, { useState } from 'react';

const Themes = () => {
  const [selectedCategory, setSelectedCategory] = useState('LEGAL');

  const categories = [
    'LEGAL', 'DATA PRIVACY', 'M & A', 'HR TECH', 'SUSTAINABILITY',
    'INFO SEC', 'HEALTHCARE', 'FINTECH', 'EMPLOYMENT','E-COMMERCE'
  ];

  const articles = [
    {
      id: 1,
      image: '/Cat1.svg', 
      category: 'HR',
      title: 'What Your Relationship With Stock Market Says About You',
      author: 'Author',
      date: 'June 28, 2021',
      description: 'Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet...'
    },
    {
      id: 2,
      image: '/Cat2.svg', 
      category: 'LEGAL',
      title: 'How I Learned to Stop Worrying and Love Stock Market',
      author: 'Author',
      date: 'June 28, 2021',
      description: 'Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet...'
    },
    {
      id: 3,
      image: '/Cat3.svg', 
      category: 'STOCK MARKET',
      title: 'Why Stock Market Affects Men and Women Differently',
      author: 'Author',
      date: 'June 28, 2021',
      description: 'Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet...'
    },
    {
      id: 4, 
      image: '/Cat1.svg', 
      category: 'FINANCE',
      title: 'Global Markets: What to Expect in the Coming Quarter',
      author: 'Another Author',
      date: 'July 1, 2021',
      description: 'Donec nec massa eget sem malesuada viverra. Sed sit amet mi ipsum. Nunc nec elit eget odio finibus interdum.'
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
    <div
      key={article.id}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group hover:shadow-lg"
    >
      <div className="w-full h-48 overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
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
    </div>
  ))}
</div>


    </div>
  );
};

export default Themes;
