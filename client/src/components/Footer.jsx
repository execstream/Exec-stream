import React, { useState } from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { subscribeNewsletter } from "../redux/slices/newsletterSlice"; 
import { useNavigate } from "react-router-dom";
import SubscribeModal from "./SubscribeModal"; 

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [email, setEmail] = useState("");
  const { subscriber } = useSelector((state) => state.newsletter);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = true;

  const handleSubscribe = async (email) => {
    if (!isLoggedIn) {
      navigate("/register");
      return;
    }
    try {
      const resultAction = await dispatch(subscribeNewsletter(email));
      if (subscribeNewsletter.fulfilled.match(resultAction)) {
        alert("You are now subscribed to our newsletter!");
        setIsModalOpen(false);
      } else {
        throw new Error(resultAction.payload || "Subscription failed.");
      }
    } catch (err) {
      alert(err.message || "Failed to subscribe.");
    }
  };

  return (
 <>   <footer className="bg-[#050545] text-gray-300 py-12 px-4 md:px-8 lg:px-16">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1">
          <img src="/footerlogo.svg" alt="ExecStream Logo" className="mb-4 w-auto h-auto" />
          <p className="text-sm text-white mb-4">
            A CXO-first media platform for signal decoding, functional intelligence, and enterprise learning.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#789BFF] mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-white">
            <li classname="text-sm"><Link to="/function" className="hover:text-[#789BFF]">Explore by Function</Link></li>
            <li classname="text-sm"><Link to="/cxo" className="hover:text-[#789BFF]">Explore by CXO</Link></li>
            <li className="pt-2 font-semibold text-[#789BFF]">Categories</li>
            <li classname="text-sm"><Link to="/news-&-analysis" className="hover:text-[#789BFF]">News & Analysis</Link></li>
            <li classname="text-sm"><Link to="/articles" className="hover:text-[#789BFF]">Articles</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#789BFF] mb-4">Community</h3>
          <ul className="space-y-2 text-sm text-white mb-6">
            <li classname="text-sm"><Link to="/about/contact" className="hover:text-[#789BFF]">Become a Contributor</Link></li>
            <li classname="text-sm"><Link to="/about/contact" className="hover:text-[#789BFF]">Submit a Press Release</Link></li>
          </ul>

          <h3 className="text-lg font-bold text-[#789BFF] mb-4">About ExecStream</h3>
          <ul className="space-y-2 text-sm text-white">
            <li classname="text-sm"><Link to="/about" className="hover:text-[#789BFF]">About Us</Link></li>
            <li classname="text-sm"><Link to="/about/team" className="hover:text-[#789BFF]">Team</Link></li>
             <li classname="text-sm"><Link to="/about/contact" className="hover:text-[#789BFF]">Contact</Link></li>
          </ul>
          <h2 className="text-md font-bold text-[#789BFF] mt-4 mb-4">Legal</h2>
          <ul className="space-y-2 text-sm text-white">
            <li classname="text-sm"><Link to="/about/terms-of-use" className="hover:text-[#789BFF]">Terms of Use</Link></li>
            <li classname="text-sm"><Link to="/about/privacy-policy" className="hover:text-[#789BFF]">Privacy Policy</Link></li>
            <li classname="text-sm"><Link to="/about/gen-ai-policy" className="hover:text-[#789BFF]">Gen AI Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#789BFF] mb-4">Newsletter</h3>
          <p className="text-sm text-white mb-4">
            Register now to get the latest updates on promotions & announcements.
          </p>
<div className="flex items-center mb-3">


<input
  type="email"
  placeholder="Enter your email"
  className="w-full px-4 py-3 text-sm rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

          </div>
          {/* Subscribe Button */}
          {!subscriber ? (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#789BFF] hover:bg-white hover:text-[#789BFF] text-white font-semibold px-6 py-3 rounded-full w-full transition-colors text-sm mb-4"
            >
              Subscribe
            </button>
          ) : (
            <p className="text-xs text-white">
              You are already subscribed to our newsletter.
            </p>
          )}

          
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between text-sm text-white gap-6 md:gap-0">

        <div className="mb-4 md:mb-0 flex items-center">
          <span className="mr-4 text-[#789BFF] font-medium">Follow us:</span>
<div className="flex space-x-3 text-[#000033]">
  {[{
    href: "https://www.linkedin.com/company/execstream",
    Icon: FaLinkedinIn,
  }, {
    href: "https://www.facebook.com/execstream",
    Icon: FaFacebookF,
  }, {
    href: "https://www.instagram.com/execstream/",
    Icon: FaInstagram,
  }, {
    href: "https://www.youtube.com/@execstream",
    Icon: FaYoutube,
  }, {
    href: "https://x.com/ExecStream",
    Icon: FaXTwitter,
  }].map(({ href ,Icon}, i) => (
    <a
      key={i}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-white hover:bg-[#789BFF] transition-colors duration-300"
    >
      <Icon className="text-gray-500 hover:text-white" size={14} />
    </a>
  ))}
</div>

        </div>

        <div className="text-white text-left md:text-left mt-4 md:mt-0">

          <p>© 2025 ExecStream Media Ventures. All rights reserved.</p>
         
          <p>
            <a href="mailto:info@exec-stream.com" className="hover:text-[#789BFF]">
              info@exec-stream.com
            </a>
          </p>
        </div>
      </div>

      {/* Subscribe Modal */}
      <SubscribeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubscribe}
      />
    </footer>
    <div className="w-full h-10 bg-[#789BFF]"></div></>
  );
};

export default Footer;
