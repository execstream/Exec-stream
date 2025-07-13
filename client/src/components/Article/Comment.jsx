import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
const Comment = () => {
  return (
  <>  <div className="flex items-center gap-3 justify-center border-t pt-4 mt-6">
            <div className="flex items-center gap-2 text-sm font-medium text-[#0e1a67]">
              <FiShare2 className="text-base" />
              <span>Share This Article</span>
            </div>
            <FaXTwitter className="cursor-pointer hover:text-blue-500" />
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
            <FaWhatsapp className="cursor-pointer hover:text-green-500" />
          </div>
            <div>
                  <h3 className="text-lg font-bold text-[#0e1a67] mb-4">Post a Comment</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#789BFF]"
                    />
                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#789BFF]"
                    />
                    <textarea
                      placeholder="Writing your comment here..."
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#789BFF]"
                    />
                
                  </form>
                 
            <button
              type="submit"
              className="px-5 w-full py-2 bg-[#789BFF] text-white text-sm rounded-full hover:bg-[#5c78e6] transition"
            >
              Submit
            </button>
          
          <p className="mt-2 text-xs font-semibold" >
            Your email address will not be published. Required fields are marked *
          </p>
          
                </div></>
  )
}

export default Comment