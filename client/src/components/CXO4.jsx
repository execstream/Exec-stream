import React, { useEffect } from "react";

import MostPopular from "./Article/MostPopular";
import { FaLinkedinIn } from "react-icons/fa";

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mx-auto px-6 md:px-20 py-10 text-gray-800">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-5xl font-bold text-[#789BFF] mb-4">
          In conversation with Monal Puj, Head of Legal at Cliantha Research , on Leading Legal in a Global CRO
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
            <span>July 16, 2025</span>
          </div>

          <div className="w-full flex justify-center mb-6">
            <img
              src="/Monal Puj.png"
              alt="Monal Puj "
              className="h-[400px] w-auto object-cover rounded-xl shadow-md"
            />
          </div>

          


        {/*  <div className="flex gap-2 mb-8">
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Infosec
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Cloud Misconfigurations
            </span>
          </div>*/}

         <article className="prose max-w-none text-gray-700 [&>p]:text-sm [&>p]:mb-8 [&_em]:font-semibold">

          <h3 className="text-xl font-bold text-[#789BFF] mb-2">
             You lead legal for a global CRO operating across trial sites, regulators,
sponsors, and patients. To ground our readers: what does Cliantha Research
do, and how is the legal function structured within such a science-led,
compliance-heavy ecosystem? </h3>
<p className="mb-4 text-sm"><em>Let’s begin by understanding the organizational and legal context you operate within.</em></p>
<p className="mb-4 text-sm">Cliantha Research, full-service Clinical Research Organization (CRO), provides
comprehensive and integrated offerings in Early Phase (BA-BE &amp; Phase I), Late Phase (II-
IV), Respiratory, Tobacco Research, Dermatology, Consumer Research, Research Lab,
IVRT, Biometrics, Medical Services, Environmental Exposure Chambers (EECs). Legal
department plays a crucial role in ensuring adherence to all applicable laws, regulations, and
ethical guidelines throughout the clinical trial process.</p>
           
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
             Clinical research sits at the confluence of science, human data, regulatory
frameworks, and multinational contracts. What makes the legal function in this
sector fundamentally different from other regulated industries like BFSI or
insurance?
            </h3>
            <p className="mb-4 text-sm"><em>Readers from other domains often underestimate the legal complexity here, how would you
compare it?</em></p>
<p className="mb-4 text-sm">In Insurance and Banking Sector, role of lawyer includes Policy interpretation, Claims
Disputes, Regulatory Compliance, Research on bank policies and statutory provisions
whereas in Clinical Research field, the role of lawyer includes ensuring adherence to all
applicable laws, regulations, and ethical guidelines throughout the clinical trial process.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
             From sponsor contracting to investigator agreements and protocol
compliance, what are the most negotiation-sensitive or risk-heavy areas you
routinely navigate in clinical trial contracts?
            </h3>
            <p className="mb-4 text-sm"><em>What are the friction points, and how do you de-risk them?</em></p>
            <p className="mb-4 text-sm">Clinical Trial Agreements (CTA) ensure that the clinical trial is conducted in compliance with
relevant regulations, such as those set by the FDA and other regulatory bodies. The CTA
clearly defines the obligations and expectations of each party involved in the clinical trial,
including the sponsor, research site, CRO and principal investigator. Clauses pertaining to
indemnification, compliance with applicable laws and regulatory requirements, record
retention, data privacy, consequences of termination of study are essential in contract
negotiations with client and research site or investigator.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
           With data governance now a central legal theme, especially after GDPR,
HIPAA, and India’s DPDPA, how are you managing patient data protection,
consent architecture, and third-party data accountability across jurisdictions?
            </h3>
            <p className="mb-4 text-sm"><em>What does real data compliance look like in this sector?</em></p>
            <p className="mb-4 text-sm">We have adopted a multi-faceted approach to ensure patient data protection as well as
consent architecture by implementing appropriate security measures, technical safeguards
as well as implementing data protection policy. To ensure third party data accountability in
clinical research studies, risk assessment &amp; vendor qualification is performed, terms of data
privacy are covered in contracts with vendors.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
             CROs are gradually integrating AI in diagnostics, trial automation, and
monitoring. At what point does legal oversight become necessary, and how
are you approaching risk governance for AI inside your organization?
            </h3>
            <p className="mb-4 text-sm"><em>The legal window on AI often opens too late, how do you time it right?</em></p>
            
            <p className="mb-4 text-sm">Artificial intelligence (AI) in contract management software significantly aids in clause
