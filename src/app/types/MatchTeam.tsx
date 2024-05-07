
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