import { ScorerData } from "@/app/types";

export const ScoreSheetRow = (props: {
  scorers?: ScorerData[]
}) => {

  const scorers = props.scorers || [];

  const label = scorers.reduce((output, item, index) => 
    `${output}${index > 0 ? ', ': ''}${item.name} (${item.minute}${item.status? ` ${item.status}` : ''})`, '') 

  return <div className="text-sm">{label}</div>
};