revision by automating the process of identifying, analyzing, and suggesting changes to
contract language. To effectively manage AI risk, contract research organizations should
build a comprehensive governance framework that aligns with healthcare industry-specific
regulations. This framework should address key areas such as AI usage policies, ethical
considerations and compliance oversight.</p>
<h3 className="text-xl font-bold text-[#789BFF] mb-2">
            Legal reviews are often seen as slow-moving in fast-paced clinical
operations. How do you structure your team or workflows to balance
turnaround speed with legal precision, especially under tight regulatory or
sponsor deadlines?
            </h3>
            <p className="mb-4 text-sm"><em>Is there a legal ops strategy behind staying agile?</em></p>
            <p className="mb-4 text-sm">Several measures are adopted to meet the sponsor deadline for contract review by legal
team. It includes standardizing contract templates, implementation of contract management
software as well as prioritizing high risk clauses.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
             What kinds of internal systems (contract playbooks, escalation models,
regulatory alerting, or audit protocols) have helped legal scale its governance
role across global sites and cross-functional teams?
            </h3>
<p className="mb-4 text-sm"><em>How do you maintain control without micromanagement?</em></p>
<p className="mb-4 text-sm">By establishing clear expectations, delegating effectively and empowering legal team
members, attending various training workshops and sharing constructive feedback, legal
team measures its governance role.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
             Legal isn’t the only team that touches risk, but it often ends up owning it.
How do you train or align non-legal teams like clinical ops, QA, or
investigators to operate with legal awareness and reduce inadvertent
exposure?
            </h3>
            <p className="mb-4 text-sm"><em>What structural levers do you use to create compliance from the ground up?</em></p>
           <p className="mb-4 text-sm">Conducting frequent workshops, online training modules, discussion of various case studies,
implementation of GCP training as well as regular audits and monitoring visits to clinical
study sites contribute to legal awareness and reduce inadvertent exposure.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
             Are you seeing shifts in how regulators or sponsors define compliance
and accountability, especially around data integrity, ethics approvals, or
contractual liabilities in multi-country trials?
            </h3>
             <p className="mb-4 text-sm"><em>Where is the scrutiny rising, and how is legal responding?</em></p>
         <p className="mb-4 text-sm">Regulatory agencies and sponsor place a significant focus on data integrity due to its pivotal
role in ensuring the reliability, accuracy, and trustworthiness of data within regulated
industries. The emphasis regulatory agencies on data integrity are driven by the agency’s
responsibility to protect the public interest. However, the complexities of modern clinical
trials, involving diverse participants, multi-site multi-country collaborations, and intricate data
collection processes, have magnified the challenges of maintaining data integrity and
transparency.</p>
<p className="mb-4 text-sm">We, at Cliantha Research, emphasize on data integrity as a core principle, ensuring the
accuracy, completeness, and reliability of the data generated during clinical trials. This
commitment is reflected in our policies, practices, and training programs, aiming to uphold
the highest standards of data quality throughout the research process.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
             Looking ahead 3–5 years, what legal and regulatory shifts do you believe
will most transform how CROs like yours operate, and how should legal teams
prepare for that future?
            </h3>
             <p className="mb-4 text-sm"><em>What should other legal leaders in this space be watching closely now?</em></p>
            
            <p className="mb-4 text-sm">Legal and Regulatory changes significantly impact CROs by requiring CROs to implement
robust measures to protect patient data; collect, manage and analyse data according to
applicable regulatory requirements, requiring greater regulatory expertise, and potentially
affecting revenue streams. Legal teams of CROs must invest in training and expertise to
navigate the evolving regulatory landscape and ensure compliance. With the help of
investment in technologies, processes may be streamlined to improve data management
and enhance patient engagement.</p>
<h3 className="text-xl font-bold text-[#789BFF] mb-2">
            How would you describe your leadership and team-building style in a
domain where legal fluency must often extend into science, ethics, and
operational speed?
            </h3>
             <p className="mb-4 text-sm"><em>What’s your approach to talent development and capability-building within legal?</em></p>
            <p className="mb-4 text-sm">Leadership and team building skills in a science led organization include motivation, problem
solving and effective communication. Building capability in legal team involves identifying
skill gaps, providing targeted training and development opportunities, fostering a culture of
continuous learning, and encouraging collaboration, defining clear goals, delegation of
responsibilities and providing constructive feedback to team members.</p><h3 className="text-xl font-bold text-[#789BFF] mb-2">
             What does the legal talent landscape look like in the life sciences and
CRO space today, and what kind of profiles or skills will become more critical
going forward?
            </h3>
             <p className="mb-4 text-sm"><em>Are generalist lawyers enough, or is the future more cross-disciplinary?</em></p>
           <p className="mb-4 text-sm">The life sciences industry has undergone a profound regulatory revolution recently. This
