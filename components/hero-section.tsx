"use client"

import { useState } from "react"

const dayTabs = [
  { label: "Yesterday", count: 127 },
  { label: "Today", count: 11 },
  { label: "Tomorrow", count: 137 },
]

export function HeroSection() {
  const [activeDay, setActiveDay] = useState("Today")

  return (
    <section className="bg-[#212121] px-2 pb-8 pt-20 text-center">
      {/* Decorative bar */}
      <div className="mx-auto mb-4 flex w-10 justify-center gap-1">
        <div className="h-1 w-5 rounded-full bg-[#1e3a8a]" />
        <div className="h-1 w-5 rounded-full bg-[#dc2626]" />
      </div>

      <h1 className="mb-6 text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl md:text-4xl">
        Sure Betting Tips For Today
      </h1>

      {/* Day Tabs */}
      <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 p-1">
        {dayTabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveDay(tab.label)}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              activeDay === tab.label
                ? "bg-[#5686FF] text-[#1a1a2e] shadow-sm"
                : "text-white/80 hover:text-white"
            }`}
          >
            {tab.label}
            {(activeDay !== tab.label || tab.label !== "Today") && (
              <span
                className={`text-xs ${
                  activeDay === tab.label ? "text-[#1a1a2e]/70" : "text-white/50"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
