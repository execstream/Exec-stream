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
            Labour, Employment, and HR Issues in M&A Transactions: Navigating
            People Risks in Deal-Making
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
            <span>July 9, 2025</span>
          </div>
          <div className="w-full flex justify-center mb-6">
            <img
              src="/Raunak Singh.jpeg"
              alt="Raunak Singh"
              className="h-[400px] w-auto object-cover rounded-xl shadow-md"
            />
          </div>

          <h2 className="text-xl font-bold mb-2">Raunak Singh</h2>
          <p className="text-sm font-medium text-gray-500 mb-6">
            {" "}
            Partner <br /> Anoma Legal
          </p>

          <div className="flex gap-2 mb-8">
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Legal
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Employment
            </span>
          </div>

          {/* Article Content */}
          <article className="prose max-w-none text-gray-700 [&>p]:text-sm [&>p]:mb-8 [&>ul]:text-sm [&>li]:mb-2 [&>li]:text-sm [&>em]:text-sm [&>span]:text-sm">
            <p className="mb-8 text-sm">
              In India’s fast-evolving M&amp;A environment, early-stage
              decisions have traditionally been dominated by considerations
              around balance sheets, valuations, and tax implications. However,
              there is a growing awareness among Indian businesses that
              workforce-related factors are far from peripheral; they are, in
              fact, critical to the overall success and sustainability of any
              transaction. Overlooking HR and employment issues can severely
              hinder integration efforts and expose the acquiring company to
              prolonged legal challenges and financial risks.
            </p>
            <p className="mb-8 text-sm">
              This article delves into the practical labour and employment risks
              commonly encountered in Indian M&amp;A transactions. It provides
              strategic guidance tailored for CHROs, legal advisors, and
              business leaders, equipping them with the insights needed to
              navigate workforce transitions effectively and mitigate post- deal
              complications.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Deal Structure Determines Workforce Strategy
            </h3>
            <p className="mb-8 text-sm">
              The structure of the transaction—whether a share purchase, asset
              purchase, or slump sale—fundamentally impacts how employees are
              handled.
            </p>
            <p className="mb-8 text-sm">
              In share purchases, the employer entity remains unchanged, and
              employee continuity is preserved by default. However, unlike the
              protections regulated by the TUPE Regulations (Transfer of
              Undertakings (Protection of Employment) Regulations 2006) in the
              United Kingdoms, in India, the employment relationship doesn’t
              automatically transfer in case of asset or slump sales. Thus,
              assumption of automatic transfer of employment in course of such
              transactions, without obtaining consent or recognizing past
              services of employees, may lead to legal claims on various fronts
              including for loss of service continuity.
            </p>
            <p className="mb-8 text-sm">
              Legal protections, particularly for non-managerial staff, require
              that employment terms remain no less favourable and continuity of
              service is preserved for statutory benefits like gratuity. Even
              where the law doesn’t explicitly mandate employee consent, Indian
              courts have consistently stressed its importance—making it a
              prudent step for enforceability.
            </p>
            <p className="mb-8 text-sm">
              Recognizing employees past service is not only a statutory
              requirement for workmen but also a practical and fair approach
              across the organisation. Past service impacts gratuity, leave
              encashment, retrenchment pay, and employee morale. Extending these
              protections to senior employees and contract staff demonstrates HR
              maturity and fosters smoother post-transaction integration.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Common Mistakes that Create Hidden Liabilities
            </h3>
            <p className="mb-8 text-sm">
              In course of these transactions, some of the frequently overlooked
              missteps include - failure to carry forward accrued leave
              balances; imposing new probation periods for already-confirmed
              employees and disregarding service continuity for benefits
              eligibility, especially for employees on maternity leave. These
              lapses can trigger statutory violations, employee grievances, or
              even litigation.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Understanding the Reach of Industrial Dispute Laws
            </h3>
            <p className="mb-8 text-sm">
              Many acquirers mistakenly believe industrial dispute laws apply
              only to manufacturing sectors. In reality, courts have confirmed
              their applicability to service sectors as well. Misinterpreting
              this can lead to wrongful termination disputes and integration
              challenges.
            </p>
            <p className="mb-8 text-sm">
              {" "}
              Additionally, misclassifying employees as non-workmen (based on
              title or salary, rather than function) risks serious consequences,
              including statutory violations and reinstatement with back pay.
              Due diligence must carefully analyse employee functions to avoid
              classification errors.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Consultants and Contract Labour: The Misclassification Minefield
            </h3>
            <p className="mb-8 text-sm">
              Classifying de facto employees as consultants or contract labour
              exposes acquirers to financial and legal liabilities. Courts
              assess actual control and supervision—not contractual
              designations—to determine employment status. If found to be
              misclassified, these individuals may become eligible for social
              security benefits and protection under labour laws.
            </p>
            <p className="mb-8 text-sm">
              Further, if third-party vendors default on payments to contract
              workers, acquirers may be held liable as principal employers.
              Comprehensive due diligence is essential to identify hidden
              liabilities.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Handling Disciplinary Records and Legal Histories
            </h3>
            <p className="mb-8 text-sm">
              In several instances, the ongoing employment of transferred
              employees is mistakenly treated as new employment, leading the
              transferee entity to overlook the formal transfer of these
              employees&#39; historical records and files. Without access to
              complete employment records, employers may face difficulties in
              addressing internal matters such as performance concerns or
              misconduct. Moreover, a comprehensive employment history is
              essential for effective HR management and supervision. To avoid
              such issues, it is recommended that transferee entities ensure
              that transaction documents clearly mandate the transfer of all
              personnel records and employment files.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Employee Benefit Funds: A Frequently Overlooked Risk
            </h3>
            <p className="mb-8 text-sm">
              Employee benefit schemes—such as provident fund trusts, gratuity
              trusts, and superannuation plans—require meticulous planning
              during transitions to ensure continuity and compliance. Inadequate
              integration, restructuring, or transfer of these funds can result
              in regulatory scrutiny, administrative inefficiencies, duplication
              of compliance requirements, and even potential liabilities. It is
              therefore essential for both the transferor and transferee
              entities to proactively assess and align these benefit structures
              as part of the overall transaction strategy, ensuring a smooth
              transition for both the organization and the affected employees.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Discretionary Benefits and Post-Acquisition Expectations
            </h3>
            <p className="mb-8 text-sm">
              Following an acquisition, transferred employees frequently expect
              to receive all existing perks and benefits offered by the
              acquiring entity—such as stock options, performance bonuses, club
              memberships, and other incentives. However, these benefits are
              usually discretionary in nature and governed by the acquirer’s
              internal policies and eligibility criteria. To avoid
              misunderstandings and potential disputes, acquisition agreements
              should explicitly clarify that such discretionary benefits are not
              automatically extended and remain subject to the acquirer’s
              prevailing policies. Moreover, clear and timely communication
              regarding which benefits will be continued, modified, or
              discontinued is essential for setting realistic expectations,
              maintaining employee trust, and safeguarding organizational morale
              during the transition.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Union Agreements and Pre-Existing Settlements
            </h3>
            <p className="mb-8 text-sm">
              Pre-existing employment contracts, union settlements, and
              collective bargaining agreements remain legally binding on the
              acquiring entity post-transaction. Failure to honor these
              obligations—particularly in unionized environments—can lead to
              serious consequences, including employee unrest, legal disputes,
              or industrial action such as strikes. As such, thorough due
              diligence should encompass a comprehensive review of all labor
              agreements, their terms, and the company’s historical compliance
              with them. Identifying potential red flags or unresolved issues
              early in the process enables the acquirer to assess risks, plan
              for integration challenges, and engage proactively with employee
              representatives to ensure a smoother transition.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Post-Acquisition Compliance Pitfalls
            </h3>
            <section className="mb-4">
              <p className="text-gray-700 mb-4 text-sm">
                An acquisition involves more than just taking on a new
                workforce—it also means inheriting the target company&#39;s
                compliance history, including any gaps or liabilities. Common
                compliance issues that often come to light post-acquisition
                include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm  text-gray-800">
                <li classname="text-sm">
                  Absence of mandatory statutory policies, such as those
                  relating to prevention of sexual harassment or maternity
                  benefits;
                </li>
                <li classname="text-sm">
                  Failure to constitute or register internal committees as
                  required under law;
                </li>
                <li classname="text-sm">
                  Operational licences, such as factory licences or contractor
                  registrations, remaining in the seller’s name;
                </li>
                <li classname="text-sm">
                  Missing or non-obtained No Objection Certificates (NOCs) or
                  other approvals from relevant regulatory authorities.
                </li>
              </ul>
              <p className="mt-6 text-sm  text-gray-700">
                While these shortcomings may not pose immediate obstacles, they
                have the potential to cause significant operational disruptions,
                attract regulatory scrutiny, or delay key business processes
                after the transaction. It is therefore critical that acquirers
                conduct thorough legal and compliance due diligence to identify,
                evaluate, and remediate such risks before closing the deal.
              </p>
            </section>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Litigation and Successor Liability
            </h3>
            <p className="mb-8 text-sm">
              Acquirers must conduct a thorough review of all past and ongoing
              employee-related litigations, labour disputes, and statutory
              claims as part of the due diligence process. Even in cases
              involving asset purchases or slump sales, courts may impose
              successor liability on the acquiring entity, holding it
              accountable for the target&#39;s historical employment-related
              violations—even if the acquirer was not originally involved.
              Importantly, statutory obligations cannot be contractually waived
              or avoided, regardless of the structure of the transaction.
            </p>
            <p className="mb-8 text-sm">
              A comprehensive due diligence review should therefore include an
              assessment of severance arrangements, pending or potential benefit
              claims, employee classification practices (e.g., misclassification
              of contractors or fixed-term workers), and records of workplace
              accidents or safety violations. Identifying these issues early not
              only helps manage legal and financial exposure but also informs
              post-acquisition integration planning and risk mitigation
              strategies.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              New Labour Codes: A New Compliance Horizon
            </h3>
            <p className="mb-8 text-sm">
              Although the implementation of the new Labour Codes is still
              pending official notification, their eventual commencement will
              significantly reshape the existing legal landscape. These Codes
              consolidate and modernize legacy labour laws, introducing stricter
              enforcement mechanisms, enhanced employer obligations, and
              substantially higher penalties for non-compliance. As a result,
              historical lapses within the target company—currently manageable
              under older statutes—could escalate into more serious liabilities
              under the new regime.
            </p>
            <p className="mb-8 text-sm">
              It is therefore imperative for acquirers to proactively evaluate
              the potential impact of the upcoming Labour Codes on all aspects
              of the transaction, including workforce obligations, employment
              contracts, HR policies, and compliance infrastructure. This
              assessment should also inform integration planning, ensuring that
              the combined entity is well-prepared to meet heightened regulatory
              expectations and avoid future exposure.
            </p>{" "}
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Data Privacy in Workforce Transfers
            </h3>
            <p className="mb-8 text-sm">
              Employee data handling has become a growing area of regulatory
              scrutiny, particularly in the context of mergers and acquisitions.
              Under existing regulations, the transfer of sensitive personal
              data—such as health information, financial details, or biometric
              identifiers—requires the express consent of the individual
              concerned. With the impending enforcement of the Digital Personal
              Data Protection Act, 2023, the regulatory landscape will become
              even more stringent, introducing comprehensive obligations for
              data processing, cross-border transfers, data minimization, and
              significantly higher penalties for non- compliance.
            </p>
            <p className="mb-8 text-sm">
              In this context, both sellers and buyers must work collaboratively
              to ensure alignment on key areas, including obtaining valid and
              informed consent, establishing secure and lawful data transfer
              mechanisms, and conducting thorough data protection impact
              assessments. Early coordination on these matters is essential not
              only to ensure legal compliance but also to safeguard employee
              trust, protect corporate reputation, and facilitate a smooth
              integration process post-transaction.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Conclusion: People Risk is Integral to Deal Risk
            </h3>
            <p className="mb-8 text-sm">
              The success of any merger or acquisition extends far beyond
              financial and operational considerations; it fundamentally depends
              on how well the workforce is managed and integrated throughout the
              transition. Overlooking HR and employment-related risks can result
              in significant disruptions, costly litigation, employee
              dissatisfaction, and ultimately, erosion of the deal’s value and
              strategic objectives.
            </p>
            <p className="mb-8 text-sm">
              To mitigate these risks and facilitate a seamless integration, it
              is crucial that legal, HR, and leadership teams engage
              collaboratively from the earliest stages of the deal process.
              Workforce strategy should be treated not as a peripheral concern
              but as a core pillar of transaction planning—ensuring that people-
              related issues are proactively addressed to preserve
              organizational stability, morale, and long-term success.
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
  );
};

export default Article;
