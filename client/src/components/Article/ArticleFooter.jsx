import React from "react";
import { Link } from "react-router-dom";


const featuredArticles = [
  {
    id: 1,
    title:
      "The Invisible Risk in Digital Diagnostics: Who Regulates AI-Powered Medical Devices in India?",
    category: ["Legal", "Medical Devices"],
    image: "/medical.jpg",
    authors: [
      {
        name: "Biplab Lenin",
        image: "/Biplab Lenin.jpeg",
        
      },
      {
        name: "Anam Chowdhary",
        image: "/Anam Chowdhary.png",
        
      },
    ],
    path: "/articles/article/1",
  },
  {
    id: 2,
    title: "India-UK FTA: A blueprint trade agreement for the future",
    category: ["Finance", "Foreign Trade"],
    image: "/Parth.jpg",
    authors: [
      { name: "Parth S. Shah", image: "/Parth.jpg" },
      { name: "Shweta Kushe", image: "/Shweta.jpg" },
    ],
    path: "/articles/article/2",
  },
  {
    id: 3,
    title: "Cloud Misconfiguration is the New Malware",
    category: ["Info Sec", "Cloud Configurations"],
    image: "/cloud.jpg",
    authors: [
      { name: "Shrikrishna Dikshit", image: "/Shrikrishna Dikshit.jpg" },
      { name: "Rachit Shukla", image: "/Rachit Shukla.jpeg" },
    ],
    path: "/articles/article/3",
  },
];

const ArticleFooter = () => {
  return (
    <div className="mt-16 space-y-12">
      <div className="bg-[#e7edff] p-6 rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-[#0e1a67]">Recommended Articles</h3>
          <Link
            to="/articles"
            className="text-sm font-medium text-[#0e1a67] hover:underline"
          >
            View More →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {featuredArticles.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className="bg-white rounded-xl p-4 shadow hover:shadow-md transition block"
            >
             <img
  src={
    item.authors?.[1]?.image || item.authors?.[0]?.image || "/fallback.jpg"
  }
  alt={item.authors?.[1]?.name || item.authors?.[0]?.name || "Author"}
  className="w-full h-auto rounded-lg mb-4"
/>


              <div className="flex flex-wrap gap-2 mb-2">
                {item.category.map((cat, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold px-2 py-[2px] rounded bg-[#E6EDFF] text-[#0e1a67]"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-[#0e1a67] leading-snug mb-2 hover:underline">
                {item.title}
              </h4>

              <div className="flex -space-x-2">
                {item.authors.map((author, i) => (
                  <img
                    key={i}
                    src={author.image}
                    alt={author.name}
                    className="w-7 h-7 rounded-full border border-white"
                    title={author.name}
                  />
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleFooter;
