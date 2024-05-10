import { PlayerStats } from "@/types";
import { StatisticRow } from "./StatisticRow";

export default function StatisticView(props: {
  playerStats: PlayerStats[]
}) {
 const { playerStats } = props;
 
  const competitions = playerStats[0].stats.map(({ competition }) => competition);

  const stats_labels = [];

  for (const competition of competitions) {
    stats_labels.push('Ap');
    stats_labels.push('Gl');
  }

 return <div>
  <table>
    <thead>
      
  <tr>
        <th></th>
        {competitions.map((competitionName, index) => <th colSpan={2} key={index}>{competitionName}</th>) }
      </tr>
      <tr>
        <th>Player Name</th>
        {stats_labels.map((label, index) => <th key={index}>{label}</th>) }
      </tr>
    </thead>
    <tbody>
      { playerStats.map((item, index) => <StatisticRow key={`stats-row-${index}`} id={item.id} name={item.name} stats={item.stats}/>)}
      </tbody>
  </table>
 </div>
};