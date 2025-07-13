import React from "react";

const recommendedArticles = [
  {
    id: 1,
    image: "/Speaker1.svg",
    name: "Supratim Chakraborty",
    role: "Partner, Khaitan & Company",
    title: "RBI Issues New KYC Amendment Directions, 2025",
    tags: ["LEGAL", "KHAITAN"],
  },
  {
    id: 2,
    image: "/Speaker2.svg",
    name: "Raunak Singh",
    role: "Sr Partner, Economic Laws Practice (ELP)",
    title: "Regulatory Boost: How India Is Winning Back Its Startups Through...",
    tags: ["LEGAL", "LAW"],
  },
  {
    id: 2,
    image: "/Speaker2.svg",
    name: "Raunak Singh",
    role: "Sr Partner, Economic Laws Practice (ELP)",
    title: "Regulatory Boost: How India Is Winning Back Its Startups Through...",
    tags: ["LEGAL", "LAW"],
  },
 
];

const ArticleFooter = () => {
  return (
    <div className="mt-16 space-y-12">
     
      <div className="bg-[#e7edff] p-6 rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-[#0e1a67]">Recommended Articles</h3>
          <a href="#" className="text-sm font-medium text-[#0e1a67] hover:underline">
            View More →
          </a>
        </div>
     <div className="grid grid-cols-1 gap-4">

          {recommendedArticles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 shadow hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-xs text-[#6488E5] font-semibold">{item.name}</p>
              <p className="text-xs text-gray-500 mb-1">{item.role}</p>
              <h4 className="text-sm font-semibold text-[#0e1a67] leading-snug mb-2 hover:underline cursor-pointer">
                {item.title}
              </h4>
              <div className="flex space-x-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold px-2 py-[2px] rounded bg-[#E6EDFF] text-[#0e1a67]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleFooter;
