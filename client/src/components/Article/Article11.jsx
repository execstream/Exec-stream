import React, { useEffect } from "react";

import MostPopular from "./MostPopular";

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
            The Silent Risk in Sale Deed Structuring: Stamp Duty,
            Under-Valuation Allegations and the Rise of Tax Probes in Land Deals
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
            <span>July 14, 2025</span>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mb-10">
            {[
              {
                name: "Avikshit Moral",
                designation: " Partner (Real Estate) \n S&R Associates",
                image: "/Avikshit-Moral.jpg",
              },
              {
                name: "Preeti Dhar",
                designation: " Counsel \n S&R Associates",
                image: "/Preeti Dhar.jpg",
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
              Legal
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Real Estate
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              CFO
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              GC
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Infra & Real Estate
            </span>
          </div>

          <article className="prose max-w-none text-gray-700">
            <p className="mb-8 text-sm">
              The process of purchasing properties in India is intricate and
              involves various stages from identifying the property until the
              signing and registration of a sale deed. Whilst it may seem that
              once you go through the rigmarole of due diligence, obtaining
              permissions for sale, documentation and registration and updation
              of records, the process of purchasing property is complete.
              However, the real estate transactions sometimes come with risks
              which may present themselves at a later stage.
            </p>

            <p className="mb-8 text-sm">
              This article sheds light on these risks involving stamp duty
              implications, under-valuation allegations and the points to be
              kept in consideration whilst structuring sale deeds.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Stamp duty and valuation of properties:
            </h3>
            <p className="mb-4 text-sm">
              It is crucial to make sure that a property is valued accurately
              when planning a sale transaction. To prevent any problems and
              subsequent scrutiny, it is recommended that for high-end sale
              transactions, valuation reports from a registered valuer is
              obtained prior to closure.
            </p>
            <p className="mb-4 text-sm">
              Stamp duty on sale deeds for instance in the state of Maharashtra
              is calculated on the consideration under the sale deed or the
              market value of the property, whichever is higher. For arriving at
              the market value of the property, the revenue authorities consider
              the Government’s guideline value (circle rate/ready reckoner
              rate). As a thumb rule, the consideration should be kept above the
              ready reckoner rate and stamp duty should be paid accordingly.
            </p>
            <p className="mb-4 text-sm">
              Another option is to submit the sale deed to the Collector for
              adjudication and determination of stamp duty payable on the sale
              deed. Under Section 31 of Indian Stamp Act, 1899 (“Stamp Act”), a
              party to an instrument (including a sale deed) can submit the sale
              deed to Collector for adjudication. Upon the issue of demand
              notice by the Collector, the requisite stamp duty is to be paid on
              the sale deed.
            </p>

            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Undervaluation of property and tax probes by authorities:
            </h3>
            <p className="mb-8 text-sm">
              It is to be noted that undervaluation of properties, whether
              intentional or unintentional carries a potential risk of scrutiny
              by revenue and tax authorities. It is not the case where once a
              sale document is registered, the issue of insufficient stamp duty
              paid or the undervaluation of the property will be over. In fact,
              the Stamp Act (as applicable to various states) provides for a
              mechanism which empowers the Collector to take suo moto action or
              a registering officer to refer a sale deed to the Collector for
              valuation determination if the registering officer is of the
              opinion that the market value of the property as set out in the
              document is not correct. Upon the Collector conducting the enquiry
              and if held liable, the party has to pay the deficit stamp duty.
              The applicable stamp act in the state of Maharashtra, Uttrakhand
              and Punjab also provides that along with the deficit stamp duty,
              the party has to pay a penalty as prescribed under the applicable
              stamp act of these states. The Hon’ble Bombay High Court (“ <b>High
              Court</b>”) in{" "}
              <a
                href="https://bombayhighcourt.nic.in/generatenewauth.php?bhcpar=cGF0aD0uL3dyaXRlcmVhZGRhdGEvZGF0YS9qdWRnZW1lbnRzLzIwMjUvJmZuYW1lPTIwMDEwMDA4MDMwMjAxN18xNi5wZGYmc21mbGFnPU4mcmp1ZGRhdGU9MTEvMDMvMjAyNSZ1cGxvYWRkdD0wOS8wNS8yMDI1JnNwYXNzcGhyYXNlPTE0MDcyNTE2MDUwOCZuY2l0YXRpb249MjAyNTpCSEMtQVM6MjEyNzUmc21jaXRhdGlvbj0yMDI1OkJIQy1BUzoxMTMzNCZkaWdjZXJ0ZmxnPVkmaW50ZXJmYWNlPU8=" // <-- Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                className="underline italic text-blue-600 hover:text-blue-800"
              >
                Suhas Damodar Sathe vs. State of Maharashtra and Anr.
                (2025:BHC-AS:21275)
              </a>{" "}
              while dismissing the writ petition observed that the developer’s
              comprehensive rights coupled with the owner’s receipt of the
              entire consideration and handover of actual possession could not
              be characterised merely as “development agreement” falling outside
              the purview of conveyance. The High Court further observed that
              the authorities constituted under the Maharashtra Stamp Act had
              legitimately and correctly classified the document as conveyance
              and upheld the earlier orders requiring payment of deficit stamp
              duty by the developer.
            </p>

            <p className="mb-8 text-sm">
              The Comptroller and Auditor General of India (“<b>CAG</b> ”) also issues
              compliance audit reports including reports on short levy of stamp
              duty and undervaluation of properties. Pursuant to the report of
              CAG, the revenue authorities conducts investigation and recovers
              the amounts from the concerned parties.
            </p>
            <p className="mb-8 text-sm">
              Further, cases of undervaluation of properties not only trigger
              investigations for under payment of stamp duty, the taxation
              authorities also looks into such valuations to identify cases of
              undervaluation resulting in underreporting of capital gains. The
              tax authorities under the provisions of the Income Tax Act, 1961
              (“<b> IT Act</b>”) looks into the valuation of properties inter alia for
              the purpose of determining capital gains tax. In order to counter
              undervaluation of properties for tax purposes, Section 50C was
              introduced in the IT Act which provides that if the consideration
              received by an assessee for transfer/sale of land or building or
              both is less than the value assessed by the stamp valuation
              authority for the purpose of stamp duty, the value determined by
              the stamp valuation authority will be considered as the
              consideration for computation of tax purposes under the IT Act.
            </p>
            <p className="mb-8 text-sm">
              Recently there has been an increase in the tax probes initiated by
              the tax authorities to identify cases of undervaluation of
              properties. It is to be noted that the registered documents
              (including sale deeds) are public documents which can be accessed
              by one and all and this may have multiple implications as far as
              identifying and investigating the cases of undervaluation of
              properties by the authorities is concerned.
            </p>

            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Conclusion
            </h3>
            <p className="mb-8 text-sm">
              Considering the growing complexities and the efforts involved in a
              sale transaction, it is advisable that at the time of undertaking
              diligence, the potential buyer should also look into the history
              of the property, previous transactions and any other factors that
              may expose the property/transaction to scrutiny in the future.
              Also, for exceptional cases (i) where the valuation is low on
              account of reasons such as distressed sale, litigations, condition
              of property etc., or (ii) for availing exemptions, whereby the
              stamp duty payable is significantly lower, it becomes essential to
              have necessary approvals or supporting documents as may be
              prescribed to avoid future complications and/or penalties. Whilst
              we have looked at the issue of under valuation of transaction/s
              from a stamp duty point of view, there will be certain tax
              implications and one also needs to ascertain the tax implications
              at the time of structuring the sale transaction.
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

       
        </aside>
      </div>
    </section>
  );
};

export default Article2;
