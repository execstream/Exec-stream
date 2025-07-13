
import React, { useEffect } from "react";

const GenAI = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0e1a67]  mb-10 text-center">
          Generative AI Use Policy
        </h1>

        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          At ExecStream, our core commitment is to provide relevant, trustworthy, and
          insight-driven content for enterprise professionals across domains. As a platform
          built on deep editorial thinking and contextual intelligence, we recognize the
          emergence of Generative AI (Gen-AI) as a powerful tool that can enhance workflows,
          but also one that demands thoughtful and responsible use.
        </p>

        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          We believe Gen-AI, when used appropriately, can assist in improving content
          workflows, ideation, and access to knowledge. But it is not a substitute for human
          context, professional judgment, and domain-specific insight, which remain central
          to everything we publish.
        </p>

        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          With that in mind, we are setting out our guiding principles around Gen-AI use, so
          our community—whether readers, contributors, or collaborators—can engage with
          ExecStream content with clarity and confidence.
        </p>

        <h2 className="text-2xl font-semibold text-[#0e1a67] mt-10 mb-4">
          How We Use Gen-AI at ExecStream
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-base space-y-3 mb-6">
          <li classname="text-sm">
            We may use Gen-AI tools (such as chat-based assistants or summarization models)
            in support of research, structuring, and idea scaffolding, e.g., to organize a
            framework, draft outlines, or source reference points.
          </li>
          <li classname="text-sm">
            All long-form articles, newsletters, opinion pieces, and editorials are written
            by humans, with Gen-AI acting only as an auxiliary input, not as the author.
          </li>
          <li classname="text-sm">
            If AI assistance has played a meaningful role in the preparation of a piece, we
            will clearly disclose it.
          </li>
          <li classname="text-sm">
            Gen-AI may be used for social media editing, e.g., platform-specific formatting,
            headline variations, hashtag generation. Even here, curation and voice alignment
            remain human-led.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#0e1a67] mt-10 mb-4">
          What We Do Not Use Gen-AI For
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-base space-y-3 mb-6">
          <li classname="text-sm">
            We do not use AI-generated images or art in our content due to the ethical,
            legal, and attribution-related concerns around text-to-image models.
          </li>
          <li classname="text-sm">
            We do not publish fully AI-written articles; all published editorial is reviewed,
            refined, or created by professional editors or contributors.
          </li>
          <li classname="text-sm">
            We do not automate commentary or analysis that requires subject-matter judgment;
            our value lies in curated insight, not synthetic filler.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#0e1a67] mt-10 mb-4">
          Expectations from Contributors
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-base space-y-3 mb-6">
          <li classname="text-sm">
            Contributors are welcome to use Gen-AI tools to assist their research or ideation.
            However, they must:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li classname="text-sm">
                Retain authorship ownership through original thinking and editorial judgment.
              </li>
              <li classname="text-sm">
                Disclose if substantial parts of their draft were AI-assisted.
              </li>
              <li classname="text-sm">
                Avoid submitting content that is entirely AI-generated or lacks human
                refinement.
              </li>
              <li classname="text-sm">
                Ensure that facts, quotes, and references are accurate and verified, even if
                initially sourced via AI.
              </li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#0e1a67] mt-10 mb-4">
          Our Responsibility and Future Commitment
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-base space-y-3 mb-8">
          <li classname="text-sm">
            We are committed to monitoring developments in Gen-AI, including ethical concerns,
            legal frameworks, and platform norms.
          </li>
          <li classname="text-sm">
            As the technology evolves, we will update our internal editorial workflows and
            public disclosures to reflect best practices and community expectations.
          </li>
          <li classname="text-sm">
            Our core principle remains: to serve our executive and enterprise audience with
            trusted, well-curated knowledge, and to use technology only in ways that
            strengthen this mission.
          </li>
        </ul>

        <p className="text-gray-700 text-base">
          If you have any questions about our AI use or spot content that may violate these
          principles, you can contact us at{" "}
          <a href="mailto:info@exec-stream.com" className="text-[#0e1a67] font-medium underline">
            info@exec-stream.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default GenAI;
