import { TeamSheets } from "@/types";
import { LineUpRow } from "./LineUpRow";
import Image from "next/image";
import { TeamFormationHeader } from "./TeamFormationHeader";

export const LineupViews = (props: {
  team: TeamSheets,
  isHomeTeam: boolean
}) => {
  const { 
    team: { 
      benches, starting, team_logo, team_name, formation
    },
    isHomeTeam
} = props;

  return <div>
    <TeamFormationHeader team_logo={team_logo} team_name={team_name} formation={formation} isHomeTeam={isHomeTeam} />
    <div>
      <ul>
        {starting.map((player) => <li><LineUpRow player={player} homeTeam={isHomeTeam} /></li>)}
      </ul>
    </div>
    <div>
      <span className="font-md font-bold p-4">Substitutions</span>
      <ul>
        {benches.map((player) => <li><LineUpRow player={player} homeTeam={isHomeTeam} /></li>)}
      </ul>
    </div>
  </div>
};