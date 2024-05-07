import { MatchStatsItem } from "@/app/types";

export const MatchStatsRow = (props: {
  stats: MatchStatsItem,
  evenRow: boolean
}) => {
  const { stats, evenRow } = props

  const isHomeWin = stats.home > stats.away;

  const rightTextStyle = `text-right ${isHomeWin ? 'font-bold' : ''}`;
  const leftTextStyle = `text-left ${!isHomeWin ? 'font-bold' : ''}`;
  const rowStyle = `grid grid-cols-3 px-4 py-2 ${evenRow ? 'bg-gray' : 'bg-white'}`;

  return <div className={rowStyle}>
    <span className={rightTextStyle}>{stats.home}</span>
    <span className="text-center">{stats.label}</span>
    <span className={leftTextStyle}>{stats.away}</span>
  </div>
};