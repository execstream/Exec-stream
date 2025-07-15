import React, { useEffect } from "react";

import MostPopular from "./MostPopular";
import ArticleFooter from "./ArticleFooter";
import Sidebar from "./Sidebar";
import SlidingBanner from "../Homepage/SlidingBanner";

const Article2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mx-auto px-6 md:px-20 py-10 text-gray-800">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-5xl font-bold text-[#789BFF] mb-4">
            Founders, freelancers, and fractional roles: Who is actually an
            employee?
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
            <span>July 13, 2025</span>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mb-10">
            {[
              {
                name: "Veena Gopalakrishnan",
                designation: "Partner (Employment Law) \n Trilegal",
                image: "/Veena.jpg",
              },
              {
                name: "Vinduja Menon",
                designation: "Senior Associate \n Trilegal",
                image: "/Vinduja.jpeg",
              },
              {
                name: "Atishay Kumar ",
                designation: "Associate \n Trilegal",
                image: "/Atishay.jpg",
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
                    (e.currentTarget.src =
                      "https://via.placeholder.com/200?text=A")
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
              Legal
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              HR
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Employment
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              GC
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              CHRO
            </span>
          </div>

          <article
            className="prose max-w-none text-gray-700 
  [&>p]:text-sm [&>p]:mb-4 
  [&>h2]:text-md [&>h2]:font-semibold [&>h2]:mb-4 
  [&>h3]:font-bold [&>h3]:text-xl [&>h3]:text-[#789BFF] [&>h3]:mb-4 
  [&>ol]:mb-4 [&>ol>li]:text-sm [&>ol>li]:mb-2 
  [&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:list-[circle] [&>ul>li>ul>li]:text-sm [&>ul>li>ul>li]:mb-2"
          >
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Introduction
            </h3>

            <p className="mb-8 text-sm">
              India’s business landscape is undergoing a profound
              transformation, shaped by the rise of startups, digital platforms,
              and a growing preference for agile, cost-effective talent
              strategies. In this environment, companies are increasingly
              leveraging flexible engagement models, ranging from freelancers
              and independent consultants to startup founders and fractional
              executives such as part- time CFOs, CHROs, and legal advisors.
              These roles provide businesses with access to highly specialised
              expertise without the overhead of full-time employment, making
              them especially attractive in fast-paced, innovation-led sectors
              like technology, fintech, and emerging digital services.
            </p>

            <p className="mb-8 text-sm">
              At the same time, the post-pandemic shift towards remote work, the
              globalisation of talent, and the expanding gig economy have
              further accelerated the adoption of non-traditional work
              arrangements. Yet, despite their clear advantages, such models
              remain underutilised in more conventional sectors, where concerns
              about continuity, team integration, and governance continue to
              limit uptake.
            </p>
            <p className="mb-8 text-sm">
              As these alternative work models gain traction, they bring with
              them important legal and regulatory questions. The most prominent
              question amongst them is: Are these professionals truly
              independent contractors, or could their roles under Indian labour
              law be interpreted as constituting an employment relationship?
              This question can at times move beyond theory and have real-world
              legal and financial consequences.
            </p>
            <p className="mb-8 text-sm">
              In this article, we explore how Indian law views these evolving
              categories of workers, freelancers, founders, and fractional
              executives, and analyse the factors that may influence whether
              they are seen as independent contractors or deemed employees in
              the eyes of the law.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Who is an “employee”, the Indian legal tests
            </h3>
            <p className="mb-4 text-sm">
              Indian courts do not follow a rigid approach when determining
              whether individuals is an employee or an independent contractor.
              Labels such as consultant, freelancer, or advisor are not
              conclusive under Indian law. Instead, courts and labour
              authorities tend to focus on working relationship, assessing the
              actual terms and conditions of engagement to determine employment
              status. Over the years, Indian jurisprudence has developed three
              principal tests for determining the employment status.
            </p>
            <p className="mb-4 text-sm">
              The first and traditionally most significant test applied under
              Indian law is the <em>control and supervision test</em>. This test focuses
              on the extent to which the company exercises control not just over
              what work is to be done, but how it is to be carried out,
              including the method, manner, timing, location, and overall
              execution process. The greater the degree of oversight and
              direction exercised by the company, the more likely it is that the
              individual will be deemed an employee rather than an independent
              contractor. In one well-established instance, a group of salt
              workers initially classified as independent contractors were found
              to be employees because the company dictated their working hours,
              methods, and overall performance. It was held that the key
              indicator of an employment relationship is the employer’s right to
              direct not only the outcome of the work, but also the way in which
              it is performed.
            </p>
            <p className="mb-4 text-sm">
              The second is the <em>Integration test</em>. Under this test, courts
              examine whether the individual is integrated into the core
              business and operations of the enterprise, or whether the person
              remains an independent service provider. If the individual is
              functionally embedded within the organisation and performs
              essential roles that is substantially similar to the regular
              employees, an employment relationship is likely to be inferred.
            </p>
            <p className="mb-4 text-sm">
              The third is the <em>Economic dependence test</em>, which considers whether
              an individual is financially reliant on a single organisation.
              Indian courts have recognised that if a person derives most or all
              of their income from one company, works exclusively for it, and
              shows signs of subordination or dependency such as relying on the
              company for continued work and being subject to its supervision,
              this may indicate an employment relationship, even in the absence
              of a formal contract.
            </p>
            <p className="mb-4 text-sm">
              In one notable instance, tailoring workers engaged on a piece-rate
              basis were found to be employees because they worked solely for
              one establishment, earned their entire livelihood from it, and
              were subject to the organisation’s oversight and quality control
              standards. It was held that where a worker is entirely dependent
              on an employer for income and the employer retains meaningful
              control over working conditions and output, the relationship is
              more akin to that of an employer-employee than that of an
              independent contractor.
            </p>
            <p className="mb-4 text-sm">
              Let us now assess each of these categories, i.e., founders,
              freelancers, and individuals engaged on fractional roles, to
              evaluate whether, based on the tests discussed above, they may be
              considered employees under Indian law.
            </p>

           
        <ol className="list-decimal pl-6">
  <li>
    <strong>Founders:</strong>
    <p>The term founder is not defined under Indian company law, and merely being referred to as a founder
or promoter does not automatically establish an employer-employee relationship. A founder typically
focuses on the company’s vision, strategic direction, and shareholder value responsibilities that are
distinct from those of an employee. However, in practice, founders often assume dual roles, acting as
shareholders or directors while also holding operational positions such as CEO or CTO. It is in this
operational capacity that a founder may be regarded as an employee. The key determinant is whether
the founder performs ongoing operational duties under a formal employment arrangement.</p>
    <p>Where a founder has entered into an employment agreement that sets out terms of service such as
compensation, benefits, working hours, reporting lines, and responsibilities and receives a regular
salary subject to withholding taxes and statutory deductions (such as provident fund, and gratuity),
they are likely to be classified as an employee. Additional indicators include participation in employee
benefit schemes (such as ESOPs) and being subject to significant oversight or direction from the
board.</p>
<p>It is important to distinguish between founder agreements and employment agreements. Founder
agreements generally deal with initial contributions, equity rights, and governance roles, while
employment agreements specify job responsibilities, pay, and statutory benefits. Where founders
perform dual roles, executing both types of agreements ensures clarity and helps avoid legal
ambiguity.</p>
<p>In summary, founders who remain in purely strategic, governance, or investor roles are unlikely to be
classified as employees. However, founders who assume operational leadership, draw salaries, are
subject to company oversight, and receive employee benefits are highly likely to be treated as
employees for purposes of Indian labour and tax laws. Companies should carefully structure and
document such dual-role relationships to ensure legal clarity and mitigate risk of employment-related
claims, especially in situations of founder exit or disputes.</p>
  </li>
  <li>
    <strong>Freelancers:</strong>
    <p>Freelancers are typically engaged on a project basis and are characterised by a high degree of
autonomy. In a genuine independent contractor arrangement, a freelancer has the freedom to

determine how, when, and where to perform the work, is entitled to take on multiple clients
simultaneously, and is compensated on a deliverable or milestone basis rather than receiving a fixed
salary. In such cases, the freelancer operates as a distinct entity and is not integrated into the
employer’s organisational structure and therefore would generally not be classified as an employee
under Indian law. However, the risk of misclassification arises when the practical realities of the
engagement deviate from this structure. If the freelancer works exclusively for one company over a
sustained period, is required to adhere to fixed working hours, is subject to reporting obligations
similar to regular employees, uses a company-designated email ID and official designation, has access
to internal systems and resources, and is required to comply with HR policies such as leave approvals,
this strongly suggests that the freelancer is functionally integrated into the company’s workforce. In
such circumstances, notwithstanding the contractual label of freelancer or consultant, courts are likely
to infer an employer-employee relationship. In summary, while a freelancer genuinely operating as an
independent contractor is not an employee, companies must exercise caution in structuring these
engagements.</p>
    
  </li>
  <li>
    <strong>Fractional roles:</strong>
    <p>Fractional workers are skilled professionals who work part time, often for multiple clients, providing
specialised expertise in areas such as human resources, finance, marketing, legal, and technology
functions. They are particularly common in startups, small and medium enterprises, and even
increasingly in large corporations, where companies seek to optimise costs and access high level
talent without engaging them for full time positions. Fractional workers are typically engaged under
consultancy or service agreements, are free to serve multiple clients, manage their own schedules, and
set their own commercial terms. They are generally treated as independent contractors and are
responsible for managing their own tax and social security obligations, without being integrated into
the client’s employee payroll or benefits structure.</p>
    <p>From an Indian employment law perspective, fractional work remains a grey area, as it is neither
explicitly recognised nor prohibited under existing labour statutes. Most Indian labour laws are still
built around traditional full time employment models and do not accommodate or define nonstandard
roles such as fractional executives, who typically offer part time or project-based leadership across
multiple organisations. Even recent legislative developments aimed at formalising the gig and
platform economy, such as provisions under the Code on Social Security 2020, primarily focus on
platform workers and those in task-based or operational roles. These protections, however, do not
extend to fractional roles or knowledge-based professionals working in advisory or executive
capacities. As a result, these individuals often fall outside the scope of employee benefits, social
security entitlements and protective labour regulations, creating ambiguity around their classification
and raising potential compliance and misclassification risks for companies engaging them.</p>
  </li>
 
</ol>
<h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Misclassification risks
            </h3>
            <p>The misclassification of individuals such as founders, freelancers, and fractional executives can have
significant legal consequences under Indian law from an employment law perspective. Courts and
labour authorities typically apply a substance-over-form approach, focusing on the actual nature of the
working relationship rather than the contractual designation. Key factors include the level of control
exercised by the organisation, the individual’s integration into the business, continuity of engagement,
and financial dependence on the company.</p>
            <p>If an individual is effectively functioning as an employee, regardless of how they are labelled in the
contract, the company may become liable for statutory obligations such as minimum wage payments,

provident fund contributions, gratuity, and other employee benefits. These risks often surface when
founders receive consistent remuneration, freelancers work exclusively with a single organisation over
long periods, or fractional executives take on ongoing managerial roles. Misclassification claims
generally arise when individuals believe they have been denied benefits or treated inconsistently with
their role, blurring the line between an independent contractor and an employee, and potentially
exposing the organisation to legal and financial liabilities.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Conclusion
            </h3>
            <p>As more businesses engage with freelancers, founders, and fractional executives to enable flexible and
cost-effective workforce models, it becomes crucial to look beyond titles and assess the substance of
each engagement. To reduce the risk of misclassification, companies should pair well-drafted
contracts with a deliberate role design that preserves independence, limits integration into core
operations, and clearly defines the scope and duration of the engagement.</p>
            <p>Regular reviews and proactive risk assessments can further strengthen compliance. In evaluating the
nature of these relationships, organisations should consider whether the work is integral to the core
business, along with other indicators such as control, permanence, financial investment, skill level,
and the opportunity for profit or loss. These factors must be viewed collectively to form an accurate
picture of the relationship.</p>
            <p>That said, many freelancers and fractional professionals today actively choose these models for their
flexibility and autonomy, particularly when roles are well-compensated and structured transparently.
While the legal framework remains important, the risk of disputes is significantly lower when
expectations are clear, roles are well-defined, and both parties understand the nature of the
engagement. A thoughtful and well-informed approach allows companies to embrace flexible talent
models while staying compliant and avoiding adverse legal exposure.</p>
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
