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
          GST 2.0: The Great GST Reset
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
            <span>September 4, 2025</span>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mb-10">
            {[
                 {
                name: "Sanjay A. Chhabria",
                designation: " Indirect Tax Lead \n Nexdigm",
                image: "/Sanjay A. Chhabria.jpeg",
              },
              {
                name: "Jinesh M. Shah",
                designation: "Senior Manager \n Nexdigm",
                image: "/Jinesh M Shah.jpeg",
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
              Finance
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
             Tax
            </span>
              <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
             GST
            </span>
          </div>
      <article
  className="prose max-w-none text-gray-700 
    [&>p]:text-sm [&>p]:mb-4 
    [&>h2]:text-md [&>h2]:font-semibold [&>h2]:mb-4 
    [&>h3]:font-bold [&>h3]:text-xl [&>h3]:text-[#789BFF] [&>h3]:mb-4 
    [&>ul]:mb-4 [&>ul>li]:text-sm [&>ul>li]:mb-2 [&>ul]:list-disc [&>ul]:pl-5
    [&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:list-[circle] [&>ul>li>ul>li]:text-sm [&>ul>li>ul>li]:mb-2
    [&>p>em]:italic
    [&>table]:w-full [&>table]:mb-4 [&>table]:text-sm
    [&>table_th]:p-2 [&>table_th]:border [&>table_th]:border-gray-300 [&>table_th]:bg-gray-100 [&>table_th]:text-left
    [&>table_td]:p-2 [&>table_td]:border [&>table_td]:border-gray-300"
>
  <p>
    <em>
      Major tax relief for households and MSMEs, by slashing the GST rates on
      essentials, faster refunds for exporters, and stricter rules for sin
      goods like tobacco and luxury items mark a decisive shift in India’s
      indirect tax regime.
    </em>
  </p>
  <p>
    The 56th GST Council meeting held on September 3, 2025, has delivered the
    most comprehensive tax restructuring since GST implementation, touching
    almost every sector of the economy. Under the Honourable FM’s leadership,
    the Council approved sweeping changes that prioritize affordability for
    essential goods while targeting luxury and sin goods to maintain revenue
    streams.
  </p>
  <p>
    Majority of the Changes would be implemented from September 22, 2025,
    except tobacco products which continue at existing rates until compensation
    cess obligations are discharged. Herewith elaborating proposed changes
    sector wise:
  </p>

  <h3>Food Processing & Agriculture: Maximum Relief Package</h3>
  <p>
    The food processing sector emerges as the biggest beneficiary, with the
    Council demonstrating clear intent to reduce food inflation and support
    agricultural value chains. Several everyday items have been completely
    exempted from GST.
  </p>
  <table>
    <thead >
      <tr>
        <th>Product</th>
        <th>Previous Rate</th>
        <th>New Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>UHT Milk</td>
        <td>5%</td>
        <td>0%</td>
      </tr>
      <tr>
        <td>Packaged Paneer</td>
        <td>5%</td>
        <td>0%</td>
      </tr>
      <tr>
        <td>Pizza Bread</td>
        <td>5%</td>
        <td>0%</td>
      </tr>
      <tr>
        <td>Indian Breads (Chapatti, Roti, Khakhra)</td>
        <td>5%</td>
        <td>0%</td>
      </tr>
      <tr>
        <td>Paratha, Parotta</td>
        <td>18%</td>
        <td>0%</td>
      </tr>
    </tbody>
  </table>

  <h2>Other Significant Reductions (12% to 5%)</h2>
  <p>
    The Council has reduced rates on protein-rich and processed foods like diary
    products; Nuts & dry fruits; Meat and Seafood; ice creams and certain
    beverages.
  </p>
  <p>
    This is expected to stimulate sales during peak seasons and help maintain
    affordability for millions of consumers. However, trying to balance the
    relief provided, the council has also approved rate increase in certain
    premium beverages and snacks, tagging the same as ‘sin’ goods. The same is
    summarized as under.
  </p>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Previous Rate</th>
        <th>New Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Carbonated Beverages</td>
        <td>28%</td>
        <td>40%</td>
      </tr>
      <tr>
        <td>Caffeinated Beverages</td>
        <td>28%</td>
        <td>40%</td>
      </tr>
      <tr>
        <td>Pan Masala</td>
        <td>28%</td>
        <td>40%</td>
      </tr>
      <tr>
        <td>Aerated Waters with Sugar</td>
        <td>28%</td>
        <td>40%</td>
      </tr>
    </tbody>
  </table>

  <h3>Agricultural Equipment: Comprehensive Support System</h3>
  <p>
    The agriculture sector continues to receive unprecedented support through
    substantial tax reductions across the entire mechanization value chain.
  </p>
  <h2>Tractors and Components (Multiple Rate Reductions)</h2>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Previous Rate</th>
        <th>New Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tractors (≤1800cc)</td>
        <td>12%</td>
        <td>5%</td>
      </tr>
      <tr>
        <td>Agricultural Diesel Engines</td>
        <td>18%</td>
        <td>5%</td>
      </tr>
      <tr>
        <td>Tractor Parts (Comprehensive)</td>
        <td>18%</td>
        <td>5%</td>
      </tr>
      <tr>
        <td>Tractor Tyres</td>
        <td>18%</td>
        <td>5%</td>
      </tr>
    </tbody>
  </table>
  <p>
    The reduction covers over fifteen categories of tractor components
    including gearboxes, hydraulic systems, brake assemblies, steering
    components, and body parts.
  </p>
  <p>
    Key chemicals like sulphuric acid and nitric acid reduced from 18% to 5%,
    while harvesting machinery and composting equipment benefit from similar
    reductions.
  </p>
  
  <h3>Automotive Sector: Tale of Two Markets</h3>
  <p>
    The automotive sector sees the most polarized treatment, with clear
    differentiation between mass market vehicles and luxury segments.
  </p>
  <h2>Mass Market Relief (28% to 18%)</h2>
  <p><strong>Passenger Vehicles:</strong></p>
  <ul>
    <li>Small petrol cars (≤1200cc, ≤4000mm length)</li>
    <li>Small diesel cars (≤1500cc, ≤4000mm length)</li>
    <li>Small hybrid vehicles meeting size criteria</li>
    <li>Three-wheelers and ambulances</li>
  </ul>
  <p><strong>Two-Wheelers:</strong> All motorcycles and scooters ≤350cc</p>
  <p>
    <strong>Commercial Vehicles:</strong> All goods vehicles, buses, and
    commercial chassis
  </p>
  <h2>Luxury Segment Taxation (28% to 40%)</h2>
  <table>
    <thead>
      <tr>
        <th>Vehicle Category</th>
        <th>New GST Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Premium Cars (&gt;thresholds)</td>
        <td>40%</td>
      </tr>
      <tr>
        <td>Motorcycles &gt;350cc</td>
        <td>40%</td>
      </tr>
      <tr>
        <td>Personal Aircraft</td>
        <td>40%</td>
      </tr>
      <tr>
        <td>Luxury Yachts</td>
        <td>40%</td>
      </tr>
    </tbody>
  </table>
  <p>
    This creates one of the world’s highest automotive luxury tax rates while
    providing significant relief for mass transportation.
  </p>

  <h3>Pharma and Healthcare: Universal Access Focus</h3>
    <p>
      Healthcare receives comprehensive support addressing long-standing
      concerns:
    </p>
    <p><strong>Complete Tax Exemption:</strong></p>
    <ul>
      <li>Individual health insurance (18% to 0%)</li>
      <li>Individual life insurance (18% to 0%)</li>
      <li>
        Thirty-three life-saving medicines including cancer treatments
      </li>
    </ul>
    <p>
      <strong>Medical Equipment Reduction (12% to 5%):</strong> Medical
      oxygen, diagnostic equipment, surgical instruments, spectacles, and
      medical devices.
    </p>
    <ul>
      <li>
        This move will ease treatment costs, strengthen domestic
        manufacturing, and improve accessibility in rural markets while
        forcing pharma companies to adjust pricing strategies under
        anti-profiteering norms.
      </li>
    </ul>
    <h3>Construction and Consumer Goods</h3>
    <p>
      <strong>Construction Relief:</strong> Cement GST reduced from 28% to
      18%, significantly lowering construction costs and supporting
      affordable housing initiatives like Pradhan Mantri Awas Yojana.
    </p>
    <p>
      <strong>Consumer Electronics Relief (28% to 18%):</strong>
      Televisions, air conditioners, and dishwashers become more
      affordable, stimulating demand for household appliances.
    </p>
    <p>
      <strong>Education Support:</strong> Exercise books, pencils, crayons,
      maps, and educational materials completely exempted from GST.
    </p>
    <p>
      This reduction directly affects affordability, enabling the common
      man’s aspiration to own modern household appliances and durable goods
      to be more easily achievable. With sustained inflationary pressures on
      durable goods, these tax cuts are expected to stimulate demand and
      invigorate domestic manufacturing and retail sectors.
    </p>
    
    <h3>Services Sector Restructuring</h3>
    <p>
      <strong>Hospitality Boost:</strong> Hotel stays under ₹7,500 per night
      reduced from 12% to 5%, supporting domestic tourism.
    </p>
    <p>
      Families and mid-income groups will benefit from lower accommodation
      costs during travel, leisure, and pilgrimage trips. Hospitality
      businesses, especially in tourism-driven regions, are expected to see
      higher footfalls and increased occupancy.
    </p>
    <p>
      <strong>Goods Transport Agency (GTA) Services: Streamlining Logistics</strong>
    </p>
    <p>
      GTA services maintain 5% rate with simplified rules for small operators
      to ease compliance:
    </p>
    <ul>
      <li>
        Special provisions for small transport operators and intermediaries
        aim to reduce regulatory burden.
      </li>
      <li>
        Simplified input tax credit rules and clearer guidelines will ease
        easier credit claims for logistics service providers.
      </li>
    </ul>
    <p>
      This will reduce operating costs across the supply chain, indirectly
      benefiting manufacturers, retailers, and consumers through improved
      logistics efficiency.
    </p>
    <h3>Gold and Jewellery Sector: Stability Retained</h3>
    <p>
      The Council has retained the 3% GST rate on gold, preserving rate
      stability in a sentiment-driven sector.
    </p>
    <p>
      This move avoids price shocks during festive and wedding seasons,
      ensuring consumer confidence and predictable demand.
    </p>
    
    <h3>
      Refunds Reimagined: Risk-Based Provisional Payouts to Ease MSME Cash
      Flows
    </h3>
    <p>
      Refund delays have been a persistent pain point, especially for
      exporters and MSMEs operating under zero-rated supplies or inverted
      duty structures. Recognizing this, the Council has introduced a
      transformative risk-based refund mechanism designed to significantly
      ease working capital constraints for small and medium enterprises.
    </p>
    <p><strong>Key features of the reimagined refund process include:</strong></p>
    <ul>
      <li>
        Provisional payouts of up to 90% of the refund claims will be
        disbursed upfront, enabling immediate liquidity. Balance to be
        subject to post-facto scrutiny and audit, ensuring compliance
        without stalling cash flow.
      </li>
      <li>
        Threshold limits on refunds for small exporters and e-commerce
        sellers have been removed.
      </li>
      <li>
        A pilot refund automation portal will be launched on November 1,
        2025, with full system rollout by June 2026, using data analytics
        and risk assessment algorithms to fast-track approvals.
      </li>
      <li>
        Simplified documentation requirements and enhanced transparency.
      </li>
    </ul>
    <p><strong>Impact for Businesses:</strong></p>
    <ul>
      <li>
        The new system is expected to unlock billions in working capital,
        allowing MSMEs and exporters to meet operational expenses, invest in
        capacity expansion, and improve competitiveness in global markets.
      </li>
      <li>
        By minimizing procedural bottlenecks and faster refund cycles, the
        government signals its commitment to a business-friendly environment
        and enhanced ease of doing business.
      </li>
    </ul>
    
    <h3>
      GST Appellate Tribunal (GSTAT): A Game-Changer for Tax Dispute
      Resolution
    </h3>
    <p>
      The operationalization of the GST Appellate Tribunal marks a critical
      step in reducing litigation and enhancing tax certainty:
    </p>
    <ul>
      <li>GSTAT will begin accepting appeals on September 30, 2025.</li>
      <li>Hearings will commence from December 2025.</li>
      <li>Appeals to be filed by June 30, 2026.</li>
      <li>
        The Principal Bench of GSTAT will function as a national appellate
        authority, harmonizing rulings and mitigating jurisdictional
        inconsistencies.
      </li>
    </ul>
    <p>
      This dramatically shortens dispute resolution timelines and improves
      business certainty.
    </p>

    <h3>Intermediaries: Major Relief for Intermediaries in Landmark Reform</h3>
    <p>
      The GST Council has recommended deleting Section 13(8)(b) from the IGST
      Act. This change will shift the place of supply determination to Section
      13(2), which considers the recipient’s location, effectively classifying
      intermediary services provided to foreign clients as exports. Such
      services would become zero-rated under Section 16 of the IGST Act,
      allowing intermediaries to claim input tax credit refunds and easing
      cash flow.
    </p>
    <h3>Post-Sale Discounts and ITC Reversal: Legislative Amendments</h3>
    <p>
      To reduce litigation and clarify business practices, the Council has:
    </p>
    <ul>
      <li>
        Recommended omission of Section 15(3)(b)(i) of CGST Act, which
        restricted post-sale discounts unless pre-agreed.
      </li>
      <li>
        Allowed credit notes to account for discounts even if not linked to
        specific invoices.
      </li>
      <li>
        Mandated proportionate ITC reversal by the recipient to the extent of
        the discount received.
      </li>
      <li>
        Further, Circular No. 212/6/2024-GST (dated June 26, 2024) will be
        rescinded and a new clarificatory circular will be issued to ensure
        consistent application.
      </li>
    </ul>

    <h3>Consumer Benefits: Immediate and Long-Term Gains</h3>
    <p>The reforms create a win-win scenario for consumers and businesses alike:</p>
    <ul>
      <li>Households save monthly on essentials</li>
      <li>Lower housing costs for first-time buyers</li>
      <li>Affordable healthcare and education access</li>
      <li>Reduced hotel tariffs boosting domestic tourism</li>
      <li>Stable gold pricing during festive seasons</li>
      <li>Personal care and FMCG products to get slightly cheaper.</li>
    </ul>
    <h3>
      Business Cash Flow and Supply Chain Realignment: The Bigger Picture
    </h3>
    <p>
      Beyond tax cuts, GST 2.0 fundamentally improves business dynamics, they
      fundamentally improve cash flow and compel re-alignment of supply
      chain and pricing policies:
    </p>
    <ul>
      <li>
        The 90% upfront refund mechanism will release blocked capital for MSMEs
        and exporters, enabling reinvestment, expansion, and debt servicing.
      </li>
      <li>
        Simplified ITC rules and clarified discount treatments reduce
        compliance costs and disputes, creating a more predictable tax
        environment.
      </li>
      <li>
        Businesses will need to revise supply chain contracts, pricing
        agreements, and ERP systems to align with new tax rates and credit
        rules.
      </li>
      <li>
        Manufacturers and retailers must work collaboratively to update shelf
        prices, promotional strategies, and billing systems to reflect tax
        savings and follow anti-profiteering mandates.
      </li>
      <li>
        Logistic providers and GTAs will see smoother compliance, reduce
        supply chain bottlenecks, and enhance distribution efficiency.
      </li>
    </ul>
    <p>
      Together, these changes encourage a more formalized, transparent, and
      efficient tax ecosystem, helping the entire economy.
    </p>
    <h3>The True GST 2.0</h3>
    <p>
      These reforms position India strategically amid global trade tensions.
      With the US intensifying tariff pressures and trade wars reshaping
      commerce, India’s domestic restructuring builds internal resilience and
      external competitiveness.
    </p>
    <p>
      Reduced manufacturing input costs strengthen export capabilities
      precisely when global supply chains are reconfiguring. The emphasis on
      affordable essentials while taxing luxury consumption builds domestic
      demand resilience, creating an economic anchor independent of global
      volatility.
    </p>
    <p>
      Agricultural mechanization support and food processing relief establish
      foundations for food security and rural prosperity that insulate the
      economy from external shocks.
    </p>
    <p>
      While 01 Jul. 2017 created a paradigm shift in India’s Indirect
      taxation timeline, the 56th GST Council meeting represents the birth of
      GST 2.0. With significant tax relief on essentials, expedited refunds,
      a functioning appellate mechanism, clarified ITC rules, and rigorous
      anti-profiteering enforcement, GST 2.0 represents a balanced and
      forward-looking reform.
    </p>
    <p>
      As businesses adapt over coming months, success will be measured by
      whether restructuring achieves its goals: making essentials affordable,
      strengthening domestic manufacturing competitiveness, maintaining
      fiscal resources for national development, and positioning India as a
      stable, self-reliant economy capable of thriving regardless of global
      trade uncertainties.
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
