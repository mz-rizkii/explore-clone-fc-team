import { FixtureList } from "../components/fixtures/fixtureList";
import { MatchMenu } from "../components/matches/MatchMenu";

export default function FixturesPage() {
  const upcoming_matches = [
    { id: 1, isMonthSummary: true, month: 'May', year: 2024 },
    {
      id: 2, isMonthSummary: false, match: {
        slug: 'ars-bour',
        home: { name: 'Arsenal', logo: '/teams/ars.webp'},
        away: { name: 'Bournemouth', logo: '/teams/bour.webp'},
        venue: 'Emirates Stadium',
        started_at: new Date('2024-05-04 12:30:00'),
        competition: 'Premier League',
        competition_logo: '/leagues/epl.webp',
        isHomeGame: true,
      }
    },
    {
      id: 3, isMonthSummary: false, match: {
        slug: 'manu-ars',
        home: { name: 'Manchester United', logo: '/teams/manu.gif'},
        away: { name: 'Arsenal', logo: ''},
        venue: 'Old Trafford',
        started_at: new Date('2024-05-12 16:30:00'),
        competition: 'Premier League',
        competition_logo: '',
        isHomeGame: false,
      }
    },
    {
      id: 4, isMonthSummary: false, match: {
        slug: 'ars-eve',
        home: { name: 'Arsenal', logo: ''},
        away: { name: 'Everton', logo: '/teams/eve.webp'},
        venue: 'Emirates Stadium',
        started_at: new Date('2024-05-04 16:00'),
        competition: 'Premier League',
        competition_logo: '',
        isHomeGame: true,
      }
    }
  ]

  return <div>
    <MatchMenu />
    <FixtureList upcoming_matches={upcoming_matches}/>
  </div>
}