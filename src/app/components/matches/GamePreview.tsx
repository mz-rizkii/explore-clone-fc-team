import { MatchThumbnail } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

export const GamePreview = (props: {
  match: MatchThumbnail
}) => {
  const { match } = props;

  const formattedDate = match?.started_at.toISOString();
  const opponent = match?.isHomeGame ? match?.away.name : match?.home.name;
  const opponent_logo = match?.isHomeGame ? match?.away.logo : match?.home.logo;
  const game_letter = match?.isHomeGame? 'H' : 'A';
  const startedGame = Date.now() > match.started_at.getTime();

  return <div className="p-4 mb-2">
    <Link href={`match/${match?.slug}`}>
      
      <div className="content-center border-b border-solid border-gray grid grid-cols-2">
        <div className="content-center">
          {opponent_logo && <Image src={opponent_logo} alt={opponent||''} />}
          <span className="font-bold">{opponent}</span>
        </div>
        <div>
          <div className="grid grid-cols-2">
          <div className="content-center object-right">
            <span className="border p-2 border-solid border-black">{game_letter}</span>
            </div>
        <div className="flex flex-col">
          <span>{formattedDate}</span>
          <span>{match?.venue}</span>
          <span>{match?.competition}</span>
        </div>
        {startedGame && 
        <div>
          <span className={match.isHomeGame? 'text-red' : 'text-black'}>{match.home.score}</span>
          <span>-</span>
          <span className={match.isHomeGame? 'text-black' : 'text-red'}>{match.away.score}</span>
        </div>}
          </div>
        
        </div>
      </div>
      <div>
      <span className="mx-2">News & Video</span>
      {startedGame && <span className="mx-2">Ticket info</span>}
      </div>
      </Link>
  </div>
}