import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaGithub, FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";

// Importing image statically for better optimization
import Logo from "../../../public/LOGOS/AR ABDUL REHMAN Shaikh.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#1e293b] to-[#0f172a] text-white py-10 px-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Image
            src={Logo}
            alt="ABDULREHMAN SHAIKH Logo"
            width={50}
            height={50}
            className="w-[50px] h-[50px] rounded-full shadow-md hover:scale-105 transition-transform"
            loading="lazy"
          />
          <span className="text-lg font-semibold text-gray-300 tracking-wide">ABDULREHMAN SHAIKH</span>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-400 text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} Abdulrehman Shaikh. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          {[
            { href: "https://www.facebook.com/profile.php?id=61553115674141", icon: <FaFacebook />, hover: "hover:text-blue-500 hover:shadow-blue-500" },
            { href: "https://github.com/Abdulrehman-Shaikh1010", icon: <FaGithub />, hover: "hover:text-gray-300 hover:shadow-gray-400" },
            { href: "https://discord.com/channels/@me", icon: <FaDiscord />, hover: "hover:text-[#5865F2] hover:shadow-[#5865F2]" },
            { href: "https://www.instagram.com/abdul.rehmanshaikh46/?hl=en", icon: <FaInstagram />, hover: "hover:text-pink-500 hover:shadow-pink-500" },
            { href: "https://www.linkedin.com/in/abdulrehman-shaikh-0b64422b9/", icon: <FaLinkedin />, hover: "hover:text-blue-400 hover:shadow-blue-400" },
          ].map(({ href, icon, hover }, index) => (
            <Link key={index} target="_blank" href={href} className={`text-2xl text-gray-400 transition-all duration-300 ${hover}`}>
              {icon}
            </Link>
          ))}
        </div>

      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-72 h-70 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-70 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
    </footer>
  );
};

export default Footer;
