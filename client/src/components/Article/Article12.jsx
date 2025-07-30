import React, { useEffect } from "react";

import MostPopular from "./MostPopular";
import ArticleFooter from "./ArticleFooter";

import Sidebar from "./Sidebar";
import SlidingBanner from "../Homepage/SlidingBanner";


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
           The First 100 Days on a Board: What Every General Counsel (GC) -turned-
Independent Director (ID) should Ask, Read, and watch out for.
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
            <span>July 16, 2025</span>
          </div>
          <div className="w-full flex justify-center mb-6">
            <img
              src="/Atul Juvle.jpg"
              alt="Atul Juvle"
              className="h-[400px] w-auto object-cover rounded-xl shadow-md"
            />
          </div>

          <h2 className="text-xl font-bold mb-2">Atul Juvle</h2>
          <p className="text-sm font-medium text-gray-500 mb-6">
           Independent Director <br /> AMNS Ports India Ltd. <br /> <br />
Consulting General Counsel <br /> AP2 Legal Consulting LLP


          </p>

          <div className="flex gap-2 mb-8">
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Legal
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Board Governance
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Independent Directors
            </span>
             <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              GC
            </span>
          </div>

          {/* Article Content */}
          <article className="prose max-w-none text-gray-700 [&>p]:text-sm [&>ul]:text-sm [&>li]:mb-2 [&>li]:text-sm [&>em]:text-sm [&>span]:text-sm">
           <p className="mb-4 text-sm">In a world where everything is shifting—whether it’s the environment or geopolitical
tensions—the role of the General Counsel on the board has become a necessity, not
just a nice-to-have. With the constant changes in regulations and the unpredictability
of the BANI world, it’s not just about having someone with a legal background for the
sake of compliance. The General Counsel is there to help the board navigate these
complexities, ensuring the company stays on top of what’s happening and is ready to
respond when things change. It’s about more than just checking legal boxes; it’s
about having someone who can bring clarity and strategy to decisions, even when
the path forward isn’t always clear. It’s no longer an accessory to the team, but a
critical part of its success and resilience.</p>
            <p className="mb-8 text-sm">
             In the book ‘The First 90 Days, Harvard Business School professor Michael Watkins
presented a road map for taking charge in your first 90 days in a management job.
The first 100 days in a new position are critical because small differences in one’s
actions can have a huge impact on long-term results. This is the time when one
needs to identify ways to create value and improve business results that will help
one get to the break-even point more rapidly.
            </p>
            <p className="mb-8 text-sm">
             Joining a board—whether of a corporation, nonprofit, or public institution—is both an
honour and a serious responsibility. The first 100 days in a board director role set the
tone for future impact, reputation, and contributions. It’s a period of listening,
learning, building relationships, and gradually becoming a valued voice at the table.
            </p>
            <p className="mb-8 text-sm">The initial 100 days are always quite important when you begin your board journey.
Your brand and reputation are shaped during these ninety days. What should a GC-
turned-ID start, stop, and continue doing throughout their first ninety days on a
board? Three simple questions are asked in MNC leadership feedback surveys:
what should your leader stop doing, what should they continue doing, and what
should they start doing? I&#39;m sharing my views based on my own subject using the
same framework.</p>
         <h3 className="text-xl font-bold text-[#789BFF] mb-2">STOP</h3>
<p className="mb-4">
  (1) <strong>I am Right</strong> – The GC role carries autonomous power to overrule any legally
risky decision, and the company. This No-Go power is not appreciated in
projects or business, except for a few instances. In business, the principle
used is KNOW-&amp;-GO. Any new invention or project launch is seen first in a

positive sense, and then challenges or threats, if any, are discussed for
elimination and mitigation.
</p>
<p className="mb-4">
  (2) <strong>Rubber Stamping</strong> – The Board places high value on thoughtful, independent
judgment from each of its members. It is not sufficient for board members to
simply approve proposals without rigorous scrutiny, commonly referred to as
“rubber stamping.” Instead, every expert on the Board, including the General
Counsel (GC), is expected to actively deliberate, question, and contribute their
unique expertise to ensure the most informed and balanced decisions are
made.
</p>
<p className="mb-4">In particular, the GC is expected to provide candid and independent legal
advice, even when such advice may challenge or oppose the direction of a
proposed project or initiative. Upholding the integrity of the decision-making
process requires that legal risks and implications be transparently identified
and discussed. This level of professional rigor helps the Board to make
decisions that are not only strategic but also legally sound and sustainable in
the long term.</p>

