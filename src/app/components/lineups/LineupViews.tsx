import { TeamSheets } from "@/app/types";
import { LineUpRow } from "./LineUpRow";
import Image from "next/image";

export const LineupViews = (props: {
  team: TeamSheets,
  isHomeTeam: boolean
}) => {
  const { 
    team: { 
      benches, starting, team_logo, team_name
    },
    isHomeTeam
} = props;

  return <div>
    <div className="flex flex-row">
      {!isHomeTeam && <Image src={team_logo} alt={team_name} width={48} height={48} />}
      <span>{team_name}</span>
      {isHomeTeam && <Image src={team_logo} alt={team_name} width={48} height={48} />}
    </div>
    <div>
      <ul>
        {starting.map((player) => <li><LineUpRow player={player} homeTeam={isHomeTeam} /></li>)}
      </ul>
    </div>
    <div>
      <span>Substitions</span>
      <ul>
        {benches.map((player) => <li><LineUpRow player={player} homeTeam={isHomeTeam} /></li>)}
      </ul>
    </div>
  </div>
};