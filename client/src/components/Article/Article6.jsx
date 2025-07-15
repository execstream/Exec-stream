import React, { useEffect } from "react";
import { FaEye, FaRegComment } from "react-icons/fa";
import MostPopular from "./MostPopular";
import ArticleFooter from "./ArticleFooter";
import Comment from "./Comment";
import SlidingBanner from "../Homepage/SlidingBanner";
import Sidebar from "./Sidebar";


const Article6 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mx-auto px-6 md:px-20 py-10 text-gray-800">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-5xl font-bold text-[#789BFF] mb-4">
            Finfluencers in India: The Do's and Don’ts under SEBI’s Regulatory
            Framework
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
            <span>July 9, 2025</span>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mb-10">
            {[
              {
                name: "Tanvi Muraleedharan ",
                designation: "Partner \n LawKNIT Partners",
                image: "/Tanvi.jpg",
              },
              {
                name: "Utkarsha Sharma",
                designation: "Senior Associate \n LawKNIT Partners",
                image: "/Utkarsha Sharma .jpg",
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

          <div className="flex gap-2 mb-4">
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Legal
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Consumer Protection
            </span>
          </div>
          <article
            className="prose max-w-none text-gray-700 
  [&>p]:text-sm [&>p]:mb-4 
  [&>h2]:text-md [&>h2]:font-semibold [&>h2]:mb-4 
  [&>h3]:font-bold [&>h3]:text-xl [&>h3]:text-[#789BFF] [&>h3]:mb-4 
  [&>ul]:mb-4 [&>ul>li]:text-sm [&>ul>li]:mb-2 
  [&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:list-[circle] [&>ul>li>ul>li]:text-sm [&>ul>li>ul>li]:mb-2"
          >
            <p>
              In the recent times we have seen a significant rise of
              “Finfluencers” i.e. content creators offering financial advice on
              YouTube, Instagram, Telegram, and other digital platforms. Such
              content is often viewed and relied on by retail investors to learn
              about investing. However, the growing influence of these
              unregulated voices has raised alarms with the Securities and
              Exchange Board of India (SEBI), especially when such advice
              crosses into regulatory grey zones.
            </p>

            <p>
              In response, SEBI, along with the Advertising Standards Council of
              India (ASCI), has taken several steps to regulate such content.
              This article outlines (a) Dos and Don’ts for the Finfluencers to
              avoid the potential minefield that is the regulatory landscape;
              and (b) the caveats to be followed by the SEBI Registered Entities
              while dealing with the Finfluencers.
            </p>

            <h3>Do’s and Don’ts for Finfluencers</h3>

            <h2>1. Stick to Investor Education (if Unregistered)</h2>
            <ul className="list-disc pl-6">
              <li>
                Finfluencers who are not registered as Investment Adviser (IA)
                or Research Analyst (RA) under the SEBI (Investment Advisers)
                Regulations, 2013 or SEBI (Research Analysts) Regulations, 2014
                respectively (“Unregistered Finfluencer”), are only allowed to
                generate content in relation to “Investor Education”.
              </li>
              <li>
                Investor Education only includes sharing educational content
                without recommending specific securities<sup>1</sup>, and the
                content must not discuss/display any security by name (or even
                code) using market data from the past three months, especially
                if it could imply future price movement or a recommendation.
              </li>
              <li>
                If any unregistered Finfluencer creates/ disseminates content
                other than those pertaining to Investor Education, persons
                regulated by SEBI and their agents (“SEBI Registered Entities”)
                are prohibited from directly or indirectly associating with such
                persons. <sup>2</sup>
              </li>
              <li>
                Investor Education should not be a cover for actual investment
                advisory. Recently SEBI has cracked down on Finfluencers in the
                following orders.
                <ul>
                  <li>
                    Mohammad Nasiruddin Ansari, operating under the brand “Baap
                    of Chart”, and Ravindra Bharti Education Institute Pvt. Ltd.
                    (RBEIPL) conducted activities under the guise of providing
                    educational trading courses.
                  </li>
                  <li>
                    Under 19 courses offered by Baap of Chart, 4 explicitly
                    promised assured returns, luring investors with guaranteed
                    monthly profits. However, contrary to claims of consistent
                    trading gains, Ansari actually incurred a net loss of
                    approximately ₹2.9 crore during the same period.
                  </li>
                  <li>
                    RBEIPL claimed to be an "educational" platform but actually
                    executed trades and offered guaranteed returns under wealth
                    management schemes through Ravindra Bharti's father, who was
                    an authorized person at a SEBI-registered stockbroker
                    without following the KYC, risk assessment, or regulatory
                    norms.
                  </li>
                  <li>
                    The SEBI held that these activities amounted to unregistered
                    investment advisory services, not mere educational
                    initiatives.
                  </li>
                  <li>
                    In both these orders, SEBI clawed back all gains, imposed
                    penalties, executed cease and desist on contravening
                    activities, and banned market access to the persons
                    involved.
                  </li>
                </ul>
              </li>
            </ul>

            <h2>
              2. Disclose Credentials Clearly <sup>3</sup>
            </h2>
            <ul className="list-disc pl-6">
              <li>
                Finfluencers offering investment or financial advice in the area
                of Banking, Financial Services and Insurance related to stock or
                investments need to be registered as an IA or an RA and disclose
                their SEBI registration number. <sup>4</sup>
              </li>
              <li>
                Finfluencers offering any other financial advice need to provide
                evidence of relevant professional qualifications, such as IRDAI
                license for insurance advice, Chartered Accountant (CA), Company
                Secretary (CS), or similar credentials.
              </li>
            </ul>

            <h2>
              3. Make/ Display Valid Disclaimers and Disclosures <sup>5</sup>
            </h2>
            <ul className="list-disc pl-6">
              <li>
                Finfluencers need to disclose any sponsorships, material
                connection (such as monetary/ non-monetary compensation, any
                other gifts, freebies, employment/ personal relationships),
                between the Finfluencer and the financial product issuer, even
                if the Finfluencer’s statements are unbiased.
              </li>
              <li>
                Disclosure should be prominent (in audio-visual manner/ written
                text as required) and not buried in hashtags, or in the About me
                page. Disclosure label such as “Sponsored”, “Collaboration”,
                “Partnership”, “Paid Partnership” etc. can be used.
              </li>
            </ul>

            <h2>4. Due Diligence</h2>
            <p>
              Finfluencer should review and satisfy themselves that the
              financial product issuer is in a position to substantiate claims
              made by the financial product issuer.
            </p>

            <h2>5. Be Transparent About Consideration</h2>
            <p>
              Any advice given for consideration will be considered investment
              advice and may require a Finfluencer to be registered under the IA
              Regulations. Even indirect economic benefit (like affiliate
              commissions or brand promotions) may be considered “consideration”
              under the IA Regulations. Transparency is critical to avoid
              regulatory violations.
            </p>

            <h2>
              6. Don’t Mislead Investors <sup>6</sup>
            </h2>
            <ul className="list-disc pl-6">
              <li>
                Any person including Finfluencers are prohibited from the
                following:
                <ul>
                  <li>
                    Knowingly spreading false or misleading content which is
                    designed to/ likely to influence the decision of investors.
                  </li>
                  <li>
                    Mis-selling securities, by concealing or omitting material
                    facts/ associated risks, or not taking reasonable care to
                    ensure suitability of the securities/ services to the target
                    audience/ buyer.
                  </li>
                  <li>
                    Publishing videos with false and misleading narratives
                    claiming imminent acquisitions, heavy FII/DII investments in
                    the near future, pitching stocks as ‘hidden gem’ or ‘once in
                    a lifetime opportunity’.
                  </li>
                </ul>
              </li>
            </ul>

            <p>
              SEBI referred to the videos as ‘fraudulent inducements under
              Section 12A of the SEBI Act and PFUTP regulations under SEBI’s
              order against Sadhna Broadcast Ltd (now Crystal Business System),
              promoters, market ops, finfluencers dated May 29, 2025.
            </p>

            <h3>
              Caveats for a SEBI Registered Intermediary intending to use
              Finfluencer services
            </h3>
            <ul className="list-disc pl-6">
              <li>
                If Investment advice is involved, engage only with registered
                Finfluencers.
              </li>
              <li>
                If the activities getting carried on does not involve advice,
                and only involve investor education, the Finfluencer appointed
                can be unregistered. However, it should be ensured that the
                content used is falling within the ambit of ‘investor
                education’.
              </li>
              <li>
                Enter into a detailed contract with the Finfluencer ensuring
                that:
                <ul>
                  <li>
                    SEBI Registered Intermediary has control over the content
                    and the content follows the requirement of the applicable
                    laws;
                  </li>
                  <li>
                    Mandatory disclosures are made by the Finfluencer, including
                    the registration details, sponsorship tags etc.
                  </li>
                  <li>
                    SEBI Registered Intermediary should have standard right of
                    termination for cause, indemnification obligations in case
                    of breach etc.
                  </li>
                </ul>
              </li>
              <li>
                Ensure communications and instructions made to the Finfluencers
                are validly marked and recorded in writing.
              </li>
              <li>
                Carry out due diligence on the Finfluencer to ensure that the
                relevant Finfluencer: (a) is not named in any SEBI orders or
                sanctions, (b) does not have a history of spreading misleading
                stock advice/ unregistered advisory; (c) has relevant
                credentials and a good reputation in the market.
              </li>
            </ul>

            <p>
              In conclusion, SEBI’s stance on Finfluencer reflects its
              commitment to safeguarding retail investors who are increasingly
              exposed to a flood of unverified content on social media. While
              aiming to curb potential misinformation, SEBI also places a
              significant responsibility on registered intermediaries to act as
              an additional layer of protection. As the regulatory landscape
              evolves, distinguishing between genuine financial education and
              unregistered investment advice becomes more critical than ever.
            </p>

            <div className="bg-gray-100 px-6 py-6 rounded-md shadow-sm mt-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Citations
              </h3>
              <ul className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>
                  SEBI, SEBI/HO/MIRSD/ MIRSD-PoD-1/P/CIR/2025/11,
                  https://www.sebi.gov.in/legal/circulars/jan-2025/details-clarifications-on-provisions-related-to-association-of-persons-regulated-by-the-board-miis-and-their-agents-with-persons-engaged-in-prohibited-activities_91356.html
                  , 29th January 2025.
                </li>
                <li>Supra.</li>
                <li>
                  ASCI Guidelines for influencer advertising in digital media,
                  dated 17th August 2023.
                </li>
                <li>
                  SEBI (Investment Advisers) Regulations, 2013 and SEBI
                  (Research Analysts) Regulations, 2014
                </li>
                <li>
                  ASCI Guidelines for influencer advertising in digital media,
                  dated 17th August 2023.
                </li>
                <li>
                  Section 12A of the SEBI Act, 1992 read with Regulation 4 of
                  the SEBI (Prohibition of Fraudulent and Unfair Trade
                  Practices) Regulations, 2003
                </li>
              </ul>
            </div>
          </article>
        </div>

        <aside className="w-full md:w-[300px] flex-shrink-0">
          <div className="mb-10">
            <MostPopular />
          </div>

        <Sidebar />
          <SlidingBanner/>

          <ArticleFooter />
        </aside>
      </div>
    </section>
  );
};

export default Article6;
