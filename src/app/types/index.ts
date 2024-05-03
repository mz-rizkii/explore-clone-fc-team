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

export type ScorerData = {
  name: string;
  minute: string;
  status?: string;
}

export type MatchTeam = {
  name: string;
  logo: string;
  score?: number;
  scorers?: ScorerData[];
}

export type MatchThumbnail = {
  slug: string;
  home: MatchTeam
  away: MatchTeam
  venue: string;
  started_at: Date;
  competition: string;
  competition_logo: string;
  isHomeGame: boolean;
}

export type MatchPreview = {
  id: number;
  isMonthSummary: boolean;
  match?: MatchThumbnail;
  month?: string;
  year?: number;
}

export type CommentaryByMinute = {
  minute?: string;
  extraTime?: string;
  icon?: string;
  header?: string;
  comment: string;
  image?: string;
  isGoal?: boolean;
}