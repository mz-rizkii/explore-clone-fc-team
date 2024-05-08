import { StandingTable } from "@/types";

export const TableRow = (props: { team: StandingTable}) => {
  const { team: {
    position,
    team_name,
    team_logo,
    played,
    win,
    draw,
    lose,
    goal_fielded,
    goal_allowed,
    goal_diff,
    points
  }} = props;

  return <tr>
    <td>{position}</td>
    <td>{team_logo}{team_name}</td>
    <td>{played}</td>
    <td>{win}</td>
    <td>{draw}</td>
    <td>{lose}</td>
    <td>{goal_fielded}</td>
    <td>{goal_allowed}</td>
    <td>{goal_diff}</td>
    <td>{points}</td>
  </tr>
};