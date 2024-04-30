import StatisticView from "@/app/components/statistic/StatisticView";

const setCompetitionState = (appearance: number, goal: number) => ({ total_appearance: appearance, total_goal: goal }); 

export default function StatisticPage() {
  const competitions = [
    'Prem Lge', 'UCL', 'FA Cup', 'Lge Cup', 'C.Shield', 'Total'
  ]

  const playerStats = [
    { id: 1, name: 'Ben White', stats: [
      { ...setCompetitionState(20, 3), competition: competitions[0] },
      { ...setCompetitionState(0, 0), competition: competitions[1] },
      { ...setCompetitionState(1, 0), competition: competitions[2] },
      { ...setCompetitionState(0, 0), competition: competitions[3] },
      { ...setCompetitionState(0, 0), competition: competitions[4] },
      { ...setCompetitionState(21, 3), competition: competitions[5] }
    ]},
    { id: 2, name: 'Bukayo Saka', stats: [
      { ...setCompetitionState(13, 6), competition: competitions[0] },
      { ...setCompetitionState(0, 0), competition: competitions[1] },
      { ...setCompetitionState(1, 0), competition: competitions[2] },
      { ...setCompetitionState(0, 0), competition: competitions[3] },
      { ...setCompetitionState(0, 0), competition: competitions[4] },
      { ...setCompetitionState(15, 6), competition: competitions[5] }
    ]},
    { id: 3, name: 'Cedric Soares', stats: [
      { ...setCompetitionState(0, 0), competition: competitions[0] },
      { ...setCompetitionState(0, 0), competition: competitions[1] },
      { ...setCompetitionState(0, 0), competition: competitions[2] },
      { ...setCompetitionState(1, 0), competition: competitions[3] },
      { ...setCompetitionState(0, 0), competition: competitions[4] },
      { ...setCompetitionState(1, 0), competition: competitions[5] }
    ]},
  ]

  return <StatisticView playerStats={playerStats} />
}