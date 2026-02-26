import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FilterTabs } from "@/components/filter-tabs"
import { MatchList } from "@/components/match-list"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Navbar />
      <HeroSection />
      <FilterTabs />
      <MatchList />
    </main>
  )
}
