import React, { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0e1a67]  mb-10 text-center">
          Terms of Use
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to ExecStream Media Ventures (“ExecStream,” “we,” “our,” “us”). These Terms of Use govern your access to and use of our website,{" "}
          <a href="http://www.exec-stream.com/" className="text-[#0e1a67] underline">
            www.exec-stream.com
          </a>{" "}
          (the “Website”).
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          By accessing or using this Website, you agree that you have read, understood, and accepted these Terms of Use. If you do not agree, please refrain from using the Website.
        </p>

    
        {[
          {
            title: "1. Purpose of the Website",
            content:
              "ExecStream is a digital platform offering curated content, insights, interviews, masterclasses, and resources for executives, functional leaders, and enterprise teams. All content is intended for professional development, peer knowledge exchange, and enterprise awareness.",
          },
          {
            title: "2. Disclaimer",
            content: `This Website is provided on an “as is” basis for informational purposes only. While we strive to provide accurate, current, and contextually relevant information, ExecStream makes no warranties or representations, express or implied, regarding:
- the completeness, accuracy, or reliability of content;
- the outcomes resulting from reliance on any content;
- uninterrupted or error-free functionality of the Website.

We are not liable for any direct or indirect damages arising from the use of the Website or any linked third-party content.`,
          },
          {
            title: "3. Intellectual Property",
            content: `All content published on ExecStream — including articles, videos, images, graphics, branding assets, and editorial work — is either owned by or licensed to ExecStream and protected under applicable intellectual property laws.

You may:
- View and share content for non-commercial, educational, or informational purposes with proper credit.

You may not:
- Reproduce, modify, republish, distribute, or commercially exploit any part of the Website’s content without prior written consent from ExecStream.`,
          },
          {
            title: "4. User Contributions",
            content: `ExecStream may invite contributions from external experts, professionals, and community members. By submitting any content (e.g., articles, comments, interviews), you grant us a non-exclusive, royalty-free, perpetual, and irrevocable license to:

- Use, display, modify, and distribute your content across ExecStream platforms;
- Attribute content to you with your name, designation, and organization, unless you request anonymity.

Contributors are responsible for ensuring that their submissions:
- Are original or lawfully authorized;
- Do not infringe intellectual property or confidentiality rights;
- Do not contain defamatory, abusive, or misleading content.`,
          },
          {
            title: "5. Use of the Website",
            content: `You agree to use the Website for lawful and professional purposes only. You must not:
- Use the Website to transmit spam, malware, or disruptive content;
- Attempt unauthorized access, modification, or interference with the Website;
- Publish or share any information that is defamatory, illegal, or breaches confidentiality obligations;
- Engage in advertising, solicitation, or promotion of external services within user-contributed sections without prior written approval.`,
          },
          {
            title: "6. Reviews, Comments, and Feedback",
            content: `Where permitted, you may post comments or feedback on content. By doing so, you:
- Represent that your contribution is respectful, relevant, and non-promotional;
- Grant ExecStream the right to moderate, feature, or remove your comment at its discretion.`,
          },
          {
            title: "7. Event Participation and Data Sharing",
            content: `If you register for webinars, masterclasses, or learning sessions hosted on ExecStream:
- Your basic contact information (e.g., name, email, organization) may be shared with co-hosts, speakers, or content partners for follow-up communications relevant to the session;
- By registering, you agree to receive post-event materials and future communications from ExecStream (you may unsubscribe at any time).`,
          },
          {
            title: "8. Third-Party Links",
            content:
              "The Website may contain links to external websites or third-party platforms. These links are provided for informational purposes only. ExecStream does not endorse or assume responsibility for: - The accuracy, relevance, or legality of third-party content; - Any commercial transactions or interactions with such platforms.",
          },
          {
            title: "9. Data and Privacy",
            content:
              "Our collection and use of your personal data is governed by our Privacy Policy. By using the Website, you consent to the terms of that policy.",
          },
          {
            title: "10. Changes to Terms",
            content:
              "We reserve the right to update or modify these Terms at any time. Any changes will be posted on this page with an updated effective date. Continued use of the Website after such changes constitutes acceptance.",
          },
          {
            title: "11. Governing Law and Jurisdiction",
            content:
              "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with the Website shall be subject to the exclusive jurisdiction of the courts of New Delhi.",
          },
          {
            title: "12. Community Guidelines (Appendix A)",
            content: `If we host forums, learning cohorts, or community features:
- Be respectful, constructive, and professional in all communications;
- Avoid promotional posts, personal attacks, or sharing confidential information;
- Respect intellectual property and cite sources when quoting others.

Violations may result in removal of content or access restrictions.`,
          },
        ].map((section, i) => (
          <div key={i} className="mb-10">
            <h2 className="text-2xl font-semibold text-[#0e1a67] mb-3">{section.title}</h2>
            {section.content.split("\n").map((line, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-2">
                {line}
              </p>
            ))}
          </div>
        ))}

      
        <div>
          <h2 className="text-2xl font-semibold text-[#0e1a67] mb-3">13. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            For any questions regarding these Terms, please contact us at:{" "}
            <a href="mailto:info@exec-stream.com" className="text-[#0e1a67] underline">
              info@exec-stream.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
