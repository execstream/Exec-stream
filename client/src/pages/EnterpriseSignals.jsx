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
    id: 6,
    title: 'AI Leadership Is Surging - But So Are the Risks: Why CXOs Must Balance Acceleration with Accountability',
    category: ['AI Skills', 'Leadership', 'HR', 'CHRO'],
    image: '/ES-6.webp',
    authors: [{ name: 'Biplab Sengupta', image: '/Biplab.jpeg' }],
  },
  {
    id: 5,
    title: ' The Last-Mile Failure of Finance Transformation. And How CFOs Can Fix It.',
    category: ['Finance', 'Digital Transformation', 'CFO','Finance Transformation'],
    image: '/ES-5.png',
    authors: [{ name: 'Biplab Sengupta', image: '/Biplab.jpeg' }],
  },
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
            className={`text-xs font-semibold px-3 py-1 ${
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

  // Use the article's main image for the card, not the author's.
  // This seems more consistent with the data structure.
  const bgImage =
    article?.image?.trim() ||
    'https://via.placeholder.com/600x400?text=No+Image';

  return (
    <Link to={`/enterprise-signals/enterprise/${article.id}`} key={article.id}>
      <div
        className={`relative rounded-xl overflow-hidden shadow-lg group border border-black h-72 ${
          isTallCard ? 'lg:h-[calc(2*18rem+1.5rem)]' : 'lg:h-72'
        }`}
      >
        {/* Background Image */}
        <img
          src={bgImage}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover" // Changed to object-cover for better fit
          onError={(e) =>
            (e.currentTarget.src =
              'https://via.placeholder.com/600x400?text=No+Image')
          }
        />

        {/* Overlay */}
        <div
          className={`absolute bottom-0 left-0 w-full bg-black/50 text-white p-4 group-hover:h-full transition-all duration-300 ease-in-out flex flex-col justify-end h-48 ${
            isTallCard ? 'lg:h-64' : 'lg:h-48'
          }`}
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
                  className="w-8 h-8 rounded-full object-cover border border-white" // Changed to object-cover
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