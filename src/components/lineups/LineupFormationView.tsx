import { LineupFormation } from "@/types";
import { reverseFormation } from "@/app/utils/formation";

export const LineupFormationView = (props: {
  teamLineUp: LineupFormation,
  isHome?: boolean
}) => {
  const {
    teamLineUp: { lineups },
    isHome
  } = props;  

  const playerLineUp = isHome? lineups : reverseFormation(lineups);

  return <div>
    <ul>
      {playerLineUp.map((players, index)=> {
      const gridStyle = 'flex flex-row justify-center';  
      
      return <li key={index}>
        <div className={gridStyle}>{players.map(player=> <span className="px-8 py-2">{player}</span>) }</div>
        </li>
      }) }
    </ul>
  </div>
};