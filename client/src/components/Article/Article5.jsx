import React, { useEffect } from "react";

import MostPopular from "./MostPopular";
import ArticleFooter from "./ArticleFooter";

import SlidingBanner from "../Homepage/SlidingBanner";
import Sidebar from "./Sidebar";

const Article2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mx-auto px-6 md:px-20 py-10 text-gray-800">
      <div className="text-sm text-gray-500 flex items-center space-x-4 mb-6">
        <span>July 9, 2025</span>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-5xl font-bold text-[#789BFF] mb-4">
            Looks Like Content, Acts Like Ads: The Legal Risk in
            E-Commerce&#39;s Influencer Economy
          </h1>

          <div className="flex flex-wrap justify-center gap-10 mb-10">
            {[
              {
                name: "Sumit Ghoshal ",
                designation: "Senior Partner \n AZB & Partners",
                image: "/Sumit Ghoshal.webp",
              },
              {
                name: "Karishma ",
                designation: "Senior Associate \n AZB & Partners",
                image: "/Karishma.jpeg",
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
              E-Commerce
            </span>
          </div>

          <article className="prose max-w-none text-gray-700 [&>p]:text-sm [&>p]:mb-8">
            <p className="mb-8 text-sm">
              In today’s age of digital media and click-and-buy shopping, the
              consumers&#39; market has seen a dramatic transformation from
              brick-and-mortar retail to online shopping platforms including
              through e-commerce websites. Acknowledging this shift, the brands
              have increasingly started to adopt and embrace modern forms of
              marketing to reach their target customers. Marketing today is no
              longer confined to the traditional broadcasting and print
              advertisements. Instead, social media influencers have emerged as
              a vital link between brands and the digitally engaged consumer. In
              this scrolling era, consumers are often influenced by the products
              and services shown by the influencers they trust and follow in
              their everyday lives.
            </p>

            <p className="mb-8 text-sm">
              Influencer advertising has seen an exponential growth,
              particularly in sectors such as fashion and lifestyle, mobile
              phones and personal care products. The pertinent question, though
              which arises as to whether the existing legal and regulatory
              framework governing advertisements in India along with the
              statutory rights and protections available to customers under
              consumer protection laws of India are dynamic enough to
              effectively safeguard the consumer&#39;s interest against
              potential misuse of influencer- driven promotions? This article
              delves into the current legal framework in India for regulating
              influencer advertisements and examines the associated risks of
              misleading consumers through the unchecked influence of social
              media personalities.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Attempts at Regulating Influencer Advertisements in India
            </h3>
            <p className="mb-8 text-sm">
              Akin to all modern digital developments, law has been playing
              catch up- India being no exception. India has adopted a phased and
              layered regulatory approach to influencer advertising, evolving
              from self- regulation to enforceable advertisement standards and
              disclosures.
            </p>

            <section className="px-6 md:px-20 py-10 text-gray-800">
              <p className="mb-8 text-sm">
                (a) The Advertising Standards Council of India
                (&quot;ASCI&quot;), a self-regulatory body, introduced the
                Guidelines for Influencer Advertising in Digital Media on May
                27, 2021 (&quot;ASCI Guidelines&quot;), which came into effect
                from June 14, 2021. These ASCI Guidelines contemplate a broad
                definition of &quot;influencer&quot; and also identify the
                concept of a &quot;virtual influencer&quot;. The ASCI Guidelines
                provided that all advertisements published by social media
                influencers or their representatives should carry a disclosure
                label clearly identifying such content to be an advertisement.
                This responsibility to ensure placement of disclosures was
                imposed as a self-regulatory measure on the influencers as well
                as the advertisers to ensure influencers&#39; compliance.
              </p>

              <p className="mb-8 text-sm">
                The requirement of labelling an advertisement by an influencer
                using a disclosure was, however, carved out, only for content
                where there was a material connection between an advertiser and
                an influencer. Material connection would encompass monetary
                exchange, media barters, trips, holidays, meals, product
                exchange and gifts. The ASCI Guidelines emphasized on the
                disclosures to be : (a) upfront and prominent and not be buried
                into hashtags, bios or profiles of the influencers; (b)
                superimposed on stories and video posts that are unaccompanied
                by a caption or text, so that each and every viewer can easily
                spot the message; and (c) in English or in the same language as
                the promoted content.
              </p>
              <p className="mb-8 text-sm">
                The ASCI Guidelines also clarified that if there is no material
                connection between the advertiser and the influencer and the
                influencer is merely sharing an opinion about a product or
                service they independently purchased and liked, such content
                will not be considered as an advertisement and hence, no
                disclosure requirements will get triggered for such posts. The
                objective was to ensure transparency for the customers and to
                prevent viewers from being misled into believing that the
                influencers are genuine users of the products / services
                featured in the content, when in reality, the content is
                intended to promote the product / service based on a material
                connection that the influencer would have gained from the
                advertiser in return of marketing and promotion services.
              </p>

              <p className="mb-8 text-sm">
                (b) The Indian Influencer Governing Council, another
                self-regulatory body of influencers through its Code of
                Standards issued in April, 2025 encouraged the influencers to
                use #Admiration for content that genuinely reflects their
                support for brands, products, or services, based purely on
                personal preference and appreciation (and no material connection
                per se).
              </p>
              <p className="mb-8 text-sm">
                (c) In January 2023, Department of Consumer Affairs
                (&quot;DoCA&quot;) introduced further guidance to enhance
                accountability by releasing the &quot;Endorsement
                Know-hows&quot;, detailing disclosure obligations for
                celebrities, influencers, and virtual influencers on social
                media platforms.
              </p>
              <p className="mb-8 text-sm">
                (d) Complementing self-regulation, the Central Consumer
                Protection Authority (&quot;CCPA&quot;) on June 09, 2022,
                notified the Guidelines for Prevention of Misleading
                Advertisements and Endorsements for Misleading Advertisements,
                2022 (&quot;CCPA Guidelines&quot;), under its powers granted by
                the Consumer Protection Act, 2019.
              </p>
              <p className="mb-8 text-sm">
                The CCPA Guidelines are binding and apply to all advertisements
                across all formats and mediums. The definition of the term
                &quot;endorsers” under these CCPA Guidelines broadly cover
                celebrity as well as social media influencers, thereby mandating
                certain compliances applicable for an endorsement to be followed
                by an influencer as well. Upon contravention, the CCPA may
                impose a penalty of up to INR 10 lakh on manufacturers,
                advertisers, and endorsers for issuance of misleading
                advertisements and for subsequent contraventions, up to INR 50
                lakh. Further CCPA can also prohibit the endorser of a
                misleading advertisement from making any endorsement for up to 1
                year and for subsequent contravention, up to 3 years. One of the
                key compliances under the CCPA Guidelines mandate full
                disclosure of the connection where there exists a connection
                between the endorser and the trader, manufacturer or advertiser
                of the endorsed product that might materially affect the value
                or credibility of the endorsement and where the connection is
                not reasonably expected by the audience.
              </p>
              <p className="mb-8 text-sm">
                (e) The need for an ethical and transparent digital promotion
                was reinforced by the notification of the Guidelines for
                Prevention and Regulation of Dark Patterns, 2023 by the CCPA on
                November 30, 2023 (&quot;Dark Pattern Guidelines&quot;). These
                Dark Pattern Guidelines prohibit all persons including any
                platforms from engaging in dark pattern practices particularly
                the ones identified under the Dark Pattern Guidelines. Disguised
                advertisement by masking advertisements by influencers as other
                content types such as lifestyle vlogs, social media posts, live
                streams etc., intended to mislead the customers into believing
                that the influencers are real life customers of such showcased
                products / services, could be considered as a form of dark
                pattern practice and hence, is prohibited under the Dark Pattern
                Guidelines.
              </p>
            </section>

            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Blurring the line between paid promotion and content
            </h3>
            <p className="mb-8 text-sm">
              The increasing rate of consumption of influencer content in India
              has resulted in blurring the lines between a paid promotion and an
              organic content, leading to consumer confusion. Influencers often
              integrate brand endorsements seamlessly into their content,
              presenting them as personal opinions or lifestyle choices. This
              subtle integration results into misleading the consumers and
              feeding them a sponsored content in the disguise of a lifestyle
              content, even though in actual the influencers could have never
              used the product / service or verified the claims presented in the
              content.
            </p>

            <p className="mb-8 text-sm">
              Despite the statutory and regulatory requirements in India
              pertaining to mandatory disclosures by influencers on content
              where there exists a material connection between the influencer
              and the advertiser, ensuring compliance on ground remains a
              challenge. In a recent study done by ASCI of the brand promotional
              content of the influencers recognized in the list of &quot;Forbes’
              India’s Top 100 Digital Stars 2024&quot;, it was found that 69% of
              top influencers failed to include the mandatory disclosures in
              their respective brand partnership content. Following ASCI’s
              intervention, most of the influencers agreed to put necessary
              disclosure labels in their content while the ones who continued
              non-compliance to both self- regulatory and statutory guidelines,
              were escalated to the Ministry of Information &amp; Broadcasting.
              The list of those who failed to comply with the ASCI Guidelines
              and potentially with the CCPA Guidelines included both brands and
              influencers.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Content with multiple endorsements
            </h3>
            <p className="mb-8 text-sm">
              With the boom in e-commerce space, the digital content space in
              India has also experienced a trend of lifestyle content being
              posted by influencers in which the influencers showcase a
              selection of products - typically clothing, accessories, gadgets
              or home essentials - purchased from a specific e-commerce
              marketplace, presenting them as either shopping choices, personal
              recommendations, or product feedback.
            </p>
            <p className="mb-8 text-sm">
              Such content, typically referred as a &quot;haul&quot; video,
              often serve as subtle forms of paid promotion benefiting both the
              e-commerce marketplace and the specific brands / sellers of the
              products being showcased / unpacked in these videos. While these
              hauls may appear as an organic content, many of these hauls are
              sponsored, with influencers receiving free products, affiliate
              commissions, or direct payments. This form of advertising not only
              boosts visibility for specific brands listed on the marketplace
              but also simultaneously drives traffic and sales to the
              marketplace itself. Such integrations further blur the line
              between editorial and commercial content. In such cases, it is
              more essential to identify the entity on which the onus for
              compliance and disclosure shall eventually vest, especially when
              there are multiple advertisers benefitting from the content and
              the material connection of the influencer could possibly be
              established with more than one advertiser.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Accountability for virtual influencers
            </h3>
            <p className="mb-8 text-sm">
              As per the ASCI Guidelines, the responsibility for disclosure
              labels and ensuring compliance by the influencer lies primarily
              with the advertiser, i.e., the brand or entity that benefits from
              the promotion. In the case of AI-generated virtual influencers,
              this accountability becomes even more direct. Since the virtual
              influencer is not a legal person and cannot be held liable, it is
              the brand that uses the content of such virtual influencer for
              promoting its goods / services, as well as any associated
              advertising or marketing agencies, who could possibly be held
              accountable for failure to disclose paid promotions.
            </p>
            <p className="mb-8 text-sm">
              It remains to be seen how Indian jurisprudence will evolve in
              attributing liability to brands / advertising agencies using
              virtual influencers in cases of non-compliance with disclosure
              norms and other compliances under the CCPA Guidelines including
              the requirement to carry out due diligence by an endorser.
            </p>
            <h3 className="text-xl font-bold text-[#789BFF] mb-2">
              Way forward
            </h3>
            <p className="mb-8 text-sm">
              Considering that usually the influencers are engaged by the brands
              to promote their products and services, it is ultimately the
              brand&#39;s reputation at stake when any influencers
              non-compliance comes into light. Hence, in our view, it is
              important for brands to ensure:
            </p>
            <section className="px-6 md:px-20 py-10 text-gray-800">
              <p className="mb-8 text-sm">
                (a) That before engaging with an influencer for brand
                promotions, the followers&#39; count should not be the only
                consideration, rather brands should also consider the
                influencer&#39;s dedication towards complying with the law and
                any involvement in previous non-compliances;
              </p>

              <p className="mb-8 text-sm">
                (b) conducting due diligence prior to engaging influencers;
              </p>
              <p className="mb-8 text-sm">
                (c) Safeguarding itself from the risks of liability arising due
                to non-compliance by influencers by including adequate indemnity
                in the contracts with the influencers;
              </p>

              <p className="mb-8 text-sm">
                (d) Disseminating information about the product / service being
                endorsed along with documentary evidence for substantiating
                claims being made in the endorsement;{" "}
              </p>
              <p className="mb-8 text-sm">
                (e) Verifying the content at the pre-publication stage to ensure
                inclusion of adequate disclosure labels.
              </p>
              <p className="mb-8 text-sm">
                (f) Periodic training for the influencers and making them aware
                of their roles and responsibilities; and
              </p>
              <p className="mb-8 text-sm">
                (g) Informing and educating influencers regarding advertising
                laws applicable on influencers, and the significance of
                complying with such laws, including the potential legal
                consequences of non- compliance.
              </p>
            </section>
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

export default Article2;
