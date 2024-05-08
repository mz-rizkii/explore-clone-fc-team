import { MatchThumbnail } from "@/types"
import Link from "next/link";
import { ScoreSheetRow } from "../scoresheets/ScoreSheetRow";
import Image from "next/image";
import { DateHelper } from "@/utils/dateFormatter";

export const LastGamePreview = (props: {
  match?: MatchThumbnail
}) => {
  const { match } = props;

  if (!match) {
    return <div />
  }

  const formattedDate = DateHelper.toDateTimeWithDay(match?.started_at);
  const startedGame = Date.now() > match.started_at.getTime();

  return <div className="bg-slate-700 mb-2 p-4 text-white border-t-2 border-solid border-red content-end">
  <Link href={`matches/${match?.slug}`}>
  <div className="border-b border-solid border-white">
    <span>{formattedDate}</span>
    <span className="px-4">|</span>
    <span>{match?.venue}</span>
    <Image src={match?.competition_logo} width={128} height={64} alt={match?.competition} /> 
    </div>
  <div className="content-center border-b border-solid border-white font-bold grid grid-cols-5">
    <Image className="justify-end" src={match?.home.logo} alt={match?.home.name} width={64} height={64}/>
    <div className="flex flex-col text-right align-middle">
      <span className="text-xl">{match?.home.name}</span>
      {startedGame && <ScoreSheetRow scorers={match?.home.scorers} />}
      </div>
    <div className="text-xl text-center">
      {!startedGame && 'V'}
      {startedGame && <span>{match?.home.score}</span>}
      {startedGame && <span>&nbsp;-&nbsp;</span>}
      {startedGame && <span>{match?.away.score}</span>}
    </div>
    <div className="flex flex-col">
      <span className="text-xl">{match?.away.name}</span>
      {startedGame && <ScoreSheetRow scorers={match?.away.scorers} />}
      </div>
      <Image src={match?.away.logo} alt={match?.away.name} width={64} height={64}/>
  </div>
  <div>
  <span className="mx-2">News & Video</span>
  {!startedGame && <span className="mx-2">Ticket info</span>}
  </div>
  </Link>
</div>
}