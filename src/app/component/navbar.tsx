import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

// Importing logo for better optimization
import Logo from "../../../public/LOGOS/AR ABDUL REHMAN Shaikh.png";

export const Navbar = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <header className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        
        {/* Logo */}
        <Link href="/" className="flex title-font font-semibold items-center mb-4 md:mb-0">
          <Image
            src={Logo}
            alt="Abdulrehman Shaikh Logo"
            width={60}
            height={60}
            className="w-[60px] h-auto mr-3 rounded-full"
            loading="lazy"
          />
          <span className="text-xl tracking-wide">ABDULREHMAN SHAIKH</span>
        </Link>

        {/* Navigation Links */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-6">
          <Link href="/" className="hover:text-blue-400 font-medium transition-all">Home</Link>
          <Link href="#About" className="hover:text-blue-400 font-medium transition-all">About</Link>
          <Link href="#Skill" className="hover:text-blue-400 font-medium transition-all">Skills</Link>
          <Link href="#Project" className="hover:text-blue-400 font-medium transition-all">Projects</Link>
          <Link href="#Contact" className="hover:text-blue-400 font-medium transition-all">Contact</Link>
        </nav>

        {/* Download CV Button */}
        <Link href="/MyCv/Abdulrehman Shaikh.pdf" target="_blank" download>
          <Button className="flex items-center gap-2 px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-all rounded-lg shadow-md">
            Download CV <FaCloudDownloadAlt className="text-xl" />
          </Button>
        </Link>

      </header>
    </div>
  );
};
