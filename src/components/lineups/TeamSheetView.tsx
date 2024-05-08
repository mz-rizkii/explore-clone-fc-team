import { PlayerPositions } from "@/types";
import { LineupViews } from "./LineupViews";
import { FormationView } from "./FormationView";

export const TeamSheetView = () => {
  const home = {
    starting: [
      { position: PlayerPositions.gk, number: 22, name: 'David Raya', country: 'spain', image: '' },
      { position: PlayerPositions.df, number: 4, name: 'Ben White', country: 'spain', image: '' },
      { position: PlayerPositions.df, number: 18, name: 'Tomiyasu', country: 'spain', image: '' },
      { position: PlayerPositions.df, number: 2, name: 'Saliba', country: 'spain', image: '' },
      { position: PlayerPositions.df, number: 6, name: 'Gabriel', country: 'spain', image: '' },
      { position: PlayerPositions.mf, number: 5, name: 'Thomas', country: 'spain', image: '' },
      { position: PlayerPositions.mf, number: 8, name: 'Odegaard', country: 'spain', image: '', captain: true },
      { position: PlayerPositions.mf, number: 41, name: 'Rice', country: 'spain', image: '' },
      { position: PlayerPositions.fw, number: 19, name: 'Trossard', country: 'spain', image: '' },
      { position: PlayerPositions.fw, number: 29, name: 'Havertz', country: 'spain', image: '' },
      { position: PlayerPositions.fw, number: 7, name: 'Saka', country: 'spain', image: '' }
    ],
    benches: [
      { position: PlayerPositions.gk, number: 22, name: 'Ramsdale', country: 'spain', image: '' },
      { position: PlayerPositions.mf, number: 35, name: 'Zinchenko', country: 'spain', image: '' },
      { position: PlayerPositions.mf, number: 15, name: 'Kiwior', country: 'spain', image: '' },
      { position: PlayerPositions.mf, number: 21, name: 'Vieira', country: 'spain', image: '' },
      { position: PlayerPositions.mf, number: 10, name: 'Smith Rowe', country: 'spain', image: '' },
      { position: PlayerPositions.mf, number: 20, name: 'Jorginho', country: 'spain', image: '' },
      { position: PlayerPositions.fw, number: 11, name: 'Martinelli', country: 'spain', image: '' },
      { position: PlayerPositions.fw, number: 9, name: 'Jesus', country: 'spain', image: '' },
      { position: PlayerPositions.fw, number: 14, name: 'Nketiah', country: 'spain', image: '' },
    ],
    formation: '4-3-3',
    team_name: 'Arsenal',
    team_logo: '/teams/ars.webp'
  };

  const away = {
    starting: [
      { position: PlayerPositions.gk, number: 42, name: 'Mark Travers', country: 'Ireland', image: '' },
      { position: PlayerPositions.df, number: 11, name: 'Dango Outtara', country: 'Burkina Faso', image: '' },
      { position: PlayerPositions.df, number: 15, name: 'Adam Smith', country: 'England', image: '', captain: true, subs_at: '89' },
      { position: PlayerPositions.df, number: 25, name: 'Marcos Senesi', country: 'Argentina', image: '', subs_at: '80' },
      { position: PlayerPositions.df, number: 27, name: 'Illia Zabarnyi', country: 'Ukraine', image: '' },
      { position: PlayerPositions.mf, number: 4, name: 'Lewis Cook', country: 'England', image: '' },
      { position: PlayerPositions.mf, number: 10, name: 'Ryan Christie', country: 'Scotland', image: '' },
      { position: PlayerPositions.mf, number: 14, name: 'Alex Scott', country: 'England', image: '', subs_at: '71' },
      { position: PlayerPositions.fw, number: 9, name: 'Dominic Solanke', country: 'England', image: '' },
      { position: PlayerPositions.fw, number: 19, name: 'Justin Kluivert', country: 'Netherland', image: '', subs_at: '89' },
      { position: PlayerPositions.fw, number: 24, name: 'Antonie Semenyo', country: 'Ghana', image: '' },
    ],
    benches: [
      { position: PlayerPositions.gk, number: 14, name: 'Neto', country: 'Brazil', image: '' },
      { position: PlayerPositions.df, number: 37, name: 'Max Aarons', country: 'England', image: '', subs_at: '89' },
      { position: PlayerPositions.df, number: 8, name: 'Romain Faivre', country: 'France', image: '', subs_at: '89' },
      { position: PlayerPositions.df, number: 29, name: 'Philip Billing', country: 'Denmark', image: '', subs_at: '71' },
      { position: PlayerPositions.df, number: 26, name: 'Enes Unal', country: 'Turkey', image: '', subs_at: '80' },
    ],
    formation: '4-3-3',
    team_name: 'Bournemouth',
    team_logo: '/teams/bour.webp'
  };

  const homeFormation = { lineups: [
    ['22'], ['4', '2', '6', '18'], ['8', '5', '41'], ['7', '29', '19']
  ], formation: '4-3-3'};
  const awayFormation = { lineups: [
    ['42'], ['15', '27', '25', '11'], ['10', '4', '14'], ['24', '9', '19']
  ], formation: '4-3-3' };

  return <div className="grid grid-cols-3">
    <LineupViews team={home} isHomeTeam={true} />
    <FormationView home={homeFormation} away={awayFormation} />
    <LineupViews team={away} isHomeTeam={false} />
  </div>
};