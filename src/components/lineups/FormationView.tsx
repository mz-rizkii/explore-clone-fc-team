import { TeamFormation } from "@/types"
import { LineupFormationView } from "./LineupFormationView";

export const FormationView = (props: TeamFormation) => {
  const {
    home, away
  } = props;

  return <div>
    <LineupFormationView teamLineUp={home} isHome={true} />
    <LineupFormationView teamLineUp={away} />
  </div>
}