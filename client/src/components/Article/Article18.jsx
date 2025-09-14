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
        Secondment of Employees: A Legal Analysis under Service Tax, GST, Labour and Income Tax Laws
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
            <span>September 14, 2025</span>
          </div>
         <div className="w-full flex justify-center mb-6">
            <img
              src="/Ranjeet Mahtani.jpeg"
              alt="Ranjeet Mahtani"
              className="h-[400px] w-auto object-cover rounded-xl shadow-md"
            />
          </div>
 <h2 className="text-xl font-bold mb-2">Ranjeet Mahtani</h2>
          <p className="text-sm font-medium text-gray-500 mb-6">
            {" "}Partner
            <br />Dhruva Advisors
          </p>
<div className="flex gap-2 mb-8">
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Finance
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
             Legal
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
    [&>ol]:mb-4 [&>ol>li]:text-sm [&>ol>li]:mb-2 [&>ol]:list-decimal [&>ol]:pl-5
    [&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:list-[circle] [&>ul>li>ul>li]:text-sm [&>ul>li>ul>li]:mb-2
    [&>p>em]:italic
    [&>table]:w-full [&>table]:mb-4 [&>table]:text-sm
    [&>table_th]:p-2 [&>table_th]:border [&>table_th]:border-gray-300 [&>table_th]:bg-gray-100 [&>table_th]:text-left
    [&>table_td]:p-2 [&>table_td]:border [&>table_td]:border-gray-300"
>
  <h3>I. Introduction</h3>
  <p>
    Secondment of employees, particularly expatriates deputed by overseas group entities to Indian subsidiaries, has been a recurring source of tax controversy in India.
  </p>
  <p>
    In today's global economic scenario, the concept of sharing talented manpower is need driven and helps business optimize resources However, the arrangement is plagued with direct and indirect tax implications as the issue lies at the intersection of indirect tax law (Service Tax/GST), labour legislation, and income tax obligations, raising questions as to whether such arrangements constitute a taxable 'supply of manpower' or a non-taxable employer-employee relationship.
  </p>
  <p>
    Two important judicial pronouncements frame the current discourse: the Supreme Court's judgment in <em>C.C., C.E. & S.T. v. Northern Operating Systems Pvt. Ltd.</em> [2022 (61) G.S.T.L. 129 (S.C.) / TS-216-SC-2022-ST] ('NOS') under the Service Tax regime, and the Karnataka High Court's ruling in <em>Alstom Transport India Ltd. v. Commissioner of Commercial Taxes</em> [TS-647-HC(KAR)-2025-GST] ('Alstom') under the GST framework.
  </p>

  <h3>II. The Northern Operating Systems Judgment – Service Tax Regime</h3>
  <p>
    In NOS, the assessee contended that secondees from overseas affiliates, though on foreign payrolls, functioned under its control in India and were thus employees of the Indian entity. The Revenue alleged that the arrangement amounted to 'manpower recruitment or supply agency service' under Section 65(68) read with Section 65(105)(k) of the Finance Act, 1994.
  </p>
  <p>The Supreme Court held:</p>
  <ol>
    <li>
      <strong>Substance over form:</strong> Although the secondees worked under the Indian entity's supervision, their economic employer remained the foreign company. The secondees were contractually bound to the foreign employer, their salaries were determined in foreign currency, and they reverted to the foreign entity upon cessation of the assignment.
    </li>
    <li>
      <strong>Manpower supply service:</strong> The foreign entity effectively supplied skilled manpower to NOS. Reimbursement of salaries, often with administrative mark-ups, constituted consideration for taxable service.
    </li>
    <li>
      <strong>Taxability:</strong> The Court concluded that secondment constituted a taxable service, squarely falling within manpower recruitment or supply agency service. NOS was liable to pay Service Tax under reverse charge.
    </li>
  </ol>

  <h3>III. The Alstom Transport India Judgment – GST Regime</h3>
  <p>
    The Karnataka High Court in Alstom considered the same issue under the GST framework. Alstom India had seconded expatriates from group companies abroad between 2017–2023.
  </p>
  <ul>
    <li>
      <strong>Revenue's case:</strong> The arrangement constituted import of 'manpower supply services' by a person located in a non-taxable territory, taxable under Section 5(3) of the IGST Act read with Notification No. 10/2017-IGST (Rate).
    </li>
    <li>
      <strong>Petitioner's case:</strong> Alstom executed direct employment agreements with the expatriates, placed them on Indian payroll, deducted TDS under the Income-tax Act, and provided statutory benefits. Reliance was placed on Schedule III to the CGST Act, which excludes employer–employee services, and CBIC Circular No. 210/4/2024-GST dated 26.06.2024 clarifying that in related-party transactions where no invoice is raised, the value may be deemed "Nil".
    </li>
  </ul>
  <p>The High Court held:</p>
  <ol>
    <li>
      <strong>Employer-employee relationship:</strong> The expatriates were fully integrated into the Indian workforce, were on Alstom's payroll, and subjected to TDS and Indian employment laws.
    </li>
    <li>
      <strong>Schedule III exclusion:</strong> Payments made to such employees constituted salary, falling within Entry 1 of Schedule III to the CGST Act, 2017, and therefore outside the scope of 'supply.'
    </li>
    <li>
      <strong>Circular application:</strong> Where no invoices are raised between related parties and full input tax credit is available, the value is deemed "Nil".
    </li>
  </ol>
  <p>
    Accordingly, the Court quashed the IGST demand and held that secondment in this factual matrix did not attract GST.
  </p>
  
  <h3>IV. Labour Law Dimensions</h3>
  <p>
    While labour statutes do not explicitly term 'seconded expatriates' as deemed employees, their broad definitions of 'employee' bring secondees within their ambit once they are under the control and payroll of the Indian host company.
  </p>
  <ul>
      <li><u>The Employees' Provident Funds and Miscellaneous Provisions Act, 1952 – Section 2(f):</u> Defines 'employee' as any person employed for wages in any kind of work, directly or through a contractor.</li>
      <li><u>Employees' State Insurance Act, 1948 – Section 2(9):</u> Includes any person employed for wages in or in connection with the work of an establishment.</li>
      <li><u>Payment of Gratuity Act, 1972 – Section 2(e):</u> Covers all employees on wages, including managerial and supervisory staff.</li>
      <li><u>Code on Wages, 2019 – Section 2(k):</u> Defines 'employee' to include managerial, supervisory, technical, and clerical roles.</li>
  </ul>
  <p>
    Judicial precedents such as <strong>Hussainbhai, Calicut <em>v.</em> The Alath Factory Thezhilali Union, Kozhikode and Ors. [(1978) 4 SCC 257]</strong> and <strong>Silver Jubilee Tailoring House and Ors. <em>v.</em> Chief Inspector of Shops and Establishments and Ors [(1974) 3 SCC 498]</strong> emphasise the test of control, supervision, and integration into the establishment to determine employment. By these tests, expatriates working in India under the host company's supervision are employees for the purpose of Indian labour laws.
  </p>

  <h3>V. Income Tax Dimensions</h3>
  <p>
    The Supreme Court in <em>CIT v. Eli Lilly & Co. (India) Pvt. Ltd.</em> [(2009) 15 SCC 1] settled that where foreign secondees render services in India, their salaries are taxable in India irrespective of whether paid abroad or reimbursed by the Indian entity.
  </p>
  <ul>
    <li>
      <strong>TDS obligation:</strong> Section 192 of the Income-tax Act mandates deduction of tax at source by the Indian entity treating secondees as employees.
    </li>
    <li>
      <strong>Employer recognition:</strong> This judicial approach strengthens the view that secondees are employees of the Indian company for domestic tax purposes.
    </li>
  </ul>

  <h3>VI. GST Position on Secondment</h3>
    <p>
        The trajectory of judicial interpretation reveals a divergence between NOS and Alstom. While NOS characterised secondment as a taxable manpower supply service under Service Tax law, Alstom recognised the employer–employee relationship under GST and placed such arrangements within Schedule III exclusions.
    </p>
    <p>
        Interestingly, post Supreme Court's verdict in NOS, to address mechanical issuance of SCNs by field formations invoking extended period of limitation under section 74(1) of the CGST Act. for alleged GST evasion, CBIC issued Instruction No. 05/2023-GST dated 13.12.2023. Vide the Circular, CBIC also acknowledged that <em>"Supreme Court's emphasis is on a nuanced examination based on the unique characteristics of each specific arrangement, rather than relying on any singular test"</em>.
    </p>
    <p>
        Delhi High Court in the case of <strong><em>Metal One Corporation India Pvt. Ltd.</em> [2024 (81) G.S.T.L. 127 (Del.) / TS-697-HC(DEL)-2024-GST]</strong> had set-aside notices/orders raising GST demand on salary paid to seconded employees by an Indian entity based on CBIC Circular No. 210/4/2024-GST dated 26.06.2024. Delhi HC made an observation that, in light of the explicit terms of the Circular, the value of the service rendered would have to be treated as “Nil” for the purposes of the second proviso to Rule 28 of the CGST Rules. Thus, the proceedings initiated in terms of the impugned SCNs were held to be “futile and impractical”.
    </p>
    <p>
        CBIC in aforesaid Circular clarified that in related party transactions where the Indian recipient is eligible for full Input Tax Credit, the declared value may be accepted as the open market value, and where no invoice is raised, the value may be deemed 'Nil'.
    </p>

    <h3>VII. Conclusion</h3>
    <p>
        Businesses should be mindful in drafting secondment agreements, in particular, clauses defining control and supervision, reporting structure, salary payments, etc. as robust documentation remains the key to avoid any potential litigation on this aspect.
    </p>
    <p>
        Therefore, unless the arrangement reflects the factual pattern of NOS — viz., secondees remaining on foreign payroll, contractual allegiance to the foreign entity, reversion upon assignment completion, and mark-up on reimbursements — one may possibly take a stand that secondment should not be subjected to GST. This position ensures consistency with labour jurisprudence, income tax treatment, and international VAT/GST practice where employment services remain outside the tax net.
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
