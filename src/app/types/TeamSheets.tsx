export enum PlayerPositions {
  gk = 'GK',
  df = 'DF',
  mf = 'MF',
  fw = 'FW'
}

export type PlayerLineUp = {
  position: PlayerPositions;
  number: number;
  name: string;
  country: string;
  image: string;
  subs_at?: string;
  captain?: boolean
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