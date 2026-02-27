"use client"

import {
  ChevronDown,
  Send,
  Gift,
  Globe,
  LogIn,
  Settings,
} from "lucide-react"

const navItems = [
  { label: "Predictions", hasDropdown: true },
  { label: "Leagues", hasDropdown: true },
  { label: "Math predictions", hasDropdown: false },
  { label: "Football Tips", hasDropdown: true },
  { label: "Scores", hasDropdown: false },
  { label: "Bookmakers", hasDropdown: true },
  { label: "Bonuses", hasDropdown: false },
]

export function Navbar() {
  return (
    <nav className="bg-[#212121] fixed  text-white">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-1">
        {/* Logo */}
        <div className="mr-8 flex items-center gap-1.5">
          <div className="flex items-end gap-[3px]">
            <div className="h-3 w-[5px] rounded-sm bg-[#f5c518]" />
            <div className="h-4 w-[5px] rounded-sm bg-[#f5c518]" />
            <div className="h-5 w-[5px] rounded-sm bg-[#f5c518]" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">ratingbet</span>
        </div>

        {/* Nav Items */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-[#FFFFFF] transition-colors hover:text-white"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="ml-auto flex items-center gap-3">
          <button className="flex items-center gap-1.5 rounded-md bg-[#383B41] text-white px-4 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90">
            <Send className="h-4 w-4 text-[#5686FF]" />
            Telegram
          </button>

          <div className="relative">
            <button className="rounded-md bg-[#f5c518] p-2 text-[#1a1a2e]">
              <Gift className="h-5 w-5" />
            </button>
            <span className="absolute -right-1.5 -top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              1
            </span>
          </div>

          <button className="flex items-center gap-1.5 px-2 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-[#383B41]">
            <Globe className="h-4 w-4" />
            English
            <ChevronDown className="h-3.5 w-3.5" />
          </button>

          <button className="flex items-center gap-1.5 px-1 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-[#383B41] rounded-md transition-colors">
            <LogIn className="h-4 w-4" />
            Log in
          </button>

          <button className="p-1 text-gray-400 transition-colors hover:text-white hover:bg-[#383B41]">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}
