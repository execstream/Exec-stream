import React, { useEffect } from "react";

const speakers = [
  {
    id: 1,
    image: "/Abe Abraham.jpeg",
    name: "Abe Abraham",
    title: "Partner\nCyril Amarchand Mangaldas",
  },
  {
    id: 2,
    image: "/Agnidipta Sarkar.jpeg",
    name: "Agnidipta Sarkar",
    title: "Chief Evangelist\nColorTokens Inc.",
  },
  {
    id: 3,
    image: "/Akhil Chandna.jpeg",
    name: "Akhil Chandna",
    title: "Partner\nGrant Thornton Bharat LLP",
  },
  {
    id: 4,
    image: "/Anay Shukla.png",
    name: "Anay Shukla",
    title: "Partner\nArogya Legal",
  },
  {
    id: 5,
    image: "/Ankur Sharma.jpeg",
    name: "Ankur Sharma",
    title: "Partner\nLakshmikumaran & Sridharan",
  },
  {
    id: 6,
    image: "/Anoop Sharma.jpeg",
    name: "Anup Sharma",
    title: "Partner\nDeloitte Haskins & Sells India LLP",
  },
  {
    id: 7,
    image: "/Anshul Aggarwal.jpeg",
    name: "Anshul Aggarwal",
    title: "Partner\nKPMG India",
  },
  {
    id: 8,
    image: "/Anshul Prakash.jpeg",
    name: "Anshul Prakash",
    title: "Partner\nKhaitan & Co.",
  },
  {
    id: 9,
    image: "/Arnab Basu.jpeg",
    name: "Arnab Basu",
    title: "Director (Sustainability Operations)\nERM",
  },
  {
    id: 10,
    image: "/Bhanu Prakash Kalmath.jpeg",
    name: "Bhanu Prakash Kalmath",
    title: "Partner\nGrant Thornton Bharat LLP",
  },
  {
    id: 11,
    image: "/Biren Vyas.jpeg",
    name: "Biren Vyas",
    title: "Partner\nGrant Thornton Bharat LLP",
  },
  {
    id: 12,
    image: "/Deepak Suneja.jpeg",
    name: "Deepak Suneja",
    title: "Partner\nPrice Waterhouse & Co LLP",
  },
  {
    id: 13,
    image: "/Dr. Chaitali Mukherjee .jpeg",
    name: "Dr. Chaitali Mukherjee",
    title: "Partner\nMcKinsey & Company",
  },
  {
    id: 14,
    image: "/Dr. Milind Antani.jpg",
    name: "Dr. Milind Antani",
    title: "Lead, Pharma, Healthcare Practice\nNishith Desai Associates",
  },
  {
    id: 15,
    image: "/Gaganpreet Puri.jpeg",
    name: "Gaganpreet Puri",
    title: "Partner\nGrant Thornton Bharat LLP",
  },
  {
    id: 16,
    image: "/Gautam Khattar.jpg",
    name: "Gautam Khattar",
    title: "Principal\nPrice Waterhouse & Co LLP",
  },
  {
    id: 17,
    image: "/Gavish Uberoi.jpeg",
    name: "Gavish Uberoi",
    title: "Partner\nEY India",
  },
  {
    id: 18,
    image: "/Inderjeet Singh.webp",
    name: "Inderjeet Singh",
    title: "Partner\nDeloitte Touche Tohmatsu India",
  },
  {
    id: 19,
    image: "/Indra Guha.jpg",
    name: "Indra Guha",
    title: "Partner\nBDO India",
  },
  {
    id: 20,
    image: "/Kartik Radia.jpeg",
    name: "Kartik Radia",
    title: "CEO and Managing Partner\nCLA Global Indus Value Consulting",
  },
  {
    id: 21,
    image: "/Kartikeya Raman.jpg",
    name: "Kartikeya Raman",
    title: "Associate Partner\nForvis Mazars in India",
  },
  {
    id: 22,
    image: "/Keyur Dave.jpeg",
    name: "Keyur Dave",
    title: "Partner\nGrant Thornton Bharat LLP",
  },
  {
    id: 23,
    image: "/Krishan-Malhotra-2.png",
    name: "Krishan Malhotra",
    title: "Senior Advisor\nDhruva Advisors",
  },
  {
    id: 26,
    image: "/Lalit Kalra.jpeg",
    name: "Lalit Kalra",
    title: "Partner Cybersecurity and Data Privacy Leader\nEY India",
  },
  {
    id: 27,
    image: "/Mannu Khandelwal.png",
    name: "Mannu Khandelwal",
    title: "Partner\nBDO India",
  },
  {
    id: 28,
    image: "/Masood Mallick.jpeg",
    name: "Masood Mallick",
    title: "Managing Director & Group CEO\nRe Sustainability",
  },
  {
    id: 29,
    image: "/Monish Chatrath.webp",
    name: "Monish Gaurav Chatrath",
    title: "Managing Partner\nMGC Global Risk Advisory",
  },
  {
    id: 30,
    image: "/Neha Malhotra.jpeg",
    name: "Neha Malhotra",
    title: "Partner Sustainability & ESG Solutions\nNangia Andersen India",
  },
  {
    id: 31,
    image: "/Nehaa Chahudhari.jpeg",
    name: "Nehaa Chaudhari",
    title: "Partner\nIkigai Law",
  },
  {
    id: 32,
    image: "/Nirav Patel.jpeg",
    name: "Nirav Patel",
    title: "Partner\nUniqus Consultech Inc.",
  },
  {
    id: 33,
    image: "/Nishant Shah.jpg",
    name: "Nishant Shah",
    title: "Senior Partner & Co-head Tax Practice\nELP",
  },
  {
    id: 34,
    image: "/Nohid Nooreyezdan.png",
    name: "Nohid Nooreyezdan",
    title: "Senior Partner\nAZB & Partners",
  },
  {
    id: 35,
    image: "/Pankaj Jain.jpeg",
    name: "Pankaj Jain",
    title: "Partner\nEY India",
  },
  {
    id: 36,
    image: "/Parth.jpg",
    name: "Parth Shah",
    title: "Director\nDeloitte Touche Tohmatsu India",
  },
  {
    id: 37,
    image: "/Pawan Desai.jpeg",
    name: "Pawan Desai",
    title: "Co-Founder and CEO\nMitKat Advisory",
  },
];

const Speakers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full px-4 py-20 md:px-8 lg:px-16">
      <div className="relative z-10 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Meet Our Experts</h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Leaders, experts, and innovators across industries sharing their
          insights.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-[#0b0b33]/80 border border-blue-500/20 backdrop-blur rounded-xl p-6 text-center shadow-md flex flex-col items-center"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-blue-500/30"
              />
              <div className="flex flex-col flex-grow justify-center">
                <h4 className="text-lg text-white font-semibold mb-1">
                  {speaker.name}
                </h4>
                <p className="text-sm text-blue-100 whitespace-pre-line">
                  {speaker.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
