import { TeamFormationInfo } from "@/types";
import Image from "next/image";

export const TeamFormationHeader = (props: TeamFormationInfo & {
  isHomeTeam: boolean
}) => {
  const { team_logo, team_name, formation, isHomeTeam } = props;

  const teamLogo = <Image src={team_logo} alt={team_name} width={48} height={48} />;
  const teamFormation = <div className="flex flex-col">
    <span>{team_name}</span>
    <span>{formation}</span>
  </div>
  
  if (isHomeTeam) {
    return <div className="flex flex-row">
      { teamFormation }
      { teamLogo }
    </div>
  }

  return <div className="flex flex-row">
      { teamLogo }
      { teamFormation }
    </div>
}