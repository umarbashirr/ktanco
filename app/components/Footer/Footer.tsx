import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMapMarked,
  FaMapPin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" relative new_section_p footer bg-slate-800 mt-56 w-full pt-56">
      <div className="cta_banner absolute -top-[120px] left-0 md:left-2/4 md:-translate-x-2/4  bg-[#705EF2] px-5 py-10 md:px-10 md:py-20  shadow-xl drop-shadow-xl rounded-xl flex flex-col xl:flex-row items-center gap-8 w-full md:max-w-[750px] lg:max-w-[900px]">
        <p className="text-4xl md:text-3xl lg:text-5xl text-white font-medium text-center lg:text-start">
          Are you looking for more answer?
        </p>

        <button className="text-primary-text font-semibold bg-white rounded-md shadow-md border border-transparent whitespace-nowrap px-6 py-3 lg:px-8 lg:py-4 hover:border-white hover:text-white hover:bg-transparent duration-300 transition-all">
          Contact Now
        </button>
      </div>
      <div className="container mx-auto px-5 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <article className="card bg-white shadow-sm rounded-md flex flex-col justify-start items-start text-start p-8">
            <h1
              className="text-3xl text-blue-700 font-bold italic"
              style={{ fontFamily: "cursive" }}
            >
              Logo Here
            </h1>
            <p className="mt-4">
              Khawaja Tanveer & Co. is Chartered Accountant firm established
              with a single aim of delivering best audit, taxation and advisory
              services to valued clients.
            </p>
          </article>
          <div className="navigation lg:ml-20">
            <h2 className="text-3xl  text-white">Navigation</h2>
            <div className="flex flex-col gap-3 mt-4 text-white text-xl">
              <Link href="/">Home</Link>
              <Link href="/">About Us</Link>
              <Link href="/">Our Services</Link>
              <Link href="/">Our Clients</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="reach_us ">
            <h2 className="text-3xl text-white">Reach Us</h2>
            <div className="flex flex-col gap-3 mt-4 text-white text-xl">
              <Link href="/" className="flex gap-2 items-start justify-start">
                <FaMapMarked className="text-5xl" />{" "}
                <address>
                  Office 3144, 3rd Floor, WTC Giga Mall, DHA-II, Islamabad,
                  Pakistan
                </address>
              </Link>
              <Link
                href="tel:00923345729075"
                className="flex gap-2 items-center justify-start"
              >
                <FaPhone className="text-2xl" /> <span>+92 334 5729 075</span>
              </Link>
              <Link
                href="mailto:tanveer@ktanco.com"
                className="flex gap-2 items-center justify-start"
              >
                <FaEnvelope className="text-2xl" />{" "}
                <span>tanveer@ktanco.com</span>
              </Link>
            </div>
          </div>
          <div className="social ">
            <h2 className="text-3xl text-white">Follow Social Media</h2>
            <div className="flex flex-row gap-5 mt-4 text-white text-3xl">
              <Link href="">
                <FaFacebook />
              </Link>
              <Link href="">
                <FaTwitter />
              </Link>
              <Link href="">
                <FaYoutube />
              </Link>
              <Link href="">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
