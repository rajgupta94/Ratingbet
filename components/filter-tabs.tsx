"use client"

import { useState } from "react"

const filters = [
  "Top games",
  "1x2",
  "Goals",
  "BTTS",
  "HT/FT",
  "Asian Handicap",
  "Double chance",
  "Corners",
  "Cards",
]

export function FilterTabs() {
  const [activeFilter, setActiveFilter] = useState("Top games")

  return (
    <div className="bg-white px-4 py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={` border px-4 py-1.5 text-sm font-medium transition-all ${
              activeFilter === filter
                ? "border-[#1a1a2e] bg-[#212121] text-white"
                : "border-gray-300 bg-[#EBF0F9] text-gray-700 hover:border-gray-400"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}
