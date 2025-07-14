import React, { useEffect } from "react";

import MostPopular from "./MostPopular";
import ArticleFooter from "./ArticleFooter";
import Sidebar from "./Sidebar";
import SlidingBanner from "../Homepage/SlidingBanner";

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



const Article2 = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <section className="mx-auto px-6 md:px-20 py-10 text-gray-800">
     

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-5xl font-bold text-[#789BFF] mb-4">
            India-UK FTA: A blueprint trade agreement for the future
          </h1>
 <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
        <span>July 9, 2025</span>
      </div>
         <div className="flex flex-wrap justify-center gap-10 mb-10">
  {[
    {
      name: "Parth S. Shah",
      designation:
        "Director (Global Trade Advisory) \n Deloitte Touche Tohmatsu India",
      image: "/Parth.jpg",
    },
    {
      name: "Shweta Kushe",
      designation:
        "Assistant Manager (Global Trade Advisory) \n Deloitte Touche Tohmatsu India",
      image: "/Shweta.jpg",
    },
  ].map((author, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center max-w-xs"
    >
      <img
        src={author.image}
        alt={author.name}
        className="w-[200px] h-[200px] object-cover rounded-xl shadow-lg border border-gray-300"
        onError={(e) =>
          (e.currentTarget.src = "https://via.placeholder.com/200?text=A")
        }
      />
      <span className="text-xl font-bold mb-2">{author.name}</span>
      <span className="text-sm font-medium text-gray-500 mb-6 whitespace-pre-line">
        {author.designation}
      </span>
    </div>
  ))}
</div>


          <div className="flex gap-2 mb-8">
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Finance
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Foreign Trade
            </span>
          </div>

          <article className="prose max-w-none text-gray-700">
            <p className="mb-8 text-sm">
              In the past decade, trade multilateralism has shown stagnation due
              to growing geopolitical tensions, institutional gridlocks and a
              surge in unilateral trade measures. According to the International
              Peace Institute’s Global Observatory Multilateralism Index (2024),
              global trade multilateralism has experienced a noticeable decline
              in effectiveness and participation, with member states
              increasingly prioritizing bilateral and regional arrangements over
              consensus-based multilateralism.
            </p>
            <div className="w-full my-6">
              <img
                src="/Graph.png"
                alt="Multilateralism Index Graph"
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
            <p className="mb-8 text-sm">
              Consequently, India has been increasingly prioritising bilateral
              and regional arrangements over broad consensus-based
              multilateralism. Furthermore, the lack of concrete outcomes at the
              World Trade Organisation, especially on issues such as dispute
              settlement reforms, digital trade and subsidies, has accelerated
              India’s strategic realignment towards bilateral arrangements.
              India has initiated several FTA negotiations with key partners
              including the EU, United States of America, Canada, Peru and the
              Gulf Cooperation Council. In this context, the conclusion of the
              India-UK FTA negotiations marks a watershed moment, not only
              because it is India’s first comprehensive FTA with a major Western
              economy, but also because it introduces new-generation trade
              elements such as sustainability. The agreement signals India’s
              growing confidence in negotiating complex, high-standard trade
              disciplines and sets the tone for a broader global trade strategy.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              What has the agreement achieved?
            </h3>
            <p className="mb-4 text-sm">
              The India-UK FTA was concluded in May 2025 after 15 rounds of
              formal negotiations spread over three years. This pact is
              considered historic because it goes beyond the traditional
              tariff-focused agreement and emphasises aspects such as service
              liberalization, investment facilitation, intellectual property
              protection, government procurement etc.
            </p>
            <p className="mb-1 text-sm">
              Some of the notable aspects achieved are as follows:
            </p>
            <section className="px-6 md:px-20 py-10 text-gray-800">
              <h2 className="text-md font-semibold mb-2">
                a.{" "}
                <span className="underline italic">
                  Tariff Reductions and Sectoral Gains
                </span>
              </h2>

              <p className="mb-4 text-sm">
                India will eliminate or reduce tariffs on 90% of its tariff
                lines, covering 92% of UK imports by value. In return, the UK
                will remove tariffs on 99% of Indian exports.
              </p>

              <p className="mb-8 text-sm">
                Following are some of the key Indian sectors expected to benefit
                from these tariff concessions:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full  table-auto border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        Industry/Sector
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                        Specific Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 text-sm">Pharmaceuticals</td>
                      <td className="border px-4 py-2 text-sm">
                        The FTA is expected to streamline regulatory approvals
                        for Indian generic drugs, potentially accelerating their
                        entry into the UK market
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border px-4 py-2 text-sm">Automobiles</td>
                      <td className="border px-4 py-2 text-sm">
                        Automobile tariffs, including for electric and hybrid
                        vehicles, will drop from over 100% to 10% under a tariff
                        rate quota system
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 text-sm">Alcoholic Beverages</td>
                      <td className="border px-4 py-2 text-sm">
                        UK whisky and gin tariffs, currently at 150%, will be
                        reduced to 75% immediately, with a staged reduction to
                        40% by the tenth year
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border px-4 py-2 text-sm">Agriculture/Food</td>
                      <td className="border px-4 py-2 text-sm">
                        Seafood and agricultural exports from India, including
                        shrimp, frozen fish, rice and mangoes will see phased
                        tariff reductions
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 text-sm">Textiles</td>
                      <td className="border px-4 py-2 text-sm">
                        The FTA is expected to remove 8-12% UK import duty on
                        Indian textiles and garments is expected
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border px-4 py-2 text-sm">Gems and Jewellery</td>
                      <td className="border px-4 py-2 text-sm">
                        Immediate or staged tariff reductions are expected for
                        the gems and jewellery sector
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 className="text-md font-semibold mb-2 mt-6">
                b.{" "}
                <span className="underline italic">
                  Bilateral Safeguard Mechanism
                </span>
              </h2>

              <p className="mb-8 text-sm">
                The India-UK FTA has established a bilateral safeguard mechanism
                to address unforeseen surges in imports resulting from tariff
                liberalization that may cause or threaten to cause serious
                injury to domestic industry.
              </p>
              <h2 className="text-md font-semibold mb-2">
                c. <span className="underline italic">Trade Facilitation</span>
              </h2>

              <p className="mb-8 text-sm">
                The India–UK FTA incorporates commitments aimed at enhancing
                transparency, reducing Customs delays, and improving the
                efficiency of cross-border trade procedures. Both countries have
                agreed to adopt modern trade facilitation measures, including
                rapid release of goods, duty deferral, electronic submission of
                documents etc.
              </p>
              <h2 className="text-md font-bold mb-2">
                d. <span className="underline italic">Dispute Settlement</span>
              </h2>

              <p className="mb-8 text-sm">
                India-UK FTA establishes a fair and transparent state-to-state
                dispute settlement mechanism to ensure timely resolution of
                trade disputes. It emphasizes early resolution and stakeholder
                transparency. These provisions will be harmonised with the
                dispute settlement framework being negotiated under the UK-India
                Bilateral Investment Treaty.
              </p>
              <h2 className="text-md font-bold mb-2">
                e.{" "}
                <span className="underline italic">
                  Intellectual Property (IP)
                </span>
              </h2>

              <p className="mb-8 text-sm">
                India-UK FTA includes an advanced IP chapter covering patent
                procedures, expands geographical indications (‘GI’) protection
                for UK products, and commits India to review certain copyright
                terms. These provisions exceed India’s past FTA commitments and
                offer greater legal certainty and commercial confidence for UK
                rights holders.
              </p>
              <h2 className="text-md font-bold mb-2">
                f.{" "}
                <span className="underline italic">Government Procurement</span>
              </h2>

              <p className="mb-8 text-sm">
                The India–UK FTA includes a dedicated chapter on government
                procurement, granting UK businesses legally guaranteed access as
                Class 2 suppliers to central and state-level contracts across
                goods, services, and construction. Following the agreement,
                India is also reportedly enabling global tendering on the
                Government e-Marketplace (GeM), allowing UK and other
                international firms to participate more competitively in public
                procurement.
              </p>
            </section>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Why is this agreement different?
            </h3>
            <p className="mb-8 text-sm">
              The India-UK FTA, for the first time, aims to include enforceable
              digital trade provisions, marking a significant departure from
              India’s historically cautious approach to digital trade in
              bilateral agreements. These provisions cover areas such as support
              for electronic contracts and transactions, cross-border data
              flows, protection against forced transfer of source code, online
              consumer protection etc. This shift signals India’s growing
              confidence in engaging with global digital norms while balancing
              domestic regulatory objectives and sets a precedent for future
              negotiations with other trade partners. Interestingly, according
              to the UK government, the FTA also provisions for cross border
              data flows and data localisation in a manner that will allow the
              UK, the opportunity to further negotiate these rules with India,
              should it agree to similar commitments with other FTA partners in
              the near future. In the absence of a legal text of the agreement,
              UK government’s statement suggests that inclusion of a
              most-favoured-nation-style clause could enable the UK to seek
              parity if India extends more liberal digital trade terms to other
              countries going forward. Such a clause will also help India since
              it is still in the process of shaping its domestic framework for
              data protection and localisation.
            </p>
            <p className="mb-8 text-sm">
              Apart from digital trade, the agreement includes dedicated
              chapters on sustainability, gender and SMEs, aligning with India’s
              evolving approach to building an inclusive trade policy. However,
              despite India’s ambition during negotiations to seek explicit
              safeguards or exemptions from the UK’s proposed Carbon Border
              Adjustment Mechanism (‘UK-CBAM’), the final text (as reported)
              does not appear to include any binding protections in this regard.
              This omission may leave Indian exporters, especially in
              carbon-intensive sectors such as steel and aluminium, vulnerable
              to future carbon-related trade barriers, depending on how the UK
              operationalizes its UK-CBAM regime. It also reflects the broader
              challenge of reconciling developing country’s concerns on climate
              equity with the growing use of unilateral environmental measures
              by developed countries.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              What is the legal status and implementation pathway of this
              agreement?
            </h3>
            <p className="mb-8 text-sm">
              Unlike before, India announced the conclusion of India-UK FTA
              negotiations without simultaneously releasing the legal text which
              is a departure from its usual practice. However, government
              officials have said that the final text of the agreement will be
              released in three months. Implementation of the agreement will
              take place after both UK and India ratify the text. In India, the
              ratification process involves several rounds of inter-ministerial
              and stakeholder meetings. Thereafter, the Department of Commerce
              seeks approval of the Union Cabinet. Additionally, wherever
              necessary, Article 253 of the Constitution of India allows
              Parliament to make laws to implement agreements.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Conclusion
            </h3>
            <p className="mb-8 text-sm">
              The India–UK FTA is a game-changer for industry. It delivers
              commercially meaningful outcomes across priority sectors. It
              introduces enforceable digital trade rules for the first time in
              India’s FTA history, giving tech and ITeS exporters a strategic
              edge in future digital economy negotiations. For manufacturers, it
              offers duty reductions on capital goods and creates new pathways
              for investment and R&amp;D collaboration. Most importantly, it
              sets a new benchmark for the kind of high-standard, market-
              access-driven FTAs.
            </p>
            <p className="mb-8 text-sm">
              However, with the full legal text yet to be released, critical
              operational details remain to be seen. The true scope and
              enforceability of the agreement will become clearer over time,
              once the text is made public and implementation begins on the
              ground.
            </p>
            <p className="mb-8 text-sm">
              <em>
                *Parth S. Shah is a Director, and Shweta Kushe is an Assistant
                Manager, with the Global Trade Advisory practice at Deloitte
                Touche Tohmatsu India LLP. The views expressed are those of the
                authors and do not necessarily reflect the views of the firm.
              </em>
            </p>
          </article>
          
        </div>

        <aside className="w-full md:w-[300px] flex-shrink-0">
          <div className="mb-10">
            <MostPopular />
          </div>

           <div className="flex">
      <Sidebar />
    </div>


         <SlidingBanner />

          

          <ArticleFooter />
        </aside>
      </div>
    </section>
  );
};

export default Article2;
