import { MatchRow } from "./match-row"

export interface Match {
  id: number
  date: string
  time: string
  league: string
  homeTeam: string
  awayTeam: string
  homeColor: string
  awayColor: string
  bestTip: string
  percentage: number
  tipsCount: number
}

const matches: Match[] = [
  {
    id: 1,
    date: "27 Feb",
    time: "00:00",
    league: "Stars League Qatar",
    homeTeam: "Al-Duhail SC",
    awayTeam: "Al-Sadd",
    homeColor: "#e8a830",
    awayColor: "#555555",
    bestTip: "Asian Handicap: 2 +0.25",
    percentage: 100,
    tipsCount: 36,
  },
  {
    id: 2,
    date: "27 Feb",
    time: "00:00",
    league: "Premier League Iraq",
    homeTeam: "Zakho",
    awayTeam: "Al-Gharraf",
    homeColor: "#27ae60",
    awayColor: "#d5c8e0",
    bestTip: "O/U 2nd half: Over 0.5",
    percentage: 92,
    tipsCount: 25,
  },
  {
    id: 3,
    date: "27 Feb",
    time: "00:00",
    league: "Stars League Qatar",
    homeTeam: "Al-Gharafa",
    awayTeam: "Al-Rayyan SC",
    homeColor: "#2ecc40",
    awayColor: "#2980b9",
    bestTip: "O/U Away Team: Over 1.5",
    percentage: 88,
    tipsCount: 17,
  },
  {
    id: 4,
    date: "27 Feb",
    time: "01:00",
    league: "Copa Libertadores",
    homeTeam: "Boca Juniors",
    awayTeam: "River Plate",
    homeColor: "#2c3e97",
    awayColor: "#c0392b",
    bestTip: "BTTS: Yes",
    percentage: 85,
    tipsCount: 42,
  },
  {
    id: 5,
    date: "27 Feb",
    time: "02:30",
    league: "Saudi Pro League",
    homeTeam: "Al-Hilal",
    awayTeam: "Al-Nassr",
    homeColor: "#1a5276",
    awayColor: "#f4d03f",
    bestTip: "Goals: Over 2.5",
    percentage: 79,
    tipsCount: 31,
  },
]

export function MatchList() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        {/* Table Header */}
        <div className="flex items-center gap-6 border-b border-gray-200 px-6 py-3">
          <span className="w-16 text-sm font-medium text-gray-500">Time</span>
          <span className="text-sm font-medium text-gray-500">Match</span>
        </div>

        {/* Date Header */}
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-2.5">
          <span className="text-sm font-bold text-gray-900">27 February</span>
        </div>

        {/* Match Rows */}
        <div className="divide-y divide-gray-200">
          {matches.map((match) => (
            <MatchRow key={match.id} match={match} />
          ))}
        </div>
      </div>
    </div>
  )
}
