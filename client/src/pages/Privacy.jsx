
import React, { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0e1a67]  mb-10 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          ExecStream Media Ventures (“ExecStream”, “we”, “our”, or “us”) respects your privacy
          and is committed to protecting your personal information. This Privacy Policy explains
          how we collect, use, disclose, and safeguard information when you visit our website,
          <a href="http://www.exec-stream.com" className="text-[#0e1a67] underline ml-1">www.exec-stream.com</a>.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          By using this Website, you consent to the practices described in this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold text-[#0e1a67] mt-10 mb-4">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-base space-y-3 mb-6">
          <li classname="text-sm">
            <strong>Information You Provide Voluntarily:</strong> Contact details (name, email, designation, organization)
            when you:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li classname="text-sm">Subscribe to our newsletter or updates</li>
              <li classname="text-sm">Register for events or webinars</li>
              <li classname="text-sm">Submit content or apply as a contributor</li>
              <li classname="text-sm">Contact us for inquiries or feedback</li>
            </ul>
          </li>
          <li classname="text-sm">
            <strong>Information Collected Automatically:</strong> IP address, browser type, device type, referral source,
            pages visited, and visit duration (via cookies).
          </li>
          <li classname="text-sm">
            <strong>Information from Third Parties:</strong> Limited profile data from integrations like LinkedIn, Mailchimp, Zoom.
          </li>
        </ul>

       
        <h2 className="text-2xl font-semibold text-[#0e1a67] mt-10 mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-base space-y-2 mb-6">
          <li classname="text-sm">Send newsletters, article alerts, and event updates (if you opt in)</li>
          <li classname="text-sm">Deliver personalized content based on interests</li>
          <li classname="text-sm">Register you for events or learning cohorts</li>
          <li classname="text-sm">Respond to queries or support requests</li>
          <li classname="text-sm">Analyze website usage for improvements</li>
          <li classname="text-sm">Ensure website security and performance</li>
        </ul>

    
        <h2 className="text-2xl font-semibold text-[#0e1a67] mt-10 mb-4">
          3. Sharing and Disclosure
        </h2>
        <p className="text-gray-700 mb-4">
          We do not sell your data. We may share it:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li classname="text-sm">With event partners or co-hosts you register with</li>
          <li classname="text-sm">With services like:
            <ul className="list-disc pl-6 mt-1">
              <li classname="text-sm">Mailchimp (email)</li>
              <li classname="text-sm">Google Analytics (site data)</li>
              <li classname="text-sm">Hosting or form tools</li>
            </ul>
          </li>
          <li classname="text-sm">As required by law or for safety/legal reasons</li>
        </ul>

      
        <h2 className="text-2xl font-semibold text-[#0e1a67] mt-10 mb-4">
          4. Contributor Information
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li classname="text-sm">Name, photo, and role may be shown with your content</li>
          <li classname="text-sm">You retain IP ownership but grant us rights to publish and distribute</li>
          <li classname="text-sm">You can request content edits/removals anytime</li>
        </ul>

      
        <h2 className="text-2xl font-semibold text-[#0e1a67] mt-10 mb-4">
          5. Email Communications and Preferences
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li classname="text-sm">Emails are sent only if you opt-in or are nominated by your org</li>
          <li classname="text-sm">You can unsubscribe at any time via the “Unsubscribe” link</li>
        </ul>

       
        <h2 className="text-2xl font-semibold text-[#0e1a67] mt-10 mb-4">
          6. Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-700 mb-4">
          We use cookies for:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li classname="text-sm">Analytics (visitor trends, performance)</li>
          <li classname="text-sm">Session and preference management</li>
          <li classname="text-sm">Tracking content effectiveness</li>
        </ul>
        <p className="text-gray-700 mb-6">
          You can manage cookie preferences via your browser settings.
        </p>

       
        {[
          {
            title: "7. Data Storage and Retention",
            content:
              "We retain data only as long as needed for purposes listed above unless law or business needs require more.",
          },
          {
            title: "8. Data Security",
            content:
              "We apply reasonable protections, but no internet transmission is 100% secure.",
          },
          {
            title: "9. Children’s Privacy",
            content:
              "This site is meant for users 18+. We don’t knowingly collect data from children.",
          },
          {
            title: "10. Your Rights and Choices",
            content:
              "You may request access, correction, deletion, or withdrawal of consent at any time by emailing us.",
          },
        ].map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold text-[#0e1a67] mt-10 mb-2">
              {section.title}
            </h2>
            <p className="text-gray-700">{section.content}</p>
          </div>
        ))}

        
        <h2 className="text-2xl font-semibold text-[#0e1a67] mt-10 mb-2">
          11. Third-Party Links
        </h2>
        <p className="text-gray-700 mb-6">
          We may link to third-party platforms. Please review their privacy policies separately.
        </p>

        
        <h2 className="text-2xl font-semibold text-[#0e1a67] mt-10 mb-2">
          13. Contact Us
        </h2>
        <p className="text-gray-700">
          For questions or privacy requests, contact us at{" "}
          <a href="mailto:info@exec-stream.com" className="text-[#0e1a67] underline">
            info@exec-stream.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Privacy;
