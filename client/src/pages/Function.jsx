import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPodcast, FaRegNewspaper, FaRegFileAlt } from "react-icons/fa";


const categories = [
  "All",
  "LEGAL",
  "RISK&COMPLIANCE",
  "FINANCE",
  "HR",
  "SUSTAINABILITY",
  "INFORMATION SECURITY",
  "CISO OFFICE",
];


const content = {
  News: [
    {
      title: "Policy Shift for CFOs",
      tags: ["FINANCE", "CFO", "Regulation"],
      image: "/News1.svg",
    },
    {
      title: "Data Risk Outlook 2025",
      tags: ["INFORMATION SECURITY", "CISO", "Cyber Risk"],
      image: "/News2.svg",
    },
    {
      title: "HR Strategy Post-ESG",
      tags: ["HR", "CHRO", "Workforce"],
      image: "/News3.svg",
    },
  ],
  Podcasts: [
    {
      title: "The CFO Reset",
      tags: ["FINANCE", "CFO", "Strategic Finance"],
      image: "/Pod1.svg",
    },
    {
      title: "Inside the GC’s Mind",
      tags: ["LEGAL", "GC", "Legal Innovation"],
      image: "/Pod2.svg",
    },
  ],
};


const articles = [
  {
    id: 1,
    title: "The Invisible Risk in Digital Diagnostics",
    category: ["Legal", "Medical Devices"],
    image: "/Biplab Lenin.jpeg",
    authors: [{ name: "Biplab Lenin", image: "/Biplab Lenin.jpeg" }],
    path: "/articles/article/1",
  },
  {
    id: 2,
    title: "India-UK FTA",
    category: ["Finance", "Foreign Trade"],
    image: "/Parth.jpg",
    authors: [
      { name: "Parth S. Shah", image: "Parth.jpg" },
      { name: "Shweta Kushe", image: "Shweta.jpg" },
    ],
    path: "/articles/article/2",
  },
  {
    id: 3,
    title: "Cloud Misconfiguration is the New Malware",
    category: ["Information Security", "Cloud Configurations"],
    image: "Shrikrishna Dikshit.jpg",
    authors: [
      { name: "Shrikrishna Dikshit ", image: "Shrikrishna Dikshit.jpg" },
      { name: "Rachit Shukla ", image: "Rachit Shukla.jpeg" },
    ],
    path: "/articles/article/3",
  },
  {
    id: 4,
    title: "Labour, Employment, and HR Issues ",
    category: ["Legal", "Employment"],
    image: "/Raunak Singh.jpeg",
    authors: [{ name: "Raunak Singh", image: "Raunak Singh.jpeg" }],
    path: "/articles/article/4",
  },
  {
    id: 5,
    title: "Looks Like Content, Acts Like Ads",
    category: ["Legal", "E Commerce"],
    image: "/Sumit Ghoshal.webp",
    authors: [
      { name: "Sumit Ghoshal ", image: "/Sumit Ghoshal.webp" },
      { name: "Karishma", image: "/Karishma.jpeg" },
    ],
    path: "/articles/article/5",
  },
  {
    id: 6,
    title: "Finfluencers in India",
    category: ["Legal", "Consumer Protection"],
    image: "/Tanvi Muraleedharan.jpeg",
    authors: [
      { name: "Tanvi Muraleedharan ", image: "/Tanvi.jpg" },
      { name: "Utkarsha Sharma ", image: "/Utkarsha Sharma .jpg" },
    ],
    path: "/articles/article/6",
  },
  {
    id: 7,
    title: "How to Effectively Negotiate with Trade Unions in India",
    category: ["Legal", "Employment", "GC", "CHRO"],
    image: "/Rohitaashv Sinha.jpeg",
    authors: [{ name: "Rohitaashv Sinha", image: "/Rohitaashv Sinha.jpeg" }],
    path: "/articles/article/7",
  },
  {
    id: 8,
    title: "From Shelf to Scooter",
    category: ["Legal", "E Commerce"],
    image: "/Rahul Sundaram.webp",
    authors: [{ name: "Rahul Sundaram", image: "/Rahul Sundaram.webp" }],
    path: "/articles/article/8",
  },
  {
    id: 9,
    title: "Risk Management Playbook",
    category: ["Legal", "Fund Governance"],
    image: "/Shagoofa Rashid Khan.jpeg",
    authors: [{ name: "Shagoofa Rashid Khan", image: "/Shagoofa Rashid Khan.jpeg" }],
    path: "/articles/article/9",
  },
];

export default function Function() {
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const isVisible = (tags) =>
    selectedCategory === "All" ||
    tags.map((t) => t.toUpperCase()).includes(selectedCategory.toUpperCase());

  const renderCards = (items) =>
    items
      .filter((item) => isVisible(item.tags || item.category))
      .map((item, index) => {
       

        const tags = item.tags || item.category || [];
        const path = item.path || "#";

        return (
          <Link
            to={path}
            key={`${item.title}-${index}`}
            className="block bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition duration-300"
          >
            <div className="relative w-full h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain "
              />
              
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag, i) => (
                  <span
                    key={`${tag}-${i}`}
                    className="bg-blue-100 text-[#789BFF] text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {item.authors && (
                <div className="flex -space-x-3">
                  {item.authors.map((author, i) => (
                    <img
                      key={i}
                      src={author.image}
                      alt={author.name}
                      title={author.name}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
              )}
            </div>
          </Link>
        );
      });

  return (
    <div className="min-h-screen px-6 py-10 space-y-16">
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-xs font-semibold px-4 py-2 transition ${
              selectedCategory === category
                ? "bg-[#789BFF] text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-[#789BFF] inline-block">
          News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCards(content.News, "news")}
        </div>
      </section>

      {/* Articles Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-[#789BFF] inline-block">
          Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCards(articles, "article")}
        </div>
      </section>

      {/* Podcasts Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-[#789BFF] inline-block">
          Podcasts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCards(content.Podcasts, "podcast")}
        </div>
      </section>
    </div>
  );
}
