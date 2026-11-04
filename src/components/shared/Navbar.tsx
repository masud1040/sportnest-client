"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdSportsSoccer } from "react-icons/md";
import { FiMenu, FiX, FiLogIn } from "react-icons/fi";

// Ekhane notun link add korlei automatic navbar e add hoye jabe
const navLinks = [
  { name: "Home", path: "/" },
  { name: "All Facilities", path: "/facilities" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Active route track korar jonno

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center text-lg shadow-sm">
            <MdSportsSoccer />
          </span>
          <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            SportNest
          </span>
        </Link>

        {/* Desktop Navigation (Mapped) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-emerald-600 font-semibold"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <FiLogIn className="text-lg" />
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-600 hover:text-emerald-600 z-50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown (Mapped) */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-lg transition-colors ${
                  isActive
                    ? "text-emerald-600 font-semibold"
                    : "text-gray-700 font-medium hover:text-emerald-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiLogIn className="text-xl" />
              Login to Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}