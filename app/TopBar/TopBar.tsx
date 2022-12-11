import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <header className="bg-[#111217] flex justify-start items-center w-full">
      <div className="container mx-auto w-full px-5 lg:px-0">
        <div className="content flex flex-col md:flex-row md:justify-between md:items-center py-5">
          <div className="left flex flex-col md:flex-row justify-start items-center gap-4 text-white">
            <Link
              href="https://google.com"
              target="_blank"
              className="flex items-center justify-start gap-2"
            >
              <FaPhone /> <span>+91 7889737464</span>
            </Link>
            <Link
              href="https://google.com"
              target="_blank"
              className="flex items-center justify-start gap-2"
            >
              <FaEnvelope /> <span>tanveer@ktanco.com</span>
            </Link>
          </div>
          <div className="right text-white hidden md:flex justify-start items-center gap-4">
            <Link href="/">
              <FaFacebookF />
            </Link>
            <Link href="/">
              <FaTwitter />
            </Link>
            <Link href="/">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
