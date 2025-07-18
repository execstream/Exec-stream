import React from "react";
import { Link } from "react-router-dom";
import SlidingBanner from "./SlidingBanner";

const CXO = () => {
  const interviewArticles = [
    {
      id: 4,
      slug: "monal-puj",
      image: "/Monal Puj.png",
      category: "LEGAL & GC",
      title:
        "In conversation with Monal Puj, Head of Legal at Cliantha Research, on Leading Legal in a Global CRO",
      description:
        "A deep dive into the unseen legal machinery behind clinical research. In this upcoming CXO conversation, Monal Puj, Head of Legal at Cliantha Research, opens up about navigating multinational trial contracts, patient data risks, AI compliance, regulatory shifts...",
      published: true,
    },
    {
      id: 1,
      slug: "vasudev-rao",
      image: "/M Vasuedev Rao.png",
      category: "LEGAL",
      title:
        "The GC as Enterprise Conscience: A Legal Odyssey Across Sectors with M. Vasudev Rao , Group General Counsel, Hinduja Group",
      description:
        "An in-depth conversation unpacking how GCs shape institutional memory, manage legal across sprawling conglomerates, and build future-ready legal teams. A rare look into the invisible levers of corporate legal strategy, from capital markets to legacy-driven multinationals.",
      published: false,
    },
    {
      id: 2,
      slug: "krishnanand-bhatt",
      image: "/479267754.avif",
      category: "INFOSEC & DATA PRIVACY",
      title:
        "Inside the Mind of a Modern DPO - A Conversation with Krishnanand Bhatt, DPO at IDBI Bank",
      description:
        "In this interview, he shares hard-earned lessons on building trust in times of crisis, balancing legacy banking architecture with emerging threats, and why AI, cross-border risk, and governance demand a new kind of leadership mindset.",
      published: false,
    },
    {
      id: 3,
      slug: "om-narayan-rai",
      image: "/Om.png",
      category: "HR",
      title:
        "HR is Not a Support Function - It’s a Business Lens: A Deep-Dive Interview with Om Narayan Rai, Head of HR, Infinity Learn",
      description:
        "From leading M&A integrations across continents to cutting early attrition by 30% in a hyper-competitive sector, Om Narayan Rai’s HR playbook blends operational grit with cultural foresight...",
      published: false,
    },
  ];

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

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Section */}
        <div className="lg:col-span-2">
          <div className="bg-[#789BFF26] px-4 sm:px-6 py-6 rounded-md">
            <div className="h-[1px] w-full bg-black mb-4" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
              <h2 className="text-2xl font-bold text-black">CXO Conversations</h2>
              <Link
                to="/cxos"
                className="text-[#789BFF] hover:text-black font-medium"
              >
                View All
              </Link>
            </div>

            {/* Interview Cards */}
            <div className="space-y-8">
              {interviewArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/cxo/${article.id}`}
                  className="block bg-[#E6EDFF] hover:bg-[#d0dbff] transition-colors duration-300 rounded-md overflow-hidden flex flex-col sm:flex-row"
                >
                  <div className="w-full sm:w-1/3 md:max-h-52 sm:h-auto bg-gray-200 flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-xs font-semibold text-[#789BFF] uppercase">
                        {article.category}
                      </span>
                      <h3 className="text-base font-bold text-black mt-1 mb-2 leading-snug">
                        {article.title}
                      </h3>
                      {!article.published && (
                        <p className="text-sm mb-2 font-medium text-gray-700">
                          <em>(Coming soon...)</em>
                        </p>
                      )}
                      <p className="text-black text-sm mb-2">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          {/* Tags */}
          <div className="bg-white p-6 rounded-md shadow-sm">
            <div className="h-[1px] w-full bg-black mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              POPULAR TAGS
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-sm border border-gray-300 text-gray-700 rounded cursor-pointer hover:text-[#789BFF] transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Articles */}
          <div className="bg-white p-6 rounded-md shadow-sm">
            <div className="h-[1px] w-full bg-black mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              FEATURED ARTICLES
            </h3>
            <div className="space-y-4">
              {featuredArticles.map((article) => (
                <div key={article.id} className="flex items-start gap-3">
                  <div className="w-20 h-16 bg-gray-200 rounded-md overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link to={article.path}>
                    <p className="text-gray-800 text-sm font-medium leading-snug hover:text-[#789BFF]">
                      {article.title}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
            <Link
              to="/articles"
              className="hover:underline text-sm mt-4 block text-blue-500"
            >
              See more
            </Link>
          </div>

          {/* Sliding Banner */}
          <SlidingBanner />
        </div>
      </div>
    </div>
  );
};

export default CXO;
