import React from "react";
import { Link } from "react-router-dom";

const popularTags = [
  "LEGAL",
  "DIGITAL",
  "FINANCE",
  "LITIGATION",
  "CYBER SECURITY",
  "CXO",
  "CFO",
  "SUSTAINABILITY",
  "HR",
  "INDIA",
  "MIDDLE EAST",
  "INTERNATIONAL",
];

const featuredArticles = [
  {
    id: 1,
    image: "/ES-1.jpg",
    title: "TRAI-RBI Spam Call Control Signal..",
    path: "/enterprise-signals/enterprise/1",
  },
  {
    id: 2,
    image: "/ES-2.webp",
    title: "When Contracts Collide With Geopolitics",
    path: "/enterprise-signals/enterprise/2",
  },
  {
    id: 3,
    image: "/ES-3.jpg",
    title: "India's ESG Bonds: Debt, Disclosures, and the...",
    path: "/enterprise-signals/enterprise/3",
  },
];

const Sidebar = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Subscribe Section */}
      <div className="bg-white rounded-lg p-4 shadow-md">
        <h3 className="text-lg font-bold mb-2">Subscribe Us</h3>
        <p className="text-sm text-gray-600 mb-3">
          Get Subscribe To Our Latest News & Update
        </p>
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none"
        />
        <button className="w-full bg-[#789BFF] text-white py-2 rounded-full hover:bg-black">
          Subscribe
        </button>
      </div>

      {/* Popular Tags */}
      <div className="bg-white p-6 mt-6">
        <div className="h-[1px] w-full bg-black mb-4"></div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">POPULAR TAGS</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm border border-gray-300 text-gray-700 cursor-pointer hover:text-[#789BFF] transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      <div className="bg-white p-6 mt-6">
        <div className="h-[1px] w-full bg-black mb-4"></div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">FEATURED ARTICLES</h3>
        <div className="space-y-4">
          {featuredArticles.map((article) => (
            <Link
              to={article.path}
              key={article.id}
              className="flex items-start gap-3 group"
            >
              <div className="w-20 h-16 bg-gray-200 rounded-md overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-800 text-sm font-medium leading-snug group-hover:text-[#789BFF] transition-colors">
                {article.title}
              </p>
            </Link>
          ))}
        </div>
        <Link to="/articles" className="hover:underline text-sm mt-4 block">
          See more
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
