import React, { useEffect } from "react";
import ArticleFooter from "./Article/ArticleFooter";
import MostPopular from "./Article/MostPopular";

import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <title>
          India's ESG Bonds: Debt, Disclosures, and the Double Game of Promises
        </title>
        <meta
          name="description"
          content="Is ESG financing a transformational tool or a compliance-shaped narrative? Exploring India's ESG bond market and sustainability-linked bonds."
        />
        <link
          rel="canonical"
          href="https://www.linkedin.com/pulse/indias-esg-bonds-debt-disclosures-double-game-biplab-sengupta-biskc/"
        />
      </Helmet>

      <section className="mx-auto px-6 md:px-20 py-10 text-gray-800">
      

         <div className="flex flex-col md:flex-row gap-10">

          {/* Main Article */}
          <div className="md:col-span-2">
            <h1 className="text-2xl md:text-5xl font-bold text-[#789BFF] mb-4">
              India's ESG Bonds: Debt, Disclosures, and the Double Game of Promises
            </h1>
             <div className="flex items-center gap-3 mb-4">
  <img
    src="/Biplab.jpeg"
    alt="Biplab SenGupta"
    className="w-8 h-8 rounded-full object-cover"
  />
 
  <div className="text-sm text-gray-500 flex items-center">
          <span>July 9, 2025</span>
        </div>