<h3 className="text-xl font-bold text-[#789BFF] mb-2">CONTINUE</h3>
<p className="mb-4">
  (3) <strong> Review: Conduct a Thorough Review of Key Governance and
Operational Documents-</strong> – To effectively contribute as a Board member or
advisor, it is essential to build a solid understanding of the organization’s
governance framework, strategic direction, and recent developments. This
begins with a careful review of critical documents, including but not limited to:
</p>
<ul className="ml-4 list-disc mb-4">
  <li><em>Memorandum & Articles of Association:</em> Understand the
foundational legal framework governing the organization’s structure,
decision-making authority, and procedural rules.</li>
  <li><em>Financial Reports & Strategic Plans:</em> Gain insights into the fiscal
health, revenue streams, cost structures, and financial sustainability,
audit observations, if any. Understand the organization’s long-term
goals, business priorities, and key initiatives to align your contributions
with its vision and mission.</li>
  <li><em>Board Minutes:</em> Review minutes from the most recent Board and
committee meetings to understand the context of ongoing discussions,
decisions taken, unresolved issues, and strategic concerns. It&#39;s also
better to glance through the previous two years&#39; minutes of the board
meeting</li>
</ul>
<p className="mb-4">
  This comprehensive review enables engagement in Board deliberations, ask
informed questions, and contributes to governance, risk management, and
strategic oversight in a value-added manner.
</p>

<p className="mb-4">
  (4) <strong>Understand Governance Structure of the Organisation</strong> – Board committees,
decision-making processes, and the role of the Board versus management.
Meet 1-on-1 with key people: Chairperson, CEO/Executive Director, CFO, CS,
and other Board members.
</p>
<p className="mb-4">Directors are often chosen for their professional experience or subject matter
expertise. A new director should begin to show how that background benefits
the organization, without overreaching.</p>

<h3 className="text-xl font-bold text-[#789BFF] mb-2">START</h3>
<p className="mb-4">
  (5) <strong>Engaging Thoughtfully</strong> – Attend all meetings, even optional ones. Ask
insightful questions—don’t try to impress, focus on learning and contributing
meaningfully. Do attend all the informal invitations too, which can be unique
opportunity to develop rapport. If possible, join at least one committee of the
board of directors to get involved more deeply. Being respected as a
contributor, not just a resume item, is the key.
</p>

<p className="mb-4">
  (6) <strong>Build Relationships: Be Present and Engaged</strong> – Establish trust and rapport with fellow directors and senior management.
Learn the informal culture and dynamics—who influences what, how
decisions are made. Understanding board dynamics: Committee structures,
annual calendar, board roles versus management, and legal obligations (such
as fiduciary duties).
</p>

      <h3 className="text-xl font-bold text-[#789BFF] mb-4">Framework for the First 100 Days</h3>

<div className="overflow-x-auto mb-10">
  <table className="min-w-full border border-gray-300 text-sm md:text-base">
    <thead className="bg-[#f1f5ff] text-gray-700">
      <tr>
        <th className="border border-gray-300 px-4 py-2 text-left font-semibold w-1/3">Timeline</th>
        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Focus</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white">
        <td className="border border-gray-300 px-4 py-3 font-medium">First 40 days</td>
        <td className="border border-gray-300 px-4 py-3">
          Onboarding, listening, observing Board dynamics, and building relationships
        </td>
      </tr>
      <tr className="bg-gray-50">
        <td className="border border-gray-300 px-4 py-3 font-medium">41<sup>st</sup> to 80<sup>th</sup> days</td>
        <td className="border border-gray-300 px-4 py-3">
          <span className="font-semibold">Deep Orientation:</span> Read foundational materials. Attend all meetings. Hold one-on-one meetings with key stakeholders. Observe board dynamics and power structures.
        </td>
      </tr>
      <tr className="bg-white">
        <td className="border border-gray-300 px-4 py-3 font-medium">81<sup>st</sup> to 100<sup>th</sup> days</td>
        <td className="border border-gray-300 px-4 py-3">
          <span className="font-semibold">Active Contribution:</span> Begin to shape strategic discussions. Offer insights or solutions to a known challenge. Propose ideas (delicately) for improvement. Strengthen relationships across the board and with management.
        </td>
      </tr>
    </tbody>
  </table>
</div>
<p><b>*The views expressed in this article are personal to the author and not of the organisation.</b>
</p>
     
                     </article>
        </div>

        <aside className="w-full md:w-[300px] flex-shrink-0">
          <div className="mb-10">
            <MostPopular />
          </div>

        <Sidebar/>
          <SlidingBanner/>
          <ArticleFooter />
        </aside>
      </div>
    </section>
  );
};

export default Article;
