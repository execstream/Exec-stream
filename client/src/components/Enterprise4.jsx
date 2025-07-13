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
        <title>HR & ESG: From Back Office to Boardroom</title>
        <meta
          name="description"
          content="Environmental, Social, and Governance (ESG) is no longer a trend. It's now regulation, reputation, and resource allocation all rolled into one."
        />
        <link
          rel="canonical"
          href="https://www.linkedin.com/pulse/hr-esg-from-back-office-boardroom-biplab-sengupta-ysloc/?trackingId=fNVM5HgMTIubSSpu6y6Xtw%3D%3D"
        />
      </Helmet>

      <section className="mx-auto px-6 md:px-20 py-10 text-gray-800">
        
         <div className="flex flex-col md:flex-row gap-10">

        
          <div className="md:col-span-2">
            <h1 className="text-2xl md:text-5xl font-bold text-[#789BFF] mb-4">
              HR & ESG: From Back Office to Boardroom
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
            <div className="w-full flex justify-center mb-6">
              <div className="flex flex-col">
                <img
                  src="/ES-4 .jpg"
                  alt="HR & ESG"
                  className="h-[400px] w-[800px] object-cover rounded-xl shadow-md"
                />
                <div className="flex justify-end">
                  <p className="text-xs">
                    Picture Credit:{" "}
                    <a
                      href="https://www.visier.com/blog/hr-esg-reporting-corporate-reporting/"
                      target="_blank"
                      className="text-blue-400 underline"
                    >
                      Visier
                    </a>
                  </p>
                </div>
              </div>
            </div>

       

            <div className="flex gap-2 mb-6">
              <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
                HR
              </span>
              <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
                Workforce Governance
              </span>
              <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
                CHRO
              </span>
            </div>

            {/* Article Content */}
          <article className="prose max-w-none text-gray-700 
  [&>p]:text-sm [&>p]:mb-4 
  [&>h2]:text-md [&>h2]:font-semibold [&>h2]:mb-4 
  [&>h3]:font-bold [&>h3]:text-xl [&>h3]:text-[#789BFF] [&>h3]:mb-4 
  [&>ul]:mb-4 [&>ul>li]:text-sm [&>ul>li]:mb-2 
  [&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:list-[circle] [&>ul>li>ul>li]:text-sm [&>ul>li>ul>li]:mb-2">
              <h3 className="text-lg font-bold text-[#789BFF] mb-2"></h3>
              <p className="mb-8 text-sm">
                <strong>Environmental, Social, and Governance (ESG)</strong> is
                no longer a trend. It's now regulation, reputation, and resource
                allocation all rolled into one. From listed companies to private
                equity-backed ventures, ESG conversations have become routine in
                board meetings, investor reviews, and due diligence calls.
              </p>
              <p className="mb-8 text-sm">
                But one organ in this system remains under-recognized, the{" "}
                <strong>HR function</strong>.
              </p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Compliance teams publish ESG reports.</li>
                <li classname="text-sm">Legal teams defend them.</li>
                <li classname="text-sm">Risk teams map heat zones.</li>
              </ul>
              <p className="mb-8 text-sm">
                Yet it's the people systems, hiring logic, grievance redressal,
                whistleblower pipelines, training trails, DEI practices, that
                ESG metrics are quietly built upon. And these live inside HR.
              </p>
              <p className="mb-8 text-sm">
                Still, in most ESG strategies, HR plays a support role at best.
                This isn't a cosmetic gap. It's a strategic misalignment, and
                one that can cause reputational, financial, and legal damage.
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                A Slow Build: HR Wasn't Supposed to Be in ESG
              </h3>
              <p className="mb-8 text-sm">
                Let's rewind the tape. A decade ago, "Sustainability" meant
                emissions targets. "Governance" meant board composition and
                SEBI-mandated disclosures. <strong>"Social"</strong> was reduced
                to CSR activities and external community projects.
              </p>
              <p className="mb-8 text-sm">
                HR had little to do with any of it, perhaps drafting internal
                DEI policies or coordinating company-wide volunteerism during
                festival seasons. No one asked HR about ESG. They weren't
                supposed to.
              </p>
              <p className="mb-8 text-sm">But hindsight reveals the cracks:</p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">
                  When a leading Indian IT services firm faced #MeToo
                  allegations, it wasn't the legal clause that shocked
                  investors, it was the internal inaction.
                </li>
                <li classname="text-sm">
                  When SEBI's BRSR format asked for median pay ratios and
                  attrition disclosures, most CHROs scrambled to align data
                  sitting in disconnected payroll systems.
                </li>
                <li classname="text-sm">
                  When global proxy advisory firms started questioning board
                  gender ratios and internal grievance mechanisms, ESG
                  committees turned to HR, often finding policies but not
                  processes.
                </li>
              </ul>
              <p className="mb-8 text-sm">
                These weren't isolated moments. They were structural signals
                that HR was no longer optional in ESG, it was foundational.
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                What Changed? Three Forces That Moved HR to the Center
              </h3>
              <p className="mb-8 text-sm">
                Three seismic shifts have dragged HR into the center of ESG, not
                by invitation, but by inevitability.
              </p>

              <h4 className="text-md font-bold text-gray-800 mb-2">
                1) ESG frameworks got sharper and human
              </h4>
              <p className="mb-8 text-sm">
                Global standards like GRI, SASB, and India's BRSR moved beyond
                emissions and capital deployment. They began demanding:
              </p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Grievance redressal effectiveness</li>
                <li classname="text-sm">Gender parity and pay equity disclosures</li>
                <li classname="text-sm">Average training hours per employee</li>
                <li classname="text-sm">Contractor labour treatment</li>
                <li classname="text-sm">Retention and attrition trends by job grade</li>
              </ul>
              <p className="mb-8 text-sm">
                These are not metrics HR happens to have. These are metrics that
                only HR can make auditable. And now, boards and rating agencies
                want them not just visible but defensible.
              </p>

              <h4 className="text-md font-bold text-gray-800 mb-2">
                2) Social risks became business liabilities.
              </h4>
              <p className="mb-8 text-sm">
                Post-pandemic India saw a surge in workforce activism, not
                unionised resistance, but LinkedIn whistleblowing, Glassdoor
                culture exposes, and attrition-led protest movements.
              </p>
              <p className="mb-8 text-sm">
                The shift from <em>"employee experience"</em> to{" "}
                <em>"employee accountability"</em> is real. What was once an HR
                insight is now a governance issue.
              </p>
              <p className="mb-8 text-sm">
                When a SaaS unicorn lays off employees on Zoom with little
                explanation, the backlash isn't just reputational, it impacts
                ESG fund interest and talent pipeline credibility.
              </p>
              <p className="mb-8 text-sm">
                India Inc. is learning that ESG scores can collapse overnight
                and that the root cause often begins inside HR decisions made
                six months earlier.
              </p>

              <h4 className="text-md font-bold text-gray-800 mb-2">
                3) Culture became code and code became compliance.
              </h4>
              <p className="mb-8 text-sm">
                "Tone at the top" is no longer a slogan. Boards now want
                dashboards that measure ethics, not just speak about it.
              </p>
              <p className="mb-8 text-sm">
                But culture isn't what you write in induction decks. It's what
                you build into hiring, incentives, grievance pathways, exit
                interviews, and succession planning.
              </p>
              <p className="mb-8 text-sm">
                And all of that sits inside HR systems, most of which were never
                designed to track behaviour risk, let alone prove ethical
                alignment during an ESG audit.
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                The Invisible Risk: ESG Failures That Originated Inside HR
              </h3>
              <p className="mb-8 text-sm">
                The danger today isn't that HR is absent from ESG. It's that HR
                risks are embedded in ESG, but not managed like ESG risks.
              </p>
              <p className="mb-8 text-sm">
                Let's break that open with possible real-world cases:
              </p>

              <h4 className="text-md font-bold text-gray-800 mb-2">
                1) Case: The DEI Mirage
              </h4>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">
                  A well-known Indian financial services conglomerate boasted
                  high ESG scores and publicly committed to gender diversity.
                  Their ESG report reflected strong ratios, especially at the
                  entry and senior-most levels.
                </li>
                <li classname="text-sm">
                  But internally, something strange was happening. Women in
                  mid-career leadership roles were exiting at a disproportionate
                  rate.
                </li>
                <li classname="text-sm">
                  Exit interviews were vague. Promotion feedback lacked
                  structure. Internal coaching pipelines quietly bypassed
                  qualified women. HR had anecdotal inputs, but no data trail.
                  No dashboard. No audit.
                </li>
                <li classname="text-sm">
                  Months later, a former employee published a viral LinkedIn
                  post exposing "glass cliff" patterns and hidden bias. Two
                  ESG-focused funds issued statements. One put the firm on a
                  "watch list".
                </li>
              </ul>
              <p className="mb-4 italic">
                The ESG team was blindsided. Why? Because the HR team never saw
                itself as part of the ESG defence line.
              </p>

              <h4 className="text-md font-bold text-gray-800 mb-2">
                2) Case: The Silent Retaliation
              </h4>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">
                  An employee in a mid-sized Noida tech firm reported a senior
                  leader for harassment. The HR team followed procedure on
                  paper. Statements taken, IC inquiry conducted. No violation
                  found.
                </li>
                <li classname="text-sm">
                  But over the next six months, the complainant was removed from
                  stretch projects, marked as "non-collaborative" in reviews,
                  and eventually exited through performance management.
                </li>
                <li classname="text-sm">
                  The ESG report? "No retaliation cases reported." No red flags
                  in internal systems. No real-time heatmap of informal
                  workplace conduct.
                </li>
                <li classname="text-sm">
                  A legal notice arrived six months later, not just claiming
                  wrongful termination, but accusing the company of ESG
                  misrepresentation. Investors flagged risk. One client
                  terminated the vendor contract citing ethical concerns.
                </li>
              </ul>
              <p className="mb-4 italic">
                The ESG team had policies. But no one had proof of practice.
              </p>

              <h4 className="text-md font-bold text-gray-800 mb-2">
                3) Case: The Layoff Reputational Blowback
              </h4>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">
                  During the second wave of COVID-19, a logistics company in
                  Western India laid off 700+ workers, largely informal, largely
                  contract-based.
                </li>
                <li classname="text-sm">
                  From an HR lens, this was a spreadsheet decision. From a
                  sustainability lens, this was "labour relations: compliant".
                  From a community lens, this was a public relations disaster.
                </li>
                <li classname="text-sm">
                  Local media picked it up. Protests followed. Shareholder
                  letters arrived. ESG committees asked: "Was there any
                  grievance redressal?" The HR team responded: "These weren't
                  full-time employees."
                </li>
              </ul>
              <p className="mb-4 italic">
                And that's precisely the problem. ESG now includes contractor
                and vendor labour standards, and HR had no oversight over those
                zones.
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                What ESG Now Asks, And Why HR Must Answer
              </h3>
              <p className="mb-8 text-sm">
                Boards, regulators, and investors are no longer asking if your
                ESG policy <em>exists</em>. They want to know if it can
                withstand a crisis, prove its claims, and align with internal
                systems.
              </p>
              <p className="mb-8 text-sm">Here's what they're asking:</p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">
                  Can you defend your DEI data with evidence of outcomes, not
                  just intent?
                </li>
                <li classname="text-sm">
                  Do you have an audit trail of whistleblower handling, and
                  evidence of zero retaliation?
                </li>
                <li classname="text-sm">
                  Are your hiring and appraisal systems bias-proof, especially
                  if AI is involved?
                </li>
                <li classname="text-sm">
                  Can you demonstrate how cultural values show up in real-world
                  decisions?
                </li>
                <li classname="text-sm">
                  Have you mapped climate risk or labour disruption into your
                  workforce strategy?
                </li>
              </ul>
              <p className="mb-8 text-sm">
                Most HR functions, even in India's top firms, don't have clear
                answers. Not because of negligence, but because they were never
                shown that ESG is their responsibility.
              </p>
              <p className="mb-8 text-sm">
                This isn't a skill gap. It's a structural oversight.
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                The ESG–HR Maturity Gap: What's Reported vs What's Real
              </h3>
              <p className="mb-8 text-sm">
                What ESG expects and what HR currently manages are increasingly
                divergent.
              </p>
              <p className="mb-8 text-sm">For example:</p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">
                  ESG wants well-being metrics. HR tracks insurance coverage.
                </li>
                <li classname="text-sm">
                  ESG wants ethical hiring proof. HR tracks open positions
                  filled.
                </li>
                <li classname="text-sm">ESG wants DEI outcomes. HR reports diversity counts.</li>
                <li classname="text-sm">ESG wants behaviour data. HR offers training hours.</li>
              </ul>
              <p className="mb-8 text-sm">
                That's not alignment. That's reporting noise.
              </p>
              <p className="mb-8 text-sm">
                This isn't just a gap. It's a credibility risk. The story HR
                tells and the story ESG demands must become one.
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                Reframing HR: From Voice of People to System of Proof
              </h3>
              <p className="mb-8 text-sm">
                Here's the truth: In a world of ESG regulation, HR is no longer
                just the emotional fabric of the organisation. It is the legal,
                ethical, and strategic scaffolding that supports ESG assurance.
              </p>
              <p className="mb-8 text-sm">It's the function that:</p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">Owns the lifecycle of fairness</li>
                <li classname="text-sm">Enables or blocks retaliation</li>
                <li classname="text-sm">Shapes the inclusion pipeline</li>
                <li classname="text-sm">Responds first when culture fails</li>
                <li classname="text-sm">
                  Touches every employee and contractor, even if unintentionally
                </li>
              </ul>
              <p className="mb-8 text-sm">
                HR isn't a support function anymore. It's a control function.
              </p>

              <h3 className="text-lg font-bold text-[#789BFF] mb-2">
                What This Means for CHROs and HR Leaders in 2025
              </h3>
              <p className="mb-8 text-sm">
                If you're a CHRO or senior HR leader reading this, ask yourself:
              </p>
              <ul className="mb-4 space-y-2 list-disc ml-6">
                <li classname="text-sm">
                  Are you part of your company's ESG risk and disclosure
                  committee, or just a data provider?
                </li>
                <li classname="text-sm">
                  Can you audit your own systems for bias, retaliation, or ESG
                  alignment?
                </li>
                <li classname="text-sm">
                  Are you leading ESG-linked leadership development or simply
                  running L&D calendars?
                </li>
                <li classname="text-sm">
                  Do you know what your ESG rating is built on, and how much of
                  it depends on your team?
                </li>
                <li classname="text-sm">
                  Do you oversee how your contractor and gig labour is
                  represented in ESG reports?
                </li>
              </ul>
              <p className="mb-8 text-sm">
                If the answer to most of these is "not yet," then ESG isn't a
                story you're managing. It's a reputation risk you're feeding by
                omission.
              </p>
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