</div>
            <h3 className="text-lg font-bold mb-4">
              Is ESG financing a transformational tool or a compliance-shaped narrative?
            </h3>
            <div className="w-full flex justify-center mb-6">
              <div className="flex flex-col">
                <img
                  src="/ES-3.jpg"
                  alt="ESG Bonds"
                  className="h-[400px] w-[800px] object-cover rounded-xl shadow-md"
                />
                <div className="flex justify-end">
                  <p className="text-xs">
                    Picture Credit:{" "}
                    <a
                      href="https://vir.com.vn/the-significant-growth-of-green-bonds-97772.html"
                      target="_blank"
                      className="text-blue-400 underline"
                    >
                      Vir
                    </a>
                  </p>
                </div>
              </div>
            </div>

           


            <div className="flex gap-2 mb-6">
              <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
                Finance
              </span>
              <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
                Sustainability
              </span>
              <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
                Green Financing
              </span>
              <span className="bg-blue-100 text-[#557be3] text-xs font-bold px-3 py-1 rounded">
                CFO
              </span>
              <span className="bg-blue-100 text-[#557be3] text-xs font-bold px-3 py-1 rounded">
                CSO
              </span>
            </div>

            {/* Article Content */}
             <article className="prose max-w-none text-gray-700 
  [&>p]:text-sm [&>p]:mb-4 
  [&>h2]:text-md [&>h2]:font-semibold [&>h2]:mb-4 
  [&>h3]:font-bold [&>h3]:text-xl [&>h3]:text-[#789BFF] [&>h3]:mb-4 
  [&>ul]:mb-4 [&>ul>li]:text-sm [&>ul>li]:mb-2 
  [&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:list-[circle] [&>ul>li>ul>li]:text-sm [&>ul>li>ul>li]:mb-2">
              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                ESG Bonds vs SLBs: Where the Game Actually Changes
              </h3>
              <p className="mb-8 text-sm">
                The ESG bond space isn't monolithic and it's time we stop treating it that way.
              </p>
              <p className="mb-8 text-sm">
                <strong>ESG Bonds</strong> are use-of-proceeds instruments. Every rupee raised is earmarked for a green or social project: solar plants, green buildings, sanitation, etc. These bonds are concrete. Auditable. Project-specific.
              </p>
              <p className="mb-8 text-sm">
                <strong>SLBs (Sustainability-Linked Bonds)?</strong> Entirely different species.
              </p>
              <p className="mb-8 text-sm">
                SLBs are about performance, not purpose. You raise money for anything but commit to long-term ESG goals. If you don't meet those goals, you pay a financial penalty (say, a 25–50 bps increase in interest). Capital is fungible. ESG promises are not.
              </p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">
                  <strong>Global Glimpse:</strong> When Italy's Enel issued its SLB, it promised a higher renewable share by 2025. When it failed, its coupon increased. But Enel kept raising money. There was no long-term market punishment, just a step-up, and move on.
                </li>
                <li classname="text-sm">
                  <strong>Indian Implication:</strong> Firms like L&T are now following suit. Capital today. Promise of ESG tomorrow. But who checks tomorrow?
                </li>
              </ul>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                SEBI's Framework: Bold Architecture, Fragile Enforcement
              </h3>
              <p className="mb-8 text-sm">
                SEBI's 2023 overhaul was historic. It merged green, social, sustainable, and SLBs into one unified ESG bond framework.
              </p>
              <p className="mb-8 text-sm">It introduced:</p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Mandatory ESG KPIs for SLBs</li>
                <li classname="text-sm">External reviews for validation</li>
                <li classname="text-sm">Coupon step-ups for underperformance</li>
                <li classname="text-sm">Periodic disclosures post-issuance</li>
              </ul>
              <p className="mb-8 text-sm">
                Sounds great, right? But here's the rub: There's no national taxonomy defining what's "green" or "ambitious." External reviewers are paid by issuers. Penalties are small, unenforceable, and non-disruptive.
              </p>
              <p className="mb-8 text-sm">
                Unlike the EU, where false ESG claims = lawsuits, SEBI's approach is still maturing.
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                Case Study: L&T's ₹500 Cr SLB - Real Impact or Reputational Design?
              </h3>
              <p className="mb-8 text-sm">
                L&T has announced the issuance of an SLB, the first listed under SEBI's new ESG bond regime.
              </p>
              <p className="mb-8 text-sm">Targets they committed to:</p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Reduce freshwater intensity</li>
                <li classname="text-sm">Achieve water neutrality by 2035</li>
                <li classname="text-sm">Achieve carbon neutrality by 2040</li>
              </ul>
              <p className="mb-8 text-sm">Bold? Yes.</p>
              <p className="mb-8 text-sm">Immediate? Not even close.</p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Capital is raised now</li>
                <li classname="text-sm">ESG delivery is promised for a future board to handle</li>
                <li classname="text-sm">Financial risk of missing targets? Minimal</li>
              </ul>
              <p className="mb-8 text-sm">
                <strong>Insight:</strong> This isn't ESG delivery. It's ESG positioning. The real question is, does anyone monitor long-term performance after the bond matures?
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                The Role of HSBC: Enabler or Gatekeeper?
              </h3>
              <p className="mb-8 text-sm">
                HSBC was the sole arranger for the L&T SLB. That's a bigger deal than it looks. Today's banks don't just underwrite capital, they underwrite credibility.
              </p>
              <p className="mb-8 text-sm">But here's the question:</p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Do banks verify if ESG KPIs are real and ambitious?</li>
                <li classname="text-sm">Or are they helping issuers get across the regulatory finish line?</li>
              </ul>
              <p className="mb-8 text-sm">
                As the ESG bond market matures, arrangers must evolve from dealmakers to trust brokers.
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                The Critique Corner: Is ESG Becoming Finance's Moral Fiction?
              </h3>
              <p className="mb-8 text-sm">
                Critics like Aswath Damodaran (NYU) and Tariq Fancy (former BlackRock CIO of sustainable investing) have long argued that ESG is in danger of becoming a market-fuelled myth rather than a measurement tool.
              </p>
              <p className="mb-8 text-sm">
                Their critique is not of sustainability goals, but of the incentives embedded in ESG finance:
              </p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">That ESG frameworks often rotate risks rather than reduce them (e.g., polluting assets sold to private equity)</li>
                <li classname="text-sm">That ESG funds underperform but remain over-marketed</li>
                <li classname="text-sm">That the system incentivises disclosure, not delivery</li>
              </ul>
              <p className="mb-8 text-sm">
                Case in point: When ESG funds exited Occidental Petroleum due to fossil exposure, Berkshire Hathaway increased its stake. The asset remained in the system. Only the label changed.
              </p>
              <p className="mb-8 text-sm">
                This critique is essential in the Indian context because our market is now adopting ESG instruments without establishing ESG enforcement infrastructure.
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                Why CFOs and ESG Officers Must Now Interlock
              </h3>
              <p className="mb-8 text-sm">
                In the SLB era, ESG is no longer a sustainability report filed once a year. It becomes a balance sheet strategy.
              </p>
              <p className="mb-8 text-sm"><strong>CFOs must:</strong></p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Integrate ESG KPIs into debt planning</li>
                <li classname="text-sm">Engage with ESG officers on data tracking and delivery</li>
                <li classname="text-sm">Budget for potential step-up costs as part of long-term liability planning</li>
              </ul>
              <p className="mb-8 text-sm"><strong>ESG heads must:</strong></p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Quantify goals in ways that satisfy external reviewers</li>
                <li classname="text-sm">Collaborate with investor relations and legal for disclosure integrity</li>
                <li classname="text-sm">Build real-time audit systems, not just glossy reports</li>
              </ul>
              <p className="mb-8 text-sm"><strong>Legal Heads / GCs must:</strong></p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Ensure ESG claims meet legal scrutiny</li>
                <li classname="text-sm">Embed ESG into contractual obligations</li>
                <li classname="text-sm">Coordinate disclosure governance</li>
                <li classname="text-sm">Anticipate enforcement and litigation Risk</li>
              </ul>
              <p className="mb-8 text-sm">Failure to integrate these functions could lead to:</p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Costlier refinancing</li>
                <li classname="text-sm">Reputational blowback</li>
                <li classname="text-sm">Regulatory scrutiny for misleading ESG claims</li>
              </ul>
              <p className="mb-8 text-sm">
                The old, siloed model of ESG as a PR function is not just outdated, it's now a governance risk.
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                Risks Hiding in Plain Sight
              </h3>
              <p className="mb-8 text-sm"><strong>Here's what the market isn't pricing properly:</strong></p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">
                  <strong>Greenwishing:</strong> Goals are declared with hope but no plan. Long-term targets are a way to defer pressure, not apply it.
                </li>
                <li classname="text-sm">
                  <strong>Time Arbitrage:</strong> A company promises carbon neutrality by 2040, raises capital in 2025, and sees no accountability for a decade.
                </li>
                <li classname="text-sm">
                  <strong>Reviewer Risk:</strong> External reviewers are often selected and paid by issuers. Conflicts of interest abound. Most reports are not public.
                </li>
                <li classname="text-sm">
                  <strong>Lack of Market Memory:</strong> If a company misses its ESG targets, who remembers? The penalty is a small coupon rise. There is no historical tagging of underperformance.
                </li>
              </ul>
              <p className="mb-4 font-medium italic">
                In short: We're pricing ESG optics, not ESG truth.
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                What India Can Learn from Global Cases
              </h3>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">
                  <strong>Chile's SLB</strong> in 2022 was one of the first sovereign SLBs globally. It tied national decarbonisation targets to bond performance. But due to delays in fossil phase-out policies, questions arose about the feasibility of targets.
                </li>
                <li classname="text-sm">
                  <strong>Apple's green bond</strong> program, in contrast, used proceeds for specific climate-related projects like aluminium recycling and solar facilities. Apple released post-issuance allocation reports, making it auditable.
                </li>
              </ul>
              <p className="mb-8 text-sm">Lessons for India:</p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">ESG bonds with short audit cycles and public updates build trust</li>
                <li classname="text-sm">SLBs must include interim milestones and investor access to performance dashboards</li>
                <li classname="text-sm">Sovereign and public-sector issuance should model transparency for private issuers to follow</li>
              </ul>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                Investor Outlook: Mutual Funds, Insurance Funds, and Retail Access
              </h3>
              <p className="mb-8 text-sm"><strong>Indian ESG debt is currently held by institutional investors:</strong></p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Mutual funds allocate to ESG for yield diversification</li>
                <li classname="text-sm">Pension and EPFO-style funds see it as a long-term instrument</li>
                <li classname="text-sm">Insurance funds prefer it for signalling, not risk-pricing</li>
              </ul>
              <p className="mb-8 text-sm"><strong>But retail access remains minimal. Why?</strong></p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Lack of understanding of ESG-linked risks</li>
                <li classname="text-sm">No standardised ESG fund disclosures</li>
                <li classname="text-sm">No rating agency consensus on ESG slippage</li>
              </ul>
              <p className="mb-8 text-sm">
                For ESG debt to mature in India, retail needs simplified products, investor education, and ESG dashboards linked to demat platforms.
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                Final Signal: The Path Forward for India's ESG Capital Market
              </h3>
              <p className="mb-8 text-sm">
                India has made a structural leap by formalising ESG bonds and SLBs. But without credible enforcement, defined taxonomies, and real-world penalties, the market risks devolving into a green finance illusion.
              </p>
              <p className="mb-8 text-sm">To make ESG-linked finance transformational, India must:</p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Create audit infrastructure for SLB performance (with public dashboards)</li>
                <li classname="text-sm">Regulate ESG reviewers with registration, transparency, and penalties</li>
                <li classname="text-sm">Link ESG bond credibility to public incentives (like access to PLI or tax benefits)</li>
                <li classname="text-sm">Educate the market that ESG isn't a narrative premium, it's a performance burden</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <p className="text-gray-800 font-bold text-lg mb-2">
                  Because in finance, a promise without verification is not impact. It's arbitrage.
                </p>
              </div>
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
    </>
  );
};

export default Article;