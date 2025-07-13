import React, { useEffect } from "react";

const teamMembers = [
  {
    name: "Biplab Sengupta",
    role: "Founder, ExecStream Media Labs",
    image: "/Biplab.jpeg", 
    desc: `With close to 15 years of experience designing knowledge infrastructure for legal, HR, finance, and risk functions, Biplab’s work sits at the intersection of enterprise responsibility, structured thinking, and information clarity. His career spans content strategy, executive education, regulatory design, and corporate upskilling — enabling him to deeply understand how decisions are made, how functions connect, and where professionals feel the sharpest knowledge gaps.

Before ExecStream, Biplab led multiple ventures in corporate learning, building programs that served in-house counsels, compliance teams, HR leaders, CFOs, and CXO-adjacent roles. He led interventions for solving enterprise problems, stitching together law, policy, governance, and business operations into usable formats that worked for professionals inside real companies.

With a background in business management and psychology, Biplab brings a systems view to everything he builds. He believes today’s professionals don’t just need more content, they need better context. Not just information, but framing. Not just headlines, but interpretive depth. ExecStream is an extension of that belief, a media and learning platform designed to reflect the real rhythm of enterprise work: multidisciplinary, problem-led, and time-sensitive.

As a founder, Biplab continues to focus on building trusted knowledge systems, cross-functional visibility tools, and editorially credible content pathways for professionals who work with responsibility, risk, and consequence.`,
  },
  {
    name: "Amrik Singh Sidhu",
    role: "Enterprise Relations Head",
    image: "/Amrik.jpeg", 
    desc: `Amrik leads Market Outreach and Enterprise Relations at ExecStream, anchoring the platform’s partnerships with CXO communities, enterprise teams, and functional ecosystems across sectors.

With over a decade of experience in business development, consulting outreach, and talent solutions, Amrik brings a sharp understanding of how enterprise audiences think, decide, and engage, especially across legal, HR, finance, and transformation functions. His approach is rooted in relationship depth, not transactional reach, with a strong belief in credibility-led, insight-driven engagement.

Prior to ExecStream, Amrik led growth and outreach for HR Sutra, working closely with senior professionals across industries to build curated executive learning programs and market partnerships. He has also held important market roles at Right Management and Randstad India, where he specialized in CXO search, talent consulting, and large-account stakeholder management across BFSI, pharma, ITES, and manufacturing.

At ExecStream, Amrik drives the platform’s functional visibility, building strategic relationships, co-creation partnerships, and targeted outreach campaigns that align with real enterprise needs. He also plays a key role in shaping how the platform stays connected to the decision-making layer, not just as an audience, but as an active community.`,
  },
];

const Team = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <section className="bg-gray-50 py-5 px-6">
      <h2 className="text-4xl font-bold italic text-center text-[#0e1a67] mb-16 transition-transform duration-500 hover:scale-105">
        Meet the Team
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-12">
        {teamMembers.map((person, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start space-x-6">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-3xl">
                    ?
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                <p className="text-[#0e1a67] font-semibold mb-4">{person.role}</p>
                <p className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                  {person.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
