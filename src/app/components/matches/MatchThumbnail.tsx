import { MatchPreview } from "@/app/types";
import Link from "next/link";
import { GamePreview } from "./GamePreview";
import { LastGamePreview } from "./LastGamePreview";

export const MatchThumbnail = (props: { match: MatchPreview, isNextGame: boolean }) => {
  const { match, isNextGame } = props;
  
  if (match.isMonthSummary) {
    return <div className="p-4 mb-2 font-bold">
      <span>{match.month}</span>&nbsp;<span className="text-slate-600">{match.year}</span> 
    </div>
  }

  const matchData = match.match;

  if (isNextGame) {
    return <LastGamePreview match={match?.match} />
  }

  return <GamePreview match={match?.match} />
};