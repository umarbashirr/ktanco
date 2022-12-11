"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar z-10 transition-all duration-300 ease-linear ${
          isScrolled ? "bg-[#111217] sticky top-0 left-0" : "absolute w-full"
        }`}
        id="navbar"
      >
        <div className="container mx-auto px-5 lg:px-0">
          <nav className="flex justify-start items-center h-20">
            <Link href="/" className="text-white text-3xl">
              Logo
            </Link>
            <button className="toggle_button text-white text-3xl grow-1 ml-auto lg:hidden">
              <BiMenuAltRight />
            </button>
            <ul className="grow-1 ml-auto hidden lg:flex items-center gap-4 text-white">
              <li>
                <Link href="/" className="hover:text-gold-color">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gold-color">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gold-color">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gold-color">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <header className="bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/assets/heroAlt.jpg')] h-[400px] lg:h-screen w-full"></header>
    </>
  );
};

export default Navbar;
