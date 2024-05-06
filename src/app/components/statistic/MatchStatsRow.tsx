import { MatchStatsItem } from "@/app/types";

export const MatchStatsRow = (props: {
  stats: MatchStatsItem
}) => {
  const { stats } = props

  return <div>
    <span>{stats.home}</span>
    <span>{stats.label}</span>
    <span>{stats.away}</span>
  </div>
};