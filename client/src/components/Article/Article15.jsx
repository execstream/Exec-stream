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
        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-5xl font-bold text-[#789BFF] mb-4">
            The Post Human Discretion: Case of Capital Markets
          </h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
            <span>August 5, 2025</span>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mb-10">
            {[
              {
                name: "Bobby Jain",
                designation: " Senior Associate \n Ikigai Law",
                image: "/Bobby Jain.jpg",
              },
              {
                name: "Astha Srivastava",
                designation: "Principal Associate \n Ikigai Law",
                image: "/Astha Srivastava.jpg",
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
            Legal
            </span>
            <span className="bg-blue-100 text-[#789BFF] text-xs font-bold px-3 py-1 rounded">
              Capital Markets
            </span>
          </div>
          <article
    className="prose max-w-none text-gray-700 
    [&>p]:text-sm [&>p]:mb-4 
    [&>h2]:text-md [&>h2]:font-semibold [&>h2]:mb-4 
    [&>h3]:font-bold [&>h3]:text-xl [&>h3]:text-[#789BFF] [&>h3]:mb-4 
    [&>ul]:mb-4 [&>ul>li]:text-sm [&>ul>li]:mb-2 [&>ul]:list-disc [&>ul]:pl-5
    [&>ul>li>ul]:pl-6 [&>ul>li>ul>li]:list-[circle] [&>ul>li>ul>li]:text-sm [&>ul>li>ul>li]:mb-2
    [&>p>em]:italic"
>
    <p>
        Every technological disruption changes the word in some way. But AI has hit us differently – with its speed, the scale, the sheer chaotic brilliance.
    </p>
    <p>
        By now, it’s no secret: generative AI doesn’t just find language patterns - it learns them, mimics them, and sometimes has the audacity to do it better than us.
    </p>
    <p>
        Historically, machines took over repetitive or mechanical human tasks. Now AI, powered by extreme computational capabilities and large datasets, has blitzed into rooms that were supposed to be human-only clubs - by law, design, and legacy.
    </p>
    <h3>Exhibit-A: Capital Markets</h3>
    <p>
        For decades, we’ve trusted the suits: research analysts (RA), asset managers, investment advisors (IA) – all carefully vetted (and SEBI-regulated, of course). [Quick refresher: RAs prepare general research reports and offer stock tips. IAs offer personalized investment advice.] Human hands holding your money. Human brains making the calls. But imagine swapping out that seasoned advisor for… a chatbot. A really smart one. A ChatGPT but for stock tips.
    </p>
    <p>
        The fintech industry is already experimenting with such tools as we speak. Today’s AI tools are a whole different beast. We’re talking about machine learning, natural language processing, and sentiment analysis. Tools that can scan headlines, smell geopolitical tension, and pivot your investments accordingly. <strong>BlackRock’s</strong> AI, for example, isn’t just crunching numbers - they’re reading vibes. Its tools could detect rising oil prices, identify a surge in energy stocks, and proactively recommend rebalancing a portfolio towards that sector.
    </p>

    <h3>The Regulator Steps In</h3>
    <p>
        Naturally, someone had to play the hall-monitor. So, SEBI noticed. It usually does. In 2019, it began collecting reports from all AI/ML-using regulated entities. And it didn’t just sit on its findings. The last few months have seen a flurry of rules around AI use:
    </p>
    <ul>
        <li>
            <strong>November 2024:</strong> SEBI issues a consultation paper calling for assigning responsibility for AI use by regulated entities.
        </li>
        <li>
            <strong>December 2024:</strong> Amendments explicitly allow <strong>IAs</strong> and <strong>RAs</strong> to use AI - on one condition: they remain fully accountable. You use AI, you own its advice - warts, hallucinations, and all.
        </li>
        <li>
            <strong>January 2025:</strong> SEBI clarifies that any content based on real-time securities market data is regulated. And any educational content must only use data older than 3 months.
        </li>
        <li>
            <strong>February 2025:</strong> SEBI publishes algo trading rules for retail investors. Transparent ‘white-box’ algos are treated more leniently. But opaque ‘black-box’ ones? Heavier scrutiny and more obligations. The message is clear: tread carefully.
        </li>
        <li>
            <strong>June 2025:</strong> SEBI releases consultation paper on responsible use of AI/ML in securities market. Broad principle-based guidelines are proposed. Among other things, it mentions that AI deployer’s governance structure should provide for human accountability for AI-driven decisions. It also proposes regular audit and explainability of AI based outputs.
        </li>
    </ul>

    <h3>Liability and Unintended Consequences</h3>
    <p>
        Looking at these regulations (and more), one can easily figure that there is a reason why registered IA and RAs need compliance professionals. Such mountain of obligations!
    </p>
    <p>
        Now, imagine expecting a pure AI chatbot to meet these obligations. Yeah…woof!
    </p>
    <p>
        Naturally, all these rules lead to the million-dollar question: who pays when the AI (inevitably) makes a mistake?
    </p>
    <p>
        One might argue that if the output is mechanically automated, why not just blame the machine? Sure, but SEBI’s not buying the whole ‘blame the algorithm’ defence. And unlike the internet in the ’90s, it appears that AI might not get its grace period.
    </p>
    <p>
        To SEBI’s credit, its 2024 amendments allowed AI use, but placed responsibility squarely on IAs and RAs. Still, SEBI missed a critical nuance - the current IA and RA framework wasn’t designed for autonomous, unpredictable technology giving research analysis/investment advice. For e.g. IAs and RAs must disclose conflicts of interest, conduct KYC, and explain recommendations. RAs, in particular, must avoid crossing the line between offering research and providing personalized advice. These rules are not optimal for an AI tools performing IA/RA functions because:
    </p>
    <p>
        <strong>First:</strong> large language models (LLMs) like ChatGPT or Gemini evolve through training, personalizing and fine-tuning. Even deployers can’t always predict outputs. Yet the law expects IAs and RAs to ensure full compliance, even when the tech is inherently autonomous.
    </p>
    <p>
        <strong>Second:</strong> Rules like disclosing every conflict or explaining every recommendation turn into logistical nightmares. LLM outputs aren’t clean formulas - crafty prompts or rogue inputs can skew results. And flooding investors with endless disclosures? That kills transparency.
    </p>
    <p>
        <em>(Case in point: Privacy Policies & Platform T&Cs: Do we really read them all?)</em>
    </p>
    <p>
        <strong>Third:</strong> Access to real-time market data is critical. But AI models today often rely on slightly stale data. Ask, ‘Should I invest in Stock-A?’ - and you’ll get something articulate, maybe insightful, but often generic or dangerously dated.
    </p>
    <p>
        Markets move fast - wars, tariffs, annual reports, budget speeches, CEO meltdowns (we said what we said) - shift sentiment in seconds. Yet SEBI’s January 2025 rules don’t permit general AI models to scrape live data unless the deployer is regulated.
    </p>
    <p>
        <strong>Fourth (and most importantly):</strong> Over-regulation risks stifling innovation. Sophisticated, regulated players - the ones best positioned to use AI responsibly - might end up tiptoeing around these tools, terrified that one unexpected AI output could trigger penalties or even cost them their license. Meanwhile, unregulated players, outside SEBI’s purview, could move fast and happily push AI-powered services with zero compliance headaches. The result? Investor protection takes a hit while innovation runs wild in all the wrong corners.
    </p>
    <p>
        Safe to assume that these regulations from a decade ago, have not aged well for the AI era. Even the 2025 Consultation Paper also does not account for these nuances.
    </p>

    <h3>So, can we ever have a ChatGPT moment for capital markets?</h3>
    <p>
        Technically? Yes. But legally? It depends (The lawyer in us couldn’t resist). Depends on what SEBI decides and how the industry responds.
    </p>

    <h3>So what’s an innovator supposed to do?</h3>
    <p>
        Entities looking to deploy AI in capital markets will need a cautious and proactive strategy. The 2025 Consultation Paper prescribe some best practices and can be a good starting point.
    </p>

    <ul>
        <li>
            <strong>Vet inputs and algorithms:</strong> Curate training data carefully and test algorithm behaviour to reduce unpredictable outputs. For e.g. develop algo to ensure that you can back each AI recommendation (buy/sell/hold) with clear reasoning such as financial ratios, market trends, and data sources like earnings reports and technical indicators should be part of the explanation.
        </li>
        <li>
            <strong>Manage scope tightly:</strong> Keep research analysis and personalized advice clearly separated. Meaning, unless the entity deploying the AI tool has a valid IA license, ensure that no matter the prompts, the tool never spits personalized outputs.
        </li>
        <li>
            <strong>Engage early with SEBI:</strong> Leverage regulatory sandboxes to test tools safely and incorporate regulatory feedback. The 2025 Consultation Paper also recommends this route to avoid non-compliance.
        </li>
        <li>
            <strong>Pre-train for compliance:</strong> Where possible, embed compliance requirements into AI models from the start. In fact, considering the cross-border ease in deploying AI models, undertake an AI benchmarking exercise to align your AI practices with global standards to anticipate regulatory changes and stay compliant with emerging best practices.
        </li>
        <li>
            <strong>Robust data practices:</strong> AI-based tools rely on personal data to evolve and improve. So, ensuring compliance with Indian data privacy laws and global best practices from the get go is recommended. Taking apart an evolved AI model to weave in compliance is difficult at advanced stages.
        </li>
        <li>
            <strong>Detailed disclosures:</strong> Clearly disclose to users that AI-based model are prone to errors. And therefore, users should not solely rely on AI-based tools to make their investment decisions.
        </li>
    </ul>

    <h3>And what should SEBI consider?</h3>
    <p>
        SEBI will need to strike the right balance. Overregulation could chill innovation; under-regulation could expose investors to serious risks. Its early moves were important, but from here, collaboration isn’t optional - it’s critical.
    </p>
    <p>
        To start, SEBI could lean into industry-driven solutions. An industry code could set clear guardrails for sourcing and processing training data - defining what’s fair game, how to protect privacy, and how to tackle bias. This isn’t just theoretical. The Fintech Open-Source Foundation (FINOS), part of the Linux Foundation, already does this. Its AI Governance Framework, developed through its AI Readiness Special Interest Group, helps financial institutions adopt AI without losing control or accountability.
    </p>
    <p>
        But codes and frameworks aside, SEBI may also need to take a hard look at its liability model. AI tools evolve, sometimes unpredictably. Expecting human-level certainty from AI outputs may be asking for the impossible. SEBI could help by issuing clearer guidance on how liability applies when outputs aren’t fully human-driven.
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
