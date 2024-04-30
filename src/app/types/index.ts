type MiniStats = {
 competition: string;
 total_appearance: number;
 total_goal: number;
};

export type PlayerStats = {
  id: number;
  name: string;
  stats: MiniStats[]
} 

export type StandingTable = {
  position: number;
  team_name: string;
  team_logo: string;
  played: number;
  win: number;
  draw: number;
  lose: number;
  goal_fielded: number;
  goal_allowed: number;
  goal_diff: number;
  points: number;
} 