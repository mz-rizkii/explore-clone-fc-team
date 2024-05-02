import { MatchList } from "../components/matches/MatchList"
import { MatchMenu } from "../components/matches/MatchMenu"

export default function MatchListPage () {
  const matches = [
    { id: 1, isMonthSummary: true, month: 'April', year: 2024 },
    {
      id: 2, isMonthSummary: false, match: {
        slug: 'tot-ars',
        home: { name: 'Tottenham Hotspurs', logo: '/teams/tot.webp', score: 2, scorers: [
          { name: 'C.Romero', minute: '68' },
          { name: 'Son Heung-Min', minute: '86', status: 'pen' },
        ]},
        away: { name: 'Arsenal', logo: '/teams/ars.webp', score: 3, scorers: [
          { name: 'P.Hojberg', minute: '14', status: 'og' },
          { name: 'Saka', minute: '26' },
          { name: 'Havertz', minute: '37' },
        ]},
        venue: 'Tottenham Hostspur Stadium',
        started_at: new Date('2024-04-28 14:00:00'),
        competition: 'Premier League',
        competition_logo: '/leagues/epl.webp',
        isHomeGame: false,
      }
    },
    {
      id: 3, isMonthSummary: false, match: {
        slug: 'ars-che',
        home: { name: 'Arsenal', logo: '', score: 5},
        away: { name: 'Chelsea', logo: '/teams/che.webp', score: 0},
        venue: 'Emirates Stadium',
        started_at: new Date('2024-04-23 20:00:00'),
        competition: 'Premier League',
        competition_logo: '',
        isHomeGame: true,
      }
    },
    {
      id: 4, isMonthSummary: false, match: {
        slug: 'wol-ars',
        home: { name: 'Wolves', logo: '/teams/wol.gif', score: 0 },
        away: { name: 'Arsenal', logo: '', score: 2 },
        venue: 'Molineux Stadium',
        started_at: new Date('2024-04-20 19:30:00'),
        competition: 'Premier League',
        competition_logo: '',
        isHomeGame: false,
      }
    },
    {
      id: 4, isMonthSummary: false, match: {
        slug: 'ars-avl',
        home: { name: 'Arsenal', logo: '', score: 0 },
        away: { name: 'Aston Villa', logo: '/teams/avl.webp', score: 2 },
        venue: 'Emirates Stadium',
        started_at: new Date('2024-04-14 16:30:00'),
        competition: 'Premier League',
        competition_logo: '',
        isHomeGame: true,
      }
    },
    {
      id: 4, isMonthSummary: false, match: {
        slug: 'brit-ars',
        home: { name: 'Brighton', logo: '/teams/bha.webp', score: 0 },
        away: { name: 'Arsenal', logo: '', score: 3 },
        venue: 'American Express Stadium',
        started_at: new Date('2024-04-06 17:30:00'),
        competition: 'Premier League',
        competition_logo: '',
        isHomeGame: false,
      }
    },
    {
      id: 4, isMonthSummary: false, match: {
        slug: 'ars-lut',
        home: { name: 'Arsenal', logo: '', score: 2 },
        away: { name: 'Luton Town', logo: '/teams/lut.webp', score: 0 },
        venue: 'Emirates Stadium',
        started_at: new Date('2024-04-20 19:30:00'),
        competition: 'Premier League',
        competition_logo: '',
        isHomeGame: true,
      }
    }
  ]

  return <div>
    <MatchMenu />
    <MatchList matches={matches}/>
  </div>
};