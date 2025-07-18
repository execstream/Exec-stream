import React, { useEffect } from "react";

import ArticleFooter from "./Article/ArticleFooter";
import MostPopular from "./Article/MostPopular";

import { Helmet } from "react-helmet-async";
import Sidebar from "./Article/Sidebar";
import SlidingBanner from "./Homepage/SlidingBanner";

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="In 2025, HR is no longer a peripheral function but a core risk nerve center. Learn why leaders must address the new vectors of risk, from AI to data privacy."
        />
        <link
          rel="canonical"
          href="https://www.yourwebsite.com/article/hr-risk-nerve-center"
        />
      </Helmet>

      <section className="mx-auto px-6 md:px-20 py-10 text-gray-800">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Main Article */}
          <div className="md:col-span-2">
            <h1 className="text-2xl md:text-5xl font-bold text-[#789BFF] mb-4">
              The New Control Room: Why HR Is Now a Risk Nerve Center and What
              Leaders Must Do About It
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/Biplab.jpeg"
                alt="Biplab SenGupta"
                className="w-8 h-8 rounded-full object-cover"
              />
              <h2 className="text-sm font-semibold text-gray-800 ">
                Biplab SenGupta
              </h2>
              <div className="text-sm text-gray-500 flex items-center">
                <span>July 18, 2025</span>
              </div>
            </div>

            <div className="w-full flex justify-center mb-6">
              <div className="flex flex-col">
                <img
                  src="/ES-8.jpg"
                  alt="A modern office representing a new HR control room"
                  className="h-[400px] w-[800px] object-cover rounded-xl shadow-md"
                />
                <div className="flex justify-end">
                  <p className="text-xs">
                    Picture Credit: Pixabay
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
                HR
              </span>
              <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
                HR Risk
              </span>
              <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
                Risk Management
              </span>
              <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
                TPRM
              </span>
            </div>

            {/* Article Content */}
            <article className="prose max-w-none text-gray-700 
              [&>p]:text-sm [&>p]:mb-4 
              [&>h2]:text-md [&>h2]:font-semibold [&>h2]:mb-4 
              [&>h3]:font-bold [&>h3]:text-xl [&>h3]:text-[#789BFF] [&>h3]:mb-4 
              [&>ul]:mb-4 [&>ul>li]:text-sm [&>ul>li]:mb-2
              [&>ol]:list-decimal [&>ol]:pl-5 [&>ol>li]:text-sm [&>ol>li]:mb-2
              [&>ul]:list-disc [&>ul]:pl-5
              [&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:list-[circle] [&>ul>li>ul>li]:text-sm [&>ul>li>ul>li]:mb-2">

              <p>
                For decades, internal controls were quietly managed behind the scenes by finance, audit, compliance. HR sat adjacent to this system, rarely at its core.
              </p>

              <p>
                But that era is over. Today, HR is no longer a peripheral function in the enterprise risk map. It’s the new risk nerve center, a zone where data, decisions, people, tech, vendors, AI, and law intersect.
              </p>

              <p>
                In 2025, internal auditors aren’t just reviewing finance workflows. They’re walking into HR departments with serious questions:
              </p>

              <ul>
                <li>Who has access to what?</li>
                <li>Can the system be gamed?</li>
                <li>Are recruitment and exits auditable?</li>
                <li>Is your AI engine compliant with data laws?</li>
                <li>Can third-party HR platforms leak data across borders?</li>
              </ul>

              <p>
                This isn’t theory. It’s already happening. And if HR leaders don’t lead this shift now, someone else will, likely too late.
              </p>

              <h3>What’s Changing? The Hidden Storm in HR</h3>
              
      <ol>
  <li>
    <b>AI in HR Is Now a Risk Vector, Not Just a Time-Saver</b>
    <ul className="mt-2 list-disc">
      <li>HR tools today use generative AI to write JD drafts, shortlist CVs, and even run video-based psychometric assessments.</li>
      <li>Many HR teams can’t explain how these decisions are made.</li>
      <li>Few ask: Was this AI model trained on compliant data? Is it explainable? Can it be audited?</li>
    </ul>
    <p className="mt-4">
        <b>Case:</b> A global firm faced a lawsuit after its AI-based hiring system disproportionately rejected candidates over 40. HR didn't know the algorithm logic. Legal had no fallback.
    </p>
    <p className="mt-2">
        <b>Internal control gap:</b> No AI explainability or approval protocol.
    </p>
  </li>

  <li className="mt-8">
    <b>HR Data Is Now a Cross-Border Compliance Minefield</b>
    <ul className="mt-2 list-disc">
        <li>Global Capability Centers (GCCs) in India now process employee data for US, EU, UK, and APAC operations.</li>
        <li>Each geography has its own laws: GDPR, DPDPA, California Privacy Rights Act (CCPA), UK Data Protection Act, etc.</li>
        <li>Most HR teams don’t know which data is flowing where, or what the lawful basis for processing is.</li>
    </ul>
    <p className="mt-4">
        <b>Case:</b> A GCC in Bengaluru was flagged by an EU client’s privacy auditor for allowing Indian team leads to access sensitive disciplinary records without proper redaction or purpose limitation.
    </p>
    <p className="mt-2">
        <b>Internal control gap:</b> No audit trail, role-based access failure, no data localisation awareness.
    </p>
  

<li className="mt-8">
    <b>Third-Party HR Platforms Are the New Shadow Risk</b>
    <ul className="mt-2 list-disc">
        <li>BGV agencies, payroll vendors, AI-based hiring platforms, L&D portals, most HR teams work with at least 5–10 external platforms.</li>
        <li>But do they know if these vendors log access? Have breach protocols? Are compliant with Indian or global laws?</li>
    </ul>
    <p className="mt-4">
        <b>Case:</b> A payroll vendor with operations in Vietnam had a breach. Indian HR teams were unaware their data was being mirrored offshore for “backup redundancy.”
    </p>
    <p className="mt-2">
        <b>Internal control gap:</b> No cross-border transfer control. No vendor governance framework.
    </p>
</li>

<li className="mt-8">
    <b>Exit Failures Are Becoming Insider Threats</b>
    <ul className="mt-2 list-disc">
        <li>In high-growth companies, HR exits are often processed late or incompletely.</li>
        <li>IT access continues post-resignation.</li>
        <li>Performance management platforms remain open.</li>
        <li>One-click exports are common.</li>
    </ul>
    <p className="mt-4">
        <b>Case:</b> A former mid-level manager downloaded 120 performance reports of peers two days after exit. No one noticed. The breach came to light during appraisal conflicts.
    </p>
    <p className="mt-2">
        <b>Internal control gap:</b> No automated de-provisioning, no system audit trail.
    </p>
</li>
</li>
</ol>

<h3 className="mt-8">The New Language HR Must Now Learn</h3>
<p>
    HR doesn’t need to become auditors. But they must speak the language that governs enterprise trust:
</p>

<ul className="mt-4 space-y-2">
    <li><b>RCM (Risk Control Matrix):</b> A mapping of HR risks, related controls, owners, and frequency of check.</li>
    <li><b>Segregation of Duties (SoD):</b> No one person should hire, approve payroll, and settle F&F.</li>
    <li><b>Preventive Controls:</b> Access blocks, auto alerts, maker-checker rules.</li>
    <li><b>Detective Controls:</b> Exception logs, outlier flags, audit trails.</li>
    <li><b>Compensating Controls:</b> Temporary manual checks when automation is missing.</li>
    <li><b>Data Minimisation:</b> Don’t collect more than you need.</li>
    <li><b>Purpose Limitation:</b> Don’t reuse employee data just because you have it.</li>
</ul>

<p className="mt-4">
    This is not jargon. It’s the vocabulary of resilience.
</p>
<h3 className="mt-8">Why Internal Audit and HR Must Now Be Embedded Partners</h3>

<p>
    In progressive enterprises, internal audit no longer audits HR from a distance. They’re sitting inside the HR tech stack, testing access, reviewing workflows, mapping risk. But they can’t do it alone.
</p>

<div className="mt-4">
    <p className="text-sm"><b>What auditors bring:</b></p>
    <ul className="mt-2 text-sm ">
        <li>Frameworks, testing methods, control mapping expertise</li>
    </ul>
</div>

<div className="mt-4">
    <p className="text-sm"><b>What HR must bring:</b></p>
    <ul className="mt-2 text-sm ">
        <li>Process walkthroughs</li>
        <li>Platform access maps</li>
        <li>Vendor integration details</li>
        <li>Transparency around edge cases</li>
    </ul>
</div>

<div className="mt-4">
    <p className="text-sm"><b>Where they must meet:</b></p>
    <ul className="mt-2 text-sm ">
        <li>Control design reviews</li>
        <li>AI system assessments</li>
        <li>Privacy audits</li>
        <li>Exit checklists and red-flag triggers</li>
    </ul>
</div>
<h3 className="mt-8">What HR Departments Should Start Doing Immediately</h3>

<ol className="mt-4 space-y-8">
    <li>
        <b>Run an Internal Access Control Review</b>
        <ul className="mt-2 list-disc">
            <li>Who has admin rights across HRMS, payroll, ATS?</li>
            <li>Are there old IDs still active?</li>
            <li>Is access auto-revoked post-exit?</li>
        </ul>
        <p className="mt-2">
            <b>Quick Win:</b> Revoke all non-essential roles. Create a control dashboard showing access expiry timelines.
        </p>
    </li>

    <li className="mt-8">
        <b>Create a Live HR Risk-Control Matrix</b>
        <ul className="mt-2 list-disc">
            <li>Identify top 10 HR risks</li>
            <li>Map control in place, control owner, frequency, escalation path</li>
            <li>Review it quarterly with audit</li>
        </ul>
        <p className="mt-2">
            <b>Quick Win:</b> Assign a single SPOC for each process-control pair. Share matrix with CHRO and internal audit.
        </p>
    </li>
    
    <li className="mt-8">
        <b>Review and Rewrite Vendor Contracts</b>
        <ul className="mt-2 list-disc">
            <li>Add clauses for:
                <ul className="list-[circle] pl-6 mt-1">
                    <li>Identify cross-border data flows</li>
                </ul>
            </li>
        </ul>
        <p className="mt-2">
             <b>Quick Win:</b> Issue a vendor control checklist. Flag non-compliant vendors for review.
        </p>
    </li>

    <li className="mt-8">
        <b>Evaluate AI and Automation Tools in HR</b>
        <ul className="mt-2 list-disc">
            <li>Is the AI system explainable?</li>
            <li>Is there a fallback manual approval?</li>
            <li>Are outputs being logged and reviewed?</li>
        </ul>
        <p className="mt-2">
             <b>Quick Win:</b> Create an “AI in HR” register with use cases, owners, fallback controls, and auditability flags.
        </p>
    </li>

    <li className="mt-8">
        <b>Integrate HR in the Enterprise Privacy Framework</b>
        <ul className="mt-2 list-disc">
            <li>1. DPDPA in India, GDPR in EU, CPRA in California, all impact HR data now.</li>
            <li>2. Ensure HR policies and practices align with: Consent mechanisms, Data transfer protocols, Employee privacy notices and Retention and deletion policies</li>
        </ul>
        <p className="mt-2">
             <b>Quick Win:</b> Co-create a “Privacy Impact Assessment for HR” template.
        </p>
    </li>
</ol>
<h3 className="mt-8">What CHROs and CXOs Must Reflect On</h3>

<ul className="mt-4">
    <li>Is your HR function still operating like it’s 2015, with siloed systems and post-facto fixes?</li>
    <li>Are your HR leaders trained in control language?</li>
    <li>Do your vendor SLAs reflect today’s risk environment?</li>
    <li>Can your organisation defend its HR systems in a cross-border compliance dispute?</li>
    <li>Do HR dashboards include exception flags, risk events, and control health metrics?</li>
</ul>

<p className="mt-4">
    The answers to these questions will decide whether your people systems are compliant by chance or resilient by design.
</p>
<p>
    Internal control is no longer a back-office function. It’s a boardroom concern. A leadership risk. A reputational stake. HR professionals who understand controls are no longer policy enforcers. They become risk owners, trust builders, and enterprise protectors.
</p>
<p>
    In the age of AI, GCCs, and global data laws, your HR team isn’t just your talent engine. It’s your frontline defense.
</p>
<p className="mt-4 font-semibold">
    The question is, have they been trained to protect?
</p>
            </article>
          </div>

          <aside className="w-full md:w-[300px] flex-shrink-0">
            <div className="mb-10">
              <MostPopular />
            </div>

            <Sidebar />

            <SlidingBanner />
            <ArticleFooter />
          </aside>
        </div>
      </section>
    </>
  );
};

export default Article;