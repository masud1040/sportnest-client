import React from "react";
import Link from "next/link";
import { FaTrophy, FaArrowRight, FaCheckCircle, FaStar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center overflow-hidden bg-black text-white px-4 py-12 md:py-20">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 filter blur-[2px] opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1920&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none" />

      {/* Floating Badges (Hidden on very small screens, visible on md+) */}
      <div className="absolute top-12 left-6 lg:left-16 hidden md:block z-10">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-gray-200 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          500+ Active Facilities
        </div>
      </div>

      <div className="absolute bottom-12 right-6 lg:right-16 hidden md:block z-10">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-gray-200 shadow-lg">
          <FaCheckCircle className="text-emerald-400" />
          10,000+ Bookings Made
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center mt-8 md:mt-0">
        {/* Top Highlight Badge */}
        <div className="mb-6 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide shadow-inner">
          <FaTrophy className="text-yellow-400 text-xs" />
          #1 Sports Booking Platform
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 px-2">
          Book Your <br className="hidden sm:block" />
          <span className="text-emerald-400"> Perfect Court</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-normal leading-relaxed px-4">
          Discover and reserve premium sports facilities — football turfs,
          badminton courts, swimming lanes, and more. Instant booking, zero
          hassle.
        </p>

        {/* Call to Actions - Responsive Flex (Col on mobile, Row on md) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 mb-16 md:mb-20">
          <Link
            href="/facilities"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl px-8 h-14 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all"
          >
            Explore Facilities <FaArrowRight className="text-sm" />
          </Link>

          <Link
            href="/register"
            className="w-full sm:w-auto flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-xl px-8 h-14 backdrop-blur-md transition-all"
          >
            Get Started Free
          </Link>
        </div>

        {/* Stats Section - 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8 border-t border-white/10 w-full max-w-3xl px-4">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              500+
            </h3>
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-1.5 font-medium">
              Facilities
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              10K+
            </h3>
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-1.5 font-medium">
              Bookings
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              6
            </h3>
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-1.5 font-medium">
              Sports
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1.5 text-3xl md:text-4xl font-bold text-white tracking-tight">
              <span>4.9</span>
              <FaStar className="text-emerald-400 text-lg md:text-xl pb-1" />
            </div>
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-1.5 font-medium">
              Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}