regulatory transformation has had significant implications for legal professionals within the
life sciences sector. Going forward, legal recruitment efforts should be focused on sourcing
cross disciplinary professionals well-versed in intellectual property law to protect innovations
and secure a competitive advantage; candidates who understand the ethical and legal
considerations of human trials and regulatory approvals. As data privacy and cybersecurity
have become pressing concerns, legal professionals should be well versed in managing
data protection, privacy regulations and handling data breaches.</p>
<p className="mb-4 text-sm"></p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
            For professionals building a career in legal roles within clinical research
or life sciences, what are the top challenges they will face, and how can they
build the right muscle to navigate them effectively?
            </h3>
             <p className="mb-4 text-sm"><em>This will help younger legal professionals, and even GCs from adjacent sectors, understand
what it takes to succeed in this function.</em></p>
<p className="mb-4 text-sm">Alongside academic learning, practical experience is invaluable. Legal professionals should
be encouraged to seek out internships or work opportunities, especially with law firms or in
organizations that specialize in the life sciences and healthcare sector. This experience will
allow them to apply their legal knowledge to real-world situations, develop practical skills,
and gain important insights into the industry.</p>
<p className="mb-4 text-sm">Top challenges legal professionals in clinical research industry may face include a deep
understanding of scientific and medical concepts, understanding clients’ needs as well as
change in regulatory guidelines.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
             How do you view the role of learning and development (L&amp;D) within the
legal function, particularly in a sector that’s constantly evolving across
science, regulation, and global compliance? If it’s a priority for you, how do
you ensure your team stays current, capable, and future-ready?
            </h3>
             <p className="mb-4 text-sm"><em>Are there specific L&amp;D formats, cross-functional exposure models, or playbook-driven
approaches you use to build depth and agility within the team?</em></p>
           <p className="mb-4 text-sm">Learning and development (L&amp;D) in a healthcare legal team involves continuous training and
education to ensure that team members are equipped with the knowledge and skills to
navigate the complex legal landscape of the healthcare industry. Key Areas for L&amp;D in
Healthcare Legal Team include Compliance and Regulatory Training, Contract drafting,
review and negotiation skills to manage various contracts, Litigation preparedness,
Understanding study subjects’ rights, privacy laws and ethical considerations.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
             One last question - If you were to advise a general counsel/legal leader or
functional head entering the CRO space for the first time, what blind spots or
‘learning curves’ would you urge them to watch for early on?
            </h3>
           <p className="mb-4 text-sm">A legal counsel entering the healthcare sector for the first time can expect a steep learning
curve due to the highly regulated and complex nature of the industry. The curve involves
understanding various laws, regulations and ethical considerations specific to healthcare
industry, as well as developing expertise in areas like medical malpractice, privacy
laws (HIPAA, GDPR) and compliance. Healthcare law is associated with ethical
considerations. Understanding concepts like informed consent and patient rights  is crucial.</p>
           
   



<div className="mt-10 bg-blue-50 p-4 rounded-lg shadow flex items-start space-x-4">
  {/* Image and LinkedIn */}
  <div className="flex flex-col items-center space-y-2">
    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#789BFF]">
      <img
        src="/Monal Puj.png"
        alt="Monal Puj"
        className="w-full h-full object-cover"
      />
    </div>
    <a
      href="https://www.linkedin.com/in/monal-puj-5053749/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#0A66C2] text-white p-2 rounded-full hover:bg-[#004182] transition"
    >
      <FaLinkedinIn size={16} />
    </a>
  </div>

  {/* Text */}
  <div>
    <p className="text-sm font-semibold text-gray-800 mb-1">Guest Profile</p>
    <p className="text-xs text-gray-700 leading-relaxed">
      <strong>Monal Puj</strong> is a corporate legal leader with 19+ years of experience in the pharmaceutical
      and clinical research sectors and has deep expertise in contract negotiation, regulatory compliance,
      intellectual property, and cross-border legal operations.
      <br /><br />
      As the architect of centralized legal functions across India, USA, and Canada, she has led complex
      commercial, licensing, clinical trial, and IP agreements, while navigating global compliance frameworks
      including GDPR, FCPA, and data privacy regulations.
      <br /><br />
      Known for her strategic facilitation of high-value deals, M&A due diligence, and stakeholder negotiations,
      and played a pivotal role in employment law matters and litigation oversight. Her career reflects a strong
      commitment to legal excellence, enterprise risk mitigation, and aligning legal strategy with business growth.
    </p>
  </div>
</div>

   

          </article>
        </div>

        <aside className="w-full md:w-[300px] flex-shrink-0 ">
          <MostPopular />
          <div className="bg-white rounded-lg p-4 shadow-md mt-10">
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
        </aside>
      </div>
    </section>
  );
};

export default Article;
