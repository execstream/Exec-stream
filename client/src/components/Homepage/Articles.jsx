import React from "react";
import { Link } from "react-router-dom";

const truncateWords = (text, wordLimit) => {
  if (!text) return "";
  const words = text.trim().split(/\s+/);
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const articles = [
  {
    id: 1,
    title: 'The First 100 Days on a Board: What Every General Counsel(GC)-turned-...',
    category: ['Legal', 'Board Governance'],
    image: '/medical.jpg',
    authors: [
      {
        name: 'Atul Juvle ',
        image: '/Atul Juvle.jpg',
        designation: 'Independent Director \n AMNS Ports India Ltd. ',
        company: '\n Consulting General Counsel \n AP2 Legal Consulting LLP',
      }
    ],
    path: '/articles/article/12',
  },
  {
    id: 2,
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
    id: 3,
    title: 'India-UK FTA: A blueprint trade agreement for the future',
    category: ['Finance', 'Foreign Trade'],
    image: '/Parth.jpg',
    authors: [
      { name: 'Parth S. Shah', image: 'Parth.jpg', designation: 'Director(Global Trade Advisory)', company: 'Delloite Touche Tohmatsu India' },
      { name: 'Shweta Kushe', image: 'Shweta.jpg', designation: 'Assistant Manager(Global Trade Advisory)', company: 'Delloite Touche Tohmatsu India' }
    ],
    path: '/articles/article/2',
  },
  {
    id: 4,
    title: 'Cloud Misconfiguration is the New Malware',
    category: ['Info Sec', 'Cloud Configurations'],
    image: '/cloud.jpg',
    authors: [
      { name: 'Shrikrishna Dikshit', image: 'Shrikrishna Dikshit.jpg', designation: 'Partner(Digital & Cyber Security)', company: 'Baker Tilly ASA India LLP' },
      { name: 'Rachit Shukla', image: 'Rachit Shukla.jpeg', designation: 'Executive Partner(Digital & Cyber Security)', company: 'Baker Tilly ASA India LLP' }
    ],
    path: '/articles/article/3',
  },
  {
    id: 5,
    title: 'Labour, Employment, and HR Issues in M&A Transactions: Navigating People Risks in Deal-Making',
    category: ['Legal', 'Employment'],
    image: '/legal.jpg',
    authors: [{ name: 'Raunak Singh', image: 'Raunak Singh.jpeg', designation: 'Partner', company: 'Anoma Legal' }],
    path: '/articles/article/4',
  },
  {
    id: 6,
    title: "Looks Like Content, Acts Like Ads: The Legal Risk in E-Commerce's Influencer",
    category: ['Legal', 'E Commerce'],
    image: '/Karishma.jpeg',
    authors: [
      { name: 'Sumit Ghoshal', image: '/Sumit Ghoshal.webp', designation: 'Senior Partner', company: 'AZB & Partners' },
      { name: 'Karishma', image: '/Karishma.jpeg', designation: 'Senior Associate', company: 'AZB & Partners' }
    ],
    path: '/articles/article/5',
  },
  {
    id: 7,
    title: "Finfluencers in India: The Do's and Don’ts under SEBI’s Regulatory Framework",
    category: ['Legal', 'Consumer Protection'],
    image: '/Utkarsha Sharma .jpg',
    authors: [
      { name: 'Tanvi Muraleedharan', image: '/Tanvi.jpg', designation: 'Partner', company: 'LawKNIT Partners' },
      { name: 'Utkarsha Sharma', image: '/Utkarsha Sharma .jpg', designation: 'Senior Associate', company: 'LawKNIT Partners' }
    ],
    path: '/articles/article/6',
  },
  {
    id: 8,
    title: 'How to Effectively Negotiate with Trade Unions in India',
    category: ['Legal', 'Employment', 'GC', 'CHRO'],
    image: '/Rohitaashv Sinha.svg',
    authors: [{ name: 'Rohitaashv Sinha', image: '/Rohitaashv Sinha.jpeg', designation: 'Partner(Labour & Employment)', company: 'King Stubb & Kasiva' }],
    path: '/articles/article/7',
  },
  
];

const getRows = (articles) => {
  const rows = [];
  for (let i = 0; i < articles.length; i += 4) {
    rows.push(articles.slice(i, i + 4));
  }
  return rows;
};

const Articles = () => {
  const articleRows = getRows(articles);

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#000033] relative overflow-hidden min-h-screen">
      <h2 className="text-4xl font-bold text-[#789BFF] text-center mb-12">Articles</h2>

      <div className="space-y-12 max-w-7xl mx-auto">
        {articleRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {row.map((article) => (
              <Link
                key={article.id}
                to={article.path || "#"}
                className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition hover:-translate-y-1 hover:shadow-xl duration-300 cursor-pointer mx-auto"
              >
                <div className="p-4">
                  <div className="w-full aspect-square rounded-md overflow-hidden">
                    <img
                      src={article.authors?.[0]?.image?.trim()}
                      alt={article.authors?.[0]?.name || "Author"}
                      className="w-full h-full object-cover bg-white"
                      onError={(e) =>
                        (e.currentTarget.src = "https://via.placeholder.com/300x300?text=Author")
                      }
                    />
                  </div>
                </div>

                <div className="px-4 pb-4 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-md font-bold text-[#789BFF] font-inter">
                      {article.authors?.[0]?.name}
                    </p>
                    {article.authors?.[0]?.designation && (
                      <p className="text-xs text-gray-600 font-inter whitespace-pre-line">
                        {article.authors[0].designation}
                      </p>
                    )}
                    {article.authors?.[0]?.company && (
                      <p className="text-xs text-gray-600 font-inter mb-3 whitespace-pre-line">
                        {article.authors[0].company}
                      </p>
                    )}
                    <h3 className="text-base font-bold text-gray-900 leading-snug my-3">
                      {truncateWords(article.title, 15)}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {article.category.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-bold px-2 py-1 bg-[#789BFF] text-white rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link to="/articles">
          <button className="border border-[#789BFF] bg-white text-[#789BFF] px-6 py-2 rounded-full hover:bg-[#789BFF] hover:text-white transition-colors font-semibold text-sm">
            VIEW ALL
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Articles;
