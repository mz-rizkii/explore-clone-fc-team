import { CommentaryByMinute } from "@/app/types";
import Image from "next/image";

export const CommentaryRow = (props: { commentary: CommentaryByMinute}) => {
  const {
    commentary
  } = props;

  if(!commentary){
    return <div></div>
  }

  const rowStyle = `p-4 mx-8 my-2 flex flex-row ${commentary.isGoal ? 'bg-black text-white': 'bg-white text-black'}` 

  return <div className={rowStyle}>
    <span className="text-2xl border-b-4 border-gray">{commentary.minute}</span>
    {commentary.extraTime && <span className="text-sm align-top">{commentary.extraTime}</span>}
    {commentary.icon && <Image src={commentary?.icon} width={24} height={24} alt={commentary?.minute} />}
    <div className="flex flex-col mx-4">
      {commentary.header && <span className="font-bold font-lg">{commentary.header}</span>}
      <span>{commentary.comment}</span>
    </div>
  </div>;
}