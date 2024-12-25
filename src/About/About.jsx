import React, { useEffect } from 'react';
import { FaCheckCircle, FaStar, FaCrown } from 'react-icons/fa';
import { MdOutlineLocalOffer, MdSupportAgent } from 'react-icons/md';
import { BsCreditCard } from 'react-icons/bs';

function About() {
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []); 
  return (
    <div className="bg-[#f4f7fc] font-poppins py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Free Trial Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center text-[#2d387d] mb-4">
            Try Jewel Vision 3D for Free
          </h2>
          <p className="text-center text-gray-700 text-lg mb-6">
            Experience the difference with a no-obligation trial.
          </p>
          <ul className="text-gray-700 space-y-3 mb-6 list-inside">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[#2d387d] text-xl" /> Full access to our tools for 7 days.
            </li>
            <li className="flex items-center gap-3">
              <MdSupportAgent className="text-[#2d387d] text-xl" /> Dedicated support to guide you through the process.
            </li>
            <li className="flex items-center gap-3">
              <BsCreditCard className="text-[#2d387d] text-xl" /> No credit card required.
            </li>
          </ul>
          <div className="text-center">
            <button className="bg-[#2d387d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4658a7]">
              Start My Free Trial Now
            </button>
          </div>
        </div>

        {/* Buy Now Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-[#2d387d] mb-4">
            Upgrade to Jewel Vision 3D Today
          </h2>
          <p className="text-center text-gray-700 text-lg mb-6">
            Get the complete solution for fast, secure, and cost-effective rendering.
          </p>

          {/* Pricing Plans */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Pricing Plans
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f4f7fc] shadow-md rounded-lg p-6 text-center">
                <FaStar className="text-[#ffc107] text-3xl mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-[#2d387d] mb-3">
                  Starter Plan
                </h4>
                <p className="text-gray-700 mb-4">Ideal for small businesses.</p>
                <button className="bg-[#2d387d] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#4658a7]">
                  Choose Plan
                </button>
              </div>
              <div className="bg-[#f4f7fc] shadow-md rounded-lg p-6 text-center">
                <FaCrown className="text-[#ff5722] text-3xl mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-[#2d387d] mb-3">
                  Professional Plan
                </h4>
                <p className="text-gray-700 mb-4">For established jewellery brands.</p>
                <button className="bg-[#2d387d] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#4658a7]">
                  Choose Plan
                </button>
              </div>
              <div className="bg-[#f4f7fc] shadow-md rounded-lg p-6 text-center">
                <MdOutlineLocalOffer className="text-[#4caf50] text-3xl mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-[#2d387d] mb-3">
                  Enterprise Plan
                </h4>
                <p className="text-gray-700 mb-4">Tailored for large-scale operations.</p>
                <button className="bg-[#2d387d] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#4658a7]">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Benefits of Buying Now
            </h3>
            <ul className="text-gray-700 space-y-3 list-inside mb-6">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-[#2d387d] text-xl" /> Priority customer support.
              </li>
              <li className="flex items-center gap-3">
                <MdSupportAgent className="text-[#2d387d] text-xl" /> Exclusive access to premium tools.
              </li>
              <li className="flex items-center gap-3">
                <MdOutlineLocalOffer className="text-[#2d387d] text-xl" /> Hassle-free onboarding and training.
              </li>
            </ul>
            <div className="text-center">
              <button className="bg-[#2d387d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4658a7]">
                See Detailed Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
