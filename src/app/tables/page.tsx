import { TableView } from "../../components/tables/TableView";

export default function TablePage() {
  const teams = [
    { position: 1, team_logo: '', team_name: 'Arsenal', played: 35, win: 25, draw: 5, lose: 5, goal_fielded: 85, goal_allowed: 28, goal_diff: 57, points: 80 },
    { position: 2, team_logo: '', team_name: 'Manchester City', played: 34, win: 24, draw: 7, lose: 3, goal_fielded: 82, goal_allowed: 32, goal_diff: 50, points: 79 },
    { position: 3, team_logo: '', team_name: 'Liverpool', played: 35, win: 22, draw: 9, lose: 4, goal_fielded: 77, goal_allowed: 36, goal_diff: 41, points: 75 },
    { position: 4, team_logo: '', team_name: 'Aston Villa', played: 35, win: 20, draw: 7, lose: 8, goal_fielded: 73, goal_allowed: 52, goal_diff: 21, points: 67 },
    { position: 5, team_logo: '', team_name: 'Tottenham Hotspur', played: 33, win: 18, draw: 6, lose: 9, goal_fielded: 67, goal_allowed: 52, goal_diff: 15, points: 60 },
    { position: 6, team_logo: '', team_name: 'Manchester United', played: 34, win: 16, draw: 6, lose: 12, goal_fielded: 52, goal_allowed: 51, goal_diff: 1, points: 54 },
  ];

  const title = 'Premier League 2023-2024'

  return <TableView title={title} teams={teams} />
}