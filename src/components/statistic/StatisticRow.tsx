import { PlayerStats } from "@/types";

export const StatisticRow = (props: PlayerStats) => {
  const { name, stats, id } = props;
  
  return <tr key={id}>
    <td>{name}</td>
    {stats.map((item, index) => (
      <><td key={`${index}-ta`}>{item.total_appearance}</td><td key={`${index}-tg`}>{item.total_goal}</td></>
    ))}
  </tr>
}