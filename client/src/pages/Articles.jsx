import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'All',
  'LEGAL',
  'DIGITAL',
  'FINANCE',
  'HR',
  'SUSTAINABILITY',
  'INFORMATION SECURITY',
];


const articles = [
  {
    id: 9,
    title: 'Risk Management Playbook for Alternative Investment Funds',
    category: ['Legal', 'Fund Governance'],
    image: '/Shagoofa Rashid Khan.svg',
    authors: [{ name: 'Shagoofa Rashid Khan', image: '/Shagoofa Rashid Khan.jpeg' }],
  },

  
  {
    id: 2,
    title: 'India-UK FTA: A blueprint trade agreement for the future',
    category: ['Finance', 'Foreign Trade'],
    image: '/Parth.jpg',
    authors: [
      { name: 'Parth S. Shah', image: 'Parth.jpg' },
      { name: 'Shweta Kushe', image: 'Shweta.jpg' },
    ],
  },
  {
    id: 3,
    title: 'Cloud Misconfiguration is the New Malware',
    category: ['Information Security', 'Cloud Configurations'],
    image: '/cloud.jpg',
    authors: [
      { name: 'Shrikrishna Dikshit ', image: 'Shrikrishna Dikshit.jpg' },
      { name: 'Rachit Shukla ', image: 'Rachit Shukla.jpeg' },
    ],
  },
  {
    id: 4,
    title: 'Labour, Employment, and HR Issues in M&A Transactions: Navigating People Risks in Deal-Making ',
    category: ['Legal', 'Employment'],
    image: '/legal.jpg',
    authors: [{ name: 'Raunak Singh', image: 'Raunak Singh.jpeg' }],
  },
  {
    id: 5,
    title: "Looks Like Content, Acts Like Ads: The Legal Risk in E-Commerce's Influencer",
    category: ['Legal', 'E Commerce'],
    image: '/Karishma.jpeg',
    authors: [
      { name: 'Sumit Ghoshal ', image: '/Sumit Ghoshal.webp' },
      { name: 'Karishma', image: '/Karishma.jpeg' },
    ],
  },
  {
    id: 6,
    title: "Finfluencers in India: The Do's and Don’ts under SEBI’s Regulatory Framework",
    category: ['Legal', 'Consumer Protection'],
    image: '/Utkarsha Sharma .jpg',
    authors: [
      { name: 'Tanvi Muraleedharan ', image: '/Tanvi Muraleedharan.jpeg' },
      { name: 'Utkarsha Sharma ', image: '/Utkarsha Sharma .jpg' },
    ],
  },
 
  {
    id: 7,
    title: ' How to Effectively Negotiate with Trade Unions in India',
    category: ['Legal', 'Employment','GC','CHRO'],
    image: '/Rohitaashv Sinha.svg',
    authors: [{ name: 'Rohitaashv Sinha', image: '/Rohitaashv Sinha.jpeg' }],
  },
   {
    id: 8,
    title: "From Shelf to Scooter: The Legal Mess Behind India's 10-Minute Commerce Boom (Dark Stores, Quick Commerce & Zonal Compliance Chaos)",
    category: ['Legal', 'E Commerce'],
    image: '/Rahul Sundaram.webp',
    authors: [{ name: 'Rahul Sundaram', image: '/Rahul Sundaram.webp' }],
  },
  
 {
    id: 1,
    title: 'The Invisible Risk in Digital Diagnostics: Who Regulates AI-Powered Medical Devices in India?',
    category: ['Legal', 'Medical Devices'],
    image: '/medical.jpg',
    authors: [{ name: 'Biplab Lenin', image: '/Biplab Lenin.jpeg' }],
  },

];

const ARTICLES_PER_PAGE = 50;

const Articles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) =>
          a.category.some(
            (cat) => cat.toUpperCase() === activeCategory.toUpperCase()
          )
        );

  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const columns = [[], [], []];

 if (currentArticles.length > 0) {
  if (activeCategory === 'All') {
    for (let i = 0; i < currentArticles.length; i += 5) {
      const group = currentArticles.slice(i, i + 5);
      if (group[0]) columns[0].push(group[0]);
      if (group[1]) columns[0].push(group[1]);
      if (group[2]) columns[1].push({ ...group[2], isTall: true });
      if (group[3]) columns[2].push(group[3]);
      if (group[4]) columns[2].push(group[4]);
    }
  } else {
    currentArticles.forEach((article, index) => {
      columns[index % 3].push({ ...article, isTall: false });
    });
  }
}


 const gridClass = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 items-start';


  return (
    <section className="px-6 py-10 bg-white min-h-screen">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setCurrentPage(1);
            }}
            className={`text-xs font-semibold px-3 py-1  ${
              activeCategory === cat
                ? 'bg-[#789BFF] text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-blue-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article Grid */}
      <div className={gridClass}>
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6">
            {col.map((article) => renderCard(article))}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:text-[#789BFF] hover:border-[#789BFF] transition"
          >
            &larr; Previous
          </button>
          <span className="text-lg font-semibold text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-full bg-[#789BFF] text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:bg-black transition"
          >
            Next &rarr;
          </button>
        </div>
      )}
    </section>
  );
};

const renderCard = (article) => {
  const isTallCard = article.isTall;

  const bgImage =
    article?.authors?.[0]?.image?.trim() ||
    'https://via.placeholder.com/600x400?text=No+Image';

  return (
    <Link to={`/articles/article/${article.id}`} key={article.id}>
      <div
        className={`relative rounded-xl overflow-hidden shadow-lg group border border-black
        h-72
        ${isTallCard ? 'lg:h-[calc(2*18rem+1.5rem)]' : 'lg:h-72'}
      `}
      >
        {/* Background Image */}
        <img
          src={bgImage}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-contain"
          onError={(e) =>
            (e.currentTarget.src =
              'https://via.placeholder.com/600x400?text=No+Image')
          }
        />

        {/* Overlay */}
        <div
          className={`absolute bottom-0 left-0 w-full bg-black/50 text-white p-4
          group-hover:h-full transition-all duration-300 ease-in-out
          flex flex-col justify-end
          h-48 ${isTallCard ? 'lg:h-64' : 'lg:h-48'}
        `}
        >
          <h3 className="text-lg font-semibold group-hover:text-xl transition-all duration-300">
            {article.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {article.category.map((cat, index) => (
              <span
                key={index}
                className="bg-white text-gray-800 text-xs font-semibold px-3 py-1"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="flex gap-2 mt-3">
            {article.authors.map((author, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={author.image.trim()}
                  alt={author.name}
                  className="w-8 h-8 rounded-full object-contain border border-white"
                  onError={(e) =>
                    (e.currentTarget.src =
                      'https://via.placeholder.com/32?text=A')
                  }
                />
                <span className="text-xs text-center">{author.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};


export default Articles;
