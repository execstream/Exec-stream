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
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl md:text-5xl  italic leading-snug text-black transition-opacity duration-700 opacity-90 hover:opacity-100">
            Expert Voices. Conversations. <br /> Enterprise Intelligence.
          </h1>
        </div>
      </section>

   
     <section className="bg-[#0e1a67] py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left">
    
   
    <div className="md:w-1/2 px-6">
      <h2 className="text-3xl md:text-4xl italic font-semibold text-[#789BFF] leading-snug text-right">
        One Stream.<br />Every Function.
      </h2>
    </div>

    
    <div className="hidden md:block w-px h-28 bg-gray-400 mx-8" />

    
    <div className="md:w-1/2 px-6 text-white text-xl  leading-relaxed"  style={{ fontFamily: "'Inter', sans-serif" }}>
      ExecStream is a cross-functional media and learning platform built for CXOs and executive professionals,
      combining legal, finance, HR, risk, sustainability and infosec into a single stream of actionable insights and learning.
    </div>
    
  </div>
</section>


      
      <section className="px-6 py-5 bg-white">
        <div className="max-w-5xl mx-auto text-center">
         
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
           We cover business-critical themes through structured conversations, deep-dive newsletters, expert-led articles, webcasts and podcasts and curated training cohorts. <br /><br /> Every piece is designed to help professionals navigate real decisions inside organisations with clarity, context, and functional depth. Today’s enterprise problems don’t respect silos, legal issues often carry financial consequences, ESG disclosures impact procurement, and cybersecurity concerns involve everyone from tech to HR. <br /><br /> We cover a broad set of functions not for reach, but to reflect how decisions actually happen in modern organizations: across teams, across roles, and often, across blind spots. Our platform is built for professionals with operational responsibility - General Counsels, CFOs, CHROs, CISOs, transformation leads, and also for senior executives, deputies, and function heads who shape enterprise thinking every day. <br /><br /> ExecStream operates with a clear editorial purpose: to serve enterprise professionals with relevant, high-context content - independent, structured, and built for real-world use.
            <br /><br />
          
           
          </p>
        </div>
      </section>

    
    <section className="bg-gray-50 py-5 px-6">
  <h2 className="text-4xl font-bold text-center text-[#789BFF] mb-16 transition-transform duration-500 hover:scale-105">
    Meet the Team
  </h2>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
    {[
      {
        name: "Biplab Sengupta",
        role: "Founder & CEO",
        desc: `15 years designing knowledge systems across legal, HR, finance, and risk. Blends business, psychology, and regulatory design to frame complex decisions for leaders.`,
        image: "/Biplab.jpeg",
      },
      {
        name: "Amrik Singh Sidhu",
        role: "Enterprise Relations Head",
        desc: `Drives CXO alliances with a decade in talent consulting and enterprise growth across BFSI, ITES, pharma. He leads ExecStream’s strategic ecosystem relationships.`,
        image: "/Amrik.jpeg",
      },
    ].map((person, i) => (
      <div
        key={i}
        className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-[1.02] flex items-start space-x-6"
      >
       
        <img
          src={person.image}
          alt={person.name}
          className="w-20 h-20 rounded-full object-cover border border-gray-300"
        />

       
        <div>
          <h3 className="text-xl font-bold text-[#789BFF]">{person.name}</h3>
          <p className=" font-semibold mb-2">{person.role}</p>
          <p className="text-gray-700 whitespace-pre-line">{person.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}
