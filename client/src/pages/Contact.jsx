import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please verify that you are not a robot.");
      return;
    }
    
    alert("Form submitted successfully!");
  };

  return (
    <div className="px-6 py-12 bg-white max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
       
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Your Query</h2>
          <p className="text-gray-700 mb-6">
            We’d love to hear from you — whether it’s a question, a content pitch, a collaboration idea, or just feedback.
            Please fill in the form below and someone from the ExecStream team will get back to you within 2–3 business days.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-md" required />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" required />
            <input type="tel" placeholder="Mobile" className="w-full p-3 border rounded-md" />
            <input type="text" placeholder="Subject" className="w-full p-3 border rounded-md" />
            <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded-md" required></textarea>

            <div className="my-4">
              <ReCAPTCHA sitekey={siteKey} onChange={onCaptchaChange} />
            </div>

            <button
              type="submit"
              className="bg-[#789BFF] hover:bg-black text-white font-semibold px-6 py-3 rounded-full w-full transition"
            >
              Submit Contact
            </button>
          </form>
        </div>

       
        <div className="border-l border-gray-200 pl-6">
       
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch with Us</h2>
            <p className="text-gray-700 mb-2">ExecStream Media Ventures</p>
            <p className="text-gray-700 mb-2">B1/639A, Janakpuri, New Delhi – 110058, India</p>
            <p className="text-gray-700 mb-2">
              ✉️ <strong>Sales & Marketing Queries:</strong>{" "}
              <a href="mailto:markets@exec-stream.com" className="text-blue-600 underline">markets@exec-stream.com</a>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Call us on:</strong> +91 – 8130826342
            </p>
          </section>

       
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Press Releases</h2>
            <p className="text-gray-700 mb-2">
              Have something newsworthy to share? Email us your press announcements at:
            </p>
            <a href="mailto:pressrelease@exec-stream.com" className="text-blue-600 underline block mb-2">
              pressrelease@exec-stream.com
            </a>
            <p className="text-gray-700">
              Include event photos, leadership changes, deal alerts or strategic partnerships for greater visibility.
            </p>
          </section>

          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contributor Guidelines</h2>
            <p className="text-gray-700 mb-4">
              At ExecStream, we showcase grounded, high-context insights that matter to business leaders across Legal, Finance,
              Risk, HR, Tech, and Sustainability. If you’re a domain expert, practitioner, academic, or advisor with something
              fresh to say — we’d love to help amplify your voice.
            </p>

            <p className="font-semibold text-gray-800 mb-2">What We Typically Require:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li className="text-sm">Author’s profile (credentials, expertise, organization)</li>
              <li className="text-sm">Short proposal with your topic & purpose</li>
              <li className="text-sm">The core idea or central insight</li>
              <li className="text-sm">Relevance to enterprise decision-makers</li>
              <li className="text-sm">Support from research, real cases, or data</li>
            </ul>

            <p className="font-semibold text-gray-800 mb-2">For Online Submissions (Articles/Blogs):</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li className="text-sm">Demonstrated subject-matter expertise</li>
              <li className="text-sm">Original & unique point of view</li>
              <li className="text-sm">Practical relevance to professionals</li>
              <li className="text-sm">Depth with examples or frameworks</li>
              <li className="text-sm">Timely reflections on industry trends</li>
            </ul>

            <p className="font-semibold text-gray-800 mb-2">We’re also open to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li className="text-sm">Visual explainers, tools, checklists</li>
              <li className="text-sm">Insights from CXO roundtables & events</li>
            </ul>

            <p className="text-gray-700 mb-2">
              Send your contributions or proposals to:
            </p>
            <a href="mailto:submissions@exec-stream.com" className="text-blue-600 underline block">
              submissions@exec-stream.com
            </a>
            <p className="text-gray-700 mt-2">
              Please include your name, role, and preferred contact email.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
