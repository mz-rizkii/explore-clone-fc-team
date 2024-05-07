import { PlayerLineUp } from "@/app/types"
import Image from "next/image";

export const LineUpRow = (props: {
  homeTeam: boolean,
  player: PlayerLineUp
}) => {
  const { homeTeam, player } = props;

  return <div className="grid grid-cols-3">
    {!homeTeam && <div>
      <span>{player.number}</span>
      { player.image && <Image src={player.image} alt={player.name} width={48} height={128} /> }
      </div>}
      <div  className="flex flex-row">
        <span>{player.name}</span>
        <span>{player.country}</span>
      </div>
      {homeTeam && <div>
      { player.image && <Image src={player.image} alt={player.name} width={48} height={128} /> }
      <span>{player.number}</span>
      </div>}
    </div>
}