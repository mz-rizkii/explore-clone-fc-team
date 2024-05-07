export type PlayerPosition = 'GK' | 'DF' | 'MF' | 'FW';

export type PlayerLineUp = {
  position: PlayerPosition;
  number: number;
  name: string;
  country: string;
  image: string;
  subs_at: string;
}

export type TeamSheets = {
  starting: PlayerLineUp[];
  benches: PlayerLineUp[];
  formation: string;
  team_name: string;
  team_logo: string;
};

export type LineupFormation = {
  formation: string;
  lineups: string[][];
}

export type TeamFormation = {
  home: LineupFormation;
  away: LineupFormation;
}