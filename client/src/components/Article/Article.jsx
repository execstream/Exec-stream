import React, { useEffect } from "react";
import { FaEye, FaRegComment } from "react-icons/fa";
import MostPopular from "./MostPopular";
import ArticleFooter from "./ArticleFooter";
import Comment from "./Comment";
import SlidingBanner from "../Homepage/SlidingBanner";
import Sidebar from "./Sidebar";
import { Helmet } from "react-helmet-async";
const Article = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <>
    <Helmet>
      <title>The Invisible Risk in Digital Diagnostics | YourSiteName</title>
      <meta name="description" content="Explore how AI-powered medical devices are transforming Indian healthcare and the challenges of regulating them." />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="The Invisible Risk in Digital Diagnostics" />
      <meta property="og:description" content="Explore how AI-powered medical devices are transforming Indian healthcare and the challenges of regulating them." />
      <meta property="og:image" content="https://www.exec-stream.com/Biplab%20Lenin.jpeg" />
      <meta property="og:url" content="https://www.exec-stream.com/articles/the-invisible-risk" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Invisible Risk in Digital Diagnostics" />
      <meta name="twitter:description" content="Explore how AI-powered medical devices are transforming Indian healthcare and the challenges of regulating them." />
      <meta name="twitter:image" content="https://www.exec-stream.com/Biplab%20Lenin.jpeg" />
    </Helmet>
    <section className="mx-auto px-6 md:px-20 py-10 text-gray-800">
     

     <div className="flex flex-col md:flex-row gap-10">

        {/* Main Article */}
        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-5xl font-bold text-[#789BFF] mb-4">
            The Invisible Risk in Digital Diagnostics: <br /> Who Regulates
            AI-Powered Medical Devices in India?
          </h1>
           <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
        <span>July 9, 2025</span>
      </div>
          <div className="w-full flex justify-center mb-6">
            <img
              src="/Biplab Lenin.jpeg"
              alt="Biplab Lenin"
              className="h-[400px] w-auto object-cover rounded-xl shadow-md"
            />
          </div>

          <h2 className="text-xl font-bold mb-2">Biplab Lenin </h2>
          <p className="text-sm font-medium text-gray-500 mb-6">
           
            Partner (Pharma, Healthcare, Lifesciences) <br /> Cyril Amarchand
            Mangaldas
          </p>

          <div className="flex gap-2 mb-8">
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Legal
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Medical Devices
            </span>
          </div>

          {/* Article Content */}
            <article className="prose max-w-none text-gray-700 [&>p]:text-sm [&>p]:mb-8">
            <p className="mb-8 text-sm">
              Use of Artificial Intelligence (AI) in healthcare is probably one
              of the most exciting use-cases of technology in the recent times.
              AI’s journey in the Indian healthcare scenario began with
              telemedicine and basic machine learning tools which largely
              focussed on gathering healthcare data through digital records and
              using simple rule-based tools to assist doctors in diagnosing
              common ailments or triaging patients. Such technology-based
              solutions helped in automating mundane tasks, reducing
              administrative bottlenecks, and guiding healthcare practitioners
              to make more informed decisions. With further advancements in
              machine learning, newer solutions like AI powered medical devices
              have been introduced in the Indian healthcare landscape. Medical
              devices powered by AI are now revolutionizing healthcare by
              integrating artificial intelligence (AI) into diagnostic,
              therapeutic, and monitoring tools. These devices leverage AI to
              analyze data, make predictions, and assist healthcare
              professionals in clinical decision-making. The result is a shift
              towards personalised, data-driven medicine that can improve
              patient outcomes, reduce healthcare costs, and increase the reach
              of medical services.
            </p>
            <p className="mb-8 text-sm">
              In the context of the Indian healthcare regime which is ridden
              with issues like low doctor- patient ratio (only about 64 doctors
              for every 100,000 people, significantly below the global average
              of 150 doctors), accessibility, delivery etc., integration of AI
              into healthcare could be perceived as a helpful intervention which
              would allow a substantial portion of the population to benefit
              from it.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Interesting use cases of AI-Powered Medical Devices
            </h3>

            <article>
              <h4 className="italic font-semibold mb-1 mt-1">
                1. Diagnostic Imaging and Disease Detection
              </h4>
              <p className="ml-8 mb-8 text-sm">
                AI-powered diagnostic imaging tools like portable X-ray machines
                integrated with AI software can detect anomalies like
                tuberculosis, pneumonia, and even early-stage cancer. These
                functions of the medical device when combined with telemedicine
                can enable healthcare workers to upload images from remote
                regions to central servers for quick AI- based analysis. This
                drastically reduces diagnosis times and ensures patients in
                underserved areas receive expert evaluations without travelling
                long distances. For instance, Qure AI’s AI driven imaging
                diagnosis provides automated interpretation of radiology exams
                like X-rays, CTs and Ultrasounds scans for time and
                resource-strapped medical imaging professionals—enabling faster
                diagnosis and speed to treatment.
              </p>

              <h4 className="italic font-semibold mb-1 mt-1 ">
                2. Chronic Disease Management
              </h4>
              <p className="ml-8 mb-8 text-sm">
                India with its growing population faces increasing cases of
                chronic diseases—such as diabetes, cardiovascular ailments, and
                respiratory conditions. AI-powered wearable devices which can
                help monitor vital signs like heart rate, blood glucose levels,
                and oxygen saturation in real time, provide tailored alerts on
                the user’s smartphones, and share the data with the healthcare
                providers can lead to timely interventions as and when required.
                This would result in improved disease management and reduced
                hospital admissions. Hospitals have also started using AI
                devices for better patient care and management -  In 2023,
                Apollo Hospitals started using AI-powered system to monitor
                patient vitals like heart rate, respiration, etc., in real-time.
                The data was uploaded on hospital’s Electronic Medical Records
                (EMR) system via Wi-Fi, and was enabled to send alerts to nurses
                in case of emergency and timely interventions.
              </p>

              <h4 className="italic font-semibold mb-1 mt-1 ">
                3. Surgical Robot Systems
              </h4>
              <p className="ml-8 mb-8 text-sm">
                Though surgical robot system could be said to be at an early
                stage in India, AI integrated in surgery through such robots,
                like the SSi Mantra surgical robot system could help in
                improving the precision, safety, and efficiency of
                robotic-assisted surgeries. In surgical robot systems, surgeons
                operate advanced robotic arms with AI-enabled feedback that
                helps them make more exact incisions and reduce the margin for
                error. For instance, SSi Mantra has gained recognition for its
                ability to perform telesurgeries, wherein surgeons operate
                remotely through a robotic system connected with a high-speed
                data connection. Surgical robots have been used to undertake
                cardiac surgeries over a distance of 286 kilometers,
                demonstrating the capability for long-distance telesurgery.
                While adoption remains limited due to cost and infrastructure
                requirements, early successes and pilot programmes in major
                metropolitan hospitals like Asignal growing interest.
              </p>

              <h4 className="italic font-semibold mb-1 mt-1 ">
                4. Personalised Treatment Plans
              </h4>
              <p className="ml-8 mb-8 text-sm">
                Predictive analytics tools are now used to create personalised
                treatment plans, especially in oncology. By analysing patient
                genetic data, AI is being employed by hospitals and doctors to
                identify which treatments are most likely to be effective. The
                likelihood of a successful course of treatment could be enhanced
                manifold by early cancer detection. It is difficult to
                adequately analyse the large set of genetic data manually, and
                AI can be used in such a scenario. Large datasets can now be
                processed and analysed using AI, especially using machine
                learning algorithms, with increased speed and precision. AI can
                identify trends, mutations, and genetic variants that might be
                connected to illness or treatment outcomes. Apollo Precision
                Oncology Centre is one such centre in India which is able to
                utilise AI for early cancer detection.
              </p>

              <p className=" mt-3 mb-8 text-sm">
                India&#39;s medical device market is one of the largest in Asia,
                with significant growth potential. The market is expected to
                reach $50 billion by 2030, driven by imports that account for
                70- 80% of sales. In this context, the Indian medical device
                industry has the potential to become a high revenue-generating
                sector, and the Indian government has come up with Production
                Linked Incentive (PLI) Scheme for Medical Devices, centres of
                excellence to support the Make-In-India initiative, National
                Medical Devices Policy, etc. AI in healthcare market in India is
                projected to grow from USD 333.16 million in 2024 to USD
                4,165.26 million by 2033, reflecting a CAGR of 30.78%. With the
                rising intersection of AI and healthcare as detailed above, it
                becomes pertinent to understand the regulatory regime for AI
                powered medical devices in India – is there an identifiable
                regime in place and whether the current medical device regime
                has created adequate space for AI powered medical devices.
              </p>
            </article>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
            Regulation of AI powered medical devices in India
            </h3>
            <p className="mb-8 text-sm">
              The Central Drugs Standards Control Organisation (CDSCO) oversees
              medical device regulation under the Medical Devices Rules, 2017
              (MD Rules), established under the Drugs and Cosmetics Act, 1940
              (D&amp;C Act). These Rules set out requirements for manufacturing,
              importing, distributing, testing, and quality management of
              medical devices. Devices are classified by risk—from Class A
              (lowest) to Class D (highest)—based on their intended use, with
              the CDSCO periodically issuing notifications regarding the
              classification of different medical devices. In addition to
              classification and licensing obligations, the Rules also dictate
              how devices must be labelled and what claims may be made about
              their functions.
            </p>
            <p className="mb-8 text-sm">
              MD Rules do not create a distinction between AI powered medical
              devices and other medical devices, which entails that if an AI
              powered medical device falls within the ambit of a medical device,
              the same would also be regulated under MD Rules. However, it
              appears that the regulatory authority is keen on bringing
              technology and AI within the ambit of the said regime – case in
              point could be the inclusion of software as a medical device under
              the Medical Devices Rules, 2017. The Ministry of Health and Family
              Welfare vide Notification No. S.O. 648(E) dated February 11, 2020
              expanded the definition of ‘medical device’ to include software
              used as a medical device or used in combination with a medical
              device, as a medical device under the Medical Devices Rules, 2017.
              The CDSCO has published a list of 60 software along with their
              risk classification and intended use. This list aimed to classify
              software as medical devices based on their intended use,
              associated risk, and other parameters detailed under the
              regulatory regime. The MD Rules also regulate software that drives
              or influences the use of a medical device and any add-ons to the
              medical-device software – a software could in itself be a medical
              device, or could be a medical device when used to influence,
              enable, or act as an add-on for a medical device.
            </p>
            <p className="mb-8 text-sm">
              Therefore, at present MD Rules is the only regulation and guidance
              in relation to any kind of medical device, and there are no
              specific guidelines or directives catering exclusively to AI
              powered medical devices. With the inclusion of software as a
              medical device, while one may suggest that it increases the ambit
              of regulation for medical devices, it is equally important to not
              lose sight of the fact that regulation of software or any other AI
              powered medical device which should ideally have a dedicated
              regulatory framework is still lacking.
            </p>
            <p className="mb-8 text-sm">
              Further, in addition to a lack of a dedicated regulatory regime,
              issue of categorisation of an AI powered device as a medical
              device is another issue which preceded regulatory lacunae – the
              question that triggers the said issue is whether the AI powered
              device could be categorised as a medical device in the first
              place, and the same is determined basis the intended use of the
              device.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Intended use of a medical device – Defining a medical device.
            </h3>
          <p className="mb-8 text-sm">
 The D&amp;C Act regulates medical devices under the ambit of drugs as <em>“devices intended for
internal or external use in the diagnosis, treatment, mitigation or prevention of disease or
disorder in human beings or animals...”</em>. Therefore, when the intended use of a product is
diagnoses, treatment, mitigation or prevention of a disease or a disorder, the said product
qualifies as a medical device, the manufacture and distribution of which should then be
compliant with D&amp;C Act and the rules thereunder.
</p>

        <p className="mb-8 text-sm">For instance, if an AI powered device which records pulse rate, heartbeat, breathing activity,
sleep, etc., is not marketed with claims of diagnosing, mitigating, treating, or preventing a
disease or a disorder, the intended use of the said device is not that of a medical device, and
regulation of the same under the MD Rules becomes difficult. Similarly, AI powered wellness
devices such as tools, gadgets, or technologies designed to help individuals monitor,
maintain, or improve their physical, mental, and emotional well-being could escape
regulation under MD Rules if the intended use of the product is of the nature <em>“helps in living
a balanced life”, “helps understanding your body better”</em>, etc, even if the user of the device
takes drugs or treatment basis the results shown by these devices.</p>
            <p className="mb-8 text-sm">
              Therefore, classification of AI powered devices as consumer
              products or medical devices would determine whether the products
              would be regulated or unregulated. Regulated products need to
              comply with specific manufacturing, trade, and distribution
              compliances. Especially, when there is a grey area in the
              classification of a product as a medical device, the same can lead
              to health ramifications if a device having medical device-like
              features is not classified and regulated as a medical device,
              since the consumer/patient would rely upon such devices to take
              health-related decisions
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
             Need for a regulation catering specifically to AI powered medical devices?
            </h3>
            <p className="mb-8 text-sm">
              The lack of a dedicated regulatory regimes for AI powered medical
              devices, and the issue of classification that arises for the
              regulation of AI powered devices as medical devices, poses a
              significant challenge for the evolving nature of India&#39;s
              regulatory framework for AI in healthcare. While MD Rules and
              subsequent amendments provide for a risk-based approach for
              medical devices, there is a lack of specific regulation catering
              to AI deployment in healthcare settings in India. This ambiguity
              can lead to uncertainty for developers and deployers regarding
              compliance requirements, potentially delaying market entry or
              exposing companies to unforeseen liabilities as regulations evolve
              over time.
            </p>
            <p className="mb-8 text-sm">
              Additionally, it is important to not lose focus of the fact that
              while ease and comfort is the ultimate goal of AI interventions,
              it comes with its own cost – in the sphere of healthcare, AI
              devices run on the vast database of its users to ensure efficacy,
              and this could be a potential threat to the personal data of the
              user. The risk of unintentionally exposing protected health
              information through AI platforms is high, especially with the
              growing use of cloud-based AI models.
            </p>
            <p className="mb-8 text-sm">
              Further, the risks of algorithmic bias and fairness are
              significant, with the potential to perpetuate existing health
              disparities. Enterprises developing or deploying AI-powered
              diagnostics and medical devices must implement rigorous practices
              to ensure that training data is diverse, representative, and free
              from bias, including data from vulnerable populations.
              Transparency and explainability in AI models are paramount for
              building trust among healthcare professionals and patients.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Conclusion
            </h3>
           
            <p className="mb-8 text-sm">
              In a country like India, where the healthcare system grapples with
              a high patient-to-doctor ratio, limited access to specialized
              care, and a rising burden of chronic diseases, the integration of
              AI-powered medical devices into India&#39;s healthcare system
              reflects a pivotal shift towards progress and modernisation. AI
              powered medical devices have the potential to significantly
              enhance healthcare delivery by improving diagnostic accuracy,
              streamlining clinical workflows, and providing remote healthcare
              solutions. India, with its large population and diverse healthcare
              challenges, stands at an interesting juncture: The potential for
              AI- powered medical devices to make a meaningful impact is
              enormous. Yet, there are numerous hurdles to surmount, including
              regulatory gaps, data privacy issues, and the challenge of
              ensuring equitable access to these technologies. India’s
              healthcare infrastructure is already under strain, particularly in
              rural areas where basic facilities like electricity and reliable
              internet access can be sparse. Many AI-powered devices require
              stable connectivity to function optimally, for example to sync
              data or receive updates. Even in urban areas, high costs may deter
              smaller clinics from adopting advanced technologies.
            </p>
            <p className="mb-8 text-sm">
              Therefore, the integration of AI into medical devices is a complex
              process—requiring robust infrastructure, regulatory clarity,
              ethical considerations, and a workforce capable of understanding
              and managing new technologies. MD Rules, the present regulatory
              regime for such devices must evolve further to keep pace with
              technological advancements, ensuring safety, efficacy, and
              equitable access. By addressing these regulatory gaps, India can
              harness the full potential of AI in healthcare, driving innovation
              and improving health outcomes for its population.
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
    </section></>
  );
};

export default Article;
