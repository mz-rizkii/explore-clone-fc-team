import { MatchTeam } from "./MatchTeam";

export type MatchStatsItem = {
  home: number;
  away: number;
  label: string;
}

export type MatchStatsPreview = {
  home: MatchTeam;
  away: MatchTeam;
  stats: MatchStatsItem[];
}