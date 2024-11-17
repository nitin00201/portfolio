import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Nitin Kabi</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/nitin00201" aria-label="GitHub" className="hover:text-blue-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/nitin-kabi-980532247" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:kabinitin2002@gmail.com" aria-label="Email" className="hover:text-blue-400 transition-colors">
              <FaEnvelope size={24} />
            </a>
            <a href="/" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="/" aria-label="Website" className="hover:text-blue-400 transition-colors">
              <FaGlobe size={24} />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 text-sm">
          © 2024 Nitin. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
