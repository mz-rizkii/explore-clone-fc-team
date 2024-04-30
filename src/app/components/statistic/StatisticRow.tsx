import { PlayerStats } from "@/app/types";

export const StatisticRow = (props: PlayerStats) => {
  const { name, stats, id } = props;
  
  return <tr key={id}>
    <td>{name}</td>
    {stats.map((item) => (
      <><td>{item.total_appearance}</td><td>{item.total_goal}</td></>
    ))}
  </tr>
}