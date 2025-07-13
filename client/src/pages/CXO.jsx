import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const filters = ["All", "CFO", "CHRO", "GC", "CISO", "COO", "CSO", "CMO"];

const content = {
  News: [
    {
      title: "Policy Shift for CFOs",
      tags: ["CFO", "Regulation"],
      image: "/News1.svg",
    },
    {
      title: "Data Risk Outlook 2025",
      tags: ["CISO", "Cyber Risk"],
      image: "/News2.svg",
    },
    {
      title: "HR Strategy Post-ESG",
      tags: ["CHRO", "Workforce"],
      image: "/News3.svg",
    },
  ],
  Articles: [
    {
      title: "Dispute Resolution & ADR Newsletter - June 2025",
      tags: ["LEGAL", "ELP"],
      image: "/Speaker1.svg",
    },
    {
      title: "RBI Issues New KYC Amendment Directions, 2025",
      tags: ["LEGAL", "KHAITAN"],
      image: "/Speaker2.svg",
    },
    {
      title: "India Winning Back Its Startups",
      tags: ["LEGAL", "LAW"],
      image: "/Speaker3.svg",
    },
    {
      title: "How to Effectively Negotiate with Trade Unions in India",
      tags: ["Legal", "Employment", "GC", "CHRO"],
      image: "/Rohitaashv Sinha.jpeg",
      
      path: "/articles/article/7",
    },
  ],
  Podcasts: [
    {
      title: "The CFO Reset",
      tags: ["CFO", "Strategic Finance"],
      image: "/Pod1.svg",
    },
    {
      title: "Inside the GC’s Mind",
      tags: ["GC", "Legal Innovation"],
      image: "/Pod2.svg",
    },
  ],
};

export default function CXO() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const [selectedFilter, setSelectedFilter] = useState("All");

  const isVisible = (tags) =>
    selectedFilter === "All" || tags.includes(selectedFilter);

  const renderCards = (items, isPodcast = false) =>
    items
      .filter((item) => isVisible(item.tags))
      .map((item, index) => {
        const cardContent = (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition duration-300 relative cursor-pointer"
          >
            <div className="relative w-full h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
              {isPodcast && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-[#789BFF] text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      
        if (item.path) {
          return (
            <Link to={item.path} key={index} className="block">
              {cardContent}
            </Link>
          );
        }

        return cardContent;
      });

  return (
    <div className="min-h-screen px-6 py-10 space-y-16">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`text-xs font-semibold px-4 py-2 transition ${
              selectedFilter === filter
                ? "bg-[#789BFF] text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-[#789BFF] inline-block">
          News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCards(content.News)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-[#789BFF] inline-block">
          Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCards(content.Articles)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-[#789BFF] inline-block">
          Podcasts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCards(content.Podcasts, true)}
        </div>
      </section>
    </div>
  );
}
