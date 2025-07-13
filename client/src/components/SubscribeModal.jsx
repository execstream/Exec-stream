import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-router-dom"; 

export default function SubscribeModal({ isOpen, onClose, onSubmit }) {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email.trim()) {
      onSubmit(email);
      setEmail("");
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded-lg bg-white p-6 space-y-6 shadow-xl">
          <Dialog.Title className="text-2xl font-bold">Subscribe to ExecStream</Dialog.Title>

          <p className="text-sm text-gray-700">
            <strong>One Stream. Every CXO.</strong>
            <br /><br />
            Join India’s most focused intelligence layer for enterprise leaders.
          </p>

          <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
            <li classname="text-sm">Get first access to our deep-dive editorial series</li>
            <li classname="text-sm">Early invitations to closed-door masterclasses and CXO roundtables</li>
            <li classname="text-sm">Exclusive CXO interviews, strategic frameworks & toolkits</li>
            <li classname="text-sm">Weekly summaries tailored to your function (Finance, Legal, HR, Risk, ESG, InfoSec)</li>
            <li classname="text-sm">No spam. Only enterprise-grade insight.</li>
          </ul>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              📩 Enter your email below to get started.
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="your@email.com"
            />
          </div>

          <p className="text-xs text-gray-500">
            By clicking “Subscribe” below, you accept our{" "}
            <Link
              to="/about/terms-of-use"
              className="text-blue-600 underline hover:text-blue-800"
              onClick={onClose}
            >
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link
              to="/about/privacy-policy"
              className="text-blue-600 underline hover:text-blue-800"
              onClick={onClose}
            >
              Privacy Policy
            </Link>
            .
          </p>

          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-700 hover:text-black rounded-full"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-5 py-2 bg-[#789BFF] text-white text-sm rounded-full hover:bg-black"
            >
              Subscribe
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
