import { MatchDetail } from "@/app/components/matches/MatchDetail";

/**
 * 
 * Display match detail according to upcoming/ongoing/completed 
 * if upcoming show preview and previous meeting statistic
 * if ongoing show score-board line-up  minutes-by-minutes
 * if completed show score-board, player rating and match report
 */
export default function MatchDetailPage() {
  return <MatchDetail />
}