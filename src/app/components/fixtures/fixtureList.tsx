import { MatchPreview } from "@/app/types";
import { MatchThumbnail } from "../matches/MatchThumbnail";

export const FixtureList = (props: {
  upcoming_matches: MatchPreview[]
}) => {
  const { upcoming_matches } = props;
  
  return <div>
    
      {upcoming_matches.map((match, index) => <ul key={match.id}>
      <li>
        <MatchThumbnail match={match} isNextGame={index === (match.isMonthSummary? 0 : 1)}/>
    </li>
        </ul>)}
  </div>
}