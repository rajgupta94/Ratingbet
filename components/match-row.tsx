import type { Match } from "./match-list"

export function MatchRow({ match }: { match: Match }) {
  return (
    <div className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-gray-50 sm:gap-6">
      {/* Time */}
      <div className="w-16 shrink-0 text-center">
        <div className="text-sm font-medium text-gray-700">{match.date}</div>
        <div className="text-xs text-gray-400">{match.time}</div>
      </div>

      {/* Divider */}
      <div className="hidden h-14 w-px bg-gray-200 sm:block" />

      {/* Teams */}
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 text-xs font-medium text-gray-400">
          {match.league}
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-5 w-5 shrink-0 rounded-full"
              style={{ backgroundColor: match.homeColor }}
            />
            <span className="truncate text-sm font-medium text-gray-900">
              {match.homeTeam}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-5 w-5 shrink-0 rounded-full"
              style={{ backgroundColor: match.awayColor }}
            />
            <span className="truncate text-sm font-medium text-gray-900">
              {match.awayTeam}
            </span>
          </div>
        </div>
      </div>

      {/* Best Tip */}
      <div className="hidden flex-1 sm:block">
        <div className="mb-0.5 text-xs font-semibold text-#8ADBFD">Best tip</div>
        <div className="text-sm font-medium text-gray-900">{match.bestTip}</div>
      </div>

      {/* Percentage */}
      <div className="shrink-0 text-right">
        <span className="text-lg font-bold text-gray-900">
          {match.percentage}%
        </span>
      </div>

      {/* Tips Button */}
      <button className="shrink-0 rounded-lg bg-[#f5c518] px-5 py-2.5 text-sm font-bold text-[#1a1a2e] transition-opacity hover:opacity-90">
        {match.tipsCount} Tips
      </button>
    </div>
  )
}
