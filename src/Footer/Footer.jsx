import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#2d387d] text-white py-8 font-poppins">
      <div className="container mx-auto px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center lg:items-start">
          <img
            src={logo}
            alt="Logo"
            className="h-12 mb-4 shadowlogo"
          />
          <h2 className="text-xl font-bold text-center lg:text-left">
            Jewel Vision 3D
          </h2>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
            Quick Links
          </h3>
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-gray-300">
                Signup
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
            Contact Us
          </h3>
          <ul className="space-y-2 text-center md:text-left">
            <li className="flex items-center justify-center md:justify-start">
              <MdEmail className="mr-2" />
              <Link href="mailto:support@jewelvision3d.com" className="hover:text-gray-300">
                support@jewelvision3d.com
              </Link>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <MdPhone className="mr-2" />
              +1 234 567 890
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#facebook" className="text-2xl hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#instagram" className="text-2xl hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#linkedin" className="text-2xl hover:text-gray-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Jewel Vision 3D. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
