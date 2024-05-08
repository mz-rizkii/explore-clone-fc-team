import { StandingTable } from "@/types";
import { TableRow } from "./TableRow";

export const TableView = (props: {
  title: string;
  teams: StandingTable[]
}) => {
  const { title, teams } = props

  return <div>
    <div>{title}</div>
    <table>
      <thead>
        <tr>
          <th>Pos</th>
          <th>Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
          <th>+/-</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => <TableRow team={team} />)}
      </tbody>
    </table>
  </div>
};