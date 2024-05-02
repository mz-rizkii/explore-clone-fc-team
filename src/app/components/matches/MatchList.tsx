import { MatchPreview } from "@/app/types";
import { Fragment } from "react";
import { MatchThumbnail } from "./MatchThumbnail";

export const MatchList = (props: {
  matches: MatchPreview[]
}) => {
  const {matches} = props; 

  return <Fragment>
    {matches.map((match, index) => <ul key={match.id}>
      <li>
        <MatchThumbnail match={match} isNextGame={index === (match.isMonthSummary? 0 : 1)}/>
    </li>
        </ul>)}
  </Fragment>
};