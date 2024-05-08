import { Fragment } from "react"
import { MatchStatsRow } from "../statistic/MatchStatsRow"
import { MatchStatsPreview } from "@/types"
import Image from "next/image"

export const MatchStats = () => {
  const matchStats: MatchStatsPreview = {
    home: { name: 'Arsenal', logo: '/teams/ars.webp' },
    away: { name: 'Bournemouth', logo: '/teams/bour.webp' },
    stats: [{
      home: 55.3, away: 44.7, label: 'Possesion %'
    }, { label: 'Shots on target', home: 9, away: 2 },
  { label: 'Shots', home: 27, away: 7 },
{ label: 'Touches', home: 643, away: 555 },
{ label: 'Passes', home: 459, away: 368 },
{ label: 'Tackles', home: 18, away: 14 },
{ label: 'Clearances', home: 12, away: 23 },
{ label: 'Corners', home: 6, away: 1 },
{ label: 'Offsides', home: 5, away: 0 },
{ label: 'Yellow cards', home: 2, away: 3 },
{ label: 'Fouls conceded', home: 16, away: 12 }
]
  }

  return <Fragment>
    <ul className="rounded-lg border-gray border-2 m-4">
      <li className="grid grid-cols-3">
        <div className="flex flex-row items-center justify-end text-lg">
          <span className="align-middle font-bold px-4">{matchStats.home.name}</span>
           <Image src={matchStats.home.logo} alt={matchStats.home.name} width={48} height={48} />
        </div>
        <div />
        <div className="flex flex-row items-center">
          <Image src={matchStats.away.logo} alt={matchStats.away.name} width={48} height={48} />
          <span className="align-middle font-bold text-lg px-4">{matchStats.away.name}</span>
        </div>
      </li>
      {matchStats.stats.map((stat, index) => <li><MatchStatsRow stats={stat} evenRow={index % 2 > 0} /></li>)}
    </ul>
  </Fragment>
}