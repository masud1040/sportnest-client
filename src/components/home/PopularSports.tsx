import React from "react";
import Link from "next/link";

// Sports data array zate future e easily kisu add ba remove kora jay
const sportsData = [
  {
    name: "Football",
    icon: "⚽",
    bgColor: "bg-emerald-50 hover:bg-emerald-100",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-100",
    path: "/sports/football",
  },
  {
    name: "Badminton",
    icon: "🏸",
    bgColor: "bg-amber-50 hover:bg-amber-100",
    textColor: "text-amber-700",
    borderColor: "border-amber-100",
    path: "/sports/badminton",
  },
  {
    name: "Tennis",
    icon: "🎾",
    bgColor: "bg-orange-50 hover:bg-orange-100",
    textColor: "text-orange-700",
    borderColor: "border-orange-100",
    path: "/sports/tennis",
  },
  {
    name: "Swimming",
    icon: "🏊",
    bgColor: "bg-cyan-50 hover:bg-cyan-100",
    textColor: "text-cyan-700",
    borderColor: "border-cyan-100",
    path: "/sports/swimming",
  },
  {
    name: "Basketball",
    icon: "🏀",
    bgColor: "bg-rose-50 hover:bg-rose-100",
    textColor: "text-rose-700",
    borderColor: "border-rose-100",
    path: "/sports/basketball",
  },
  {
    name: "Cricket",
    icon: "🏏",
    bgColor: "bg-indigo-50 hover:bg-indigo-100",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-100",
    path: "/sports/cricket",
  },
];

export default function PopularSports() {
  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Popular Sports
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            Find facilities for every sport you love
          </p>
        </div>

        {/* Sports Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {sportsData.map((sport, index) => (
            <Link href={sport.path} key={index}>
              <div
                className={`flex flex-col items-center justify-center p-6 rounded-2xl border ${sport.borderColor} ${sport.bgColor} transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-sm cursor-pointer h-full`}
              >
                {/* Icon/Emoji */}
                <div className="text-4xl md:text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">
                  {sport.icon}
                </div>
                
                {/* Sport Name */}
                <span className={`font-semibold text-sm md:text-base ${sport.textColor}`}>
                  {sport.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}