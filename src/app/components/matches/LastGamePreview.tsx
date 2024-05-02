import { MatchThumbnail } from "@/app/types"
import Link from "next/link";
import { ScoreSheetRow } from "../scoresheets/ScoreSheetRow";

export const LastGamePreview = (props: {
  match: MatchThumbnail
}) => {
  const { match } = props;

  const formattedDate = match?.started_at.toISOString();
  const startedGame = Date.now() > match.started_at.getTime();

  return <div className="bg-slate-700 mb-2 p-4 text-white border-t-2 border-solid border-red">
  <Link href={`match/${match?.slug}`}>
  <div className="border-b border-solid border-white">
    <span>{formattedDate}</span>
    <span className="px-4">|</span>
    <span>{match?.venue}</span>
    </div>
  <div className="content-center border-b border-solid border-white font-bold">
    <div className="flex flex-row">
      <span>{match?.home.name}</span>
      {startedGame && <ScoreSheetRow scorers={match?.home.scorers} />}
      </div>
      {startedGame && <span>{match?.home.score}</span>}
    <div>V</div>
      {startedGame && <span>{match?.away.score}</span>}
    <div className="flex flex-row">
      <span>{match?.away.name}</span>
      {startedGame && <ScoreSheetRow scorers={match?.away.scorers} />}
      </div>
  </div>
  <div>
  <span className="mx-2">News & Video</span>
  {!startedGame && <span className="mx-2">Ticket info</span>}
  </div>
  </Link>
</div>
}