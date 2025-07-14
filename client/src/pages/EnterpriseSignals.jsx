import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'All',
  'LEGAL',
  'RISK & COMPLIANCE',
  'FINANCE',
  'HR',
  'SUSTAINABILITY',
  'INFORMATION SECURITY',
 
];

const articles = [
  {
    id: 1,
    title: 'TRAI-RBI Spam Call Control Signal: When Consent Becomes Code, and Marketing Becomes Liability',
    category: ['Information Security', 'Privacy','BFSI'],
    image: '/ES-1.jpg',
    authors: [{ name: 'Biplab Sengupta', image: '/Biplab.jpeg' }],
  },
  {
    id: 2,
    title: 'When Contracts Collide With Geopolitics',
    category: ['Legal', 'Contracts','GC'],
    image: '/ES-2.webp',
     authors: [{ name: 'Biplab Sengupta', image: '/Biplab.jpeg' }],
  },
  {
    id: 3,
   title: "India's ESG Bonds: Debt, Disclosures, and the Double Game of Promises",

    category: ['Finance', 'Sustainability', 'CFO','CSO','Green Financing'],
    image: '/ES-3.jpg',
     authors: [{ name: 'Biplab Sengupta', image: '/Biplab.jpeg' }],
  },
  {
    id: 4,
    title: 'HR & ESG: From Back Office to Boardroom',
    category: ['HR', 'WorkForce Governance', 'CHRO'],
    image: '/ES-4 .jpg',
     authors: [{ name: 'Biplab Sengupta', image: '/Biplab.jpeg' }],
  },
 
];

const Articles = () => {
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  const filteredArticles =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) =>
          a.category.some(
            (cat) => cat.toUpperCase() === activeCategory.toUpperCase()
          )
        );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const columns = [[], [], []];

  if (currentArticles.length > 0) {
    if (activeCategory === 'All') {
      if (currentArticles[0]) columns[0].push(currentArticles[0]);
      if (currentArticles[1]) columns[0].push(currentArticles[1]);
      if (currentArticles[2])
        columns[1].push({ ...currentArticles[2], isTall: true });
      if (currentArticles[3]) columns[2].push(currentArticles[3]);
      if (currentArticles[4]) columns[2].push(currentArticles[4]);

      for (let i = 5; i < currentArticles.length; i++) {
        columns[i % 3].push(currentArticles[i]);
      }
    } else {
      currentArticles.forEach((article, index) => {
        columns[index % 3].push({ ...article, isTall: false });
      });
    }
  }

  const gridClass =
    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start';

  return (
    <section className="px-6 py-10 bg-white">
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

      <div className={gridClass}>
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6">
            {col.map((article) => renderCard(article))}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full bg-[#789BFF] text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:bg-black transition duration-300 ease-in-out"
          >
            &larr; Previous
          </button>
          <span className="text-lg font-semibold text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-full bg-[#789BFF] text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:bg-black transition duration-300 ease-in-out"
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
  const baseHeightClass = 'h-72'; // All cards same height on mobile
  const tallCardHeightClass = 'lg:h-[calc(2*18rem+1.5rem)]';
  const normalCardHeightClass = 'lg:h-72';

  const combinedHeightClass = `${baseHeightClass} ${isTallCard ? tallCardHeightClass : normalCardHeightClass}`;

  const bgImage =
    article.image?.trim() || 'https://via.placeholder.com/600x400?text=No+Image';

  return (
    <Link to={`/enterprise-signals/enterprise/${article.id}`} key={article.id}>
      <div
        className={`relative rounded-xl overflow-hidden shadow-md bg-cover bg-center group ${combinedHeightClass}`}
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
        onError={(e) => {
          e.currentTarget.style.backgroundImage =
            "url('https://via.placeholder.com/600x400?text=No+Image')";
        }}
      >
        <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4
          h-48 lg:h-48 group-hover:h-full transition-all duration-300 ease-in-out
          flex flex-col justify-end">
          <h3 className="text-lg font-semibold group-hover:text-xl transition-all duration-300 ease-in-out">
            {article.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {article.category.map((cat, index) => (
              <span
                key={index}
                className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 "
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
                  className="w-8 h-8 rounded-full object-cover border border-white"
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
