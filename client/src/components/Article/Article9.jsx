import React, { useEffect } from "react";
import { FaEye, FaRegComment } from "react-icons/fa";
import MostPopular from "./MostPopular";
import ArticleFooter from "./ArticleFooter";
import Comment from "./Comment";
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
    image: "/featured1.svg",
    title: "The Taboo lifts on discussing Biden's Age",
  },
  {
    id: 2,
    image: "/featured2.svg",
    title: "This Year, Florida's not a Swing State",
  },
  {
    id: 3,
    image: "/featured3.svg",
    title: "Why do central banks raise interest rates?",
  },
];

const Article = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <section className="mx-auto px-6 md:px-20 py-10 text-gray-800">
      

       <div className="flex flex-col md:flex-row gap-10">

        {/* Main Article */}
        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-5xl font-bold text-[#789BFF] mb-4">
            Risk Management Playbook for Alternative Investment Funds
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
        <span>July 9, 2025</span>
      </div>
          <div className="w-full flex justify-center mb-6">
            <img
              src="/Shagoofa Rashid Khan.jpeg"
              alt="Shagoofa Rashid Khan"
              className="h-[400px] w-auto object-cover rounded-xl shadow-md"
            />
          </div>

          <h2 className="text-xl font-bold mb-2">Shagoofa Rashid Khan</h2>
          <p className="text-sm font-medium text-gray-500 mb-6">
            {" "}
            Senior Partner <br /> AZB & Partners
          </p>

          <div className="flex gap-2 mb-8">
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Legal
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Fund Governance
            </span>
          </div>

          {/* Article Content */}
         <article className="prose max-w-none text-gray-700 
  [&>p]:text-sm [&>p]:mb-4 
  [&>h2]:text-md [&>h2]:font-semibold [&>h2]:mb-4 
  [&>h3]:font-bold [&>h3]:text-xl [&>h3]:text-[#789BFF] [&>h3]:mb-4 
  [&>ul]:mb-4 [&>ul>li]:text-sm [&>ul>li]:mb-2 
  [&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:list-[circle] [&>ul>li>ul>li]:text-sm [&>ul>li>ul>li]:mb-2">
            <p >
              The Alternative Investment Funds (AIF) industry has witnessed
              tremendous growth in the last decade on the back of quality active
              fund managers and investors seeking diversification beyond
              traditional investment options. However, the chase for returns may
              push one into a labyrinth of risks. As Warren Buffett famously
              said, “ <em>risk comes from not knowing what you’re doing.</em>”
              For fund managers, the challenge is not just knowing what they are
              doing. For them, it is imperative to know what everyone else (such
              as regulators, investors, promoters, politicians and world at
              large) might do next as that could have a direct or indirect
              bearing on the fund’s investment and exit strategy.
            </p>
            <p>
              In essence, risk is the probability of occurrence or
              non-occurrence of a parameter/circumstance that could, or
              potentially could, adversely affect the objectives of the fund.
              Risk monitoring, mitigation and redressal is a dynamic process -
              requiring real-time proactive monitoring of present/future risks,
              foreseeable/unforeseeable risks, measurable/unmeasurable risks.
            </p>
            <p >
              The objective of this article is to take the reader on a journey
              through the lifecycle of a fund, spotlighting risks at key stages
              and offering insights for external / in-house advisors tasked with
              fulfilling their applicable role of legal tacticians, risk
              sentinels, and compliance ninjas. However, by no means, it is
              meant to be an exhaustive playbook.
            </p>
             <div className="w-full my-6">
              <img
                src="/Article9.png"
                alt="Article"
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
           <h3 >
  A. <em>Fund Formation: Blueprint is Drawn and Risks are Mapped</em>
</h3>

<p >
  The formation of a fund is akin to laying the foundation of a skyscraper, and any misstep could reverberate for years.
  Some key decisions in fund formation stage are:
</p>

<ul >
  <li >
    <strong><em>Finalizing investment strategy with due care</em></strong> : assessing whether there is a market for the
    new fund product will address the ‘demand’ for capital. However, knowing whether the fund strategy aligns with investor
    preferences, goals and risk profile will address the ‘supply’ side of capital. Private Placement Memorandum (PPM) becomes
    a key document that must be drafted with a keen eye, clear articulation of investment thesis, describe process of identification
    of opportunities, underwriting strategies, target return, sectoral focus, disclosures on risk factors as well as conflicts of
    interest. Leaving the investment strategy undefined or vague keeps the door open for disputes to creep in at a later stage.
    Trust is the true currency for a fund manager and that is gained through transparency in selecting, making and divesting
    investments as per clear and pre-agreed strategy.
  </li>

  <li >
    <strong><em>Governance and compliance culture</em></strong> : The tone must be set from the top, zero tolerance to cutting
    corners. It is imperative that governance and compliance framework is built upfront. Bad culture can bring down an institution
    like a jenga tower. In today’s world, regulators are empowered with technological tools as well as wide powers. A breach is
    more easily detectable as well as stricter penalties can be imposed. Cost of non-compliance is getting more expensive.
    Build your retirement home or squander money on hefty personal fines – choice should be a no-brainer!
  </li>
</ul>
<h3 >
  B. <em>Fundraising: Takes Two to Tango</em>
</h3>

<p >
 Fund raising can be tough and one must be vigilant due private placement requirements.
The investors rely on expertise of the fund manager, skills of the investment team,
institutional / professional structure, and ultimately the commercial terms in the fund
documents before committing to any fund. Some pitfalls between the proverbial cup and the
lip could be:
</p>

<ul >
  <li >
    <strong><em>Trying to wing it</em></strong> : not obtaining marketing and placement advice from experts in each
country or indulging in ‘suitcase banking’. Saving up on time or advisor / agent fees may
well lead to eking out fines and litigator fees to bail yourself out.
  </li>

  <li >
    <strong><em>Lack of preparation :</em></strong> inadequate time and attention to marketing materials or falling into
the trap of engaging with unlicensed or inexperienced placement agents. Failure to
ensure disclosures meet the standards of the country where the AIF is being marketed.
Promising ‘guaranteed’ or ‘assured’ returns or misrepresenting past track record by
selective disclosures etc. could lead to crossing wires with regulators across
jurisdictions.
  </li>
   <li >
    <strong><em>Inadequate procedures :</em></strong> while money is king, fund managers must exercise caution when
onboarding investors. Conducting ‘eligible investor’ checks, KYC and AML checks,
ABAC and sanctions check, politically exposed persons (PEP) checks are extremely
essential to ensure the fund structure is not compromised. With securities market
regulator (SEBI) adding anti-abuse provisions under the AIF Regulations, the onus is
clearly cast on fund managers to ensure all relevant boxes are ticked before admitting
potential investors in the fund. At the same time, power must be retained in the fund
documents to do mandatory redemptions, excuse investors as well as take action
against defaulters so as to insulate the fund from change in circumstances of one or
more errant investor.
  </li>
  <p className="text-sm">One must also not lose sight of keeping the momentum of fund raising going in between
closings. Thus, managing the pace of cash flows, incoming (fund raising) versus outgoing
(deployment, fund expenses) is a delicate balancing act and if not handled well could not
only create bottlenecks and operational challenges but also drag down the IRR which could
impact overall performance.</p>
</ul>
<h3 >
  C. <em>Investment Period: Real Action, Risk in Motion</em>
</h3>

<p >
  Once the commitments have been raised, pressure to deploy begins. A fund manager must
  know what is being acquired, stay true to why was it acquired and monetise it at the
  right time for generating superior risk-adjusted returns for the investors. Below could
  be regarded as foundation to build a strong investing edifice:
</p>

<ul >
  <li >
    <strong><em>robust and independent underwriting</em></strong> : investment committee and
    investment team with clear roles, responsibilities and operational policies (such as
    investment guidelines, allocation of investment policy, conflict of interest policies)
    must be in place. There must be no fear to walk away from a deal as sometimes the best
    investment is the one that was not done!
  </li>

  <li >
    <strong><em>pricing discipline is crucial</em></strong> : the drag on investment returns due
    to an expensive entry price can rarely be recovered.
  </li>

  <li >
    <strong><em>due diligence rigor</em></strong> : relevant, appropriate and comprehensive due
    diligence must be undertaken to cover all key areas (such as legal, financial, technical,
    operational, tax, commercial).
  </li>

  <li >
    <strong><em>portfolio mix</em></strong> : diversification is key, be it investment limits,
    sector exposure, geographical coverage, deal structure and its complexity/dynamics or
    investment horizon.
  </li>

  <li >
    <strong><em>sanctity of books of accounts must be maintained</em></strong> : investments must
    also be carried at the right valuation. Mark-to-myth accounting is not a recognised
    methodology!
  </li>
</ul>
<h3 >
  D. <em>Oversight, Value Creation and Monetisation: The Long Haul</em>
</h3>

<p >
 This is where value can either be created or eroded. Deftly navigating below stages, makes
or shatters the track record of a fund manager.
</p>

<ul >
  <li >
    <strong><em>active oversight of investee companies is non-negotiable </em></strong>: Fund managers have to
ensure that culture, good practices and accountability is drilled into the investee
companies to improve financial performance, compliance, and ESG standards. A good
fund manager doesn’t just write cheques – she writes the playbook!
  </li>

  <li >
    <strong><em>disciplined approach to asset management :</em></strong> harvesting an investment is as important if
not more than making the investment. As Peter Drucker said, “what gets measured gets
managed.” The corollary would be, what gets ignored, gets litigated.
  </li>
   <li >
    <strong><em>dynamic risk reviews</em></strong> : must be conducted regularly, with strategies adjusted in response
to change in parameters mapped on the risk heatmap will stand in good stead.
  </li>
   <li >
    <strong><em>performance benchmarking</em></strong> : against industry standards is a regulatory requirement.
However, a truthful review of one’s performance against peers can become a valuable
tool.
  </li>
   <li >
    <strong><em>transparent and timely reporting :</em></strong> including NAV disclosures, is essential to keep the fund
in good standing with investors and regulators.
  </li>
  <li >
    <strong><em>nimbleness is an in-demand skillset :</em></strong> in today’s volatile global environment, geo-political
fallouts, climate change and technological disruptions, fund managers have to be agile
and may even need to restructure businesses of investee companies to mitigate these
risks and preserve value. An unpredictable business and regulatory environment is the
new normal.
  </li>
  
</ul>
<h3 >
  E. <em>Winding Up and Liquidation: The Last Lap</em>
</h3>

<p >

Exit roadmaps should be planned early, with divestment strategies (strategic sale, IPO,
merger, PE secondary) tailored to each investee company and the market it operates.
Several funds failed to exit their investments during original tenure plus extended tenure(s).
In order to hold fund managers accountable, SEBI had to step in and has created ‘liquidation
scheme’ framework under the AIF regulations.

</p>
<p >However, moving towards end of a fund’s life, is no time to relax yet.</p>

<ul >
  <li >
    <strong><em>a structured winding-up plan</em></strong> : is essential, with clear milestones for liquidation of
remaining assets and liabilities (including small vendor claims) as well as completing any
in-specie distributions that may be required.
  </li>

  <li >
    <strong><em>audit</em></strong> of closing accounts needs to be undertaken and final reporting protocols wrapped
up. Proper assessment to contingent liabilities needs to be undertaken, reserves or
mechanics for giveback to be put in place to insulate impact of post fund-term
indemnification claims.
  </li>
   <li>
    <strong><em>legal closure</em></strong> requires filing of all statutory and regulatory documents, including execution
of termination deed, as applicable.
  </li>
   <li >
    <strong><em>safe and secure custody </em></strong>of all records of the fund that is being closed needs to be
ensured so that archives are easily retrievable when required in the future for any legal,
regulatory, tax or arbitration proceeding.
  </li>
 
   </ul>
    <p ><b>Conclusion :</b> risk is an inherent part of a fund’s lifecycle, but with the right framework, it can
be a strategic asset rather than a threat. Fund managers who adopt a lifecycle-based,
proactive risk management approach are more likely to build sustainable, high-performing
fund platforms that could weather contingencies, uncertainties or complexities. In today’s
volatile and reputation-sensitive environment, embedding risk consciousness into every
decision, process, and relationship is in fact a competitive advantage.</p>
<p><i><b>This article was developed with writing assistance from Khushi Agarwal.
[The views expressed in this article are personal to the author. ]</b></i></p>
          </article>

          
        </div>

        <aside className="w-full md:w-[300px] flex-shrink-0">
          <div className="mb-10">
            <MostPopular />
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-bold mb-2">Subscribe Us</h3>
            <p className="text-sm text-gray-600 mb-3">
              Get Subscribe To Our Latest News & Update
            </p>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none"
            />
            <button className="w-full bg-[#789BFF] text-white py-2 rounded-full hover:bg-black">
              Subscribe
            </button>
          </div>

          <div className="bg-white p-6 mt-6">
            <div className="h-[1px] w-full bg-black mb-4"></div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              POPULAR TAGS
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-sm border border-gray-300 text-gray-700 cursor-pointer hover:text-[#789BFF] transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 mt-6">
            <div className="h-[1px] w-full bg-black mb-4"></div>
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
                  <p className="text-gray-800 text-sm font-medium leading-snug hover:text-blue-600 cursor-pointer">
                    {article.title}
                  </p>
                </div>
              ))}
            </div>
            <a href="#" className="hover:underline text-sm mt-4 block">
              See more
            </a>
          </div>

          <div className="bg-white p-6 mt-6">
            <img
              src="/masterclass-banner.svg"
              alt="Advance Masterclass on Data Privacy & Tech Law"
              className="w-full rounded-md"
            />
          </div>
          <ArticleFooter />
        </aside>
      </div>
    </section>
  );
};

export default Article;
