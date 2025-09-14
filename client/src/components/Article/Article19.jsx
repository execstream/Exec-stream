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
        <div className="md:col-span-2 md:min-w-4xl ">
          <h1 className="text-2xl md:text-5xl font-bold text-[#789BFF] mb-4">
   From GDPR to DPDPA: Lessons for Global Privacy Convergence
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
            <span>September 14, 2025</span>
          </div>
           <div className="w-full flex justify-center mb-6">
            <img
              src="/Ada Shahrbanu.JPG"
              alt="Ada Shaharbanu"
              className="h-[400px] w-auto object-cover rounded-xl shadow-md"
            />
          </div>
 <h2 className="text-xl font-bold mb-2">Ada Shaharbanu</h2>
          <p className="text-sm font-medium text-gray-500 mb-6">
            {" "}Senior Associate
            <br />Spice Route Legal
          </p>

          <div className="flex gap-2 mb-8">
            
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
             Legal
            </span>
              <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
             Data Privacy
            </span>
          </div>
   <article
  className="prose max-w-none text-gray-700 
    [&>p]:text-sm [&>p]:mb-4 
    [&>h2]:text-md [&>h2]:font-semibold [&>h2]:mb-4 
    [&>h3]:font-bold [&>h3]:text-xl [&>h3]:text-[#789BFF] [&>h3]:mb-4 
    [&>ul]:mb-4 [&>ul>li]:text-sm [&>ul>li]:mb-2 [&>ul]:list-disc [&>ul]:pl-5
    [&>ol]:mb-4 [&>ol>li]:text-sm [&>ol>li]:mb-2 [&>ol]:list-decimal [&>ol]:pl-5
    [&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:list-[circle] [&>ul>li>ul>li]:text-sm [&>ul>li>ul>li]:mb-2
    [&>p>em]:italic
    [&>table]:w-full [&>table]:mb-4 [&>table]:text-sm
    [&>table_th]:p-2 [&>table_th]:border [&>table_th]:border-gray-300 [&>table_th]:bg-gray-100 [&>table_th]:text-left
    [&>table_td]:p-2 [&>table_td]:border [&>table_td]:border-gray-300"
>
    <p>
        When the EU’s General Data Protection Regulation <strong>("GDPR")</strong> came into force in 2018, it redefined the global conversation on privacy and data protection. Its comprehensive scope, prescriptive rights framework, and strong enforcement mechanisms influenced 60+ jurisdictions, embedding principles of transparency, accountability, and individual rights into emerging laws. India’s Digital Personal Data Protection Act, 2023 <strong>("DPDPA")</strong> is one of the latest additions to this global privacy landscape. While recognisably influenced by the GDPR, the DPDPA reflects the needs of India’s digital economy, aiming to protect personal data while fostering innovation, scale, and ease of doing business.
    </p>
    <p>
        Both GDPR and DPDPA are anchored in the same high-level privacy principles: <em>lawful and fair processing, purpose limitation, data minimisation, data accuracy, security safeguards, accountability, and transparency</em>. However, the way these principles are implemented has practical implications on compliance.
    
        GDPR offers six lawful bases for processing personal data — <em>consent, contractual necessity, legal obligation, legitimate interests, vital interests, and public task</em> — giving organisations flexibility to choose the most context-appropriate basis. This flexibility allows, for example, a financial institution to rely on legitimate interest for certain fraud monitoring activities without obtaining user consent, provided appropriate safeguards are in place. DPDPA, on the other hand, puts consent at the centre of lawful processing, with only narrow “legitimate use” carve-outs such as compliance with law, responding to medical emergencies, or fulfilling a court order. This means that an Indian e-commerce platform collecting behavioural analytics will likely need to obtain explicit consent, while an EU counterpart could rely on legitimate interest if balancing tests are met. For businesses operating in both regions, the safest approach is to design consent-centric user journeys that meet DPDPA’s strict requirements while retaining the ability to use alternative lawful bases in the EU.
    </p>
    <p>
        The scope of personal data covered under each law also differs in ways that influence compliance architecture. GDPR applies to both online and offline personal data, covering paper records if they form part of a structured filing system. This means that a customer's paper application form stored in a filing cabinet is subject to GDPR obligations. By contrast, DPDPA applies only to digital personal data, whether collected online or digitised from physical sources. At first glance, this appears to lighten the compliance load for Indian businesses handling large volumes of paper records. However, in practice, most modern organisations digitise records at some point for storage, processing, or reporting purposes, bringing them within DPDPA’s ambit. The real operational difference is more likely to emerge in enforcement – Indian regulators may not actively scrutinise purely offline records, whereas EU regulators can do so. For multinationals, adopting a GDPR-level scope across operations ensures preparedness for any jurisdiction's requirements.
    </p>
    <p>
        The rules governing international transfers reveal a deeper philosophical divide. GDPR uses an adequacy-based framework: personal data can move freely to jurisdictions that the European Commission deems to offer adequate protection. Where adequacy is absent, mechanisms like <em>Standard Contractual Clauses</em>, <em>Binding Corporate Rules</em>, or approved codes of conduct can legitimise transfers, provided risk assessments and transparency obligations are met. This creates multiple pathways for global data flows. DPDPA, however, restricts transfers to jurisdictions expressly whitelisted by the Indian government. This removes contractual flexibility and places the burden on businesses to track official notifications, reconfigure data flows if a jurisdiction is removed from the list, and potentially adopt localisation measures for certain processing. For companies with global data architectures, this difference means maintaining two parallel transfer strategies.
    </p>
    <p>
        While both laws mandate transparency, their implementation diverges. GDPR requires that notices be concise, intelligible, and accessible, but leaves room for organisations to determine the precise format and sequencing of information, provided certain minimum elements are present. DPDPA prescribes specific content requirements – including the exact purposes of processing, a list of rights, and the procedure for grievance redress, making it difficult to adopt a single global privacy notice. In terms of rights, GDPR offers a broader set, including <em>data portability</em> and <em>the right to object</em> to certain types of processing, such as direct marketing or automated decision-making. DPDPA omits portability and limits objection rights, focusing instead on access, correction, erasure, and grievance handling. This means global businesses must configure their rights-request workflows to handle GDPR’s broader set while ensuring Indian processes remain clear, simple, and easily accessible, even if narrower in scope.
    </p>
    <p>
        GDPR requires controllers to notify supervisory authorities within 72 hours of becoming aware of a personal data breach, applying a harm-based approach for notifying affected individuals – notification is required if the breach is likely to result in a high risk to individuals’ rights and freedoms. DPDPA also adopts a 72-hour reporting period in draft rules, but the statute itself delegates specifics to subordinate legislation, meaning thresholds and formats may evolve. The operational lesson here is the need for flexible breach-response frameworks that can meet GDPR’s fixed standards while adapting to evolving Indian rules. This includes establishing incident classification criteria, maintaining real-time communication channels with legal and compliance teams, and rehearsing breach simulations.
    </p>
    <p>
        For multinationals, these differences reinforce the importance of a <em>“convergence-ready”</em> compliance framework – one that applies the strictest common denominator where possible, but retains jurisdiction-specific adaptations. Building a centralised data inventory that maps the lifecycle of personal data – from collection and processing to sharing, retention, and deletion, is essential. Companies may choose to anchor their compliance architecture in GDPR, given its global recognition and comprehensiveness, and then layer in DPDPA’s specific nuances. Alternatively, where India is the primary market, DPDPA can be the baseline, with GDPR obligations added as overlays. Either way, modular contracts, layered compliance clauses, harmonised rights-handling processes, and dual-track transfer mechanisms are practical necessities.
    </p>
    <p>
        Six years of GDPR enforcement show that the organisations that fare best are those that operationalise compliance early, build privacy-by-design into their processes, and establish cross-functional governance that integrates legal, IT, product, and compliance expertise. This shifts compliance from a reactive burden to a proactive driver of business continuity and resilience.
    </p>
    <p>
        Ultimately, the GDPR and DPDPA share the same underlying goal: to give individuals meaningful control over their personal data while offering organisations a clear and structured framework for compliance. At the same time, they reflect different regulatory cultures and policy priorities. For businesses, the key is to see privacy not just as a legal requirement but as a foundation for trust and long-term resilience. Those that embed privacy into their culture and operations will be best placed to navigate a future where global privacy regimes may grow closer in principle, but will always differ in the details.
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
