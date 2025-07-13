import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
    
      <section
        className="relative h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/ExecStream Banner.svg')" }}
      >
        <div className="absolute inset-0" />
        <div className="relative z-10 px-6 animate-fade-in">
          <img
            src="/Exec-Stream Logo.svg"
            alt="ExecStream"
            className="mx-auto h-20 md:h-24 mb-6 transition-transform duration-500 hover:scale-105"
          />
          <h1 className="text-3xl md:text-5xl font-bold italic leading-snug text-black transition-opacity duration-700 opacity-90 hover:opacity-100">
            Expert Voices. Conversations. Enterprise Intelligence.
          </h1>
        </div>
      </section>

   
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 italic leading-snug">
          <span className="text-[#0e1a67] block transition-transform hover:scale-105 duration-300">One Stream.</span>
          <span className="text-black block transition-transform hover:scale-105 duration-300">Every Function.</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto transition-opacity duration-500 hover:opacity-90">
          ExecStream is a cross-functional media and learning platform built for CXOs and their
          deputies—combining legal, finance, HR, risk, and security into a single stream of actionable
          insights and learning.
        </p>
      </section>

      
      <section className="px-6 py-5 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 italic text-[#0e1a67] transition-all duration-500 hover:scale-105">
            Why We Exist
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Today’s enterprise problems don’t respect silos. Legal issues often carry financial
            consequences, ESG disclosures impact procurement, and cybersecurity concerns involve
            everyone—from tech to HR.
            <br /><br />
            We cover a broad set of functions not for reach, but to reflect how decisions actually
            happen in modern organizations: across teams, across roles, and often, across blind spots.
            <br /><br />
            Our platform is built for professionals with operational responsibility—General Counsels,
            CFOs, CHROs, CISOs, transformation leads—and also for senior executives, deputies, and
            function heads who shape enterprise thinking every day.
            <br /><br />
            ExecStream operates with a clear editorial purpose: to serve enterprise professionals with
            relevant, high-context content—independent, structured, and built for real-world use.
          </p>
        </div>
      </section>

    
      <section className="bg-gray-50 py-5 px-6">
        <h2 className="text-4xl font-bold italic text-center text-[#0e1a67] mb-16 transition-transform duration-500 hover:scale-105">
          Meet the Team
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {[
            {
              name: "Biplab Sengupta",
              role: "Founder & CEO",
              desc: `15 years designing knowledge systems across legal, HR, finance, and risk. Blends business, psychology, and regulatory design to frame complex decisions for leaders.`,
            },
            {
              name: "Amrik Singh Sidhu",
              role: "Enterprise Relations Head",
              desc: `Drives CXO alliances with a decade in talent consulting and enterprise growth across BFSI, ITES, pharma. He leads ExecStream’s strategic ecosystem relationships.`,
            },
          ].map((person, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start space-x-6">
               
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                  <p className="text-[#0e1a67] font-semibold mb-2">{person.role}</p>
                  <p className="text-gray-700 whitespace-pre-line">{person.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
