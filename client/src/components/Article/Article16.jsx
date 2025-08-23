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
            Decoding NPCI Chargeback Rules: How UPI &amp; IMPS Handle Disputes, Errors, and

Fraud?
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
            <span>August 22, 2025</span>
          </div>
          <div className="w-full flex justify-center mb-6">
            <img
              src="/Arunabh.jpg"
              alt="Arunabh Choudhary"
              className="h-[400px] w-auto object-cover rounded-xl shadow-md"
            />
          </div>

          <h2 className="text-xl font-bold mb-2">Arunabh Choudhary</h2>
          <p className="text-sm font-medium text-gray-500 mb-6">
            {" "}
            Co-founding Partner <br /> LawKNIT Partners
          </p>

          <div className="flex gap-2 mb-8">
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Legal
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Fintech
            </span>
          </div>

          {/* Article Content */}
<article className="prose max-w-none text-gray-700 
  [&>p]:text-sm [&>p]:mb-4 
  [&>h2]:text-md [&>h2]:font-semibold [&>h2]:mb-4 
  [&>h3]:font-bold [&>h3]:text-xl [&>h3]:text-[#789BFF] [&>h3]:mb-4 
  [&>ul]:mb-4 [&>ul>li]:text-sm [&>ul>li]:mb-2 
  [&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:list-[circle] [&>ul>li>ul>li]:text-sm [&>ul>li>ul>li]:mb-2">

    <h3>Introduction: Why Chargebacks Matter in a Cashless India?</h3>
    <p>
        India's journey toward a cashless economy has been nothing short of revolutionary. With Unified Payments Interface (“UPI”) and Immediate Payment Service (“IMPS”) becoming household tools for money transfer, it has witnessed speed, convenience and unfortunately, a spike in errors and frauds. Whether it's a wrongly typed UPI ID or a cleverly disguised scam, users often find themselves wondering on refund. This has also created hardship for merchants at times leading to getting into negative list and not able to access UPI or IMPS services. It becomes pertinent for merchants to understand the right reasons and back-end process to navigate it well.
    </p>
    <p>
        To maintain trust and safeguard the ecosystem, the National Payments Corporation of India (“NPCI”) has been constantly refining the chargeback mechanism a key dispute resolution tool that enables banks to recover funds on behalf of customers. Between December 2017 and August 2025, NPCI rolled out a series of circulars to standardize, streamline, and sometimes simplify this process.
    </p>

    <h3>Terms to Know:</h3>
    <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse border border-gray-300">
            <thead className="bg-gray-100 text-left">
                <tr>
                    <th className="border border-gray-300 p-2 font-semibold">Term</th>
                    <th className="border border-gray-300 p-2 font-semibold">Definition</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-gray-300 p-2 font-medium">Beneficiary Bank</td>
                    <td className="border border-gray-300 p-2">The recipient's bank (payee's side)</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2 font-medium">BCS- IMPS</td>
                    <td className="border border-gray-300 p-2">Bharat Clearing & Settlement System- IMPS</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2 font-medium">Chargeback</td>
                    <td className="border border-gray-300 p-2">A formal dispute raised by the remitting (payer's) bank to recover funds from the beneficiary (payee's) bank for a transaction claimed to be incorrect or unauthorized</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2 font-medium">Remitting Bank</td>
                    <td className="border border-gray-300 p-2">The sender's bank (payer's side)</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2 font-medium">RET</td>
                    <td className="border border-gray-300 p-2">Return of Transaction: A reversal of the transaction initiated by the beneficiary bank</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2 font-medium">RGCS</td>
                    <td className="border border-gray-300 p-2">RuPay Global Clearing System</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2 font-medium">TCC</td>
                    <td className="border border-gray-300 p-2">Transaction Correction Communication: A correction message sent by the beneficiary bank to fix transaction issues (like wrong account mapping)</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2 font-medium">UDIR</td>
                    <td className="border border-gray-300 p-2">Unified Dispute & Issue Resolution</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2 font-medium">URCS</td>
                    <td className="border border-gray-300 p-2">UPI back office system which validates or declines chargeback</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <h2>A. How Did the ‘Good Faith’ Chargeback Begin and Why Is It Still Relevant?</h2>
    <ul className="list-disc">
        <li>
            The foundation for chargebacks based on ‘good faith’ goes back to 2017<sup>1</sup>, when NPCI’s Steering Committee recognized the need to recover funds mistakenly transferred due to typographical errors. These were cases where customers sent money to the wrong account often someone with a similar UPI ID or account number. To prevent such money from being permanently lost, NPCI allowed the remitting bank to raise a chargeback claim under RGCS, which later migrated to BCS-IMPS in 2018<sup>2</sup> without altering the underlying process.
        </li>
        <li>
            When such a chargeback is raised, the beneficiary bank reviews the request and attempts to recover the wrongly credited amount from the recipient's account. If it agrees, the funds are returned. If the bank neither accepts nor rejects the request within the allowed turnaround time (TAT) which ranges from 35 to 45 days it is considered ‘deemed accepted’, and the funds must be returned without the option of re-presenting the claim.
        </li>
    </ul>
    
        

    <h2>B. Why Did NPCI Introduce Limits on Chargebacks<sup>3</sup> in 2023?</h2>
    <ul className="list-disc">
        <li>
            With UPI dominating India’s digital payment space, the system began to experience a surge in chargeback requests some genuine, others speculative or even fraudulent. To instil discipline, NPCI issued a circular in December 2023 to restrict excessive chargeback activity.
        </li>
        <li>
            This regulation placed a cap of 10 chargebacks per customer per 30-day rolling window (based on IFSC and account number), and no more than 5 chargebacks between the same payer and payee (via VPA) in the same period. The goal was to prevent abuse of the system and reduce the strain on banks processing repetitive disputes.
        </li>
        <li>
            Interestingly, special concessions were made for small and offline merchants, where the turnaround time for raising a chargeback was shortened to 30 days an acknowledgment of the challenges they face with real-time transactions and limited technology infrastructure.
        </li>
        <li>
            If a Virtual Payment Address (VPA) exceeded these thresholds, it would be automatically flagged, and further chargebacks from that ID would be declined. However, fraud-related chargebacks were explicitly exempted from these caps. NPCI also mandated that remitting banks must carry out due diligence before raising chargebacks, though they retained the ability to whitelist genuine cases “in good faith.” Similarly, acquiring banks (typically the merchant’s bank) were required to keep an eye on excessive disputes—especially those involving offline merchants.
        </li>
    </ul>

    <h2>C. Was the Chargeback TAT Standardized? Yes, in 2024</h2>
    <ul className="list-disc">
        <li>
            Until 2020<sup>4</sup>, the resolution timelines for UPI disputes varied widely depending on the transaction type and the reason for the dispute. This was confusing for customers and inconsistent for banks. To streamline operations, NPCI had introduced the Unified Dispute & Issue Resolution (UDIR) system, which allowed customers to file disputes online. But it wasn’t until July 25, 2024<sup>5</sup>, that NPCI mandated a uniform 45-day window to raise chargebacks across all UPI categories.
        </li>
        <li>
            This revision also applied retrospectively to older transactions. From that point on, the URCS system retained transaction details for up to 190 days, but disputes could only be raised within the first 45 days. Importantly, the revised timeline did not alter the RBI’s rules on compensation for delay.
        </li>
    </ul>

    <h2>D. What Happens When You Cross the Chargeback Limits?<sup>6</sup> The RGNB Solution of 2025</h2>
    <ul className="list-disc">
        <li>
            Real-world cases showed that sometimes legitimate disputes exceeded the defined limits. To avoid penalizing genuine customers, NPCI, in 2025, introduced a new process called RGNB (Remitting Bank Good Faith). This allowed banks to re-initiate chargebacks that were previously rejected due to cap breaches provided they did so through the front-end system (not bulk uploads).
        </li>
        <li>
            Here’s how it works: if URCS rejects a chargeback citing limit violations, the remitting bank can raise the same dispute again, citing ‘good faith’. Once submitted, the funds are immediately debited from the beneficiary and credited to the remitter, pending review. The beneficiary bank has a narrow window to respond 3 calendar days for person-to-person (P2P) cases and 15 days for person-to-merchant (P2M) cases. If they don’t act in time, the transaction is closed as ‘deemed accepted’.
        </li>
        <li>
            While URCS doesn’t deeply validate these RGNB entries, it does check for duplicates using unique transaction parameters. Additionally, if the transaction is delayed beyond T+1 (for P2P) or involves merchant compensation flags, automated adjustments are made in the settlement file under categories like ‘Net Adjusted Amount’ and ‘Customer Compensation’.
        </li>
    </ul>
    
    <h2>E. How Did NPCI Fix Premature Chargeback Filing?</h2>
    <ul className="list-disc">
        <li>
            In many cases, remitting banks were filing chargebacks on the same day of the transaction (T+0), not allowing beneficiary banks time to proactively return the funds via RET or correct the issue using TCC <sup>7</sup>. This often resulted in redundant disputes and unnecessary auto-acceptance.
        </li>
        <li>
            To tackle this, NPCI updated URCS to allow automatic acceptance or rejection of chargebacks based on whether a RET or TCC had already been processed. If a RET or TCC was completed in the same settlement cycle, the chargeback would be rejected. If it occurred in the next cycle, the system would automatically accept the chargeback. This logic applied to both bulk-upload and UDIR-originated disputes, not to front-end entries.
        </li>
        <li>
            A new dispute flag ‘IA’ (automatic acceptance) was also introduced to mark such chargebacks. The overall turnaround time for any step in this category remained standardized at 45 days.
        </li>
    </ul>

    <h2>F. What’s the Process for Fraudulent Transactions?</h2>
    <ul className="list-disc">
        <li>
            Recognizing that fraud needs special treatment, NPCI issued a dedicated circular in April 2025<sup>8</sup> for handling fraudulent UPI and IMPS transactions. In such cases, the remitting bank is expected to raise a chargeback and can even attach an FIR copy to support faster resolution.
        </li>
        <li>
            The TAT remained 45 days, but beneficiary banks were under obligation to resolve the dispute within 25 days. If they failed to respond in time, the chargeback was considered ‘deemed accepted’. Unlike other categories, re-presentment (raising the same chargeback again) was allowed here, giving the remitting bank more flexibility to pursue justice.
        </li>
    </ul>

    <h3>Conclusion:</h3>
    <p>
        NPCI’s chargeback system has made significant strides introducing structure, clear timelines, and automation that strengthen the integrity of digital payments. These changes mark a major step toward a more disciplined and efficient dispute resolution process.
    </p>
    <p>
        As remitting and beneficiary banks adapt to tighter turnarounds, and merchants and users become more engaged, the ecosystem is steadily moving toward greater transparency and responsiveness. While there is still room to enhance user/merchant awareness and coordination, the groundwork is firmly in place.
    </p>
    <p>
        With continued collaboration among all stakeholders, India’s real-time payment systems are well-positioned to become not just fast but also fair, reliable, and truly user centric.
    </p>
   <div className="text-xs text-gray-500 my-4 border-t border-gray-200 pt-4">
   <p className="mb-1"><sup>1</sup> NPCI/UPI & IMPS/OC-No. 41/2017-18 dated 15-12-2017</p>
        <p className="mb-1"><sup>2</sup> NPCI/IMPS/OC-No. 87/2018-19 dated 22-11-2018</p>
  
    <p className="mb-1"><sup>3</sup> OC-184, dated 05-12-2023</p>
    <p className="mb-1"><sup>4</sup> NPCI/UPI/OC-98/2020-21 dated 24-11-2020</p>
    <p className="mb-1"><sup>5</sup> NPCI/UPI/OC-198/2023-24 dated 21-06-2024</p>
    <p className="mb-1"><sup>6</sup> OC-184B, dated- 20-06-2025</p>
    <p className="mb-1"><sup>7</sup> NPCI/IMPS/OC-127/2025-26 dated 10-07-2025</p>
    <p><sup>8</sup> NPCI/IMPS/OC-124/2025-26 dated 2-04-2025</p>
</div>

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
