import React, { useState, useRef } from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const searchIndex = [
  {
    title: "Decoding DPDP for Indian Indian Enterprises",
    content: "This article explains the DPDP Act for CFOs and legal teams.",
    path: "/articles/decoding-dpdp",
  },
  {
    title: "Policy Shift for CFOs",
    content: "New policies are coming into effect for CXOs.",
    path: "/cxos/policy-shift",
  },
  {
    title: "About ExecStream",
    content: "ExecStream is the leading platform for enterprise insights.",
    path: "/about",
  },
];

const dropdownItems = {
  "News & Analysis": [
    { label: "All", path: "/news-&-analysis" },
    { label: "Finance", path: "/enterprise-signals/finance" },
    { label: "Legal", path: "/enterprise-signals/legal" },
    { label: "HR (People & Culture)", path: "/enterprise-signals/hr" },
    { label: "Sustainability / ESG", path: "/enterprise-signals/sustainability" },
    { label: "Risk & Compliance", path: "/enterprise-signals/risk-compliance" },
    { label: "Info Sec / CISO Office", path: "/enterprise-signals/ciso-office" },
  ],
  Articles: [
    { label: "All", path: "/articles" },
    { label: "Finance", path: "/articles/finance" },
    { label: "Legal", path: "/articles/legal" },
    { label: "HR (People & Culture)", path: "/articles/hr" },
    { label: "Sustainability / ESG", path: "/articles/sustainability" },
    { label: "Risk & Compliance", path: "/articles/risk-compliance" },
    { label: "Info Sec / CISO Office", path: "/articles/ciso-office" },
  ],
  CXOs: [
    { label: "All", path: "/cxos" },
    { label: "CFO", path: "/cxos/cfo" },
    { label: "GC / CLO", path: "/cxos/gc" },
    { label: "CHRO", path: "/cxos/chro" },
    { label: "CSO", path: "/cxos/cso" },
    { label: "CRO", path: "/cxos/cro" },
    { label: "CISO", path: "/cxos/ciso" },
    { label: "DPO", path: "/cxos/dpo" },
    { label: "CDO", path: "/cxos/cdo" },
  ],
  Function: [
    { label: "All", path: "/function" },
    { label: "Finance", path: "/function/finance" },
    { label: "Legal", path: "/function/legal" },
    { label: "HR (People & Culture)", path: "/function/hr" },
    { label: "Sustainability / ESG", path: "/function/sustainability" },
    { label: "Risk & Compliance", path: "/function/risk-compliance" },
    { label: "Info Sec / CISO Office", path: "/function/ciso-office" },
  ],
   "Weekly Digest": [
    { label: "All", path: "/weekly-digest" },
    { label: "BIS & QCOs", path: "/weekly/bis" },
    { label: "Customs & Trade", path: "/weekly/customs" },
    { label: "Fintech", path: "/weekly/fintech" },

  ],
 
 
};

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const formatDate = () => {
    const date = new Date();
    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options).toUpperCase().replace(",", " .");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const input = searchTerm.trim().toLowerCase();
    const match = searchIndex.find(
      (item) =>
        item.title.toLowerCase().includes(input) ||
        item.content.toLowerCase().includes(input)
    );
    if (match) {
      window.location.href = match.path;
    } else {
      console.log("No matching content found");
    }
    setSearchTerm("");
  };

  const handleMouseEnter = (item) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 100);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleDropdownMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b-2 border-black py-3 shadow-sm z-30 relative font-inter">
  
      <div className="bg-gray-100 py-2 px-4 border-b border-gray-200 lg:hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-xs">
     
          <span className="uppercase tracking-wide text-gray-500 mb-2 md:mb-0">
            {formatDate()}
          </span>

  
          <form onSubmit={handleSearch} className="relative w-full md:w-auto mb-2 md:mb-0 md:flex-grow md:mx-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-3 pr-8 w-full py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#789BFF]"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#789BFF]"
            >
              <FiSearch className="w-4 h-4" />
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-2 pt-1 md:pt-0">
             <a href="https://www.linkedin.com/company/execstream" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="text-gray-500 hover:text-[#789BFF]" size={14} /></a>
            <a href="https://www.facebook.com/execstream" target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-gray-500 hover:text-[#789BFF]" size={14} /></a>
           
            <a href="https://www.instagram.com/execstream/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-gray-500 hover:text-[#789BFF]" size={14} /></a>
            <a href="https://www.youtube.com/@execstream" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-gray-500 hover:text-[#789BFF]" size={14} /></a>
          <a href="https://x.com/ExecStream" target="_blank" rel="noopener noreferrer"><FaXTwitter className="text-gray-500 hover:text-[#789BFF]" size={14} /></a>
          
            </div>
        </div>
      </div>

     
      <div className="container mx-auto px-4 py-3 flex items-center justify-between space-x-6">

        {/* Logo */}
        <a href="/" className="cursor-default">
          <img src="Exec-Stream Logo.svg" alt="ExecStream" className="h-20" />
        </a>

      
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-900 focus:outline-none">
            {isMobileMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>

   
        <nav className="hidden md:flex space-x-4 lg:space-x-6 text-base font-bold text-gray-900 relative z-50">
          {["News & Analysis", "Articles", "Weekly Digest", "Experts","CXOs", "Function",].map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-[#789BFF] whitespace-nowrap"
              >
                {item}
              </a>

              {dropdownItems[item] && openDropdown === item && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-md shadow-xl z-[100] min-w-[220px]"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <ul className="py-2 px-3 space-y-1 text-sm text-gray-700">
                    {Array.isArray(dropdownItems[item]) &&
                      dropdownItems[item][0]?.label ? (
                      dropdownItems[item].map((sub) => (
                        <li key={sub.label}>
                          <a
                            href={sub.path}
                            className="block px-4 py-2 hover:bg-gray-100 rounded whitespace-nowrap"
                            onClick={handleMobileNavLinkClick}
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))
                    ) : (
                      dropdownItems[item].map((group) => (
                        <li key={group.section}>
                          <div className="font-semibold text-gray-900 px-4 pt-2 pb-1">
                            {group.section}
                          </div>
                          {group.items.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.path}
                              className="block px-4 py-1 hover:bg-gray-100 rounded"
                              onClick={handleMobileNavLinkClick}
                            >
                              {sub.label}
                            </a>
                          ))}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

      
        <form onSubmit={handleSearch} className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-3 pr-8 w-44 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#789BFF]"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#789BFF]"
          >
            <FiSearch className="w-4 h-4" />
          </button>
        </form>

   
        <div className="hidden lg:flex flex-col items-end text-xs space-y-1">
          <span className="uppercase tracking-wide text-gray-500">
            {formatDate()}
          </span>
          <div className="flex space-x-2 pt-1">
             <a href="https://www.linkedin.com/company/execstream" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="text-gray-500 hover:text-[#789BFF]" size={14} /></a>
            <a href="https://www.facebook.com/execstream" target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-gray-500 hover:text-[#789BFF]" size={14} /></a>
           
            <a href="https://www.instagram.com/execstream/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-gray-500 hover:text-[#789BFF]" size={14} /></a>
            <a href="https://www.youtube.com/@execstream" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-gray-500 hover:text-[#789BFF]" size={14} /></a>
          <a href="https://x.com/ExecStream" target="_blank" rel="noopener noreferrer"><FaXTwitter className="text-gray-500 hover:text-[#789BFF]" size={14} /></a>
          </div>
        </div>
      </div>

    
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 z-40 rounded-b-md">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
         
            <nav className="flex flex-col space-y-2 text-base font-bold text-gray-900">
              {["News & Analysis", "Articles","Weekly Digest", "Experts","CXOs", "Function", ].map((item) => (
                <div key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block py-2 px-3 hover:bg-gray-100 rounded whitespace-nowrap"
                    onClick={handleMobileNavLinkClick}
                  >
                    {item}
                  </a>
                  {dropdownItems[item] && (
                    <div className="ml-4 border-l border-gray-200 pl-2 text-sm">
                      {Array.isArray(dropdownItems[item]) &&
                        dropdownItems[item][0]?.label ? (
                        dropdownItems[item].map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.path}
                            className="block py-1 px-2 hover:bg-gray-100 rounded"
                            onClick={handleMobileNavLinkClick}
                          >
                            {sub.label}
                          </a>
                        ))
                      ) : (
                        dropdownItems[item].map((group) => (
                          <div key={group.section}>
                            <div className="font-semibold text-gray-900 py-1">
                              {group.section}
                            </div>
                            {group.items.map((sub) => (
                              <a
                                key={sub.label}
                                href={sub.path}
                                className="block py-1 px-2 hover:bg-gray-100 rounded"
                                onClick={handleMobileNavLinkClick}
                              >
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;