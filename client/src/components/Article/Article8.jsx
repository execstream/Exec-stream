import React, { useEffect } from "react";
import { FaEye, FaRegComment } from "react-icons/fa";
import MostPopular from "./MostPopular";
import ArticleFooter from "./ArticleFooter";
import Comment from "./Comment";
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
            From Shelf to Scooter: The Legal Mess Behind India's 10-Minute
            Commerce Boom (Dark Stores, Quick Commerce & Zonal Compliance Chaos)
          </h1>
           <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
        <span>July 9, 2025</span>
      </div>
          <div className="w-full flex justify-center mb-6">
            <img
              src="/Rahul Sundaram.webp"
              alt="Rahul Sundaram"
              className="h-[400px] w-auto object-cover rounded-xl shadow-md"
            />
          </div>

          <h2 className="text-xl font-bold mb-2">Rahul Sundaram </h2>
          <p className="text-sm font-medium text-gray-500 mb-6">
            {" "}
            Partner <br/> INDIALAW LLP
          </p>

          <div className="flex gap-2 mb-8">
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Legal
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              E-Commerce
            </span>
          </div>

          {/* Article Content */}
       <article className="prose max-w-none text-gray-700 
  [&>p]:text-sm [&>p]:mb-4 
  [&>h2]:text-md [&>h2]:font-semibold [&>h2]:mb-4 
  [&>h3]:font-bold [&>h3]:text-xl [&>h3]:text-[#789BFF] [&>h3]:mb-4 
  [&>ul]:mb-4 [&>ul>li]:text-sm [&>ul>li]:mb-2 
  [&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:list-[circle] [&>ul>li>ul>li]:text-sm [&>ul>li>ul>li]:mb-2">
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Introduction
            </h3>
            <p className="mb-8 text-sm">
              In recent years, India has witnessed a meteoric rise in the quick
              commerce sector, with companies like Zepto, Blinkit and Instamart
              promising deliveries within 10 minutes or less. While this rapid
              delivery model has revolutionized consumer expectations, it has
              also brought to light a host of legal and regulatory challenges.
              From dark stores operating in residential areas to issues of food
              safety, dark patterns and labour rights, the 10-minute commerce
              boom is mired in a complex web of legal and compliance issues.
              Additionally, the economics of cost per order, profitability, and
              the impact of service fees and packaging costs on consumer
              interest are critical factors shaping the industry&#39;s future.
              This article also explores the importance of compliance with the
              Legal Metrology (Packaged Commodity) Rules, 2011, and the CCPA
              guidelines on dark patterns, as well as the data privacy and
              competition issues surrounding unfair data practices in e-commerce
              and quick commerce. Furthermore, it delves into the Foreign Direct
              Investment (FDI) issues in retail e-commerce and the importance of
              hallmarking and adherence to BIS standards for products sold on e-
              commerce platforms.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Regulatory and Compliance Challenges
            </h3>
            <p className="mb-8 text-sm">
              Dark stores, the fulcrum of the quick commerce model, are
              mini-warehouses strategically located in densely populated urban
              areas to facilitate rapid deliveries. However, in a zeal to be
              closer to the consumers, these stores often operate in designated
              residential zones, violating zoning laws and creating traffic
              congestion and strains on the already fragile infrastructure in
              such zones. This highlights the blatant violation of town planning
              regulatory which has allowed these stores to proliferate
              unchecked. The 24-hour operation of the dark stores and continuous
              movement of heavy vehicles delivering merchandise and movement of
              workmen in these residential zones has led to activism by resident
              welfare association against such operations which is a constant
              source of conflict with the communities around which these stores
              operate.
            </p>
            <p className="mb-8 text-sm">
              Quick commerce platforms have exploited regulatory grey areas to
              avoid classification under existing frameworks. They present
              themselves as technology companies (IT/ IT enabled services) when
              facing retail regulations seeking the “safe harbour” defence. This
              regulatory arbitrage allows them to sidestep labour laws and other
              compliance requirements. Additionally, these platforms frequently
              engage in predatory pricing, selling products below cost to
              undercut local retailers and create artificial market expectations
              mostly under the garb of “cash back” offers and subventions from
              banks and payment gateways. The Competition Commission of India
              has launched preliminary investigations into these practices basis
              complaints from “mom and pop stores”, but regulatory action
              remains slow.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Economic and Operational Challenges
            </h3>
            <p className="mb-8 text-sm">
              Quick commerce platforms face significant challenges in achieving
              profitability due to high operational costs and low average order
              values (AOV). In 2022, the AOV for quick commerce companies
              hovered around ₹350-₹400, making it difficult to achieve
              profitability. However, platforms like Blinkit have managed to
              increase their AOV to ₹635, which has been instrumental in
              improving their gross margins and moving towards profitability.
            </p>
            <p className="mb-8 text-sm">
              As per information available in the public domain Blinkit’s
              quarterly adjusted EBITDA losses have come down from INR 3.26bn in
              1QFY23 to INR 0.89bn in 3QFY24. As a percentage of GMV, the losses
              have come down from 27.8% in 1QFY23 to -2.5% in 3QFY24. Zepto’s
              co- founder indicated a 44% YoY improvement in its EBITDA % in
              CY23, with the company on track to turn EBITDA positive in 2024.
              Swiggy has also indicated that the peak of its investments in
              Instamart was over, and it has started taking strong strides
              towards achieving profitability.
            </p>
            <p className="mb-8 text-sm">
              The increase in AOV has for most meant increase product categories
              and more particularly the high value categories being included in
              the product mix for quick delivery. Each category of product comes
              with its own regulatory compliances and complexities. More so from
              the regulated sectors like pharmaceuticals , foods, precious
              metals and electronics.
            </p>
            <p className="mb-8 text-sm">
              Service fees and packaging costs are critical components of the
              cost per order and significantly impact consumer interest.
              Platforms like Blinkit now charge customers for delivery, along
              with additional fees like high-demand fees. This change has
              reduced losses from last-mile delivery and ensured that customers
              who value convenience contribute to operational costs. However,
              high service fees and packaging costs can deter price-sensitive
              consumers across segments and bring on the ire of consumer
              activists who see this additional cost as an afront on consumer
              rights.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Issues the CCPA is grappling with related to quick commerce
            </h3>
            <h4 className="italic font-semibold mb-1 mt-1">1. Is it quick</h4>
            <p className="ml-8">
              The Central Consumer Protection Authority (CCPA) has demanded
              evidence from quick commerce companies to substantiate their
              claims of delivering orders within 10 minutes. Companies like
              Zepto, Blinkit, and Swiggy Instamart have been summoned to provide
              data on their delivery times across major cities. Failure to
              provide such evidence may result in modifications to their
              advertising claims, potentially extending the promised delivery
              time to 15 minutes. This scrutiny aims to ensure transparency and
              protect consumers from misleading advertising.
            </p>
            <h4 className="italic font-semibold mb-1 mt-1">
              2. Differential pricing based on consumer’s operating system.
            </h4>
            <p className="ml-8">
            CCPA in India has also been actively addressing the issue of differential pricing for e-
commerce transactions based on whether customers use iPhone or Android devices. This
issue came to light after several consumers reported that they were being charged different
fares for identical rides or services based on the type of mobile operating system they used  
            </p>
            <h4 className="italic font-semibold mb-1 mt-1">3. CCPA’s Crackdown On Dark Patterns</h4>
            <p className="ml-8">The Central Consumer Protection Authority (CCPA) has issued a new advisory under the
Consumer Protection Act, 2019. This advisory, dated 5 June 2025, requires all e-commerce
platforms to conduct self-audits to identify and eliminate dark patterns. The directive aims
to promote a transparent, ethical, and consumer-centric digital environment.</p>
              <p className="ml-8">Dark patterns are manipulative design elements or strategies employed by digital platforms
to deceive users into actions they did not intend, such as making unintended purchases,
subscribing to services without awareness, or sharing personal data without informed
consent. In response to the increasing prevalence of these tactics, the CCPA had previously
issued the “Guidelines for Prevention and Regulation of Dark Patterns, 2023.” The latest
advisory enhances these guidelines by introducing a proactive compliance mechanism
through self-audits.</p>
                <p className="ml-8">By holding e-commerce entities accountable for their digital practices, the CCPA seeks to
prevent consumers from experiencing coercive or misleading digital interactions. This move
aligns with global best practices and underscores India’s commitment to establishing a
strong digital consumer protection framework.</p>
            <h4 className="italic font-semibold mb-1 mt-1">4. Gig Workers: Legal and Regulatory Frameworks</h4>
            <p className="ml-8">
             The 10-minute delivery model places immense pressure on delivery riders, who are often
not employees but classified as “independent contractors” and deprived of social security
measures otherwise available to mainstream workmen. This classification exempts
companies from providing basic labour protection, such as health insurance and paid sick
leave. 
            </p>
 <p className="ml-8">
             In recent studies conducted, quick commerce companies score poorly on fair working
conditions, with riders often working long hours for minimal pay. The pressure to meet tight
delivery deadlines also encourages risky behaviour, such as speeding and breaking traffic
rules. 
            </p>
             <p className="ml-8">
              Karnataka has introduced an ordinance to protect the rights and welfare of gig workers. The
ordinance establishes a welfare board to oversee all issues related to gig workers and
platforms. Aggregator platforms like Zomato, Ola, Swiggy, and Amazon must register with
the state welfare board and enrol all their gig workers, who will receive a unique ID.
Platforms must contribute 1% to 5% of their payout to workers into a state-run welfare fund
for social security. They must also explain how their algorithms function for task allocation,
pay, ratings, and access, ensuring no discrimination. Platforms are required to provide clear,
written contracts to workers detailing earnings, payment methods, and conditions for
access blocking. A two-tier grievance system is established, starting with an Internal Dispute
Resolution Committee within the platform and escalating to the Welfare Board. Late
payment of welfare fees incurs a 12% annual interest, and non-compliance can lead to fines
of up to Rs 5,000 for the first violation and up to Rs 1 lakh for subsequent violations.
            </p>
             <p className="ml-8">
              Rajasthan became the first state to enact a law for the welfare of gig workers. The act
defines gig workers as those who perform work outside of a traditional employee-employer

relationship and earn based on contractual terms. It establishes the Rajasthan Platform-
Based Gig Workers Welfare Board, which will ensure the registration of gig workers and
aggregators, monitor social security schemes, and suggest new schemes to the state
government. The state government will register and generate a unique ID for all platform-
based gig workers. It also establishes a welfare fund, primarily constituted by grants from
the government and a “welfare fee” charged on each transaction related to platform-based
gig workers. The act provides a grievance redressal mechanism for gig workers to address
any issues related to their rights under the act.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Food Safety and Standards
            </h3>
            <p className="mb-8 text-sm">The rapid expansion of dark stores has raised significant concerns about food safety and
hygiene. For instance, the Maharashtra Food and Drug Administration (FDA) has shut down
several dark stores for operating without valid licenses and failing to meet basic food safety
standards. The FDA and the Food Safety and Standards Authority of India (FSSAI) have
stepped up surprise inspections, uncovering violations such as improper food storage. These
lapses not only pose health risks but also erode consumer trust in the quick commerce
model.</p>
            <p className="mb-8 text-sm">The Food Safety and Standards Authority of India (FSSAI) has issued comprehensive
guidelines for food business activities conducted through e-commerce. These guidelines aim
to ensure that e-commerce food business operators comply with the Food Safety and
Standards Act, 2006, and maintain high standards of food safety and hygiene</p>
            <p className="mb-8 text-sm">E-commerce is defined as the buying and selling of goods and services over digital and
electronic networks. An e-commerce Food Business Operator (FBO) is any operator
conducting food business activities through e-commerce. The guidelines distinguish
between two models: the marketplace-based model, where an IT platform facilitates
transactions between buyers and sellers, and the inventory-based model, where the e-
commerce FBO owns and sells the inventory directly to customers.</p>
            <p className="mb-8 text-sm">E-commerce entities providing listing services to sellers, manufacturers, and restaurants
must ensure transparency and avoid disseminating misleading information. They are also
responsible for facilitating storage, distribution, and transportation services for food
products, ensuring trained personnel handle last-mile delivery to maintain food safety.</p>
            <p className="mb-8 text-sm">All food business operators must ensure that food products meet the requirements of the
FSS Act at all stages of production, processing, import, distribution, and sale. E-commerce
FBOs must sign agreements with sellers/brand owners/manufacturers to ensure compliance
with the FSS Act and Regulations.</p>
            <p className="mb-8 text-sm">Pre-packed food must display a clear picture of the principal display panel, excluding batch
number, best before, expiry date, and MRP. Fresh produce must provide an indicative
image. Sellers/brand owners/manufacturers must display their FSS Act license/registration.
Mandatory food information must be provided to consumers without additional costs, and
food products are liable to sampling at any point in the supply chain.</p>
            <p className="mb-8 text-sm">All FBOs, including sellers, brand owners, vendors, importers, manufacturers, and
restaurants, must comply with basic hygiene and sanitary practices as per Schedule 4 of the
FSS Act.</p>
            <p className="mb-8 text-sm">E-commerce FBOs must notify sellers/brand owners/manufacturers immediately about
complaints related to product efficacy, quality, or other issues. Consumers will be redirected
to the manufacturer&#39;s call center for further resolution. Sellers/brand
owners/manufacturers are liable to take action on consumer complaints, and e-commerce
FBOs must cooperate by sharing relevant information. Complaints must be resolved within
the timeline prescribed by the Ministry of Consumer Affairs. E-commerce FBOs must
immediately delist any food products that do not comply with the FSS Act or Regulations.</p>
            <p className="mb-8 text-sm">The FSSAI guidelines provide a clear framework for e-commerce food business operators,
ensuring transparency, accountability, and consumer protection. By outlining specific
requirements for registration, supply chain compliance, product listing, and consumer
complaints, the FSSAI aims to maintain high standards of food safety and hygiene in the e-
commerce food industry. Compliance with these guidelines will help build consumer trust
and promote a healthy and safe food market in India.</p>
            <p className="mb-8 text-sm">The Food Safety and Standards Authority of India (FSSAI) has introduced specific guidelines
and licensing requirements for e-commerce food businesses to ensure food safety and
hygiene. E-commerce platforms must ensure that every food business operator listed on
their site has a valid FSSAI License or Registration. Sellers without proper documentation
should not be allowed to operate on the platform. The types of FSSAI licenses for online
food businesses include Basic FSSAI Registration for small businesses with an annual
turnover of up to ₹12 lakh, State FSSAI License for businesses with annual revenues
between ₹12 lakh and ₹20 crore, and Central FSSAI License for large-scale businesses with
an annual turnover above ₹20 crore, including food aggregators and e-commerce food
enterprises operating in multiple states.</p>
            <p className="mb-8 text-sm">E-commerce food businesses must adhere to all FSSAI regulations, including food safety and
hygiene standards. They must maintain detailed records of all transactions and ensure
traceability of food products. Food products must be properly packaged and labelled in
compliance with FSSAI guidelines. Cold chain management is crucial for perishable items to
ensure they remain within the required temperature range during storage and
transportation. Non-compliance with FSSAI regulations can result in severe penalties,
including fines and suspension or cancellation of licenses. Platforms must ensure that all
listed sellers are compliant to avoid legal repercussions.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Consumer Protection and Fair Trade
            </h3>
            <p className="mb-8 text-sm">The Legal Metrology (Packaged Commodity) Rules, 2011, are crucial for ensuring that
packaged commodities sold in India meet specific standards of quantity, labelling, and
packaging. These rules are designed to protect consumers from misleading practices and
ensure fair trade. Every package must clearly declare the quantity of the commodity in

terms of weight, measure, or number. This declaration must be accurate and prominently
displayed. Packages must include essential information such as the name and address of the
manufacturer, the net quantity, the manufacturing and expiry dates, and any other relevant
details. E-commerce entities / sellers on e-commerce marketplaces must ensure that all
packaged commodities listed on their platforms comply with the Legal Metrology rules.
Regular inspections and verification processes must be in place to ensure compliance. Non-
compliance with the Legal Metrology rules can result in severe penalties, including fines and
legal action. Inventory based e-commerce platforms can be held liable for selling non-
compliant products, making it essential for them to ensure that all listed sellers adhere to
these regulations.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Data Privacy and Competition Issues
            </h3>
           <p className="mb-8 text-sm">The rapid growth of e-commerce and quick commerce has led to significant concerns
regarding data privacy. E-commerce platforms collect vast amounts of personal data from
consumers, including names, addresses, phone numbers, and payment information. This
data is often used for targeted advertising and personalized services, but it also poses risks if
mishandled or misused. E-commerce platforms must obtain explicit consent from users
before collecting and using their personal data. They must also provide clear information
about how the data will be used and shared. Platforms must implement robust security
measures to protect consumer data from breaches and unauthorized access. This includes
encryption, secure storage, and regular security audits. Users should have the right to
access, correct, and delete their personal data. Platforms must provide clear and easy-to-
understand privacy policies and settings.</p>
           <p className="mb-8 text-sm">The Personal Data Protection Act, 2023, aims to regulate the collection, usage, and storage
of personal data in India. Compliance with this Act will be crucial for e-commerce platforms
to avoid legal repercussions.</p>
           <p className="mb-8 text-sm">E-commerce and quick commerce platforms have access to vast amounts of consumer data,
which can give them an unfair competitive advantage. This data can be used to gain insights
into consumer behavior, market trends, and competitor strategies, potentially leading to
anti-competitive practices. This particularly concerning with most platform owning and
managing ‘white lable brands” which use such market intelligence to an unfair advantage.</p>
           <p className="mb-8 text-sm">Large platforms can accumulate significant amounts of data, creating a barrier to entry for
smaller competitors. This can lead to market dominance and reduced competition.
Algorithms used by platforms for search results, product recommendations, and pricing can
be biased, favoring certain sellers or products over others. This can lead to unfair
competition and reduced consumer choice. With “markets” being narrowly defined, the
Competition Commission of India (CCI) is investigating into such abuse of dominance.
Platforms must ensure that their data practices do not violate competition laws. Platforms
must ensure that their algorithms and data practices are transparent and fair. They should
provide equal opportunities for all sellers and avoid discriminatory practices.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Foreign Direct Investment
            </h3>
            <p className="mb-8 text-sm">Foreign Direct Investment (FDI) in retail and e-commerce in India is governed by specific
regulations and policies aimed at balancing the need for foreign investment with the
protection of domestic businesses and consumer interests. The Indian government allows
100% FDI in e-commerce marketplaces under the automatic route. However, FDI in
inventory-based e-commerce is not permitted. This distinction aims to prevent foreign
companies from directly holding and selling inventory, which could impact domestic
retailers. E-commerce platforms must comply with various regulations, including the Foreign
Exchange Management Act (FEMA) . Non-compliance can lead to severe penalties and legal
action. The influx of foreign investment in e-commerce has raised concerns about the
impact on traditional brick-and-mortar retailers. The government aims to ensure that
foreign investment does not lead to the displacement of domestic businesses. The
government periodically reviews and updates FDI policies to address emerging challenges
and ensure a level playing field for all market participants. Platforms must stay updated with
these changes to avoid regulatory issues.</p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Quality Standards
            </h3>
            <p className="mb-8 text-sm">Hallmarking and BIS (Bureau of Indian Standards) standards are essential for ensuring the
quality and authenticity of products sold on e-commerce platforms. These standards are
particularly crucial for products like jewelry, electronics, and other consumer goods.
Hallmarking is the official certification of the purity of precious metals like gold and silver.</p>
            <p className="mb-8 text-sm">Recent trends have revealed the sale of sub-standard imported products under various
categories, raising questions of violation under the Bureau of Indian Standards Act, 2016.
The BIS has in the recent past has dealt with such defaults with a heavy hand and seized
non-compliant goods and initiated prosecution.</p>
            <p className="mb-8 text-sm">E-commerce platforms selling jewelry must ensure that all products are hallmarked,
providing consumers with assurance of the product&#39;s quality and authenticity. The Bureau of
Indian Standards (BIS) sets quality standards for a wide range of products. E-commerce
platforms must ensure that all listed products comply with BIS standards. This includes
obtaining BIS certification for products like electrical goods, toys, and household items as
mandated under law. Platforms must implement robust verification processes to ensure
that all sellers comply with hallmarking and BIS standards. Regular audits and inspections
are necessary to maintain compliance and protect consumer interests. Non-compliance with
hallmarking and BIS standards can result in severe penalties, including fines and legal action.
Platforms can be held liable for selling non-compliant products, making it essential to ensure
that all listed sellers adhere to these regulations.</p>
            
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Conclusion
            </h3>
            <p className="mb-8 text-sm">The 10-minute commerce boom in India, while offering unparalleled convenience, has
exposed a myriad of legal and regulatory challenges. From dark stores operating in
residential areas to food safety violations and exploitative labor practices, the industry is
grappling with significant compliance issues. Additionally, the economics of cost per order
and the impact of service fees and packaging costs on consumer interest are critical factors
shaping the industry&#39;s future. The importance of compliance with the Legal Metrology

(Packaged Commodity) Rules, 2011, and the CCPA guidelines on dark patterns cannot be
overstated, as they ensure fair trade practices and protect consumer rights. Data privacy
and competition issues surrounding unfair data practices in e-commerce and quick
commerce are also crucial, as they ensure a level playing field and protect consumer
interests. FDI issues in retail and e-commerce, as well as the importance of hallmarking and
BIS standards for products sold on e-commerce platforms, further complicate the regulatory
landscape. As the government intensifies its oversight, it remains to be seen whether quick
commerce platforms can navigate these regulatory hurdles while maintaining their promise
of rapid deliveries. The future of this industry will depend on finding a balance between
innovation and compliance, ensuring that the race to deliver does not come at the expense
of consumer safety and worker rights.</p>
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
