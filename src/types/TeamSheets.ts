import { TeamInfo } from "./TeamInfo";

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

export type TeamFormationInfo = TeamInfo & {
  formation: string;
}

export type TeamSheets = TeamFormationInfo & {
  starting: PlayerLineUp[];
  benches: PlayerLineUp[];
};

export type LineupFormation = {
  formation: string;
  lineups: string[][];
}

export type TeamFormation = {
  home: LineupFormation;
  away: LineupFormation;
}