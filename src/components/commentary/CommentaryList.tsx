import { Fragment } from "react";
import { CommentaryRow } from "./CommentaryRow";
import { CommentaryByMinute } from "@/types";

export const CommentaryList = () => {
  const comments: CommentaryByMinute[] = [
    { header: 'FULL-TIME', icon: '/commentary/ft.png', comment: 'Match ends, Tottenham Hotspurs 2, Arsenal 3'},
    { minute: '90', additionalMinute: '+5', comment: 'Corner, Tottenham Hotspur. Conceded by William Saliba'},
    { minute: '90', additionalMinute: '+2', comment: 'Foul by William Saliba (Arsenal).'},
    { minute: '88', icon: '/commentary/sub.png', tag: 'subs', header: 'SUBSTITUTION: KIWIOR COMES ON FOR ODEGAARD', comment: 'Substitution, Arsenal. Jakub Kiwior replaces Martin Odegaard.'},
    { minute: '86', icon: '/commentary/pen.png', tag: 'goal', header: 'GOAL: SON HEUNG-MIN(PEN)', comment: `Goal. Tottenham Hotspur 2, Arsenal 3. 
    Son Heung-Min(Tottenham Hotspur) converts the penalty with a right footed shot to the left bottom corner.`},
    { minute: '85', comment: 'Penalty conceded by Declan Rice(Arsenal) after a foul in the penalty area.'},
    { minute: '85', comment: 'Penalty Tottenham Hotspur. Ben Davies draws a foul in the penalty area'},
    { minute: '84', comment: 'VAR Decision: Penalty Tottenham Hotspur.'},
    { minute: '82', icon: '/commentary/card.png', tag: 'yellow-card', comment: 'Thomas Partey(Arsenal) is shown the yellow card for a bad foul.',
      header: 'Booking: Thomas', 
    },
    { minute: '82', comment: 'Foul By Thomas Partey(Arsenal)'}
  ];
  
  return <Fragment>
    <ul>
      {comments.map((comment, index) => <li key={`commentary-${index}`}><CommentaryRow commentary={comment} /></li>)}
    </ul>
  </Fragment>
};