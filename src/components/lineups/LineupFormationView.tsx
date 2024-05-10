import { LineupFormation } from "@/types";
import { reverseFormation } from "../../utils/formation";
import { drawer } from "../../utils/drawField";

export const LineupFormationView = (props: {
  teamLineUp: LineupFormation,
  isHome?: boolean
}) => {
  const {
    teamLineUp: { lineups },
    isHome
  } = props;  

  const playerLineUp = drawer.drawField(isHome? lineups : reverseFormation(lineups), isHome)

  return <div>
    <ul>
      {playerLineUp.map((line, index)=> {
      const gridStyle = `flex flex-row justify-center bg-green-${line.darkColor? '700' : '400'}`;  
      
      return <li key={index}>
          <div className={gridStyle}>
            {line?.players && line?.players.map((player, playerIndex)=> <span key={`formation-${playerIndex}`} className="px-8 py-2 bg-green">{player}</span>) }
          </div>
        </li>
      }) }
    </ul>
  </div>
};