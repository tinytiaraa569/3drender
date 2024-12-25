import React from 'react';

function Whyus() {
  return (
    <>
    
    <div className="my-12 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50 font-poppins">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Why Choose Jewel Vision 3D?
        </h2>
        <p className="text-base md:text-lg text-gray-600 mt-2">
          Transform your jewelry rendering process with unmatched speed, cost-efficiency, and security.
        </p>
      </div>
      {/* Feature Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Speed */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-[#2d387d] mb-2">Speed</h3>
          <p className="text-sm text-gray-700">
            Real-time rendering to meet tight deadlines, ensuring your projects are always on schedule.
          </p>
        </div>
        {/* Cost-Effective */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-[#2d387d] mb-2">Cost-Effective</h3>
          <p className="text-sm text-gray-700">
            Save up to 50% compared to traditional methods, optimizing your budget without compromise.
          </p>
        </div>
        {/* Security */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-[#2d387d] mb-2">Security</h3>
          <p className="text-sm text-gray-700">
            Encrypted data with a 7-day auto-delete policy for complete peace of mind.
          </p>
        </div>
      </div>

      {/* Learn More */}
      <div className="text-center mt-12">
        <button className="bg-[#2d387d] hover:bg-[#3d4db4] text-white font-semibold py-2 px-5 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>

      </div>

      {/* section 2 */}

      <div className="px-6 md:px-12 lg:px-20 font-poppins bg-[#eaf4fc] py-12">
        <div className="p-8 rounded-lg shadow-lg bg-white">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6">
            Key Features
            </h3>
            <ul className="space-y-4 text-sm text-gray-700 list-disc list-inside">
            <li>
                <strong>On-Premises Installation:</strong> Worry-free operations with local setup.
            </li>
            <li>
                <strong>User-Friendly Tools:</strong> Intuitive tools requiring minimal expertise.
            </li>
            <li>
                <strong>24/7 Customer Support:</strong> Seamless experiences whenever you need help.
            </li>
            </ul>
        </div>
    </div>


      {/* Key Features */}
     

      {/* Customer Success Stories */}
      <div className="mt-16  mb-16 text-center font-poppins">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Customer Success Stories
        </h3>
        <p className="text-base text-gray-600 mb-6">
          See how businesses like yours saved time and money with JV3D.
        </p>
        <button className="bg-[#2d387d] hover:bg-[#3d4db4] text-white font-semibold py-2 px-5 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
          Read Testimonials
        </button>
      </div>

    </>
  );
}

export default Whyus;
