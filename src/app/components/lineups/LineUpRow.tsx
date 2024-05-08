import { PlayerLineUp } from "@/app/types"
import Image from "next/image";

export const LineUpRow = (props: {
  homeTeam: boolean,
  player: PlayerLineUp
}) => {
  const { homeTeam, player } = props;

  return <div className="flex flex-row border-black bb-2">
    {!homeTeam && <div>
      <span className="align-center">{player.number}</span>
      { player.image && <Image src={player.image} alt={player.name} width={48} height={128} /> }
      </div>}
      <div className="flex flex-col px-4 py-2">
        <span>{player.name}</span>
        <span>{player.country}</span>
      </div>
      {homeTeam && <div>
      { player.image && <Image src={player.image} alt={player.name} width={48} height={128} /> }
      <span className="align-center">{player.number}</span>
      </div>}
    </div>
}