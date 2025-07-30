import React, { useEffect } from "react";

import MostPopular from "./MostPopular";
import ArticleFooter from "./ArticleFooter";

import SlidingBanner from "../Homepage/SlidingBanner";
import Sidebar from "./Sidebar";

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
            How to Effectively Negotiate with Trade Unions in India
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
            <span>July 9, 2025</span>
          </div>

          <div className="w-full flex justify-center mb-6">
            <img
              src="/Rohitaashv Sinha.jpeg"
              alt="Rohitaashv Sinha "
              className="h-[400px] w-auto object-cover rounded-xl shadow-md"
            />
          </div>

          <h2 className="text-xl font-bold mb-2"> Rohitaashv Sinha</h2>
          <p className="text-sm font-medium text-gray-500 mb-6">
            {" "}
            Partner (Labour & Employment) <br /> King Stubb & Kasiva
          </p>

          <div className="flex gap-2 mb-8">
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Legal
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

          {/* Article Content */}
          <article
            className="prose max-w-none text-gray-700 
  [&>p]:text-sm [&>p]:mb-4 
  [&>h2]:text-md [&>h2]:font-semibold [&>h2]:mb-4 
  [&>h3]:font-bold [&>h3]:text-xl [&>h3]:text-[#789BFF] [&>h3]:mb-4 
  [&>ul]:mb-4 [&>ul>li]:text-sm [&>ul>li]:mb-2 
  [&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:list-[circle] [&>ul>li>ul>li]:text-sm [&>ul>li>ul>li]:mb-2"
          >
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Introduction
            </h3>
            <p className="mb-8 text-sm">
              Negotiating with trade unions in India requires a thorough
              understanding of the legal landscape, effective communication
              strategies, and a cooperative approach. In order to understand the
              negotiating process, it is very important to understand the legal
              landscape as to what needs to be carried out in the first place.
              Often it has been seen the companies/management have either
              cowered down to or completely annihilated demands of various
              employee groups or trade unions. Further, in many cases it has
              been seen that some normal and, in many cases, legal demands of
              employees are not met from time to time which forces them to
              either join or form unions. Hence, we delve into certain aspects
              of negotiating with trade unions.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Law Regarding Trade Unions in India and solutions to avoid strikes
            </h3>
            <p className="mb-8 text-sm">
              Trade unions in India are governed by the Trade Unions Act, 1926
              (“TU Act”) . The TU Act provides for the registration, rights, and
              liabilities of trade unions. Section 4 of the TU Act outlines the
              procedure for registration. A trade union must have at least seven
              (7) members who are workmen engaged in the industry.
            </p>
            <p className="mb-8 text-sm">
              Registered trade unions have the right to ensure better wages and
              working conditions for workers. They also have the right to
              represent workers in disputes and negotiations with employers and
              also carry out lawful activities like organizing strikes and
              demonstrations, provided they comply with the Industrial Disputes
              Act, 1947 (“<b>ID Act</b>”).
            </p>
            <p className="mb-8 text-sm">
              {" "}
              <i>
                To avoid problems with trade unions, employers can ensure strict
                compliance with labour laws by implementing practical measures
                such as timely payment of wages, appropriate compensation for
                overtime, adherence to designated working hours, respecting
                leave entitlements, conducting regular employee appraisals, and
                including workmen in grievance redressal bodies. Companies like
                Infosys and Tata Consultancy Services have built a reputation
                for timely wage payments, which fosters trust and reduces the
                desire for union formation. In the manufacturing sector,
                companies like Maruti Suzuki ensure that employees are
                compensated for overtime work according to legal requirements,
                thereby addressing one of the common grievances that lead to
                unionization.
              </i>
            </p>
            <p className="mb-8 text-sm">
              <i>
                {" "}
                Further, by sticking to the prescribed working hours,
                organizations such as Wipro and Hindustan Unilever create a
                balanced work-life environment, which is crucial in maintaining
                employee satisfaction and discouraging union activities.
                Additionally, providing and honouring leave entitlements is
                another critical aspect. For example, IT companies like
                Cognizant and Accenture ensure that their employees can avail of
                their leaves without unnecessary bureaucratic hurdles, thus
                maintaining morale and reducing the impetus for union formation.
              </i>
            </p>
            <p className="mb-8 text-sm">
              <i>
                <b>
                  {" "}
                  Finally, having workmen represented on grievance redressal
                  bodies is essential. Companies like Larsen &amp; Toubro have
                  implemented effective grievance redressal mechanisms where
                  employees&#39; concerns are addressed promptly, thus ensuring
                  that their voices are heard without needing a union
                  intermediary.
                </b>
              </i>
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Lack of policies to tackle employee harassment
            </h3>
            <p className="mb-8 text-sm">
              Amongst others, the absence of elaborate generic codes of
              employment practices, especially on dismissal and employee abuse,
              greatly contributes to the emergence of strikes in Indian
              organizations. Lack of clarity and fairness in termination
              policies frequently creates a sense of job insecurity, thus
              lowering the satisfaction level and increasing personnel unrest.
            </p>
            <p className="mb-8 text-sm">
              In &quot;Employment Relations in India: In the article entitled
              “Strikes: A Strategic Perspective” by S. K. Bhatia it is
              emphasized that vagueness and unfairness in termination policies
              erode the trust and commitment of employees and create the
              conditions for strikes in the organization. Another important area
              of concern is harassment of employees by employers or managers.
              When organisations do not adopt and act on strong anti-harassment
              policies, employees remain exposed to negligence and abuse thus
              fostering an unhealthy workplace environment. According to R. K.
              Gupta’s book “Indian Labour Laws and Its Implications”, lack of
              strict polices and discipline pushes harassment to demoralization
              and anger to employees and they protest through strike.
            </p>
            <p className="mb-8 text-sm">
              Therefore, the absence of clear guidelines for termination and
              harassment serves as an important factor influencing the
              propensity for strikes in India. Employers must appreciate the
              role of these policies in ensuring industrial harmony and
              regulating the affairs of employees. If the organizational
              policies are well established, efficient and fairly implemented,
              the rate of strikes will be minimized and overall, organizational
              stability and productivity will improve.
            </p>

            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Navigating Collective Bargaining
            </h3>
            <p className="mb-8 text-sm">
              However, it is clear that where bargaining is inevitable,
              employers need to get through the process while getting as much
              for themselves as possible in the best interest of all
              stakeholders. The employers should be prepared to go to the
              negotiations well-armed with knowledge of the legal provisions and
              more importantly, the requirements of the employees. This involves
              having a good plan and being aware of when it is possible to give
              something up. S. K. Bhatia in &quot;Employment Relations in India:
              In their guide titled “Negotiation: A Strategic Perspective”
              updated in 2012, the authors state that preparation leads to an
              increased likelihood of a successful outcome for both parties
              involved in the negotiation process.
            </p>
            <p className="mb-8 text-sm">
              {" "}
              <i>
                {" "}
                <b>
                  The threat of violence at some stage in those negotiations
                  poses tremendous challenges. Ensuring non-violent and positive
                  negotiations requires a multifaceted approach, such as
                  strategic preparation, compliance, effective communique, and
                  collaboration with regulation enforcement. The steps
                  organizations need to take in collective bargaining with
                  exchange unions beneath the danger of violence and explores
                  how the police can assist in maintaining peace, citing precise
                  incidents in which violence has been curbed successfully.
                  Before coming into negotiations, groups have to verify the
                  potential for violence. This involves evaluating beyond
                  incidents, knowledge the union&#39;s records, and identifying
                  key grievances that could cause violent reactions. A crisis
                  management plan should be in vicinity, outlining protocols for
                  handling potential violence. This plan have to encompass
                  emergency touch numbers, evacuation strategies, and roles and
                  obligations of the disaster management group.
                </b>
              </i>
            </p>
            <p className="mb-8 text-sm">
              Retaining security professional and coordinating with local law
              enforcement is an often sough after strategy. Such professionals
              can offer guidance on the even criminal aspects of negotiations.
              In July 2012, Maruti Suzuki&#39;s Manesar plant witnessed violent
              clashes during labour negotiations, resulting in the death of a
              senior manager and injuries to many. Post-incident, Maruti Suzuki
              collaborated closely with the police and implemented stricter
              security measures. According to &quot;Labour and Employment Issues
              in India&quot; by R. Carina (2015, 1st edition), the company
              improved its crisis management protocols and engaged in more
              transparent communication with the union to prevent future
              incidents.
            </p>
            <p className="mb-8 text-sm">
              Also, companies should at all times maintain and train its
              employees on mediation and conciliation techniques. Teams should
              be trained in mediation and conciliation, as outlined in the ID
              Act and other applicable laws. Companies should encourage a
              problem-solving mindset can help identify mutually beneficial
              solutions. Gary Dessler in &quot;Human Resource Management&quot;
              (15th edition, 2017), highlights the importance of collaborative
              problem- solving in resolving industrial disputes.
            </p>
            <p className="mb-8 text-sm">
              Practical, hands-on training through simulations can prepare teams
              for real-world scenarios. This approach involves role-playing
              exercises which involves simulating negotiations with union
              representatives that can help teams practice and refine their
              skills. These exercises should cover a range of potential
              scenarios, from wage disputes to working conditions. Regular
              crisis drills can ensure that teams are prepared to handle
              unexpected developments. S. K. Bhatia in &quot;Employment
              Relations in India: A Strategic Perspective&quot; (2nd edition,
              2012), advocates for regular drills to enhance preparedness and
              response capabilities. The crisis management team (“<b> CMT</b>”)
              should include a well- rounded- members, with diverse expertise,
              such as HR professionals, legal advisors, and communication
              specialists. This diversity ensures that all aspects of a crisis
              are effectively managed. According to S. K. Bhatia, having a
              multi-disciplinary team enhances the ability to address various
              facets of industrial disputes comprehensively. Finally, crisis
              management teams must engage in continuous learning to stay
              updated on legal changes, industry practices, and emerging trends
              in industrial relations. Regular workshops and refresher courses
              can help maintain a high level of preparedness.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Step wise process for CMT
            </h3>
            <p className="mb-8 text-sm">
              Effective crisis control for the duration of conciliation with
              exchange unions in India requires a systematic and strategic
              method that encompasses diverse steps to make sure clean and
              effective negotiations. This includes securing premises, selecting
              impartial venues, maintaining documentation, ensuring work
              continuity, and adhering to lawful needs of the union. Drawing
              from relevant case law and authoritative assets, this tenet
              affords a comprehensive framework for crisis management groups.
            </p>
            <p className="mb-8 text-sm">
              <i>
                The preliminary step in handling a disaster in the course of
                conciliation with trade unions is to steady the premises.
                Ensuring that the place of business remains steady and that
                there&#39;s no disruption to the operations is vital. This may
                be achieved by using implementing strict access manipulate
                measures and deploying protection employees to monitor the
                premises.
              </i>
              According to R. K. Gupta in &quot;Indian Labour Laws and Its
              Implications&quot; (1st edition, 2010), maintaining a stable
              surrounding is important to prevent unauthorized entry to and
              potential sabotage all through negotiations.
            </p>
            <p className="mb-8 text-sm">
              <i>
                Selecting an impartial venue for negotiations is some other
                essential issue. A neutral place facilitates in developing an
                independent environment, which can facilitate extra open and
                sincere discussions. The ID Act, emphasizes the importance of a
                conciliatory environment to clear up commercial disputes
                amicably.
              </i>{" "}
              Conducting negotiations at a impartial venue, inclusive of a
              convention middle or a lodge, ensures that neither party feels
              deprived, fostering a experience of equity and impartiality.
            </p>
            <p className="mb-8 text-sm">
              Documentation plays a essential role within the conciliation
              procedure. CMT{" "}
              <i>
                {" "}
                need to make sure that written orders are submitted every day to
                the conciliation officer. This documentation have to consist of
                minutes of the conferences, agreements reached, and any great
                issues. The significance of meticulous file-preserving is
                highlighted in S. C. Srivastava&#39;s &quot;Industrial Relations
                and Labour Laws&quot; (sixth edition, 2013), which underscores
                that distinctive documentation can save you misunderstandings
                and offer a clean reference for destiny negotiations.
              </i>
            </p>
            <p className="mb-8 text-sm">
              Ensuring that work does now not go through at some stage in
              conciliation is a number one problem.{" "}
              <i>
                {" "}
                Crisis management groups have to increase contingency plans to
                keep productiveness while negotiations are ongoing. This can
                involve brief body of workers preparations, rescheduling work
                shifts, or reallocating resources to make sure that commercial
                enterprise operations continue smoothly.
              </i>{" "}
              Wayne F. Cascio in &quot;Managing Human Resources&quot; (10th
              version, 2019), discusses the importance of maintaining
              operational continuity to save you economic losses and preserve
              worker morale during industrial disputes.
            </p>
            <p className="mb-8 text-sm">
              {" "}
              <i>
                Adhering to affordable needs of the union, mainly those which
                can be statutory in nature, is a essential principle in crisis
                management. Employers must comply with legal requirements
                associated with wages, working hours, go away entitlements, and
                different hard work legal guidelines.
              </i>{" "}
              Failure to stick to these statutory responsibilities can
              exacerbate conflicts and lead to extended disputes. S. K. Bhatia
              in &quot;Employment Relations in India: A Strategic
              Perspective&quot; (second edition, 2012), factors out that
              spotting and gratifying legitimate demands can build believe and
              pave the manner for extra amicable negotiations.
            </p>
            <p className="mb-8 text-sm">
              The landmark case of Tamil Nadu Electricity Board v. Tamil Nadu
              Electricity Workers Federation (1990 AIR 2025) illustrates the
              significance of adhering to statutory obligations and attractive
              in precise faith negotiations.{" "}
              <i>
                {" "}
                In this situation, the Supreme Court of India emphasised that
                employers need to admire workers&#39; rights and deal with their
                lawful demands to foster a optimistic business courting.
              </i>
            </p>
            <p className="mb-8 text-sm">
              Effective conversation is essential during the conciliation
              system. Crisis management groups have to preserve obvious and
              continuous talk with each the union representatives and the
              conciliation officer. This allows in clarifying problems,
              dispelling rumours, and ensuring that each one events are on the
              identical page. Gary Dessler in &quot;Human Resource
              Management&quot; (15th version, 2017), highlights that open
              communication channels can significantly lessen the probability of
              misunderstandings and sell a cooperative negotiation atmosphere.
            </p>
            <p className="mb-8 text-sm">
              Another important issue is the strategic dealing with of media and
              public members of the family.{" "}
              <i>
                Managing the narrative and making sure that correct records is
                disseminated can prevent incorrect information and hold the
                organisation&#39;s popularity. Crisis management groups ought to
                prepare press releases and designate spokespersons to address
                media inquiries professionally and efficaciously.
              </i>
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
