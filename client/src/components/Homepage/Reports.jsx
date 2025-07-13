import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Reports = () => {
  const researchReports = [
    {
      id: 1,
      cover: '/Report1.png',
      title: 'Transforming Finance Now Getting your Finance transformation off the ground',
      description:
        'These are testing times for Finance. As businesses see their normal revenue streams dry up and their vendors struggle to stay afloat, they look to their Finance department to help them stabilise the balance sheet, make strategic decisions to generate cash, and accelerate recovery.',
      date: 'June 28, 2025',
      link: 'https://www.accenture.com/content/dam/accenture/final/capabilities/technology/technology-innovation/document/Accenture-Finance-Transformation-New.pdf',
    },
    {
      id: 2,
      cover: '/Report2.png',
      title: 'AI-Driven Efficiency: 5 Key Takeaways for Corporate Legal Departments',
      description:
        'In-house legal teams are under constant pressure to improve operations, manage costs effectively, and deliver results quickly. With increasing demands, corporate legal departments must find innovative ways to handle a growing workload without proportionally increasing their team size.',
      date: 'June 25, 2025',
      link: 'https://www.netdocuments.com/resource/ai-driven-efficiency-5-key-takeaways-for-corporate-legal-departments/',
    },
    {
      id: 3,
      cover: '/Report3.png',
      title: 'A Blueprint for Building a Zero Trust Architecture',
      description:
        'The concept of Zero Trust has been around since 2009, when Forrester Research first promoted it, warning organizations that it was time to overhaul the traditional method of granting unfettered access to any user or application that passed the network perimeter. Instead, every device, user, and network flow should be verified before full access is granted. In the ensuing years, thanks to many factors, the urgency to adopt the concept of Zero Trust has only grown.',
      date: 'June 20, 2025',
      link: 'https://www.akamai.com/site/en/documents/white-paper/a-blueprint-for-building-a-zero-trust-architecture-white-paper.pdf',
    },
    {
      id: 4,
      cover: '/Report4.png',
      title: 'A driving change: approaches to HR transformation',
      description:
        'Every major employer, in every industry sector, faces intense competition for the right kind of talent. In the world of cloud, disaggregated organizations and hybrid working, the conditions and challenges are evolving in unpredictable ways',
      date: 'June 18, 2025',
      link: 'https://leap.nttdata.com/wp-content/uploads/WP3.23.-Talent-Management-White-Paper.pdf',
    },
    {
      id: 5,
      cover: '/Report5.png',
      title: 'Compliance & Beyond: Gauging the State of BRSR Disclosure in India A Report by SGS India Private Limited',
      description:
        'This report serves as a strategic guide for corporates to not just meet regulatory expectations, but to lead with purpose in the ESG landscape.',
      date: 'June 10, 2025',
      link: 'https://www.sgs.com/en-in/whitepapers/gauging-the-state-of-brsr-disclosure-in-india-form',
    },
  ];

  return (
    <div className="relative w-full py-12 px-4 md:px-6 lg:px-8">
  
      <div className="absolute inset-0 z-0">
        <div className="h-2/5 bg-[#DFE6FF]"></div>
        <div className="h-3/5 bg-white"></div>
      </div>

      <div className="mx-auto relative z-10">
     
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Research Reports</h2>
          <div
            className="h-px flex-grow mx-5"
            style={{ background: 'linear-gradient(to right, black 30%, #d1d5db 30%)' }}
          />
          <a href="#" className="text-[#789BFF] hover:text-blue-700 text-sm md:text-base">
            View All
          </a>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {researchReports.map((report) => (
            <a
              key={report.id}
              href={report.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white overflow-hidden flex flex-col items-center shadow-md rounded-md hover:shadow-lg transition-shadow"
            >
              <div className="w-[180px] h-[254px] bg-gray-100 shadow">
                <img
                  src={report.cover}
                  alt={report.title}
                  className="w-full h-full object-cover rounded-t-md"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between px-4 pt-4 pb-6 text-center w-[180px]">
                <h3 className="text-sm font-semibold text-[#789BFF] leading-snug mb-2 line-clamp-2">
                  {report.title}
                </h3>
                <p className="text-gray-600 text-xs mb-3 line-clamp-4">
                  {report.description}
                </p>
                <span className="text-gray-400 text-xs mt-auto block">{report.date}</span>
              </div>
            </a>
          ))}
        </div>

      
        <div className="flex justify-center items-center gap-4">
          <button className="p-3 border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button className="p-3 border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
